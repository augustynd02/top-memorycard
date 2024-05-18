import Header from './components/Header';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <Game>
        <Scoreboard />
        <Cards />
      </Game>
      <Footer></Footer>
    </>
  );
}

export default App;
