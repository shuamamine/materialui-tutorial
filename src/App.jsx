import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Note from './components/Note';
import Create from './components/Create';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Updated import
import { purple } from '@mui/material/colors'; // Updated import
import Layout from './pages/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    secondary: purple,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
        <Routes>
            <Route path="/" element={<Note />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;