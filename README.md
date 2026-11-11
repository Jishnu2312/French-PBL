# 🌍 France 3D Monuments Explorer (10 Cities, Non-Paris)

A Google-Earth-grade, purely client-side 3D web application visualising 10 iconic monuments in France across 10 distinct cities (strictly excluding Paris). Built with **React**, **Vite**, and **CesiumJS**.

---

## 🏛 The 10 Monuments & Distinct Cities (Non-Paris)

| # | Monument | Unique City | Region / Department | Coordinates |
|---|---|---|---|---|
| 1 | **Abbaye du Mont-Saint-Michel** | Le Mont-Saint-Michel | Manche (Normandy) | `48.6360° N, 1.5115° W` |
| 2 | **Palais des Papes** | Avignon | Vaucluse (Provence) | `43.9507° N, 4.8075° E` |
| 3 | **Cité de Carcassonne** | Carcassonne | Aude (Occitanie) | `43.2070° N, 2.3630° E` |
| 4 | **Pont du Gard** | Vers-Pont-du-Gard | Gard (Occitanie) | `43.9476° N, 4.5350° E` |
| 5 | **Cathédrale Notre-Dame de Strasbourg** | Strasbourg | Bas-Rhin (Grand Est) | `48.5818° N, 7.7509° E` |
| 6 | **Cathédrale Notre-Dame de Rouen** | Rouen | Seine-Maritime (Normandy) | `49.4402° N, 1.0948° E` |
| 7 | **Basilique Notre-Dame de la Garde** | Marseille | Bouches-du-Rhône (PACA) | `43.2841° N, 5.3713° E` |
| 8 | **Arènes d'Arles** | Arles | Bouches-du-Rhône (Provence) | `43.6778° N, 4.6311° E` |
| 9 | **Place Stanislas** | Nancy | Meurthe-et-Moselle (Grand Est) | `48.6936° N, 6.1832° E` |
| 10 | **Cathédrale Notre-Dame de Reims** | Reims | Marne (Grand Est) | `49.2537° N, 4.0340° E` |

*✅ Verification: All 10 monuments are in France, none are in Paris, and all 10 cities/communes are distinct.*

---

## ✈️ Multi-Stage Camera Animation Flow

1. **Initial Page Load:**
   - **Stage 1 (Earth Orbit):** Camera starts at ~11,500 km altitude showing the globe centered on France from space.
   - **Stage 2 (France Macro View):** Camera smoothly flies to ~1,350 km altitude framing the entire hexagon of France.
   - **Stage 3 (Monument Oblique View):** Camera descends smoothly into the selected monument at an oblique 3D perspective (~300–420 m altitude, -25° to -35° pitch).
2. **Monument Change in Dropdown:**
   - Camera zooms **out** to **Stage 2 (France Macro View)** to establish spatial geography.
   - Camera zooms **in** to **Stage 3** for the newly chosen monument in its city.
   - Controls and dropdown are locked during flight to prevent conflicting gestures, then re-enabled upon arrival.

---

## 🎮 Google-Earth-Style Interactive Navigation

Once the camera arrives at any monument, you can freely explore the surrounding city in 3D:
* **Rotate / Pan Globe:** `Left Click` + Drag
* **3D Orbit & Tilt:** `Middle Click` + Drag (or `Ctrl` + `Left Click` + Drag)
* **Zoom In / Out:** `Mouse Wheel` or `Right Click` + Drag
* **Auto-Orbit Mode:** Click the **🔄 360° Orbit** button in the HUD to let the camera automatically rotate in a cinematic circle around the monument!

---

## 🚀 Quick Start (Two Ways to Run)

### Option A: Instant Zero-Install (Standalone HTML)
You can open `standalone.html` immediately in any modern web browser or run with a quick local static server:

```bash
# Using Python's built-in HTTP server:
cd france-monuments-3d
python3 -m http.server 8000
```
Then visit [http://localhost:8000/standalone.html](http://localhost:8000/standalone.html).

### Option B: Full Modern Vite + React App
Requires Node.js (v18+ recommended):

```bash
# 1. Navigate to the project directory
cd france-monuments-3d

# 2. Install dependencies
npm install

# 3. (Optional) Configure Cesium Ion Token (see below)
cp .env.example .env.local

# 4. Start local development server
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## 🔑 Cesium Ion Token (Free Tier)

* **Works Out of the Box:** By default, the application runs client-side with open OpenStreetMap global tiles without needing any token!
* **Optional High-Res 3D Terrain:** If you'd like to enable high-resolution Cesium World Terrain and photogrammetric 3D tiles:
  1. Sign up for a free Community account at [cesium.com/ion](https://cesium.com/ion/).
  2. Copy your default access token from the Ion dashboard.
  3. Paste it into `.env.local`:
     ```env
     VITE_CESIUM_ION_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
     ```
  4. Restart `npm run dev`.
