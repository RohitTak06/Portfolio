import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Primary and fallback locations for resume files
const getResumeFilePath = (filename) => {
  const primaryPath = path.resolve(__dirname, '../assets/resume', filename);
  const fallbackPath = path.resolve(__dirname, '../../../client/public', filename);

  if (fs.existsSync(primaryPath)) {
    return primaryPath;
  }
  if (fs.existsSync(fallbackPath)) {
    return fallbackPath;
  }
  return null;
};

/**
 * Download or view Rohit Tak's PDF Resume.
 * @route GET /api/resume/pdf
 */
export const downloadResumePdf = (req, res) => {
  const filePath = getResumeFilePath('Rohit_Tak_Resume.pdf') || getResumeFilePath('resume.pdf');

  if (!filePath || !fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: 'Resume PDF file is temporarily unavailable. Please request via rohittak006@gmail.com.',
    });
  }

  const isInline = req.query.inline === 'true';
  const disposition = isInline ? 'inline' : 'attachment';

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `${disposition}; filename="Rohit_Tak_Resume.pdf"`);
  res.setHeader('Cache-Control', 'public, max-age=86400');

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
};

/**
 * Download Rohit Tak's DOCX Resume.
 * @route GET /api/resume/docx
 */
export const downloadResumeDocx = (req, res) => {
  const filePath = getResumeFilePath('Rohit_Tak_Resume.docx') || getResumeFilePath('resume.docx');

  if (!filePath || !fs.existsSync(filePath)) {
    return res.status(404).json({
      success: false,
      message: 'Resume Word (DOCX) file is temporarily unavailable. Please request via rohittak006@gmail.com.',
    });
  }

  res.setHeader(
    'Content-Type',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  );
  res.setHeader('Content-Disposition', 'attachment; filename="Rohit_Tak_Resume.docx"');
  res.setHeader('Cache-Control', 'public, max-age=86400');

  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
};
