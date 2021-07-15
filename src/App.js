import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import Footer from './Footer';

function App() {
  return (
    <div className='App-background'>
      <Router>
        <NavBar />
        <Routes />
        <Footer />


      </Router>
    </div>

  );
}

export default App;
