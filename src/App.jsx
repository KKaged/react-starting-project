import reactAtom from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
import congifImg from './assets/config.png'


const reactDescriptions = ["Fundamental","Crucial","Core"]
const genRandom = (max) => Math.floor(Math.random() * (max + 1))


function Header(){
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

function CoreConcept(props){
  return (
    <li>
      <img src={props.img} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title="Components" description="The core UI building block" img={componentsImg}/>
            <CoreConcept title="Config" description="Easy to configure" img={congifImg}/>
            <CoreConcept title="Config" description="The core UI building block" img={componentsImg}/>
            <CoreConcept title="Config" description="The core UI building block" img={componentsImg}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
