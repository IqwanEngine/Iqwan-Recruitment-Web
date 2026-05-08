# 🤖 IqwanEngine: AI-Powered Recruitment Terminal (V4)

> **"Turning Professional Networking into an Interactive AI Experience."**

Welcome to the **IqwanEngine Recruitment Terminal**, a high-performance, standalone interactive portfolio designed to showcase technical capabilities through an AI-driven interface. Built for speed, security, and maximum engagement.

---

## 🚀 System Architecture

The project follows a modular frontend architecture, optimized for deployment on **GitHub Pages** with zero backend dependency, ensuring lightning-fast load times.

### Visual UI Layout
┌──────────────────────────────────────────────────────────┐
│ [ PROFILE SIDEBAR ]       [ INTERACTIVE AI TERMINAL ]    │
│                           │                              │
│ 👤 Profile Video          │ > Initializing query...      │
│ 📄 Dynamic Resume Link    │ > Analysis complete.         │
│ 🔗 Social Integrations    │ > User: "What is his stack?" │
│                           │ > AI: "Python, React, GAS.." │
│ [ SLIDE TO ACTIVATE ]     │ [........................]   │
└──────────────────────────────────────────────────────────┘

### Interaction Workflow
[ User Input ] ──▶ [ Security Guard ] ──▶ [ Logic Engine ] ──▶ [ Output ]
       │                 │                      │                │
       └─ Validates ─────┴─ Filters Sensitive ──┴─ Fetch Data ───┘

---

## 🛠️ Tech Stack & Rare Features

- **Engine:** React 18 + Vite (TypeScript)
- **Styling:** Pure CSS3 (Cyberpunk/Terminal Aesthetic)
- **Security:** Custom `guard.js` middleware for regex-based data masking.
- **Interactions:** "Slide to Activate" resume downloader (Anti-Bot mechanism).
- **Visualization:** Integrated `BlockchainVisualizer` for data flow aesthetics.

## 🔐 Security & Data Privacy (The "Guard" System)
IqwanEngine includes a specialized security layer that intercepts all user queries to:
- Filter sensitive personal data (NRIC, Phone Numbers).
- Block unauthorized access to classified system logic.
- Redirect inquiries to professional channels (LinkedIn/Email).

## ⚡ Performance Optimization
- **Zero Library Bloat:** Minimal external dependencies for <1s load time.
- **Media Optimization:** FFmpeg-compressed assets for mobile responsiveness.
- **State Management:** Lightweight React Hooks for seamless chat history.

---

## 🏃‍♂️ Local Development

```bash
# Clone the repository
git clone [https://github.com/IqwanEngine/Iqwan-Recruitment-Web.git](https://github.com/IqwanEngine/Iqwan-Recruitment-Web.git)

# Install dependencies
npm install

# Run dev server
npm run dev
