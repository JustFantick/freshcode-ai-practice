import {
  ListItem,
  ListItemText,
  Box,
  IconButton,
  Checkbox,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Todo } from "../store/todoStore";
import { useTodoStore } from "../store/todoStore";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodoStore();

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <ListItem
      sx={{
        py: { xs: 1, sm: 2 },
        px: { xs: 0.5, sm: 3 },
        "&:hover": {
          backgroundColor: "hsl(210, 20%, 15%)",
        },
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={handleToggle}
        sx={{
          color: "hsl(210, 50%, 50%)",
          marginRight: "0.75rem",
          "&.Mui-checked": {
            color: "hsl(120, 50%, 50%)",
          },
        }}
      />
      <ListItemText
        sx={{
          pr: { xs: 6, sm: 5 },
        }}
        primary={
          <Typography
            variant="body1"
            sx={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed
                ? "hsl(210, 10%, 50%)"
                : "hsl(210, 10%, 90%)",
              opacity: todo.completed ? 0.7 : 1,
            }}
          >
            {todo.text}
          </Typography>
        }
        secondary={
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: "0.75rem" }}
          >
            {new Date(todo.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        }
      />
      <Box
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <IconButton
          onClick={handleDelete}
          sx={{
            color: "hsl(0, 50%, 60%)",
            "&:hover": {
              backgroundColor: "hsl(0, 50%, 10%)",
              color: "hsl(0, 50%, 80%)",
            },
          }}
          aria-label="Delete task"
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
