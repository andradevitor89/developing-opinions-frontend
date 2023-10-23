import './App.css';
import { Header } from './components/Header';
import { Menubar } from './components/Menubar';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import clsx from 'clsx';
import { DEFAULT } from './helpers/styles';

function App() {
  return (
    <div className="App">
      <div
        className={clsx(
          DEFAULT,
          'bg-[#333] w-screen max-w-screen-xl mx-auto min-h-screen h-full'
        )}
      >
        <Header></Header>
        <Menubar></Menubar>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
