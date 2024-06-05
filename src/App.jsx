import Header from './components/Header';
import Start from './components/Start'
import Game from './components/Game';
import Footer from './components/Footer';
import { useState } from 'react';

import './styles/index.css'

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [query, setQuery] = useState("cat");
  return (
    <>
      <Header/>
      {isGameOn ? <Game query={query}/> : <Start setIsGameOn={setIsGameOn} setQuery={setQuery}/>}
      <Footer/>
    </>
  );
}

export default App;
