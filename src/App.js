import logo from './logo.svg';
import './App.css';
import HeaderIndex from './Components/HeaderIndex';
import SectionIndex from './Components/SectionIndex';

function App() {
  return (
    <>
    <HeaderIndex 
    logo="/assets/test.png" 
    option1="Home" 
    option2="Option 2" 
    option3="Option 3" 
    option4="Sign Up" 
    option5="Log in" />

    <SectionIndex/>
    </>
  );
}

export default App;
