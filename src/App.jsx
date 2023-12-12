import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data.js'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TapButton from './components/TapButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState() //Initial state is components
  //useState basically re runs the App function when the state/page is changed
  function handleSelect(selectedButton){
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton)
  }
  let tabContent = <p>Click on a topic.</p>
  if(selectedTopic){
    tabContent =(
    <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    {/* Inside the brackets is the name of the chosen object */}
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
        {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
  </div>
    )
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleSelect(`components`)}>Components</TapButton>
            <TapButton onSelect={() => handleSelect(`jsx`)}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect(`props`)}>Props</TapButton>
            <TapButton onSelect={() => handleSelect(`state`)}>State</TapButton>
          </menu>
          {tabContent}
          {!selectedTopic ? (<p>Click on a topic.</p>) : (
          <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          {/* Inside the brackets is the name of the chosen object */}
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>
          )}
          {/* If the selectedTopic is empty, then it will show the first part of the ternary operator */}
          {/* If the selectedTopic is not empty, then it will show the second part of the ternary operator */}
        </section>
      </main>
    </div>
  );
}

export default App;
