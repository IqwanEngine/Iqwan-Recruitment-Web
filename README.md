# 🤖 IqwanEngine: Interactive Recruitment Terminal (V4)

> **"Bridging the gap between technical documentation and interactive storytelling."**

Welcome to **IqwanEngine**, a high-performance interactive portfolio designed to provide recruiters with a seamless, engaging way to explore my technical journey. This project demonstrates my focus on **user experience**, **system efficiency**, and **data security**.

---

## 🚀 System Architecture

The engine is built on a modular frontend architecture, optimized for static hosting (GitHub Pages) with zero backend dependency to ensure lightning-fast performance and accessibility.

### Visual UI Layout
┌──────────────────────────────────────────────────────────┐
│ [ PROFILE SIDEBAR ]       [ INTERACTIVE AI TERMINAL ]    │
│                           │                              │
│ 👤 Intro Video            │ > Initializing system...     │
│ 📄 Dynamic Resume Link    │ > Analysis complete.         │
│ 🔗 Social Connect         │ > User: "What are his skills?"│
│                           │ > AI: "React, Python, GAS..."│
│ [ SLIDE TO ACTIVATE ]     │ [........................]   │
└──────────────────────────────────────────────────────────┘

---

## 🛠️ Technical Focus & Features

*   **Core Engine:** Built with **React 18 + Vite (TypeScript)** for robust type-safety and modern development standards.
*   **Aesthetic:** **Pure CSS3** implementation of a clean, terminal-inspired interface that prioritizes readability.
*   **Privacy-First:** Integrated a custom `guard.js` middleware that utilizes regex-based masking to protect sensitive personal identifiers.
*   **UX Innovation:** A "Slide to Activate" resume downloader, designed as a creative anti-bot mechanism to ensure meaningful engagement.
*   **Visualization:** Custom `BlockchainVisualizer` module to demonstrate data flow in a visually intuitive way.

## 🔐 Security & Data Privacy
To maintain professional standards and data integrity, IqwanEngine includes a specialized security layer that:
*   **Masks Sensitive Data:** Automatically filters PII (Personally Identifiable Information).
*   **Integrity Checks:** Prevents unauthorized access to system-level logic.
*   **Professional Redirection:** Seamlessly guides users toward official channels like LinkedIn and Email for formal inquiries.

## ⚡ Performance Optimization
*   **Zero Library Bloat:** Minimal external dependencies to achieve a sub-1s initial load time.
*   **Media Efficiency:** All assets are compressed via FFmpeg to ensure a smooth experience on mobile and low-bandwidth connections.
*   **State Management:** Leverages lightweight React Hooks for efficient chat history and UI state handling.

---

## 🏃‍♂️ Local Development

To explore the codebase or run the terminal locally:

```bash
# Clone the repository
git clone [https://github.com/IqwanEngine/Iqwan-Recruitment-Web.git](https://github.com/IqwanEngine/Iqwan-Recruitment-Web.git)

# Install dependencies
npm install

# Start the development server
npm run dev
