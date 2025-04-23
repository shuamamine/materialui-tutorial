import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Masonry from 'react-masonry-css';
import NoteCard from '../pages/NoteCard';

export default function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/note')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/note/${id}`, {
      method: 'DELETE',
    });
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
