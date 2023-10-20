import './App.css';
import { Header } from './components/Header';
import { Menubar } from './components/Menubar';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';

function App() {
  return (
    <div className="App">
      <div className="CenterContainer">
        <Header></Header>
        <Menubar></Menubar>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
