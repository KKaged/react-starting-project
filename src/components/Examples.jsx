import TapButton from "./TapButton"
import { useState } from 'react';
import { EXAMPLES } from '../data.js'

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState() //Initial state is empty (false)
    //useState basically re runs the App function when the state/page is changed
    function handleSelect(selectedButton){
      //selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton)
    }
    
    return (
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TapButton isSelected={selectedTopic === 'components'} onSelect={() =>handleSelect('components')}>Components</TapButton>
            <TapButton isSelected={selectedTopic === 'jsx'} onSelect={() =>handleSelect('jsx')}>JSX</TapButton>
            <TapButton isSelected={selectedTopic === 'props'} onSelect={() =>handleSelect('props')}>Props</TapButton>
            <TapButton isSelected={selectedTopic === 'state'} onSelect={() =>handleSelect('state')}>State</TapButton>
          </menu>{/*The isSelected is a boolean value, so it will either be true or false */}
            {!selectedTopic ? <p>Please select a topic.</p> : null}
            {selectedTopic ? (
            <div id="tab-content"> 
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>
            ) : null}
            {/* If the selectedTopic is true, then it will display the content, if not, it will display nothing */}
        </section>
    )
}