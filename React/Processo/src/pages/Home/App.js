import undraw from '../../assets/img/undraw.png';
import calendario from '../../assets/img/calendario.png';
import cachorro from '../../assets/img/cachorro.png';
import '../../assets/css/Home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function App() {
  return (
    <div>
      <Header />
      <section class="banner">
        <div class="container flex">
          <img src={undraw} alt="arte da landing page" />
          <div className="espacamento_info">
            <h2 className="home_titulo">A maior cliníca veterinária do Brasil</h2>
            <p className="home_texto">O Segundo Lar do seu pequeninho!!!</p>

            <div className="espacamento_btn">
              <button className="home_btn">
                Ligue Agora
              </button>
              <div className='calendario'>
                <img src={calendario} alt="calendario" />
                <p className="home_calendario">Confira o calendário</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main class="conteudo_principal espacamento_secao">
        <div class="container flex">
          <section>
            <div class="conteudo_textos">
              <h3>Lorem ipsum!</h3>
              <p> </p>
            </div>
            <div class="artigos">
              <article class="artigo">
                <div class="cabecalho_artigo flex">
                  <img src={calendario} alt="calendario" />
                </div>
                <div class="conteudo_artigo">
                  <h4>Consulta 1</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima illo veniam incidunt nobis expedita dolorem quae non ratione voluptatibus eos voluptate vero, error fugit nisi, sapiente officia aperiam fuga?</p>
                </div>
              </article>
              <article class="artigo">
                <div class="cabecalho_artigo flex">
                  <img src={calendario} alt="calendario" />
                </div>
                <div class="conteudo_artigo">
                  <h4>Consulta 2</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima illo veniam incidunt nobis expedita dolorem quae non ratione voluptatibus eos voluptate vero, error fugit nisi, sapiente officia aperiam fuga?</p>
                </div>
              </article>
              <article class="artigo">
                <div class="cabecalho_artigo flex">
                  <img src={calendario} alt="calendario" />
                </div>
                <div class="conteudo_artigo">
                  <h4>Consulta 3</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima illo veniam incidunt nobis expedita dolorem quae non ratione voluptatibus eos voluptate vero, error fugit nisi, sapiente officia aperiam fuga?</p>
                </div>
              </article>
              <article class="artigo">
                <div class="cabecalho_artigo flex">
                  <img src={calendario} alt="calendario" />
                </div>
                <div class="conteudo_artigo">
                  <h4>Consulta 4</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima illo veniam incidunt nobis expedita dolorem quae non ratione voluptatibus eos voluptate vero, error fugit nisi, sapiente officia aperiam fuga?</p>
                </div>
              </article>
              <article class="artigo">
                <div class="cabecalho_artigo flex">
                  <img src={calendario} alt="calendario" />
                </div>
                <div class="conteudo_artigo">
                  <h4>Consulta 5</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima illo veniam incidunt nobis expedita dolorem quae non ratione voluptatibus eos voluptate vero, error fugit nisi, sapiente officia aperiam fuga?</p>
                </div>
              </article>
              <article class="artigo">
                <div class="cabecalho_artigo flex">
                  <img src={calendario} alt="calendario" />
                </div>
                <div class="conteudo_artigo">
                  <h4>Consulta 6</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi minima illo veniam incidunt nobis expedita dolorem quae non ratione voluptatibus eos voluptate vero, error fugit nisi, sapiente officia aperiam fuga?</p>
                </div>
              </article>
            </div>
          </section>
          <aside>
            <h3>Lorem ipsum em destaque</h3>
            <div class="destaques">
              <article class="destaque">
                <div class="cabecalho_destaque flex">
                  <img src={cachorro} alt="cachorro" />
                </div>
                <h4><a>Cirurgias</a></h4>
              </article>
              <article class="destaque">
                <div class="cabecalho_destaque flex">
                  <img src={cachorro} alt="cachorro" />
                </div>
                <h4>Rações</h4>
              </article>
              <article class="destaque">
                <div class="cabecalho_destaque flex">
                  <img src={cachorro} alt="cachorro" />
                </div>
                <h4>Passeios</h4>
              </article>
              <article class="destaque">
                <div class="cabecalho_destaque flex">
                  <img src={cachorro} alt="cachorro" />
                </div>
                <h4>Adestramento</h4>
              </article>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
