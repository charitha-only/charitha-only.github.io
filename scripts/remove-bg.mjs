import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, "../public/images/hero-portrait-hd.png");
const outputPath = path.join(__dirname, "../public/images/portfolio-portrait-hero-transparent.png");

async function main() {
  console.log("Starting AI neural background removal on:", inputPath);
  try {
    const inputUrl = "file://" + inputPath.replace(/\\/g, "/");
    const blob = await removeBackground(inputUrl);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outputPath, buffer);
    console.log("Successfully wrote transparent PNG to:", outputPath, buffer.length, "bytes");
  } catch (err) {
    console.error("Error during background removal:", err);
  }
}

main();
