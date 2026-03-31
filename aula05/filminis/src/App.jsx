import Cabecalho from "./assets/components/Cabecalho";

function App() {

  return (
    <>
      <Cabecalho />
      <main>
        <section>
          <h2>Descrição</h2>
          <p>Quem é ele</p>
        </section>

        <section>

          <h2>Hobbies / Poderes / etc </h2>
          <ul>
            <li>primeiro</li>
            <li>segundo</li>
            <li>terceiro</li>
          </ul>

        </section>

        <section>
          <h2>Porquá gosto de:</h2>
          <p>Porque gosto dele</p>
        </section>
      </main>



    </>
  );
}

export default App;