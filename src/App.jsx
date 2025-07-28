import { useState }from "react";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./coreConcept";
import Header from "./Header";
import TabButton from "./tabButton";
import { EXAMPLES } from "./data";

function App() {
 const[selectedTopic,setSelectedTopic] =useState('components');
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    c
  }
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
      <section id="examples">
        <h2>Examples</h2>
        <menu>
<TabButton onSelect={()=>handleSelect('components')}>Components</TabButton>
<TabButton onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
<TabButton onSelect={()=>handleSelect('props')}>Props</TabButton>
<TabButton onSelect={()=>handleSelect('state')}>State</TabButton>
        </menu>
      <div>
        <h2>{EXAMPLES[selectedTopic].title}</h2>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
{EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
      </section>
    </div>
  )
}

export default App;
