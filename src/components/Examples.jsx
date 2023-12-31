import TapButton from "./TapButton"
import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from '../data.js'
import Section from "./Section"
import Tabs from "./Tabs.jsx";
import { Tab } from "bootstrap";

export default function Examples(){
    const [selectedTopic, setSelectedTopic] = useState() //Initial state is empty (false)
    //useState basically re runs the App function when the state/page is changed
    function handleSelect(selectedButton){
      //selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton)
    }
    
    return (
        <Section id='examples' title={"Examples"}>
          <Tabs 
          ButtonsContainer="menu"
          buttons={
          <>
            {CORE_CONCEPTS.map((concepts) => (<TapButton key={concepts.title} isSelected={selectedTopic === concepts.title.toLowerCase()} onClick={() => handleSelect(concepts.title.toLowerCase())}>{concepts.title}</TapButton>))}
            {/* 
            <TapButton isSelected={selectedTopic === 'components'} onClick={() =>handleSelect('components')}>Components</TapButton>
            <TapButton isSelected={selectedTopic === 'jsx'} onClick={() =>handleSelect('jsx')}>JSX</TapButton>
            <TapButton isSelected={selectedTopic === 'props'} onClick={() =>handleSelect('props')}>Props</TapButton>
            <TapButton isSelected={selectedTopic === 'state'} onClick={() =>handleSelect('state')}>State</TapButton> 
            */}
          </>
        }>
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
        </Tabs>
            {/* If the selectedTopic is true, then it will display the content, if not, it will display nothing */}
        </Section>
    )
}