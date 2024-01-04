import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./CoreConcept"

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept key={conceptItem.title}{...conceptItem}/>)} 
            {/*Executes once for every item in the array and returns it */}
            {/* Key is a unique id to be able to tell these different items apart */}
          </ul>
        </section>
    )
}