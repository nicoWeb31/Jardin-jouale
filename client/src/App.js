import './App.scss';
import BtnNav from './components/btnNav/BtnNav';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Marche from './pages/marche/Marche';
import Jardin from './pages/jardin/Jardin';
import Blog from './pages/blog/Blog';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* <NavBar /> */}
                <BtnNav />

                <main>
                    <Route exact="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/marche" component={Marche} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/jardin" component={Jardin} />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
