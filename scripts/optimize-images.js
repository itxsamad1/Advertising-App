const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  
  try {
    const files = await fs.readdir(imagesDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, `${path.parse(file).name}-optimized.webp`);
        
        // Skip if the optimized version already exists
        try {
          await fs.access(outputPath);
          console.log(`Skipping ${file} - optimized version already exists`);
          continue;
        } catch {
          // File doesn't exist, proceed with optimization
        }

        console.log(`Optimizing ${file}...`);
        
        await sharp(inputPath)
          .webp({ quality: 80 }) // Good balance between quality and file size
          .resize(1920, null, { // Max width 1920px, maintain aspect ratio
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFile(outputPath);
        
        console.log(`Created optimized version: ${path.parse(file).name}-optimized.webp`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages(); 