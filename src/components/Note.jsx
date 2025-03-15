import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@mui/material'; 

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
      <Grid container spacing={3}>
        {/* Static Grid Items */}
        {[1, 2, 3, 4].map((num) => (
          <Grid item xs={12} sm={6} md={3} key={num}>
            <Paper sx={{ padding: 2, textAlign: 'center', fontWeight: 'bold' }}>
              {num}
            </Paper>
          </Grid>
        ))}

        {/* Dynamic Notes from API */}
        {notes.length > 0 ? (
          notes.map(note => (
            <Grid item xs={12} md={6} lg={4} key={note.id}>
              <Paper sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f4f4f4' }}>
                {note.title}
              </Paper>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Paper sx={{ padding: 2, textAlign: 'center', color: 'gray' }}>
              No Notes Found
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
