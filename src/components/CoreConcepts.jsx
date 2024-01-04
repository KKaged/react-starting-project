import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept"
import Section from "./Section"

export default function CoreConcepts(){
    return(
        <Section id="core-concepts" title={'Core Concepts'}>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title}{...conceptItem}/>)} 
            {/*Executes once for every item in the array and returns it */}
            {/* Key is a unique id to be able to tell these different items apart */}
          </ul>
        </Section>
    )
}