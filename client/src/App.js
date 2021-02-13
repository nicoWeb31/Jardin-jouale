import './App.scss';
import BtnNav from './components/btnNav/BtnNav';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Marche from './pages/marche/Marche';
import Jardin from './pages/jardin/Jardin';
import Blog from './pages/blog/Blog';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavBar />
                <BtnNav />

                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/marche" component={Marche} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/jardinier" component={Jardin} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/forgotPassword" component={ForgotPassword} />

                    </Switch>
                </main>
                <ToastContainer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
