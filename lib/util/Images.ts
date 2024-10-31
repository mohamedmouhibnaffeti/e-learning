import fs from "fs";
import path from "path";

export function saveBase64Image(base64Image: string, courseName: string): string | undefined {
    try {
      const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
      
      const buffer = Buffer.from(base64Data, 'base64');
      
      const sanitizedCourseName = `${courseName
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "_")}`;
      
      const filename = `${sanitizedCourseName}_${Date.now()}.png`;
      const filePath = path.join(process.cwd(), 'uploads', filename);
  
      fs.writeFileSync(filePath, buffer);
      
      return filePath;
    } catch (error) {
      console.error('Failed to process image:', error);
      return undefined;
    }
}