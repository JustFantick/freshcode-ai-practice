import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Typography, Box } from "@mui/material";
import TodoApp from "./components/TodoApp";
import "./App.scss";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(210, 100%, 50%)",
      light: "hsl(210, 100%, 60%)",
      dark: "hsl(210, 100%, 40%)",
    },
    secondary: {
      main: "hsl(210, 50%, 70%)",
    },
    background: {
      default: "hsl(210, 20%, 8%)",
      paper: "hsl(210, 20%, 12%)",
    },
    text: {
      primary: "hsl(210, 10%, 90%)",
      secondary: "hsl(210, 10%, 70%)",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "3rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "linear-gradient(135deg, hsl(210, 20%, 8%) 0%, hsl(210, 30%, 12%) 100%)",
          minHeight: "100vh",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4, mx: "auto" }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h1" component="h1" gutterBottom>
            Todo List
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Organize your tasks efficiently
          </Typography>
        </Box>
        <TodoApp />
      </Container>
    </ThemeProvider>
  );
}

export default App;
