# NexusFlow Landing Page 🚀

A modern, fully responsive SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion. Features stunning animations, dark blue theme, and optimized mobile experience.

![NexusFlow Landing Page](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with dark blue gradient theme
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Smooth Animations** - Advanced Framer Motion animations throughout
- 🎯 **Performance Optimized** - Fast loading with Next.js App Router
- 🔥 **Interactive Components** - Hover effects, scroll animations, and micro-interactions
- 📊 **Complete Sections** - Hero, Features, Pricing, Testimonials, and more
- 🌐 **SEO Ready** - Semantic HTML and meta tags optimized

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** JavaScript/React

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git for version control

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/asynctushar/nexusflow.git
   cd nexusflow-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
nexusflow/
    src/
    ├── app/
    │   ├── page.js          # Main landing page component
    │   ├── layout.js        # Root layout
    │   └── globals.css      # Global styles
    ├── public/              # Static assets
    ├── components/          # components of the projects
    ├── package.json         # Dependencies
    └── tailwind.config.js   # Tailwind configuration
```

## 🎨 Sections Included

- **Hero Section** - Eye-catching headline with CTA buttons
- **Stats Section** - Key metrics and achievements
- **What We Do** - 4-step process explanation
- **Features Grid** - 9 powerful features with icons
- **Why Choose Us** - 6 compelling reasons with detailed descriptions
- **Pricing Plans** - 3 tier pricing table with features
- **Testimonials** - 6 customer reviews with avatars
- **Call to Action** - Final conversion section
- **Footer** - 6-column footer with links and social media

## 🎯 Customization

### Colors

The landing page uses a dark blue theme. To customize colors, update the Tailwind classes:

- Primary: `blue-600`, `blue-500`, `blue-400`
- Secondary: `cyan-600`, `cyan-500`, `cyan-400`
- Background: `slate-950`, `slate-900`

### Content

All content is easily customizable in the component arrays:

```javascript
const features = [
  { icon: Rocket, title: "Your Title", desc: "Your description" }
  // Add or modify features
];

const testimonials = [
  { name: "Name", role: "Role", content: "Review", rating: 5 }
  // Add or modify testimonials
];
```

### Animations

Framer Motion animations can be adjusted:

```javascript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🌟 Key Features Showcase

### Smooth Scroll Progress Bar
Visual indicator showing scroll progress through the page

### Animated Mobile Menu
Hamburger menu with smooth slide-in animation

### Viewport-Triggered Animations
Elements animate as they come into view for better performance

### Interactive Pricing Cards
Hover effects and scale animations on pricing tiers

### Avatar Testimonials
Colorful gradient avatars with rotation animations

### 6-Column Footer
Comprehensive footer with organized link sections

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Tushar Biswas**
- GitHub: [@asynctushar](https://github.com/asynctushar)
- LinkedIn: [Tushar Biswas](https://linkedin.com/in/asynctushar)
- Portfolio: [asynctushar.vercel.app](https://asynctushar.vercel.app)

## 🙏 Acknowledgments

- Design inspiration from modern SaaS platforms
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ **Star this repo if you found it helpful!**

📧 **Questions?** Feel free to open an issue or reach out!

🚀 **Live Demo:** [View Live Site](https://nexusflow.vercel.app)

---

Made with ❤️ using Next.js, Tailwind CSS, and Framer Motion