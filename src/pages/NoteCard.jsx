import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

export default function NoteCard({ note, handleDelete }) {
  return (
    <Card elevation={1} sx={{ mb: 2 }}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDelete(note.id)} color="error">
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
