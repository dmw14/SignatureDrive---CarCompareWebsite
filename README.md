<p align="center">
  <img src="src/assets/SignatureDrive banner.png" alt="SignatureDrive Banner" width="100%" />
</p>

# 🚘 SignatureDrive  

**SignatureDrive** is a luxury car comparison platform that lets you explore and compare premium cars from **BMW, Mercedes-Benz, and Audi**.  
With a sleek UI and detailed specs, it helps enthusiasts and buyers make informed choices when looking at top-tier luxury vehicles.  

---

## ✨ Features  

- 🔍 Compare luxury cars from **BMW, Mercedes-Benz, and Audi**  
- 📊 Detailed **specifications, variants, and performance data**  
- ⚖️ Side-by-side **car comparison system**  
- ❤️ Add/remove cars from comparison list
- ☁️ **Cloud database integration (Supabase)**  
- 🖼️ High-quality images of each model  
- 📱 Fully **responsive** and modern UI  
- 🧩 Scalable architecture with reusable components  

---

## 🛠️ Tech Stack  

### Frontend  
- ⚛️ React (with TypeScript)  
- 🎨 Tailwind CSS  
- 🪄 shadcn/ui  
- 🎞️ Framer Motion  

### Backend / Services  
- ☁️ Supabase
  - Database (Car data & future user data)  

### Tools  
- ⚡ Vite  
- 🧠 Context API (State Management)  

---

## 📂 Project Structure  

```
SignatureDrive/
│
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Application pages
│   ├── context/         # Global state (Compare, Auth, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── data/            # Static / initial car data
│   └── assets/          # Images, icons, banners
│
├── public/
├── .env                 # Supabase environment variables
├── package.json
└── README.md
```

---

## 📌 Project Goal  
The goal of **SignatureDrive** is to create a **premium, user-friendly car comparison tool** that combines modern frontend technology with a polished design — making car research both **engaging and insightful**.  

---

## 🚀 Getting Started  

**Clone the repo**  
   ```bash
   git clone https://github.com/your-username/SignatureDrive.git
   cd SignatureDrive
