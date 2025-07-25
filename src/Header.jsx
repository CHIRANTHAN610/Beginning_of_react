import reactImg from"./assets/react-core-concepts.png";
import "./Header.css";
const reactDescription=['Fundamental','Crucial','Core','Essential','Basic','Key','Important','Indispensable','Necessary','Vital'];
function genRandomDescription(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Header(){
  const description=reactDescription[genRandomDescription(9)];
  return(
    <div>
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      </div>
  );
}