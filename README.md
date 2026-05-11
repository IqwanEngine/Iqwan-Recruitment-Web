# IqwanEngine | AI Recruitment Terminal 🚀

An interactive, terminal-themed portfolio designed to showcase workflow automation expertise, technical architecture, and modern web development capabilities. Built specifically for technical recruiters to experience a unique, conversational resume interface.

## 🛠️ The Architecture Evolution: Lessons Learned

This project underwent a significant architectural shift. Initially conceptualized using legacy Vanilla JS, traditional HTML structuring, and standard CSS linking, the system faced scalability and deployment bottlenecks. 

The transition to a modern **React + Vite** ecosystem brought severe but valuable challenges. I documented the transition to highlight my problem-solving approach and adaptability to modern framework rules:

### 1. The Vite & Static Asset Paradigm Shift
Moving from a legacy `public/` directory structure to Vite's module bundling required a complete mental shift. I learned how Vite handles auto-injection of compiled assets and the strict rules of relative pathing (`./`) for static media in a production build, successfully resolving `404 Not Found` deployment errors.

### 2. Overcoming The Tailwind CSS v4 & Vite Bottleneck
During the build process, the application suffered from "white screen" rendering issues and pipeline failures (`Process completed with exit code 1`). The root causes and my solutions included:
* **Version Mismatch Resolution:** Discovered a conflict where the Vite plugin was utilizing `@tailwindcss/vite` (v4), while the core system was stuck on Tailwind v3. Upgrading the entire stack to Tailwind v4 harmonized the dependencies.
* **Vite Config Optimization:** Purged legacy experimental `optimizeDeps` entries in `vite.config.ts` that were causing configuration clashes with the new version.
* **Strict CSS `@import` Hierarchy:** Learned the hard way about PostCSS parsing rules. Resolved a persistent build crash by strictly enforcing that `@import` statements (like Google Fonts) must sit at the absolute top of the `index.css` file, above all Tailwind directives.

## 💻 Tech Stack
* **Frontend Framework:** React 18 (TypeScript)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS v4
* **Animation:** Framer Motion (Slide-to-Activate mechanics)
* **Deployment & CI/CD:** GitHub Actions & GitHub Pages

## ✨ Key Features
* **Recruiter Initialization Protocol:** A personalized onboarding sequence for visitors.
* **Terminal Interface:** A cyberpunk/matrix-inspired UI with custom scanline animations.
* **Interactive AI Assistant Flow:** A chat-based interface designed to answer professional inquiries and showcase portfolio details dynamically.
* **Asset Management:** Integrated custom favicon, background looping video, and direct resume download mechanics.

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/IqwanEngine/Iqwan-Recruitment-Web.git](https://github.com/IqwanEngine/Iqwan-Recruitment-Web.git)
