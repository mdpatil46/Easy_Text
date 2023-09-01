import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

<Navbar title = "EasyText" links = "About Us"/>
<div className="container my-3" >
<TextForm heading = "Write Your Text To Analyze"/>
</div>


    </>
  );
}

export default App;
