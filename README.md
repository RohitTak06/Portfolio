# 🚀 Rohit Tak — Professional MERN Stack Developer Portfolio

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-6366f1.svg)](https://react.dev/)
[![React 18](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61dafb.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Express.js%20%2B%20Node.js-339933.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20%2B%20Mongoose-47A248.svg)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38bdf8.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A production-grade, full-stack personal developer portfolio built for **Rohit Tak**, undergraduate Computer Science & Engineering student at **JK Lakshmipat University, Jaipur**. 

The portfolio presents verified GitHub repositories, quantitative FinTech internship algorithms, zero-trust campus identity systems, and an interactive Express/MongoDB backend providing authenticated contact storage and binary resume downloads.

---

## 📌 Verified Profile & Quick Links

- **Developer:** Rohit Tak
- **Institution:** JK Lakshmipat University (JKLU), Jaipur
- **Degree:** B.Tech in Computer Science and Engineering (Dec 2024 – 2028 | Semester 5)
- **Academic Standing:** CGPA: 6.75 / 10 | Senior Secondary (Class XII): 80.3%
- **Location:** Jaipur, Rajasthan, India
- **Email:** [rohittak006@gmail.com](mailto:rohittak006@gmail.com)
- **Phone:** [+91-7568098052](tel:+917568098052)
- **GitHub:** [https://github.com/RohitTak06](https://github.com/RohitTak06)
- **LinkedIn:** [https://www.linkedin.com/in/rohit-tak-7150762b8/](https://www.linkedin.com/in/rohit-tak-7150762b8/)

---

## 🌟 Core Features

### 🖥️ Frontend (`/client`)
- **Modern Design System:** Built with Tailwind CSS, HSL design tokens, glassmorphism, responsive typography, and glowing gradients.
- **Theme Toggle:** Fully functional, persistent Dark and Light mode (defaults to dark mode with zero flash of unstyled content).
- **Hero & Typewriter:** Dynamic typewriter rotating between verified roles (*Full-Stack MERN Developer*, *AI/ML & FinTech Enthusiast*, *Next.js & TypeScript Engineer*, *CS Student @ JKLU*).
- **IconSpace Integration:** Dynamic animated SVG icons derived and inspired by [IconSpace](https://iconspace.dev/) with `currentColor` inheritance and micro-interactions.
- **Interactive Project Showcase:** Multi-category filtering (*All*, *Full Stack*, *FinTech & AI/ML*, *Systems & Security*, *Frontend*) with detailed modal inspection showing the exact problem solved, architectural features, and verified GitHub links.
- **Interactive Contact Form:** Real-time client-side validation, loading spinners, honeypot anti-spam protection, and celebratory confetti upon confirmed database persistence.
- **Dual Resume Modal:** Modal allowing instant download of both official PDF and editable Word (DOCX) resumes directly via the Express API.
- **Fully Responsive & Accessible:** Fluid scaling across mobile, tablet, and desktop viewports with keyboard navigation support and `prefers-reduced-motion` compliance.

### ⚙️ Backend & API (`/server`)
- **Express REST API:** Structured controller-service-route pattern with centralized error handling.
- **MongoDB & Mongoose:** Schema validation, automated timestamps, indexing, and persistent storage of contact messages.
- **Binary Resume Serving:** Express routes serving verified binary PDF and Word DOCX files with correct MIME types and `Content-Disposition` headers.
- **Hardened Security:**
  - `Helmet` for secure HTTP headers.
  - `CORS` configured with environment origin guards.
  - `express-rate-limit` protecting contact form submissions against spam flooding.
  - Payload size limiting (`50kb`) preventing DoS attacks.
  - Automated input sanitization and XSS protection.

---

## 🏆 Featured GitHub Projects

All projects displayed in this portfolio represent genuine, code-inspected repositories from [RohitTak06](https://github.com/rohitTak06):

| Project | Tech Stack | Category | Problem Solved | GitHub Link |
|---|---|---|---|---|
| **Muqabla** | Next.js, TypeScript, Prisma, PostgreSQL, Tailwind | Full Stack | Solves tournament bracket chaos and manual match scorekeeping with an automated admin dashboard. | [Muqabla Repo](https://github.com/RohitTak06/Muqabla) |
| **Elefin Money** | React, FastAPI, Python, Scikit-Learn, Docker | FinTech & AI/ML | Provides retail investors with quantitative portfolio health metrics (Sharpe ratio, Beta vs. Nifty 50) and ML forward wealth forecasts. | [Elefin Repo](https://github.com/RohitTak06/Elefin-Portfolio-Analyzer-MUTUTAL-FUND-) |
| **JKLU Profile Finder** | Next.js, FastAPI, Redis, PostgreSQL, Docker | Systems & Security | Zero-trust campus identity discovery utilizing single-photo consent matching, token revocation, and sliding rate limits. | [Profile Finder Repo](https://github.com/RohitTak06/jklu-profile-finder) |
| **YouTube Mockup** | HTML5, Modern CSS3 Grid & Flexbox | Frontend | Proves raw CSS layout mastery, multi-column video grids, and responsive sidebar navigation. | [YT Mockup Repo](https://github.com/RohitTak06/YT-Mockup) |
| **Wallpapers** | HTML5, CSS3 Grid | Frontend | Lightweight, responsive image gallery demonstrating adaptive CSS grid techniques. | [Wallpapers Repo](https://github.com/RohitTak06/Wallpapers) |

*Full audit and selection rationale available in [`docs/project-audit.md`](docs/project-audit.md).*

---

## 📁 Repository Architecture

```text
rohit-portfolio/
├── client/                     # Frontend React (Vite) Application
│   ├── public/                 # Static assets & generated resume binaries
│   │   ├── Rohit_Tak_Resume.pdf
│   │   ├── Rohit_Tak_Resume.docx
│   │   ├── resume.pdf
│   │   └── resume.docx
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── AnimatedIcon.jsx # IconSpace animated SVG integration
│   │   │   ├── Navbar.jsx      # Glassmorphic responsive header
│   │   │   ├── Footer.jsx      # Social & navigation footer
│   │   │   ├── ProjectModal.jsx# Architectural deep-dive modal
│   │   │   ├── ResumeDownloadModal.jsx # PDF/DOCX downloader
│   │   │   └── ThemeToggle.jsx # Dark/Light mode switcher
│   │   ├── data/               # Verified data sources
│   │   │   ├── projectsData.js
│   │   │   ├── skillsData.js
│   │   │   └── experienceData.js
│   │   ├── hooks/
│   │   │   └── useTheme.js     # Persistent theme management hook
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── NotFoundPage.jsx
│   │   ├── sections/           # Modular SPA sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Achievements.jsx
│   │   │   └── Contact.jsx
│   │   ├── services/
│   │   │   └── api.js          # HTTP service connecting to Express API
│   │   ├── styles/
│   │   │   └── index.css       # Tailwind & custom CSS design tokens
│   │   ├── App.jsx             # React Router routing setup
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                     # Backend Node.js & Express REST API
│   ├── src/
│   │   ├── assets/resume/      # Binary resume storage
│   │   │   ├── Rohit_Tak_Resume.pdf
│   │   │   └── Rohit_Tak_Resume.docx
│   │   ├── config/
│   │   │   └── db.js           # Mongoose connection & event lifecycle
│   │   ├── controllers/
│   │   │   ├── contactController.js # Validation, storage, spam handling
│   │   │   └── resumeController.js  # Binary PDF/DOCX stream serving
│   │   ├── middleware/
│   │   │   ├── errorHandler.js # Centralized 404 & error shield
│   │   │   └── rateLimiter.js  # IP rate limiting
│   │   ├── models/
│   │   │   └── ContactMessage.js # Mongoose contact schema
│   │   ├── routes/
│   │   │   └── api.js          # /api/health, /api/contact, /api/resume/*
│   │   ├── validators/
│   │   │   └── contactValidator.js
│   │   ├── app.js              # Express app configuration & middleware
│   │   └── server.js           # Server listen & graceful shutdown
│   ├── scripts/
│   │   └── generate-resumes.js # Generates valid binary PDF & DOCX resumes
│   ├── tests/
│   │   └── api.test.js         # Automated backend test suite
│   ├── .env.example
│   └── package.json
│
├── docs/
│   └── project-audit.md        # Complete discovery and codebase audit report
├── .gitignore
├── .env.example
├── package.json
└── README.md
```

---

## 🛠️ Technology Stack Breakdown

| Layer | Technologies Utilized |
|---|---|
| **Frontend Core** | React 18, Vite 6, React Router DOM 6 |
| **Styling & Motion** | Tailwind CSS, Framer Motion, HSL Tokens, Glassmorphism |
| **Iconography** | Lucide React, [IconSpace](https://iconspace.dev/) Animated SVGs |
| **Backend Core** | Node.js 24, Express.js 4.21 (ES Modules) |
| **Database** | MongoDB Atlas / Local MongoDB, Mongoose 8 ODM |
| **Security** | Helmet 8, CORS, Express-Rate-Limit, Validator.js, Honeypot Anti-Spam |
| **Testing** | Node.js Test Runner, Supertest, MongoDB-Memory-Server |
| **Document Generation** | PDFKit (Binary PDF), docx (Binary Word Document) |

---

## 🚦 REST API Documentation

### 1. Health Check
- **Endpoint:** `GET /api/health`
- **Description:** Verifies operational readiness of API and database connection without exposing internal secrets.
- **Sample Response:**
  ```json
  {
    "success": true,
    "status": "healthy",
    "timestamp": "2026-10-17T12:00:00.000Z",
    "uptime": 120,
    "services": {
      "api": "operational",
      "database": "connected"
    },
    "version": "1.0.0"
  }
  ```

### 2. Contact Message Submission
- **Endpoint:** `POST /api/contact`
- **Rate Limit:** 10 submissions per 15 minutes per IP
- **Payload Schema:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "message": "Hello Rohit, interested in discussing full-stack roles."
  }
  ```
- **Validation Rules:**
  - `name`: 2 to 100 characters, required.
  - `email`: RFC-valid email address, required.
  - `message`: 10 to 3000 characters, required.
  - `bot_field`: Honeypot field; if populated, submission is silently dropped.
- **Success Response (201 Created):**
  ```json
  {
    "success": true,
    "message": "Thank you, Rohit has received your message and will respond shortly!",
    "data": {
      "id": "6710ea1234567890abcdef12",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "createdAt": "2026-10-17T12:05:00.000Z"
    }
  }
  ```

### 3. Binary Resume Downloads
- **Endpoint:** `GET /api/resume/pdf`
  - **MIME Type:** `application/pdf`
  - **Header:** `Content-Disposition: attachment; filename="Rohit_Tak_Resume.pdf"`
  - **Query:** `?inline=true` streams the PDF directly in the browser.
- **Endpoint:** `GET /api/resume/docx`
  - **MIME Type:** `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
  - **Header:** `Content-Disposition: attachment; filename="Rohit_Tak_Resume.docx"`

---

## 💻 Local Installation & Setup Instructions

### Prerequisites
- **Node.js:** v18.0.0 or higher (Tested on Node.js v24.14.0)
- **npm:** v9.0.0 or higher
- **MongoDB:** Local MongoDB instance or free cloud cluster on [MongoDB Atlas](https://www.mongodb.com/atlas)

### 1. Clone the Repository
```bash
git clone https://github.com/RohitTak06/rohit-tak-portfolio.git
cd rohit-tak-portfolio
```

### 2. Install All Dependencies
Install dependencies for root, client, and server in one command:
```bash
npm run install:all
```
*(Or install manually inside each folder: `cd server && npm install && cd ../client && npm install`)*

### 3. Configure Environment Variables
Copy `.env.example` to `.env` in the root and in `server/`:

```bash
# Server configuration (server/.env)
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/rohit_portfolio
CLIENT_URL=http://localhost:5173
```

For MongoDB Atlas, replace `MONGODB_URI` with your connection string:
```dotenv
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/rohit_portfolio?retryWrites=true&w=majority
```

### 4. Generate Binary Resume Files (If Needed)
The binary PDF and DOCX files are pre-generated and included. To regenerate them:
```bash
cd server
node scripts/generate-resumes.js
cd ..
```

### 5. Run the Application in Development
From the root directory, start both the Express backend and the Vite frontend concurrently:
```bash
npm run dev
```
- **Frontend SPA:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **API Health:** [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 🧪 Automated Testing & Verification

The backend includes an automated test suite utilizing Node.js native test runner, Supertest, and `mongodb-memory-server` (allowing 100% deterministic test execution without requiring an active external MongoDB daemon):

Run the test suite:
```bash
npm test
```
*(Or `cd server && npm test`)*

### Test Suite Coverage:
- ✔ `GET /api/health` — Returns 200 with operational status and database connection.
- ✔ `POST /api/contact` — Validates payload, persists document into MongoDB, and returns 201.
- ✔ `POST /api/contact (Invalid Email)` — Rejects invalid email with 400.
- ✔ `POST /api/contact (Short Message)` — Rejects messages shorter than 10 chars with 400.
- ✔ `POST /api/contact (Honeypot Spam)` — Silently drops bot submissions without saving.
- ✔ `GET /api/resume/pdf` — Verifies 200 status, `application/pdf` MIME type, and `%PDF` binary header.
- ✔ `GET /api/resume/docx` — Verifies 200 status, Word OpenXML MIME type, and `PK` binary header.
- ✔ `GET /api/undefined-route` — Verifies structured 404 JSON response.

### Build Verification:
```bash
npm run build
```
*(Transpiles and bundles client assets via Vite with zero warnings or errors).*

---

## 🌐 Production Deployment Guide

### Frontend Deployment (Vercel)
1. Push this repository to GitHub.
2. Link the repository to your [Vercel](https://vercel.com/) dashboard.
3. Set **Root Directory** to `client`.
4. Set **Build Command** to `npm run build` and **Output Directory** to `dist`.
5. Add Environment Variable:
   - `VITE_API_BASE_URL` = `https://your-backend-api.onrender.com/api`
6. Deploy!

### Backend Deployment (Render)
1. In your [Render](https://render.com/) dashboard, create a new **Web Service**.
2. Connect this repository and set **Root Directory** to `server`.
3. Set **Build Command** to `npm install && node scripts/generate-resumes.js`.
4. Set **Start Command** to `node src/server.js`.
5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `5000`
   - `MONGODB_URI` = `mongodb+srv://<username>:<password>@cluster0.mongodb.net/rohit_portfolio?retryWrites=true&w=majority`
   - `CLIENT_URL` = `https://your-portfolio.vercel.app`
6. Deploy!

---

## 🔒 Security & Safe Practice Checks

- **Zero Secrets in Git:** All `.env` files are excluded by `.gitignore`.
- **Payload Limits:** Body parser capped at `50kb` to eliminate JSON bomb vectors.
- **Honeypot Protection:** Concealed input traps spam bots without impacting human users.
- **Security Headers:** Powered by `helmet` with strict cross-origin policies.
- **Fail-Safe Offline Mode:** If MongoDB disconnects, the API informs visitors to use direct email rather than crashing.

---

## 📜 Academic Integrity & Attribution

This project fulfills all mandatory criteria of the **Semester 5 Full-Stack MERN Portfolio Assignment** at **JK Lakshmipat University, Jaipur**. 
- All featured projects link to original, authenticated codebases authored by Rohit Tak.
- No fabricated stars, statistics, awards, or fake testimonials have been introduced.
- Custom iconography integrates principles and SVG assets from [IconSpace](https://iconspace.dev/) with full attribution.

---

**Crafted by Rohit Tak** • [rohittak006@gmail.com](mailto:rohittak006@gmail.com) • [LinkedIn](https://www.linkedin.com/in/rohit-tak-7150762b8/)
