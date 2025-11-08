# Nallamothu Bhanu Teja - Developer Portfolio

This is a modern, responsive developer portfolio website for Nallamothu Bhanu Teja, built with Next.js, Tailwind CSS, and Framer Motion.

## Overview

This project showcases Nallamothu Bhanu Teja's skills, work experience, projects, and certifications in a clean, interactive, and visually appealing single-page application. It features a light/dark mode, smooth animations, and a fully functional contact form. The content is managed centrally for easy updates.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [ShadCN UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Theming**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)

## Local Setup

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/Bhanutejanallamothu/portfolio.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd portfolio
    ```
3.  Install NPM packages:
    ```sh
    npm install
    ```
4.  Run the development server:
    ```sh
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) (or the port specified in your terminal) with your browser to see the result.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1.  **Push to GitHub**: Push your local repository to a new repository on your GitHub account.
2.  **Import Project on Vercel**:
    - Sign up or log in to your Vercel account.
    - Click "Add New..." -> "Project".
    - Import the Git repository you just pushed.
3.  **Configure Project**:
    - Vercel will automatically detect that you're using Next.js and configure the build settings.
    - No environment variables are required for the base functionality. If you extend the contact form to use a service like EmailJS or Resend, you will need to add the respective API keys as environment variables in the Vercel project settings.
4.  **Deploy**: Click the "Deploy" button. Your portfolio will be live in minutes!

## Updating Content

All personal data, project details, experience, and skills are stored in a single file for easy updates:

`src/lib/config.ts`

Simply edit the objects and arrays in this file to reflect your latest information. The website will automatically rebuild with the new content on your next deployment.

## License

Distributed under the MIT License. See `LICENSE` for more information.
