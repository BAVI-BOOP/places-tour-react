import "./App.css";
import { data } from "./../../Data/Data";
import Navbar from "../Navbar/Navbar";


console.log(data);

function App() {
  return <div className="App">
    <Navbar />
    <h1>Popular Tour Places</h1>
    <div className="container">
      {data.map((item, index) => {
        return (
          <div className="box">
            <div className="frame">
              <h3>{item.title}</h3>
              <img key={item.id} src={item.image} alt="selam" />
              <div className="desc">
              <div className="desc-hover">
                <p>{item.desc}</p>
              </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    <div>
      <h2>Thank You For Visiting, Enjoy Your Trip!</h2>
    </div>
  </div>;
  
}

export default App;
