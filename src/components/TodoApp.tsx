import { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  List,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const { todos, addTodo, clearCompleted } = useTodoStore();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <Paper
      elevation={8}
      sx={{
        p: 3,
        borderRadius: 3,
        background:
          "linear-gradient(145deg, hsl(210, 20%, 12%) 0%, hsl(210, 25%, 15%) 100%)",
        border: "1px solid hsl(210, 30%, 20%)",
      }}
    >
      <Box mb={3}>
        <Box display="flex" gap={2} mb={2}>
          <TextField
            fullWidth
            placeholder="Add a new task..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "hsl(210, 30%, 30%)",
                },
                "&:hover fieldset": {
                  borderColor: "hsl(210, 50%, 50%)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "hsl(210, 100%, 50%)",
                },
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleAddTodo}
            disabled={!inputValue.trim()}
            startIcon={<AddIcon />}
            sx={{
              minWidth: 120,
              background:
                "linear-gradient(45deg, hsl(210, 100%, 50%) 30%, hsl(210, 100%, 60%) 90%)",
              "&:hover": {
                background:
                  "linear-gradient(45deg, hsl(210, 100%, 40%) 30%, hsl(210, 100%, 50%) 90%)",
              },
            }}
          >
            Add
          </Button>
        </Box>

        {totalCount > 0 && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Box display="flex" gap={1}>
              <Chip
                label={`Total: ${totalCount}`}
                size="small"
                sx={{
                  backgroundColor: "hsl(210, 30%, 20%)",
                  color: "hsl(210, 10%, 90%)",
                }}
              />
              <Chip
                label={`Completed: ${completedCount}`}
                size="small"
                sx={{
                  backgroundColor: "hsl(120, 50%, 20%)",
                  color: "hsl(120, 50%, 80%)",
                }}
              />
            </Box>
            {completedCount > 0 && (
              <Button
                variant="outlined"
                size="small"
                onClick={clearCompleted}
                startIcon={<DeleteIcon />}
                sx={{
                  borderColor: "hsl(0, 50%, 50%)",
                  color: "hsl(0, 50%, 70%)",
                  "&:hover": {
                    borderColor: "hsl(0, 50%, 60%)",
                    backgroundColor: "hsl(0, 50%, 10%)",
                  },
                }}
              >
                Clear Completed
              </Button>
            )}
          </Box>
        )}
      </Box>

      {todos.length === 0 ? (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No tasks yet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Add your first task above to get started
          </Typography>
        </Box>
      ) : (
        <List sx={{ p: 0 }}>
          {todos.map((todo, index) => (
            <Box key={todo.id}>
              <TodoItem todo={todo} />
              {index < todos.length - 1 && (
                <Divider sx={{ borderColor: "hsl(210, 20%, 20%)" }} />
              )}
            </Box>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default TodoApp;
