import React, { useEffect, useState } from 'react';
import { Container,CircularProgress, Typography , Paper  } from '@mui/material'; 
import Grid2 from '@mui/material/Grid2';
export default function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch notes'); 
        return res.json();
      })
      .then(data => setNotes(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Grid2 container spacing={3}>
        {[1, 2, 3, 4].map((num) => (
          <Grid2 xs={12} sm={6} md={3} key={num}> 
            <Paper sx={{ padding: 2, textAlign: 'center', fontWeight: 'bold' }}>
              {num}
            </Paper>
          </Grid2>
        ))}

        {isLoading && (
          <Grid2 xs={12} textAlign="center">
            <CircularProgress color="secondary" />
          </Grid2>
        )}

        {error && (
          <Grid2 xs={12}>
            <Paper sx={{ padding: 2, textAlign: 'center', color: 'red' }}>
              Error: {error}
            </Paper>
          </Grid2>
        )}

        {!isLoading && !error && (notes.length > 0 ? (
          notes.map(note => (
            <Grid2 xs={12} md={6} lg={4} key={note.id}>
              <Paper sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f4f4f4' }}>
                <Typography variant="h6" color="primary">
                  {note.title}
                </Typography>
                <Typography variant="body2">{note.details}</Typography>
              </Paper>
            </Grid2>
          ))
        ) : (
          <Grid2 xs={12}>
            <Paper sx={{ padding: 2, textAlign: 'center', color: 'gray' }}>
              No Notes Found
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}