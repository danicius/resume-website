# Danielle Alvarez - Portfolio Website

A beautiful, responsive portfolio website showcasing my professional experience, projects, and technical skills as a Computer Science graduate and software developer.

## ✨ Features

- **Responsive Design**: Optimized for all screen sizes and devices
- **Orange-Blue Gradient Theme**: Modern, professional color scheme
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Professional Sections**:
  - Hero section with professional headshot
  - About section with education details
  - Experience timeline with detailed work history
  - Featured projects showcase
  - Technical skills organized by category
  - Contact information and social links

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 GitHub Pages Deployment

This site is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://[username].github.io/[repository-name]`

### Manual Deployment Setup

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment workflow will run automatically on every push to main

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn/ui components
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📂 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
├── attached_assets/       # Images and assets
├── .github/workflows/     # GitHub Actions
└── vite.config.static.ts  # Static build configuration
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🎨 Customization

To customize the content:

1. Edit the component files in `client/src/components/`
2. Update personal information, experience, and projects
3. Replace the headshot image in `attached_assets/`
4. Modify colors in `client/src/index.css`

## 📄 License

This project is open source and available under the MIT License.