# Rohan Chakraborty — Developer Portfolio

[![GitHub stars](https://img.shields.io/github/stars/rohannc/My_Portfolio?style=social)](https://github.com/rohannc/My_Portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/rohannc/My_Portfolio?style=social)](https://github.com/rohannc/My_Portfolio/network/members)
[![GitHub issues](https://img.shields.io/github/issues/rohannc/My_Portfolio)](https://github.com/rohannc/My_Portfolio/issues)
[![GitHub license](https://img.shields.io/github/license/rohannc/My_Portfolio)](https://github.com/rohannc/My_Portfolio/blob/main/LICENSE)

## 📋 Overview

Welcome to my software engineering portfolio! Built with **Vue.js 3**, **Vite 6**, and **Tailwind CSS v4**, this application showcases my professional engineering background as a **Software Engineer at Visa**, academic credentials (**Master of Computer Applications from Jadavpur University**), autonomous agentic systems (**LangGraph**, **Model Context Protocol**), competitive programming achievements (1,700+ solved problems, WBJECA Rank 17), and deep learning forensic architectures.

---

## ✨ Key Features & Architectural Highlights

- **⚡ Interactive Architecture Blueprints (`SkillArchitectureBlueprint.vue`)**:
  - Replaces traditional static skill bars with an interactive engineering blueprint console.
  - Showcases 4 real-world architectures aligned with my profile:
    1. **Agentic CI/CD Pipeline**: LangGraph orchestration, Model Context Protocol (MCP), Python Asyncio, and automated vulnerability remediation with Human-in-the-Loop review gates.
    2. **High-Throughput Distributed Platform**: Spring Boot 3, Apache Kafka event streaming, Vert.x reactive microservices, and Docker containerization.
    3. **DeepFake Forensic Verification Engine**: Error Level Analysis (ELA), PyTorch CNNs, OpenCV manipulation heatmaps, and Streamlit inference.
    4. **Algorithmic Optimization & DSA Engine**: C++ high-performance data structures, graph theory, state-space pruning, and competitive complexity reduction.
  - Interactive stage inspector with prominent technology icons, flow direction indicators, and theme-synchronized radar beacons.

- **💻 Interactive Developer Terminal (`TerminalOverlay.vue` — RohanOS v2.4)**:
  - Accessible via `Ctrl + \``, typing `sudo`, or clicking terminal badges in the Navbar and Footer.
  - **Syntax Keyword Highlighting**: Automatically formats keywords (<span style="color:#60a5fa">Visa</span>, Autonomous AI Agents, LangGraph, Python, Spring Boot, etc.) with custom cyber-styling.
  - **Cadence-Paced Streamer**: Emulates high-speed terminal stdout streaming at a balanced medium pace (70–110ms) with phosphor blur-to-focus fade transitions.
  - **Frame-Locked Auto-Scroll**: Pinned scroll tracking with zero rubber-banding, jitter, or layout shift.
  - **Developer Shell Experience**: Command history navigation (`↑` / `↓`), `Tab` autocomplete, clickable quick command pills, and rich HUD telemetry grids.
  - **Supported Commands**: `help`, `whoareyou`, `experience`, `skills`, `projects`, `stats`, `resume`, `contact`, `clear`, `sudo`, `exit`.

- **🎨 Custom Zero-Lag Glassmorphic Tooltips**:
  - Pure CSS glass badges (`[data-tooltip]`) replacing clunky browser-native yellow popups.
  - Zero hover delay with directional awareness (`top`, `bottom`, `left`, `right`) and dynamic light/dark mode adaptation.

- **👤 Fluid Cinematic Avatar Interaction (`AboutMe.vue`)**:
  - 1200ms cubic-bezier deceleration curve (`cubic-bezier(0.16, 1, 0.3, 1)`) with facial focal anchoring (`transform-origin: center 25%`) and GPU 3D sub-pixel compositing for an ultra-smooth, jitter-free hover zoom.

- **🚀 Featured Engineering Architecture Showcase (`Project.vue`)**:
  - Production **DeepFake Image Detection System** combining classical Error Level Analysis (ELA) with deep convolutional neural networks (92.8% validation accuracy).
  - Multi-slide interactive Swiper.js gallery, architecture breakdowns, research team credits, and live Streamlit app links.
  - Codebase retains the full multi-tenant schema and data model for the upcoming **Khoj Healthcare Management Platform** (`portfolioData.js`).

- **📊 Live Competitive Programming Telemetry**:
  - Automated GitHub Actions workflows fetching live Codolio stats, streaks (700+ active days, 287-day max streak), problem distribution (LeetCode: 880, GFG: 671, CodeChef: 74, Codeforces: 36), and contest ratings.

- **🔍 Search Engine Optimization & Google Knowledge Graph**:
  - Standard Schema.org JSON-LD structured data (`Person` / `SoftwareEngineer`).
  - Production-ready Open Graph and Twitter Card preview assets (`public/portfolio-preview.jpg`).

- **🎨 Executive Theme Customizer**:
  - Dynamic HSL accent hue customization and persisted light/dark mode with comprehensive contrast overrides.

---

## 🛠️ Technologies & Tools

- **Frontend Core**: Vue.js 3 (Composition API / `<script setup>`), Vite 6
- **Styling & Design System**: Tailwind CSS v4, Custom CSS Glassmorphism & Micro-animations
- **Interactive UI**: Swiper.js, AOS (Animate on Scroll), Vue3 Toastify
- **Form Services**: EmailJS (`@emailjs/browser`)
- **Automation CI/CD**: GitHub Actions workflows for automated Codolio stats and badge synchronization
- **Typography Stack**: Outfit, Plus Jakarta Sans, Space Grotesk & JetBrains Mono

---

## 📂 Project Structure

```
My_Portfolio/
├── .github/
│   └── workflows/              # GitHub Actions for automated stats & badge updates
├── public/
│   ├── portfolio-preview.jpg   # Social preview banner for OpenGraph & Twitter
│   └── vite.svg
├── src/
│   ├── assets/                 # WebP screenshots, avatars & optimized media
│   ├── components/             # Modular Vue 3 components
│   │   ├── AboutMe.vue         # Hero section, identity dossier & fluid avatar
│   │   ├── Achievements.vue     # Honors, collegiate competitions & WBJECA Rank 17
│   │   ├── ActivityHeatmapGrid.vue # GitHub & Codolio activity heatmaps
│   │   ├── CommandPalette.vue  # Quick command palette modal
│   │   ├── ContactMe.vue       # Direct contact channels & EmailJS form
│   │   ├── DsaSkillRadarChart.vue # Competitive DSA topic proficiency radar
│   │   ├── Education.vue       # Academic journey at Jadavpur University
│   │   ├── Experience.vue      # Software Engineer career at Visa
│   │   ├── Footer.vue          # Terminal launcher & back-to-top controls
│   │   ├── GitHubHeatmap.vue   # GitHub activity widget
│   │   ├── NavbarCustomized.vue # Glass navbar with section tracking & CLI trigger
│   │   ├── Project.vue         # Featured DeepFake forensic architecture & gallery
│   │   ├── ScrollToTop.vue     # Smart viewport-aware floating scroll button
│   │   ├── SkillArchitectureBlueprint.vue # Interactive 4-pipeline blueprint console
│   │   ├── Skills.vue          # Categorized engineering stack
│   │   ├── TerminalOverlay.vue # Interactive RohanOS developer terminal
│   │   └── ThemeCustomizer.vue # Color hue & light/dark mode switcher
│   ├── data/
│   │   ├── codolioBadges.json  # Auto-synced Codolio badges
│   │   ├── codolioStats.json   # Auto-synced competitive metrics
│   │   └── portfolioData.js    # Centralized portfolio content & dataset
│   ├── App.vue                 # Root component with lazy-loaded overlays
│   ├── main.js                 # Application bootstrap
│   └── style.css               # Tailwind v4 theme, custom tooltips & animations
├── index.html                  # HTML5 entry with JSON-LD schema & font preconnects
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Repository documentation
```

---

## 🚀 Local Development Setup

To run this portfolio locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/rohannc/My_Portfolio.git

# 2. Navigate to project root
cd My_Portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build for production
npm run build
```

---

## 📬 Contact & Connect

- **Email**: [chakrabortyrohan.abc01@gmail.com](mailto:chakrabortyrohan.abc01@gmail.com)
- **LinkedIn**: [rohanchakraborty0108](https://www.linkedin.com/in/rohanchakraborty0108/)
- **GitHub**: [rohannc](https://github.com/rohannc)
- **Codolio**: [Rohann](https://codolio.com/profile/Rohann)

---

⭐️ Maintained with precision by [Rohan Chakraborty](https://github.com/rohannc)
