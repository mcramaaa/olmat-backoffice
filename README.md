# 🧾 OLMAT Backoffice

## Eng
OLMAT Backoffice is an admin dashboard application for managing the registration system of the Mathematics Olympiad. This platform is designed for committee use to handle data for participants, schools, regions, and event management.

## Id
OLMAT Backoffice adalah aplikasi dashboard admin untuk mengelola sistem pendaftaran Olimpiade Matematika. Aplikasi ini dirancang untuk digunakan oleh panitia untuk mengatur data peserta, sekolah, wilayah, dan event.


## 🚀 Demo

🔗 [Live Demo](https://olmat-backoffice-tau.vercel.app/)  
🔐 Admin Login:
- Email: `admin@admin.com`
- Password: `qweqweqwe`

## 🧰 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Typescript**: For strict type safety
- **Deployment**: [Vercel](https://vercel.com/)

## 📌 Features

- ✅ Admin login with validation
- 🏫 School data management
- 🌍 Region management (Province, City, Subdistrict)
- 👨‍🎓 Participant management
- 📆 Olympiad event management
- 📊 Dashboard with statistics summary
- 🧱 Dynamic relationships between entities
- 🔐 Authentication using tokens

## 🧑‍💻 Development

This project is built using clean code principles and reusable components. Forms are modular and validated using Zod, while state management is handled efficiently with Zustand. All API endpoints are connected to a NestJS backend.

## 📦 Local Installation

```bash
git clone https://github.com/mcramaaa/olmat-backoffice.git
cd olmat-backoffice
npm install
npm run dev

🗃️ Project Structure
├── app/                 # Routing and main pages (Next.js App Router)
├── components/          # Reusable UI components (tables, modals, forms)
├── lib/                 # Helpers (API client, auth, constants)
├── store/               # Zustand state management
├── validations/         # Zod validation schemas
