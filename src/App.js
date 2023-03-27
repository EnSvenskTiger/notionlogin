import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NotionPage from './Blocks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/welcome" element={<Home />} />
        <Route path="/Blocks" element={<NotionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
 //npm install react-router-dom
 