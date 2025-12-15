# AGENTS.md

This file provides guidance for AI agents working on this project.

## Project Overview

This is a single-page application (SPA) for 'Grupo Santa Maria', built with React, Vite, and TypeScript. The goal is to create a modern, responsive, and performant web experience.

## Architecture

The project follows a component-based architecture. All components are located in the `./components` directory.

- **Main Components:** The core, page-level components are located directly under `./components`. Examples include `Navbar.tsx`, `Hero.tsx`, and `Contact.tsx`. These components are assembled in `App.tsx` to form the main application layout.
- **Reusable UI Components:** Smaller, reusable UI elements, such as buttons and modals, should be placed in the `./components/ui` directory to promote consistency and code reuse.

## Conventions and Best Practices

- **TypeScript:** All new code should be written in TypeScript to ensure type safety and improve code quality.
- **Styling:** The project uses Tailwind CSS for styling. Please use Tailwind utility classes for all styling needs.
- **Icons:** The `lucide-react` library is used for icons. Please use icons from this library to maintain visual consistency.
- **Component Naming:** Component files should be named using PascalCase (e.g., `MyComponent.tsx`).
- **Code Style:** Please maintain the existing code style for consistency.

## Environment Variables

The project uses a `.env.local` file for environment variables. The `GEMINI_API_KEY` is required for the application to run correctly.

## Getting Started

To run the project locally, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   - Create a `.env.local` file in the root of the project.
   - Add the following line to the `.env.local` file, replacing `YOUR_API_KEY` with your actual Gemini API key:
     ```
     GEMINI_API_KEY=YOUR_API_KEY
     ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
The application will be available at `http://localhost:5173`.
