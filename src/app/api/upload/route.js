import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("images");
    const uploadDir = path.join(process.cwd(), "public/images");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const uploadedFiles = [];
    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      fs.writeFileSync(filePath, buffer);
      uploadedFiles.push(`/images/${fileName}`);
    }
    return NextResponse.json({
      success: true,
      image: uploadedFiles,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Upload Faild" }, { status: 500 });
  }
}
