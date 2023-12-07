import reactAtom from '../assets/react-core-concepts.png'

const reactDescriptions = ["Fundamental","Crucial","Core"]
const genRandom = (max) => Math.floor(Math.random() * (max + 1))


export default function Header(){
  const description = reactDescriptions[genRandom(2)]
  return(
    <header>
        <img src={reactAtom} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}