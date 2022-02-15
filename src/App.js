import GlobalStyle from './assets/global';
import Nav from  './components/Nav/Navbar'
import Header from './components/Header/Header'
import Quem from  './components/Quem/Quem'
import './App.css';

function App() {
  return (
    <>   
      <GlobalStyle />
      <Nav />  
      <Header />
      <Quem />
     
      <p>
          Dark 
        </p>    
         <p>Everything is connected </p> 
  
    </>
  );
}

export default App;
