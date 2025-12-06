# Minecraft Portfolio - Pranay Nair

A unique, Minecraft-themed portfolio website showcasing my journey as a Full Stack Developer and Entrepreneur. Built with Next.js 15 and Tailwind CSS, featuring immersive gaming aesthetics and responsive design.

## Features

### Minecraft-Themed Design
- Authentic Minecraft block textures and colors
- Floating animations and interactive elements
- Gaming-inspired UI components and buttons
- Pixelated fonts and retro styling

### Fully Responsive
- Mobile-first design approach
- Collapsible hamburger menu for mobile
- Optimized layouts for all screen sizes
- Touch-friendly interactions

### Epic Journey Timeline
- Interactive career progression display
- Quest-style experience cards
- Achievement badges and XP system
- Mobile-optimized single-column layout

### Skills Inventory
- Gaming inventory-style skill showcase
- Level indicators for each technology
- Hover tooltips with proficiency levels
- Achievement badges for expertise areas

### Project Showcase
- Minecraft block-styled project cards
- Live project links and demos
- Technology stack badges
- Hover animations and effects

## Tech Stack

- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS
- Language: TypeScript
- Deployment: Vercel
- Version Control: Git & GitHub

## Sections

1. Hero Section - Introduction with Minecraft aesthetics
2. About Me - Personal story and background
3. Skills - Technical expertise in inventory format
4. Experience - Career journey as epic quests
5. Projects - Portfolio of built applications
6. Contact - Get in touch section

## Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Local Development

1. Clone the repository
```bash
git clone https://github.com/iPranay05/MyPortfolio.git
cd MyPortfolio/minecraft-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

4. Open in browser
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is deployed on Vercel. Any push to the main branch automatically triggers a new deployment.

**Live Demo**: [https://pranayy.vercel.app](https://pranayy.vercel.app)

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iPranay05/MyPortfolio)

## Project Structure

```
minecraft-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── MinecraftBlock.tsx
│       └── InventorySlot.tsx
├── public/
│   ├── Pranay Nair (2)[1].pdf
│   └── *.svg icons
├── tailwind.config.js
└── package.json
```

## Key Features Explained

### Minecraft Aesthetics
- Custom CSS classes for block textures
- Authentic color palette matching Minecraft blocks
- Floating animations for immersive experience

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Collapsible hamburger menu with grid layout
- Smooth scroll navigation between sections

### Interactive Elements
- Hover effects on all interactive components
- Scale animations on buttons and cards
- Smooth transitions throughout the site

## Customization

### Adding New Projects
Edit the projects array in `src/app/page.tsx`:

```typescript
{
  title: "Your Project Name",
  description: "Project description",
  tech: ["React", "Node.js", "MongoDB"],
  color: "bg-minecraft-emerald",
  link: "https://your-project-link.com"
}
```

### Modifying Skills
Update the skills array with your technologies:

```typescript
{ name: 'Technology', color: 'bg-color', icon: '', level: 5 }
```

### Changing Experience
Add your work experience in the quest format:

```typescript
{
  title: "Your Role",
  company: "Company Name", 
  period: "Start - End",
  description: "What you did...",
  // ... other properties
}
```

## Contact

- Email: pranaynair05@gmail.com
- LinkedIn: [linkedin.com/in/ipranay05](https://linkedin.com/in/ipranay05)
- GitHub: [github.com/ipranay05](https://github.com/ipranay05)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Minecraft for the amazing visual inspiration
- Next.js team for the excellent framework
- Tailwind CSS for the utility-first styling approach
- Vercel for seamless deployment platform

---

**Built with  and lots of  in the Minecraft universe by Pranay Nair**
