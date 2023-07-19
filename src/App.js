import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Info from './Components/Info';
import Interest from './Components/Interest';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

export default App;
