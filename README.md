# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🛠 Select Skip Page Redesign – Technical Test

This project is a redesigned version of the "Select Skip" page from wewantwaste.co.uk, created as part of a technical test. The goal was to replicate the look and feel of the original design while maintaining its full functionality.

🔧 Technologies Used
React – for building the UI with reusable components.

Vite – for fast and efficient project setup.

Tailwind CSS – for modern, responsive, and utility-first styling.

Axios – for handling API requests.

React Router DOM – for routing and page layout control (BrowserRouter, Routes, Route, Outlet).

useState & useEffect – for state management and side effects.

📦 Components
I created reusable components, each receiving data via props:

Card – displays individual skip info (size, price, and selection button).

SkipHeader – shows progress steps for the booking process.

Container – provides page alignment with a maximum width of 1200px.

SkipList – lists the available skips based on the fetched data.

DefaultLayout – wraps the application structure using Outlet from React Router.

🔄 Functionality
Data was fetched using Axios from the provided API:
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft

Data is stored using useState and loaded on component mount with useEffect.

Routing is handled with react-router-dom in App.jsx using BrowserRouter, Routes, and Route.

📱 Responsiveness
The entire page is fully responsive, working well on both desktop and mobile.

Tailwind CSS was used to quickly apply spacing, layout, and styling rules that adapt to screen sizes.

✅ Result
The final version is visually identical to the original.

The codebase is clean, modular, and easy to maintain or extend.
