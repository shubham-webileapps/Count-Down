import * as React from 'react';
import './style.css';
export default function App() {
  return <StartedTimer />;
}
import * as React from 'react';
import Container from '@mui/material/Container';
import StartedTimer from './components/ShowTimer/StartedTimer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/setTimer/SetTimerForm';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Container>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<StartedTimer />}></Route>

              <Route exact path="/SetTimer" element={<Form />}></Route>
            </Routes>
          </Router>
        </Container>
      </Box>
    </React.Fragment>
  );
}
