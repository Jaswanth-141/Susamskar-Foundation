# Susamskar Foundation Website

A highly polished, modern, fully responsive web application for the **Susamskar Foundation**, built with **React 19**, **Vite 6**, and **Tailwind CSS v4**.

---

## 🚀 Why You Might See a "White Page" (And How to Fix It)

If you open this project folder in VS Code and attempt to open `index.html` directly in your browser (using `Double Click` or standard file viewer), **you will see a blank white page**. 

### 🔍 The Reason
Modern React applications are built using **ES Modules** and **JSX/TypeScript (`.tsx`)**. Web browsers cannot natively run `.tsx` files or load ES modules directly from the local filesystem (`file://` protocol) due to security policies (CORS). 

### 🛠️ The Solution
You must run the provided **Vite Development Server**, which compiles the TypeScript and React code on-the-fly and serves it over a local network (`http://localhost:3000`).

Follow the simple **3-Step Local Setup** below to get the website running locally!

---

## 💻 3-Step Local Setup

### Step 1: Open the Project in VS Code
1. Launch **Visual Studio Code**.
2. Go to `File` ➔ `Open Folder...` (or `Open...` on Mac).
3. Select this project root folder (the folder containing `package.json`).

### Step 2: Open the Integrated Terminal
In VS Code, open the terminal by:
* Pressing ``Ctrl + ` `` (Windows/Linux) or ``Cmd + ` `` (Mac).
* Or clicking **Terminal** ➔ **New Terminal** in the top menu.

### Step 3: Run the Commands
In the terminal window, run the following two commands:

```bash
# 1. Install all dependencies (React, Tailwind CSS, Lucide Icons, etc.)
npm install

# 2. Start the development server
npm run dev
```

Once the development server starts, it will display a local link in your terminal:
```
  VITE v6.2.3  ready in 324 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

👉 **Ctrl-Click** (or **Cmd-Click** on Mac) on the `http://localhost:3000/` link, or open your web browser and go to `http://localhost:3000` to see the live, interactive website!

---

## 🛠️ Production Build & Deployment

### Run a Local Production Build
To test the production-ready optimized build locally, run:
```bash
# Compile and build assets into the 'dist/' folder
npm run build

# Preview the compiled production build locally
npm run preview
```

### Deploy to Vercel (Zero-Config)
This repository is completely structured and configured to work seamlessly with Vercel:
1. Push this project to a **GitHub** repository.
2. Go to the [Vercel Dashboard](https://vercel.com/) and click **Add New** ➔ **Project**.
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect Vite and deploy your site successfully in under a minute!

---

## 📁 Project Structure

* `/src` — Contains the application source code.
  * `/src/components` — Modular page views, headers, footers, details, and modal popups.
  * `/src/App.tsx` — Main application component managing state and view routing.
  * `/src/main.tsx` — React entrypoint.
  * `/src/index.css` — Global stylesheets and Tailwind CSS custom theme settings.
  * `/src/data.ts` — Structured data, testimonials, recent happenings, and beneficiary information.
  * `/src/types.ts` — TypeScript types and interface declarations.
* `index.html` — The main HTML file served by Vite.
* `package.json` — Declares scripts and dependency versions.
* `vite.config.ts` — ESM-compliant Vite build & development server configurations.
* `tsconfig.json` — TypeScript compilation rules.
