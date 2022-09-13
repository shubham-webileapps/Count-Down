// import * as React from 'react';
// import './style.css';
// import StartedTimer from './components/ShowTimer/StartedTimer';
// export default function App() {
//   return <StartedTimer />;
// }
import * as React from 'react';
import Container from '@mui/material/Container';
import StartedTimer from './components/ShowTimer/StartedTimer';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetTimerForm from './components/setTimer/SetTimerForm';

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
            </Routes>
          </Router>
        </Container>
      </Box>
    </React.Fragment>
  );
}
