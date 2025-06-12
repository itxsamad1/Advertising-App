const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImage() {
  const inputPath = path.join(process.cwd(), 'public', 'screen img.png');
  const outputWebPPath = path.join(process.cwd(), 'public', 'screen-optimized.webp');
  const outputAVIFPath = path.join(process.cwd(), 'public', 'screen-optimized.avif');

  try {
    // Create WebP version
    await sharp(inputPath)
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputWebPPath);

    // Create AVIF version
    await sharp(inputPath)
      .resize(1920, null, { withoutEnlargement: true })
      .avif({ quality: 65 })
      .toFile(outputAVIFPath);

    console.log('✅ Images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImage(); 