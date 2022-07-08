import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/UI/Layout';
import Posts from './components/pages/Posts';
import About from './components/pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
