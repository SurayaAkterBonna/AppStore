# 🚀 Hero.IO: The Universal App Marketplace

**live link:** https://glowing-scone-353dd4.netlify.app/

**Hero.IO** is a dynamic, fully responsive front-end application designed to simulate a modern app marketplace. It serves as a comprehensive demonstration of core React concepts, advanced state management using **LocalStorage**, dynamic routing, live search, sorting, and data visualization.

The application adheres to all modern web development best practices, ensuring a seamless and error-free experience across all devices and routes.

---

## 🛠️ Technologies & Libraries

This project is built using a modern React stack and relies on the following key technologies:

* **React (Vite/CRA):** For building the user interface.
* **React Router DOM:** For handling dynamic and nested client-side routing.
* **Tailwind CSS:** For highly efficient, utility-first styling and responsive design.
* **Recharts:** For visualizing app review data (App Review Chart).
* **LocalStorage:** For persistent data storage of installed applications.
* **Custom Hooks:** For managing installation state.
.

---

## 📋 Features

### 🧱 Layout & Navigation
* **Header:** Contains the app logo (navigates to Home), a responsive navigation bar (`Home`, `Apps`, `Installation`), and a prominent **Contribution** button linking to the GitHub profile.

* **Footer:** A custom-designed, stylized footer.

* **Data Structure:** Utilizes a **JSON Array of 16 objects** for app data, including detailed metrics like ratings distribution and download counts.

### 🏠 Core Pages

| Page | Key Functionality |
| :--- | :--- |
| **Home (`/`)** | Features a promotional banner with two action buttons (`App Store`, `Play Store`), a **States Section**, and a **Top 8 Apps** display with a "Show All" link. |
| **All Apps (`/apps`)** | Displays all app cards. Includes a responsive header showing **Total Apps**, **Live Search** (case-insensitive filtering by title), and a **Sort by Downloads** dropdown (`High-Low`, `Low-High`). |
| **App Details (`/app/:id`)** | Detailed view of a single app. Features core stats, an **Install button** (linked to LocalStorage), and a responsive **Recharts** visualization of ratings data. |
| **My Installation (`/installation`)** | Displays all apps installed via the **LocalStorage** feature. Each card has an **Uninstall button** to remove the app from the UI and storage. |
| **Error Page (`*`)** | A custom, user-friendly error page for invalid routes. |

### 💡 Advanced Requirements (Challenge & LocalStorage)

* **App Installation Persistence:** Clicking "Install" saves the app ID to LocalStorage. The button dynamically switches to **Disabled** and displays **"Installed"** if the app is already in LocalStorage.
* **Uninstallation:** The "Uninstall" button on the **My Installation** page removes the app from LocalStorage and the UI, showing a success **Toast**.
* **Live Search and Sorting:** Implemented case-insensitive, live search on the All Apps page and functional sorting (High-Low/Low-High) of apps by the `downloads` property.
* **Loading States:** A **loading animation** is displayed during page navigation and intensive operations (like search filtering) for a smoother UX.
* **Error Handling:** Custom **"App Not Found"** message on the App Details page for invalid IDs.

---
