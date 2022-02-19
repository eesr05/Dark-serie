import GlobalStyle from './global';
import Nav from  './components/Nav/Navbar'
import Header from './components/Header/Header'
import Quem from  './components/Quem/Quem'
import Onde from './components/Quando/Onde'
import './App.css';

function App() {
  return (
    <>   
      <GlobalStyle />
      <Nav />  
      <Header />
      <Quem />
      <Onde /> 
    </>
  );
}

export default App;
