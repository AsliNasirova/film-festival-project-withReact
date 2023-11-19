import './App.css';
import Festival from './Components/Festival';
import Flora from './Components/Flora';
import Audience from './Components/Audience/index';
import Movies from './Components/Movies';
import Magazine from './Components/Magazine';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    <Flora/>
    <Festival/>
    <Audience/>
    <Movies/>
    <Magazine/>
    <Footer/>
    </div>
  );
}

export default App;
