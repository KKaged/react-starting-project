import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js'
import { EXAMPLES } from './data.js'
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TapButton from './components/TapButton.jsx';

function App() {
  const [selectedTopic, setSelectedTopic] = useState() //Initial state is empty (false)
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
    <>{/* Can either use <Fragment> or the empty element sign */}
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title}{...conceptItem}/>)} 
            {/*Executes once for every item in the array and returns it */}
            {/* Key is a unique id to be able to tell these different items apart */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TapButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect(`components`)}>Components</TapButton>
            <TapButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect(`jsx`)}>JSX</TapButton>
            <TapButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect(`props`)}>Props</TapButton>
            <TapButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect(`state`)}>State</TapButton>
          </menu>{/*The isSelected is a boolean value, so it will either be true or false */}
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
    </>
  );
}

export default App;
