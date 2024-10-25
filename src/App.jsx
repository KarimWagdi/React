import { CORE_CONCEPTS } from './data'
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton/TabButton';


function App() {
  let tabContent = 'please click a button'
  function handelClick (selectButton){
    return tabContent = selectButton
  }
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
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
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => handelClick('Component')}>Component</TabButton>
            <TabButton onClick={() => handelClick('Jsx')}>Jsx</TabButton>
            <TabButton onClick={() => handelClick('Props')}>Props</TabButton>
            <TabButton onClick={() => handelClick('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
