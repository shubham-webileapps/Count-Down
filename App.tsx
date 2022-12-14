import * as React from 'react';
import Container from '@mui/material/Container';
import StartedTimer from './components/ShowTimer/StartedTimer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetTimerForm from './components/setTimer/SetTimerForm';
import TimerForm from './components/setTimer/TimerForm';
import TimerFormOld from './components/setTimer/TimerFormOld';
import { Typography } from '@mui/material';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box>
        <Container>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/ShowTimer" element={<StartedTimer />}></Route>
              <Route exact path="/" element={<SetTimerForm />}></Route>
              <Route exact path="/TimerForm" element={<TimerForm />}></Route>
              <Route
                exact
                path="/TimerFormOld"
                element={<TimerFormOld />}
              ></Route>
            </Routes>
          </Router>
        </Container>
      </Box>
    </React.Fragment>
  );
}
