import './App.css'
// import NewPollUnit from './Components/NewPollUnit';
import Home from './Home/Home'

function App() {


  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
			<div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <Home />
      {/* <NewPollUnit /> */}
      
    </div>
  );
}

export default App;
