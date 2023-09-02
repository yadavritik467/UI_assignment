import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Product from './component/Product/Product';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home/>
     <Product/>
     <Footer/>
    </div>
  );
}

export default App;
