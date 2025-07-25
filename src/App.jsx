
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./coreConcept";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
      <section id="core-concepts">
        <h2 id="header-in-props" >Core Concept</h2>
        <ul>
          <CoreConcepts{...CORE_CONCEPTS[0]}/>
           <CoreConcepts{...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
             <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
      </section>
      <section id="example">
        <h2>Examples</h2>
        <menu>

        </menu>
      </section>
    </div>
  );
}

export default App;
