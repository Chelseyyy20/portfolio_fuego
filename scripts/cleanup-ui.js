import { promises as fs } from 'fs';
import path from 'path';

const uiPath = path.join(process.cwd(), 'components', 'ui');

async function deleteDirectory(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        await deleteDirectory(filePath);
      } else {
        await fs.unlink(filePath);
      }
    }
    await fs.rmdir(dirPath);
    console.log(`Successfully deleted ${dirPath}`);
  } catch (error) {
    console.error(`Error deleting directory: ${error.message}`);
  }
}

deleteDirectory(uiPath);
