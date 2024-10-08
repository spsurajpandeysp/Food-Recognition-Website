import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Faq from './components/FAQ/Faq';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='app-container'>
          <Home/>
          <Services/>
          <About/>
          <ContactUs/>
          <Faq/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
