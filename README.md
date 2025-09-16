# Todo List Application

A simple responsive and accessible web app made as practice task on "Using AI in developement" course.
Todo List application built with React, TypeScript, and Material-UI. Features a dark theme with HSL color model and persistent storage using browser's localStorage.

## Features

- ✅ **Add Tasks**: Create new tasks with a simple input field
- ✅ **Mark Complete**: Toggle task completion status with checkboxes
- ✅ **Delete Tasks**: Remove individual tasks with delete buttons
- ✅ **Clear Completed**: Bulk remove all completed tasks
- ✅ **Persistent Storage**: Tasks are saved in browser's localStorage
- ✅ **Responsive Design**: Works on desktop, tablet, and mobile devices
- ✅ **Dark Theme**: Modern dark theme with HSL color model
- ✅ **Accessibility**: Keyboard navigation and screen reader support

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Material-UI (MUI)** for UI components and theming
- **Zustand** for state management
- **SCSS** for enhanced styling with variables and mixins
- **localStorage** for data persistence

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd freshcode-ai-practice
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `docs` directory, ready for deployment to GitHub Pages.

### Deployment to GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Commit and push the `docs` directory to your repository

3. Enable GitHub Pages in your repository settings and set the source to the `docs` folder

## Usage

### Adding Tasks

- Type your task in the input field at the top
- Press Enter or click the "Add" button to create the task

### Managing Tasks

- **Complete/Uncomplete**: Click the checkbox next to any task
- **Delete**: Click the delete (trash) icon next to any task
- **Clear Completed**: Click the "Clear Completed" button to remove all completed tasks at once

### Task Information

- Each task shows its creation date and time
- Completed tasks are visually distinguished with strikethrough text and reduced opacity
- Task counters show total and completed task counts

## Project Structure

```
freshcode-ai-practice/
├── src/
│   ├── components/
│   │   ├── TodoApp.tsx      # Main application component
│   │   └── TodoItem.tsx     # Individual task component
│   ├── store/
│   │   └── todoStore.ts     # Zustand store for state management
│   ├── App.tsx              # Root component with theme setup
│   ├── App.scss             # Global styles with SCSS features
│   ├── index.scss           # Base styles with SCSS variables
│   └── main.tsx             # Application entry point
├── docs/                    # Built files for GitHub Pages deployment
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
└── README.md               # This file
```

## Design Features

- **HSL Color Model**: All colors use HSL values for better color manipulation
- **Dark Blue Theme**: Primary color scheme based on dark blue tones
- **SCSS Variables**: Centralized color and typography variables for easy theming
- **SCSS Mixins**: Reusable mixins for common patterns like font-smoothing and box-model resets
- **Gradient Backgrounds**: Subtle gradients for visual depth
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions for better UX

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
