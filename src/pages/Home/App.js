import undraw from '../../Assets/img/undraw.png';
import '../../Assets/css/Home.css';
import Header from '../../components/Header';

function App() {
  return (
    <div>
      <Header/>

      <main className="container espacamento">
        <div className="home_info">
          <h2 className="home_titulo">Cuide dos seus Pequenos pets</h2>
          <p className="home_texto">O Segundo Lar do seu pequeninho!!!</p>

          <button className="home_btn">
            Ligue Agora
          </button>

          <p className="home_textoCalendario">Confira o calendário</p>
        </div>

        <img src={undraw} alt="arte da home" />
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
