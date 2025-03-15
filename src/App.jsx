import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Note from './components/Note'
import Create from './components/Create'
import { createTheme, ThemeProvider } from '@mui/material/styles'; 
import { purple } from '@mui/material/colors';
const theme = createTheme({ 
  palette: {
    primary: { main: '#fefefe' },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Note />}/>
          <Route path="/create" element={<Create />} />
        </Routes> 
      </Router>
      </ThemeProvider>
    </>
  )
}

export default App;
