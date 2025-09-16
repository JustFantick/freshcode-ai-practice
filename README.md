# Todo List Application

A simple responsive and accessible web app made as practice task on "Using AI in developement" course.
Todo List application built with React, TypeScript, and Material-UI. Features a dark theme with HSL color model and persistent storage using browser's localStorage.

## AI Development History

All AI chat history from the development process has been exported and placed in the `ai-chat-history/` folder.

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

- Node.js (version 22.12.0 or higher)
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

4. Open your browser and navigate to `http://localhost:5173/freshcode-ai-practice/`

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

## Design Features

- **HSL Color Model**: All colors use HSL values for better color manipulation
- **Dark Blue Theme**: Primary color scheme based on dark blue tones
- **SCSS Variables**: Centralized color and typography variables for easy theming
- **SCSS Mixins**: Reusable mixins for common patterns like font-smoothing and box-model resets
- **Gradient Backgrounds**: Subtle gradients for visual depth
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions for better UX

## License

This project is open source and available under the [MIT License](LICENSE).
