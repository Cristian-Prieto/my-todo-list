import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Button } from "./components/Button";

function App() {
  const footerYear = "2077";

  return (
    <div>
      <Header />

      {/* lista de tareas */}
      <main>
        <ul>
          <li>
            <label>
              <input type="checkbox" />
              Tarea #1
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Tarea #2
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Tarea #3
            </label>
          </li>
        </ul>
      </main>

      <Button
        tipo="danger"
        text="Cancelar"
        cuandoClickeo={() => {
          console.log("CANCELAR CARAJO");
        }}
      />
      <Button
        tipo="success"
        text="Aceptar"
        cuandoClickeo={() => {
          console.log("ACEPTADITO");
        }}
      />
      <Footer year={footerYear} />
    </div>
  );
}

export default App;
