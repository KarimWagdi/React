import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcept';
import Examples from './components/Examples/Examples';
function App() {
  return (
    <>
      <Header/>
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
