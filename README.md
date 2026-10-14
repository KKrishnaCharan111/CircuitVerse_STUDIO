# CircuitVerse Studio ⚡
### Next-Generation Online Electronics Design, SPICE Simulation & ECE Laboratory Platform

![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)
![React](https://img.shields.io/badge/React-19.0-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6.svg)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF.svg)
![ngspice](https://img.shields.io/badge/ngspice-WASM%2046-E95420.svg)
![Tailwind](https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC.svg)

CircuitVerse Studio is an engineering-grade, browser-based electronic circuit computer-aided design (CAD) and numerical simulation environment inspired by LTspice, augmented with modern interactive graphics, complete digital & analog semester laboratory suites, split-screen observation tables, engineering calculators, and AI assistance.

---

## 🚀 Key Features & Architectural Pillars

### 1. Real Berkeley SPICE Numerical Engine (ngspice-46 WebAssembly)
- Executes real numerical differential equation solvers, Modified Nodal Analysis (MNA), and Newton-Raphson non-linear iterations directly inside the browser using WebAssembly.
- **No mock data, no fake waveforms**: numerical results are verified to 5 significant figures against analytical formulas ($V = V_{\text{final}}(1 - e^{-t/RC})$, $f_0 = \frac{1}{2\pi\sqrt{LC}}$).
- Supports **Transient (`.tran`)**, **AC Small-Signal Frequency Sweep (`.ac`)**, **DC Operating Point (`.op`)**, and **DC Sweep (`.dc`)**.

### 2. Professional LTspice-Style Schematic Editor
- Infinite pannable and zoomable grid canvas with automatic grid snapping.
- Orthogonal auto-routing wiring engine with junction detection and branch routing.
- Component rotation (90° steps), horizontal flipping, reference designators, and SPICE value expressions.
- **60+ Electronic Components Palette**:
  - **Passives:** Resistors, Capacitors, Electrolytic/Polarized Capacitors, Inductors, Potentiometers, Transformers, Quartz Crystals.
  - **Switches & Relays:** SPST Switches, SPDT Switches, Electromechanical Relays.
  - **Diodes & Power Semiconductors:** Switching Diodes (1N4148), Rectifier Diodes (1N4007), Schottky Diodes (1N5819), Zener Diodes, Color LEDs, SCRs (Silicon-Controlled Rectifiers), TRIACs, DIACs.
  - **Transistors:** NPN BJTs (2N3904, 2N2222), PNP BJTs (2N3906), N-Channel JFETs (2N3819), P-Channel JFETs (2N5460), Power NMOS (2N7000), Power PMOS (BS250).
  - **Analog ICs:** Ideal Op-Amps, LM741, TL072, NE5532, LM358 dual op-amps, LM311 & LM393 voltage comparators, 7805/7812/7905/LM317 linear voltage regulators, NE555 timers.
  - **Digital Logic & MSI:** 7400 NAND, 7402 NOR, 7404 NOT, 7408 AND, 7432 OR, 7486 XOR, 3-input logic gates, D & JK Flip-Flops, Full Adders, 7495 Shift Registers, and MOD-N Asynchronous/Synchronous Counters.
  - **Sources & Probes:** DC Voltage, AC Sinusoidal Source, Pulse Generator, DC Current Source, Ground Reference (Node 0), and Voltage Probes.

### 3. Integrated ECE Semester Laboratory Suites
Two full, accredited undergraduate engineering laboratory curricula built right into the platform:
- **Digital Logic Design (DLD) Laboratory (11 Experiments):**
  1. Verification of Boolean Theorems & De Morgan's Laws using logic gates.
  2. Simplification and Implementation of SOP & POS expressions with Universal Gates.
  3. Half Adder and Full Adder design using basic and NAND gates.
  4. 2-Bit and 4-Bit Magnitude Comparator verification.
  5. 4:1 Multiplexer and 1:4 Demultiplexer implementations.
  6. Binary-to-Gray and Gray-to-Binary code converters.
  7. BCD to 7-Segment Decoder simulation with live display.
  8. Master-Slave JK & D Flip-Flop characteristic table verification.
  9. 4-bit Asynchronous & Synchronous Ripple Counters.
  10. 4-bit Universal Shift Register (IC 7495) in SISO, SIPO, PISO, PIPO modes.
  11. DLD Capstone Mini-Project: Digital Traffic Light Controller & 4-bit Arithmetic Logic Unit (ALU).
- **Analog Electronic Circuits (AEC) Laboratory (10 Experiments):**
  1. Full-Wave Bridge Rectifier with capacitive smoothing filter and ripple factor analysis.
  2. Zener Diode Voltage Regulation under line and load variation.
  3. BJT Common-Emitter (CE) Amplifier frequency response and gain-bandwidth product ($f_L, f_H, \text{BW}$).
  4. Class-B Push-Pull Audio Power Amplifier efficiency and crossover distortion mitigation.
  5. RC Phase-Shift Oscillator Barkhausen criterion ($f_0 = \frac{1}{2\pi RC\sqrt{6}}$).
  6. Colpitts LC RF Oscillator with dual capacitive tapped feedback.
  7. Inverting and Non-Inverting Op-Amp Closed-Loop Amplifiers.
  8. Astable Multivibrator using 555 Timer with duty cycle control.
  9. Active Low-Pass and High-Pass Sallen-Key Filters.
  10. AEC Capstone Mini-Project: 0–15V 1A Variable Regulated Bench Power Supply.

### 4. Real-Time Split-Screen Laboratory View
- Perform live experiments while viewing the observation table side-by-side.
- Students interact with signal inputs, potentiometer dials, switches, and frequencies while reading live automated nodal metrics, voltages, and truth table states in real time.

### 5. Multi-Trace Oscilloscope & Waveform Viewer
- Interactive vector plot with independent trace toggles, engineering grid lines, and light/dark theme synchronization.
- Dual interactive measurement cursors ($C_1$, $C_2$) with $\Delta t$ and frequency calculation ($1/\Delta t$).
- Real-time automated measurement bar: $V_{\text{pp}}$, $V_{\text{max}}$, $V_{\text{min}}$, $V_{\text{rms}}$, $V_{\text{mean}}$, Period, and 10%–90% Rise Time.
- One-click CSV time-series export.

### 6. Universal Dark & Light Mode
- Integrated Theme Switcher supporting **System Preference Detection**, **Manual Dark Mode**, and **Manual Light Mode**.
- Zero-FOUC (Flash of Unstyled Content) bootloader and persistent `localStorage` theme state.
- Floating quick-toggle pill on the bottom-right for instant 1-click theme switching from any view.

### 7. Electrical Engineering Toolbox (16 Calculators)
- Ohm's Law & DC Power
- Loaded Voltage Dividers
- RC / RL Cutoff & Time Constants
- RLC Resonance, Bandwidth & Quality Factor ($Q$)
- Op-Amp Inverting, Non-Inverting & Differential Gains
- 555 Timer Astable & Monostable Timing
- LED Current-Limiting Resistors & Zener Breakdown Calculation

### 8. Full-Stack Project Persistence & Export
- Standard SPICE netlist export (`.cir`).
- Circuit document JSON schema (`.json`) for cloud or local backup.
- Waveform CSV datasets.
- Printable academic laboratory record generation.
- Node.js Express backend API (`server/`) with PostgreSQL-compatible schema.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (version 18+ or 20+)
- npm (version 9+)

### Installation
Clone or extract the repository and install the dependencies:
```bash
git clone https://github.com/<your-username>/circuitverse-studio.git
cd circuitverse-studio
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### Running the Automated QA & SPICE Test Suite
Verify that the analytical models, netlist compilation, DRC diagnostics, and WebAssembly simulation engine pass all benchmarks:
```bash
npm run test
```
Expected output:
```text
Results: 13 / 13 tests passed.
>>> ALL VERIFICATION TESTS PASSED SUCCESSFULLY! <<<
```

### Building for Production
```bash
npm run build
```
Generates a minified, code-split production bundle in the `dist/` folder.

### Starting the Cloud Backend API
```bash
npm run server
```
Runs the Express service on [http://localhost:3001](http://localhost:3001).

---

## ⌨️ Schematic Editor Shortcuts

| Key | Action |
| --- | --- |
| `V` | Selection & Component Move Tool |
| `W` | Orthogonal Wiring Tool |
| `D` | Delete Tool |
| `H` / `Space + Drag` | Pan Workspace Canvas |
| `R` | Rotate Selected Component 90° |
| `Delete` / `Backspace` | Delete Selected Item |
| `Ctrl + Z` | Undo |
| `Ctrl + Y` | Redo |
| `Ctrl + S` | Save Circuit Document |
| `Esc` | Cancel / Deselect |
| `Mouse Wheel` | Smooth Zoom In / Out |

---

## 📁 Repository File Structure

```text
circuitverse-studio/
├── dist/                      # Production build output
├── public/                    # Static assets, icons, manifest
├── server/                    # Node.js Express cloud API service
│   ├── index.ts               # Server entry point & endpoints
│   └── routes/                # Project persistence routes
├── src/
│   ├── components/            # UI & CAD schematic components
│   │   ├── labs/              # DLD & AEC Laboratory components
│   │   │   ├── DigitalExperimentView.tsx
│   │   │   ├── AnalogExperimentView.tsx
│   │   │   ├── SharedExperimentWorkspace.tsx
│   │   │   └── LabReportGenerator.tsx
│   │   ├── BottomPanel.tsx    # Waveform dock, console, DRC, netlist
│   │   ├── WaveformViewer.tsx # Oscilloscope plot & cursor measurements
│   │   ├── SchematicCanvas.tsx# Interactive CAD schematic editor
│   │   ├── SchematicSymbols.tsx # SVG component representations
│   │   ├── Header.tsx         # Navbar, tools, theme switcher
│   │   ├── ThemeSwitcher.tsx  # Theme selector dropdown
│   │   ├── FloatingThemeToggle.tsx # Bottom-right quick toggle
│   │   └── ComponentPalette.tsx # Electronic parts library
│   ├── context/               # ThemeContext & CircuitContext
│   ├── data/
│   │   ├── componentCatalog.ts# 60+ electronic components catalog
│   │   └── labCurriculum.ts   # Semester lab manual curriculum
│   ├── engine/                # SPICE & Digital Logic Engines
│   │   ├── spiceEngine.ts     # Berkeley ngspice-46 WASM integration
│   │   ├── spiceNetlistGenerator.ts # MNA netlist compilation
│   │   ├── spiceModels.ts     # Standard SPICE macromodels
│   │   └── digitalLogicEngine.ts # Combinational & sequential evaluator
│   ├── styles/                # Tailwind v4 & CSS custom properties
│   └── types/                 # TypeScript interfaces for circuits & simulation
├── test/                      # Automated test suite (run-tests.mjs)
├── .gitignore                 # Git ignore file
├── index.html                 # App HTML template with theme bootloader
├── package.json               # NPM scripts and dependencies
├── tsconfig.json              # TypeScript configuration
└── vite.config.ts             # Vite build configuration
```

---

## 📄 License
- **CircuitVerse Studio**: [Apache-2.0 License](LICENSE)
- **ngspice WebAssembly Engine**: BSD-3-Clause (compiled from Berkeley ngspice-46)
