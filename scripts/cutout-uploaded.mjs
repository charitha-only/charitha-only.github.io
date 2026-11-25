import { removeBackground } from "@imgly/background-removal-node";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const userUploaded = "C:/Users/user/.gemini/antigravity/brain/7b3db780-3092-49a2-89ce-36e90cd9eb72/.user_uploaded/media_1795650630618_42180d36.jpg";
const croppedTemp = path.join(__dirname, "../public/images/temp-cropped.png");
const outputPng = path.join(__dirname, "../public/images/portfolio-portrait-hero-transparent.png");
const outputWebp = path.join(__dirname, "../public/images/portfolio-portrait-hero-transparent.webp");

async function run() {
  console.log("1. Cropping 4px border from user uploaded photo...");
  const meta = await sharp(userUploaded).metadata();
  await sharp(userUploaded)
    .extract({
      left: 4,
      top: 4,
      width: meta.width - 8,
      height: meta.height - 8
    })
    .toFile(croppedTemp);

  console.log("2. Running neural background removal on cropped portrait...");
  const inputUrl = "file://" + croppedTemp.replace(/\\/g, "/");
  const blob = await removeBackground(inputUrl);
  const buffer = Buffer.from(await blob.arrayBuffer());

  fs.writeFileSync(outputPng, buffer);
  console.log("3. Wrote transparent PNG to:", outputPng, buffer.length, "bytes");

  await sharp(buffer)
    .webp({ quality: 95, effort: 6 })
    .toFile(outputWebp);
  console.log("4. Wrote transparent WebP to:", outputWebp);

  fs.unlinkSync(croppedTemp);
  console.log("Done!");
}

run().catch(console.error);
