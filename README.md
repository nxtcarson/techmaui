# TechMaui

A comprehensive guide to essential tools, extensions, and resources that make school tech work better.

## 🚀 Features

| Category | Description |
|----------|-------------|
| 🛡️ **Ad Blocking** | Block unwanted ads with uBlock Origin |
| 🔧 **Extensions** | Curated browser extensions for productivity |
| 🛠️ **Tools** | Essential software and online resources |
| 📚 **Study** | Study methods and productivity tools |
| 📖 **Research** | Academic research and citation tools |
| 💰 **Budget** | Money-saving tips and financial tools |

## 🔧 Quick Setup

```bash
git clone https://github.com/nxtcarson/techmaui.git
cd techmaui
npm install
npm run dev
```

## 💻 Development

### Tech Stack
- **Frontend**: React, React Router
- **Styling**: Tailwind CSS
- **Build**: Vite
- **Linting**: ESLint

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Project Structure
```
techmaui/
├── src/
│   ├── pages/          # Page components
│   │   ├── Home
│   │   ├── AdBlocking
│   │   ├── Tools
│   │   ├── Extensions
│   │   ├── Study
│   │   ├── Research
│   │   ├── Budget
│   │   ├── Login
│   │   └── SignUp
│   ├── components/     # Shared components
│   └── App.jsx        # Main component
└── public/           # Static assets
```

## 🤝 Contributing
1. Fork the repository
2. Create feature branch: `git checkout -b feature/NewFeature`
3. Commit changes: `git commit -m 'Add NewFeature'`
4. Push to branch: `git push origin feature/NewFeature`
5. Open a Pull Request

## 📝 License
MIT License - see [LICENSE](LICENSE)

## 📞 Support
- Open an issue on GitHub
- Contact: nxtcarson@gmail.com

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A modern web browser (Chrome, Firefox, or Edge)
- [Git](https://git-scm.com/) for version control

## Troubleshooting

### Common Issues

1. **Port 5173 is already in use**
   - The development server will automatically try the next available port
   - You can also specify a port: `npm run dev -- --port 3000`

2. **Node modules issues**
   - Try removing the node_modules directory and package-lock.json:
     ```bash
     rm -rf node_modules package-lock.json
     npm install
     ```

3. **Tailwind classes not working**
   - Ensure PostCSS is properly configured
   - Try rebuilding the Tailwind CSS classes:
     ```bash
     npm run build
     ```

### Platform-Specific Notes

#### Windows
- Use PowerShell or Git Bash for better compatibility
- If you get EACCES errors, run PowerShell as administrator

#### macOS/Linux
- Ensure proper file permissions:
  ```bash
  chmod +x node_modules/.bin/*
  ```

## Acknowledgments

- Icons and graphics from [Heroicons](https://heroicons.com/)
- UI components inspired by [Tailwind UI](https://tailwindui.com/)

## 🖼️ Screenshots

### Home Page
![Home Page](docs/images/home.png)
*Add a screenshot of your home page showing the main cards and layout*

### Tools Page
![Tools Page](docs/images/tools.png)
*Add a screenshot of your tools page showing the grid layout and ad blocking indicators* 