import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar
} from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';
import { yellow, green, pink, blue } from '@mui/material/colors';

export default function NoteCard({ note, handleDelete }) {
  const getAvatarColor = (category) => {
    switch (category) {
      case 'work':
        return yellow[700];
      case 'money':
        return green[500];
      case 'todos':
        return pink[500];
      default:
        return blue[500];
    }
  };

  return (
    <Card
      elevation={1}
      sx={{
        borderLeft: note.category === 'work' ? '5px solid red' : 'none',
        mt: 2,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: getAvatarColor(note.category) }}>
            {note.category?.[0]?.toUpperCase() || '?'}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)} aria-label="delete">
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
