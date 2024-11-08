import { useState } from "react"
import { EXAMPLES } from "../../data"
import TabButton  from '../TabButton/TabButton'
export default function Examples (){
  const [selectedButton, setSelectedButton]= useState()

  function handelClick (data){
    setSelectedButton(data)
  }

  let tabContent = <p>Please Select a topic.</p>
  if(selectedButton){
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedButton]?.title}</h3>
        <p>{EXAMPLES[selectedButton]?.description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedButton]?.code}
          </code>
        </pre>
      </div>
    )
  }
    return(
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedButton === 'components'}
            onClick={() => handelClick('components')}>Components</TabButton>
            <TabButton 
            isSelected={selectedButton === 'jsx'}
            onClick={() => handelClick('jsx')}>Jsx</TabButton>
            <TabButton
            isSelected={selectedButton === 'props'} 
            onClick={() => handelClick('props')}>Props</TabButton>
            <TabButton
            isSelected={selectedButton === 'state'} 
            onClick={() => handelClick('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
    )
}