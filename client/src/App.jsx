import { Router } from '@reach/router';
import About from './pages/About';
import ClockPage from './pages/ClockPage';
import Help from './pages/Help';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
      <Help path="/help" />
      <ClockPage path="/clock" />
      <Tasks path="/tasks" />
      <Register path='/register' />
    </Router>
  );
}

export default App;
