import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TapButton from './components/TapButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please select a tab")
  //useState basically re runs the App function when the state/page is changed
  function handleSelect(selectedButton){
    //selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton)
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
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
