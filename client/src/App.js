import './App.scss';
import BtnNav from './components/btnNav/BtnNav';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';



function App() {
    return (
        <div className="App">
            <NavBar/>
            <BtnNav/>
            <Home />
        </div>
    );
}

export default App;
