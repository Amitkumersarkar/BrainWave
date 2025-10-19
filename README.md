# Agency.Ai

> A modern, responsive front-end web application built with the latest frontend technologies: React JS, Tailwind CSS, Daisy UI, Framer Motion, React Hot-Toast, React Router and Web3Forms integration.

## 🚀 Live Demo  
Check out the live deployed version here: [https://theagencyai.netlify.app/](https://theagencyai.netlify.app/)

## 📦 Tech Stack  
- **React JS** – UI library for building component-based user interfaces  
- **Tailwind CSS** – Utility-first CSS framework for rapid styling  
- **Daisy UI** – A Tailwind-CSS component library for styling ease  
- **Framer Motion** – For animations and interactive UI transitions  
- **React Hot-Toast** – For user‐friendly toast notifications  
- **React Router** – For client-side routing and navigation  
- **Web3Forms** – For seamless form submission / backendless form handling  
- Other modern tools & dependencies – up to latest versions at time of build

## 🔍 Project Overview  
This project (“Agency.Ai”) is designed as a sleek, interactive frontend interface for an agency-type web service offering. The focus is on clean, responsive design, modern UX animations, and seamless form interactions without requiring a custom backend (thanks to Web3Forms).

Key aims:
- Provide a **responsive design** that looks great on desktop, tablet and mobile  
- Use **animation and motion** (via Framer Motion) to enhance the user experience  
- Leverage **utility styling** (Tailwind) + ready-components (DaisyUI) to speed up UI development  
- Handle **form submissions** through Web3Forms, making it easy to integrate email/contact flows  
- Deliver **notifications** (React Hot-Toast) to improve user feedback (e.g., “form submitted!”, “error occurred!”)  
- Enable **routing** between pages/sections using React Router  

## 📂 Project Structure  
├─ /components # Reusable UI components (buttons, cards, navbars…)
├─ /pages # Page-level components (Home, Services, Contact, etc)
├─ /styles # Tailwind / DaisyUI custom styles (if any)
├─ /router # React Router setup (routes, route guards)
├─ /animations # Framer Motion variants & hooks (optional)
└─ index.js # Application entry point

## 🧠 Highlights & Best Practices  
- **Tailwind + DaisyUI**: Tailwind provides the utility classes; DaisyUI adds pre-styled components (like buttons, forms, cards) so you spend less time writing custom CSS.  
- **Framer Motion**: Animations are applied to UI elements (e.g., page transitions, hover effects, motion on scroll) that make the web experience feel smooth and modern.  
- **React Hot-Toast**: Toast notifications are triggered upon important events (form submission success/failure) improving feedback.  
- **React Router**: Clean routing with declarative `<Routes>` and `<Route>` definitions, lazy loading where appropriate.  
- **Web3Forms**: Enables form submissions without building a separate backend. Just link the form to Web3Forms, and you get notifications / email forwards etc.

## ✅ Features  
- Fully responsive layout  
- Hero/banner section with engaging animation  
- Services/features section (cards) with hover/scroll animations  
- Contact form integrated with Web3Forms  
- Toast notification feedback on form submission  
- Smooth page-to-page transitions  
- Clean, maintainable code structure  
- Styled using Tailwind + DaisyUI for consistent look & feel  

## 🛠 Installation & Running Locally  
```bash
# clone the repo
git clone <your-repo-url>

# change into directory
cd agency-ai

# install dependencies
npm install
# or
yarn install

# start the development server
npm start
# or
yarn start

# build for production
npm run build
# or
yarn build

🧮 Configuration & Deployment

Ensure you have the proper Web3Forms form ID (if used) in your .env or config file.

Tailwind config and DaisyUI config should be present (e.g., tailwind.config.js).

When deploying (e.g., to Netlify), ensure the build command is npm run build, and deploy directory is build.

If using environment variables for Web3Forms or any other services, add them in your hosting platform’s environment settings.

🧪 Testing & Quality

Manual cross-browser testing (Chrome, Firefox, Safari)

Responsive checks on mobile/tablet sizes

Ensure animations via Framer Motion work smoothly without jank

Test form submission flow, ensure toast notifications appear and correct feedback is given

📋 To Do / Roadmap

 Add lazy loading / code splitting for larger components

 Add dark mode toggle (Tailwind + DaisyUI supports this)

 Add unit/integration tests (e.g., with React Testing Library)

 Add more sophisticated animations (scroll-based triggers)

 Improve accessibility (ARIA labels, keyboard navigation)

 Add SEO/meta tag improvements for better indexing

 Possibly add backend integration for data persistence beyond Web3Forms

👤 Author

Name : Amit Sarkar
Email : amitsarkar.dev.bd@gmail.com
Website : www.linkedin.com/in/amit-sarkar-63504b252

Feel free to reach out if you have any questions or suggestions!

📄 License

Specify your license (e.g., MIT)