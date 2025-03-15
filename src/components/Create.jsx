import React, { useState } from 'react';
import { Typography, Button, Container, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
// import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('money');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

 if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }
    if (title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category })
      }).then(() => navigate('/'));
    }
  };
  return (
    <>
      <div>
        <Container maxWidth="sm">
          <Typography
            color="secondary"
            variant="h5"
            component="h2"
            gutterBottom
          >
            Create a New Note
          </Typography>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Box sx={{ mt: 2, mb: 2, display: 'block' }}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            error={titleError}
          />
          </Box>

          <Box sx={{ mt: 2, mb: 2, display: 'block' }}>
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            label="Details"
            variant="outlined"
            color="secondary"
            multiline
            rows={4}
            fullWidth
            required
            error={detailsError}
          />
          </Box>

          <FormControl sx={{ mt: 2, mb: 2, display: 'block' }}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

          <Button
            sx={{
              fontSize: 20,
              backgroundColor: "violet",
              "&:hover": { backgroundColor: "blue" },
            }}
            variant="contained"
            type="submit"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => {
              alert("clicked");
            }}
          >
            Submit
          </Button>
          </form>
          {/* <AcUnitIcon />
  <AcUnitIcon color="secondary" fontSize="large" /> */}
        </Container>
      </div>
    </>
  );
}
