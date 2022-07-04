import './App.css';
import Hello from './components/Hello';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import Posts from './components/UI/Posts';

function App() {
  return (
    <div>
      <Navbar/>
      <Hello/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
