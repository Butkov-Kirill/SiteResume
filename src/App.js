import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";
import Copyright from "./components/Copyright/Copyright";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
      <Contacts></Contacts>
      <Copyright></Copyright>
    </div>
  );
}

export default App;
