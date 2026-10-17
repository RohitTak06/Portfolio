import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
} from 'docx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDirs = [
  path.resolve(__dirname, '../src/assets/resume'),
  path.resolve(__dirname, '../../client/public'),
];

// Ensure target directories exist
targetDirs.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const RESUME_DATA = {
  name: 'ROHIT TAK',
  title: 'Full-Stack Developer & Computer Science Student',
  contact: [
    'Jaipur, Rajasthan, India',
    '+91-7568098052',
    'rohittak006@gmail.com',
    'https://github.com/RohitTak06',
    'https://www.linkedin.com/in/rohit-tak-7150762b8/',
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'JK Lakshmipat University, Jaipur',
      timeline: 'Dec 2024 - 2028',
      score: 'CGPA: 6.75 / 10 (Current Semester 5)',
    },
    {
      degree: 'Senior Secondary Education (Class XII)',
      institution: 'CBSE Board',
      timeline: '2023 - 2024',
      score: 'Aggregate: 80.3%',
    },
  ],
  experience: [
    {
      role: 'AI/ML & FinTech Intern',
      company: 'Elefin Money',
      timeline: 'Summer 2025',
      points: [
        'Built full-stack quantitative mutual fund portfolio analysis system using React.js and FastAPI.',
        'Implemented modern portfolio analytics calculating CAGR, Sharpe ratio, annualized volatility, and Beta against Nifty 50.',
        'Integrated Scikit-Learn Random Forest risk classifier and Ridge Regressor forward wealth projection pipelines.',
        'Integrated live AMFI mutual fund NAV data ingestion and historical financial feeds.',
      ],
    },
  ],
  projects: [
    {
      name: 'Muqabla - Sports Management Platform',
      tech: 'Next.js, TypeScript, Prisma ORM, PostgreSQL, Tailwind CSS',
      url: 'https://github.com/RohitTak06/Muqabla',
      points: [
        'Designed end-to-end tournament management platform for brackets, schedules, and live matches.',
        'Constructed normalized database schema using Prisma ORM with type-safe migrations.',
        'Created organizer dashboard managing participant registrations, event brackets, and standings.',
      ],
    },
    {
      name: 'JKLU Profile Finder',
      tech: 'FastAPI, Next.js, PostgreSQL, Redis, Docker Compose',
      url: 'https://github.com/RohitTak06/jklu-profile-finder',
      points: [
        'Engineered privacy-preserving campus identity discovery system adhering to synthetic or consented profiles.',
        'Implemented Redis token revocation, sliding-window rate limiting, and hashed audit event logs.',
        'Authored comprehensive zero-trust system specifications covering architecture, threat model, and matching pipeline.',
      ],
    },
    {
      name: 'YouTube Mockup',
      tech: 'HTML5, CSS3, Flexbox, CSS Grid',
      url: 'https://github.com/RohitTak06/YT-Mockup',
      points: [
        'Constructed high-fidelity YouTube interface clone adhering strictly to responsive web standards.',
        'Implemented dynamic video card grids, responsive collapsible sidebar, and clean interactive states.',
      ],
    },
  ],
  skills: {
    'Languages': 'JavaScript (ES6+), TypeScript, Python, C, C++, HTML5, CSS3, SQL',
    'Frontend': 'React.js, Next.js, Tailwind CSS, Responsive Design, State Management',
    'Backend & APIs': 'Node.js, Express.js, FastAPI, RESTful API Architecture, JWT Authentication',
    'Databases & ORM': 'MongoDB (Mongoose), PostgreSQL, Prisma ORM, SQLite',
    'Tools & DevOps': 'Git, GitHub, Docker, Postman, Linux/Bash, Vite, VS Code',
  },
  responsibilities: [
    {
      role: 'Internal Arrangement Team Member',
      event: 'HACK JKLU 4.0 (2024)',
      details: 'Contributed to technical hackathon logistics, venue coordination, and participant support.',
    },
    {
      role: 'Food & Accommodation Team Member',
      event: 'Sabrang Cultural Fest (2024)',
      details: 'Managed hospitality operations and accommodations for participating delegations.',
    },
  ],
};

// 1. GENERATE PDF RESUME
async function generatePdf(outputPath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margin: 40,
      info: {
        Title: 'Rohit Tak - Resume',
        Author: 'Rohit Tak',
        Subject: 'Full-Stack Developer Resume',
      },
    });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    // Primary Colors
    const primaryColor = '#1e293b'; // Slate 800
    const accentColor = '#2563eb'; // Blue 600
    const textColor = '#334155'; // Slate 700
    const lightText = '#64748b'; // Slate 500

    // Header
    doc.fontSize(22).font('Helvetica-Bold').fillColor(primaryColor).text(RESUME_DATA.name, { align: 'center' });
    doc.moveDown(0.2);
    doc.fontSize(11).font('Helvetica').fillColor(accentColor).text(RESUME_DATA.title, { align: 'center' });
    doc.moveDown(0.2);
    doc.fontSize(8.5).font('Helvetica').fillColor(lightText).text(RESUME_DATA.contact.join('  •  '), { align: 'center' });
    doc.moveDown(0.8);

    const drawSectionHeader = (title) => {
      doc.moveDown(0.5);
      doc.fontSize(11).font('Helvetica-Bold').fillColor(accentColor).text(title.toUpperCase());
      const y = doc.y;
      doc.strokeColor('#cbd5e1').lineWidth(0.75).moveTo(40, y + 2).lineTo(555, y + 2).stroke();
      doc.moveDown(0.4);
    };

    // EDUCATION
    drawSectionHeader('Education');
    RESUME_DATA.education.forEach((edu) => {
      doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text(edu.degree, { continued: true });
      doc.font('Helvetica').fillColor(lightText).text(`  |  ${edu.timeline}`, { align: 'right' });
      doc.fontSize(9).font('Helvetica').fillColor(textColor).text(`${edu.institution}  •  ${edu.score}`);
      doc.moveDown(0.3);
    });

    // EXPERIENCE
    drawSectionHeader('Work Experience');
    RESUME_DATA.experience.forEach((exp) => {
      doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text(`${exp.role} - ${exp.company}`, { continued: true });
      doc.font('Helvetica').fillColor(lightText).text(`  |  ${exp.timeline}`, { align: 'right' });
      doc.moveDown(0.2);
      exp.points.forEach((point) => {
        doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text(`•  ${point}`, { indent: 8 });
      });
      doc.moveDown(0.3);
    });

    // PROJECTS
    drawSectionHeader('Key Technical Projects');
    RESUME_DATA.projects.forEach((proj) => {
      doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text(proj.name, { continued: true });
      doc.font('Helvetica-Oblique').fillColor(lightText).text(`  (${proj.tech})`, { continued: true });
      doc.font('Helvetica').fillColor(accentColor).text(`  [GitHub]`, { align: 'right', link: proj.url });
      doc.moveDown(0.15);
      proj.points.forEach((point) => {
        doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text(`•  ${point}`, { indent: 8 });
      });
      doc.moveDown(0.3);
    });

    // SKILLS
    drawSectionHeader('Technical Skills');
    Object.entries(RESUME_DATA.skills).forEach(([category, items]) => {
      doc.fontSize(8.5).font('Helvetica-Bold').fillColor(primaryColor).text(`${category}: `, { continued: true, indent: 4 });
      doc.font('Helvetica').fillColor(textColor).text(items);
      doc.moveDown(0.15);
    });

    // LEADERSHIP & RESPONSIBILITIES
    drawSectionHeader('Positions of Responsibility');
    RESUME_DATA.responsibilities.forEach((item) => {
      doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text(`${item.role} - ${item.event}: `, { continued: true, indent: 4 });
      doc.font('Helvetica').fillColor(textColor).text(item.details);
      doc.moveDown(0.2);
    });

    doc.end();
    stream.on('finish', () => resolve(outputPath));
    stream.on('error', reject);
  });
}

// 2. GENERATE DOCX RESUME
async function generateDocx(outputPath) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            text: RESUME_DATA.name,
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: RESUME_DATA.title,
                bold: true,
                color: '2563EB',
                size: 22,
              }),
            ],
            spacing: { after: 120 },
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            text: RESUME_DATA.contact.join(' | '),
            spacing: { after: 240 },
          }),

          // Education Section
          new Paragraph({
            text: 'EDUCATION',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          }),
          ...RESUME_DATA.education.flatMap((edu) => [
            new Paragraph({
              children: [
                new TextRun({ text: edu.degree, bold: true }),
                new TextRun({ text: ` — ${edu.institution} (${edu.timeline})` }),
              ],
            }),
            new Paragraph({
              text: edu.score,
              spacing: { after: 120 },
            }),
          ]),

          // Experience Section
          new Paragraph({
            text: 'EXPERIENCE',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          }),
          ...RESUME_DATA.experience.flatMap((exp) => [
            new Paragraph({
              children: [
                new TextRun({ text: `${exp.role} — ${exp.company}`, bold: true }),
                new TextRun({ text: ` (${exp.timeline})` }),
              ],
            }),
            ...exp.points.map(
              (p) =>
                new Paragraph({
                  text: `• ${p}`,
                  spacing: { after: 40 },
                })
            ),
          ]),

          // Projects Section
          new Paragraph({
            text: 'TECHNICAL PROJECTS',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          }),
          ...RESUME_DATA.projects.flatMap((proj) => [
            new Paragraph({
              children: [
                new TextRun({ text: proj.name, bold: true }),
                new TextRun({ text: ` (${proj.tech})` }),
              ],
            }),
            ...proj.points.map(
              (p) =>
                new Paragraph({
                  text: `• ${p}`,
                  spacing: { after: 40 },
                })
            ),
          ]),

          // Skills Section
          new Paragraph({
            text: 'TECHNICAL SKILLS',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          }),
          ...Object.entries(RESUME_DATA.skills).map(
            ([category, items]) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${category}: `, bold: true }),
                  new TextRun({ text: items }),
                ],
                spacing: { after: 60 },
              })
          ),

          // Leadership
          new Paragraph({
            text: 'POSITIONS OF RESPONSIBILITY',
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
          }),
          ...RESUME_DATA.responsibilities.map(
            (r) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${r.role} (${r.event}): `, bold: true }),
                  new TextRun({ text: r.details }),
                ],
                spacing: { after: 60 },
              })
          ),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  return outputPath;
}

async function run() {
  console.log('[Resume Generator] Generating PDF and DOCX files for Rohit Tak...');
  for (const dir of targetDirs) {
    const pdfPath = path.join(dir, 'Rohit_Tak_Resume.pdf');
    const docxPath = path.join(dir, 'Rohit_Tak_Resume.docx');
    await generatePdf(pdfPath);
    await generateDocx(docxPath);

    // Also write resume.pdf and resume.docx aliases for compatibility
    fs.copyFileSync(pdfPath, path.join(dir, 'resume.pdf'));
    fs.copyFileSync(docxPath, path.join(dir, 'resume.docx'));
    console.log(`[Resume Generator] Generated resume files in: ${dir}`);
  }
  console.log('[Resume Generator] Successfully generated all binary resume files!');
}

run().catch((err) => {
  console.error('[Resume Generator Error]', err);
  process.exit(1);
});
