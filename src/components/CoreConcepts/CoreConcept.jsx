import CoreConcepts from "./CoreConcepts"
import { CORE_CONCEPTS } from "../../data"
export default function CoreConcept (){
    return(
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=> <CoreConcepts {...item} />)}
            {/* <CoreConcepts
             title={CORE_CONCEPTS[0].title}
             description = {CORE_CONCEPTS[0].description}
             image={CORE_CONCEPTS[0].image}
             />
            <CoreConcepts
            title={CORE_CONCEPTS[1].title}
            description = {CORE_CONCEPTS[1].description}
            image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts 
            title={CORE_CONCEPTS[2].title}
            description = {CORE_CONCEPTS[2].description}
            image={CORE_CONCEPTS[2].image}
            />
            <CoreConcepts 
            title={CORE_CONCEPTS[3].title}
            description = {CORE_CONCEPTS[3].description}
            image={CORE_CONCEPTS[3].image}
            /> */}
          </ul>
        </section>
    )
}