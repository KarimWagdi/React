import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const desc = ['Fundamental', 'Crucial', 'Core']
function getRandom(max){
  return Math.trunc(Math.random() * (max+1) )
}

export default function Header(){
  const description = desc[getRandom(2)]
  return(
    <header>
        <img src= {reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}