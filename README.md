# TechMaui

A comprehensive guide to essential tools, extensions, and resources that make school tech work better.

## Features

- 🚫 **Ad Blocking Guide**: Step-by-step instructions for setting up uBlock Origin
- 🔧 **Browser Extensions**: Curated collection of essential extensions for productivity and learning
- 🛠️ **Useful Tools**: Hand-picked tools and resources to enhance your learning experience

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A modern web browser (Chrome, Firefox, or Edge)
- [Git](https://git-scm.com/) for version control

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/nxtcarson/techmaui.git
   cd techmaui
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` (or another port if 5173 is in use)

4. **Build for Production** (optional)
   ```bash
   npm run build
   ```
   The built files will be in the `dist` directory

## Development

### Project Structure
```
techmaui/
├── src/                # Source code
│   ├── pages/         # Page components
│   ├── components/    # Reusable components
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js  # PostCSS configuration
└── vite.config.js     # Vite configuration
```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint for code quality

### Technologies Used

- **React**: Frontend library
- **React Router**: Navigation
- **Tailwind CSS**: Styling
- **Vite**: Build tool and development server

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

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Open an issue on GitHub
3. Contact the maintainers

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