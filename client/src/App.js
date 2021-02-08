import './App.scss';
import BtnNav from './components/btnNav/BtnNav';
import Header from './components/headers/Header';
import Home from './pages/home/Home';



function App() {
    return (
        <div className="App">
            <BtnNav/>
            <Header />
            <Home />
        </div>
    );
}

export default App;
