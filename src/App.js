import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages';
import SigninPage from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/react-website-smooth-scroll/signin" element={<SigninPage/>} exact />
        <Route path="*" element={<Home/>}/>
      </Routes>      
    </Router>
  );
}

export default App;
