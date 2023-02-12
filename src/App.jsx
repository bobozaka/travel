import Directions from './components/Directions/Directions';
import Header from './components/Header/Header';
import './app.css';
import Form from './components/Form/Form';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Directions />
      <Form />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
