// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {

  // let [rstate,setRstate] = useState([1,1,1,1]);
  let [q1,setq1] = useState(1);
  let [q2,setq2] = useState(1);
  let [q3,setq3] = useState(1);
  let [q4,setq4] = useState(1);
  let [city,setCity] = useState("");
  let [state,setState] = useState("");
  const handleDrag = (event) => {
    if(event.target.id === "q1"){
        setq1(event.target.value);
    }
    else if(event.target.id === "q2"){
      setq2(event.target.value);
    }
    else if(event.target.id === "q3"){
      setq3(event.target.value);
    }
    else if(event.target.id === "q4"){
      setq4(event.target.value);
    }
  
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  }

  const sendFeedback = () => {
        if(q1!=='' && q2!== '' && q3!=='' && q4!=='' & city!=='' && state!==''){
          let req_object = {
            knowledge : q1,
            alertness: q2,
            facilities: q3,
            overall: q4,
            city: city,
            state: state
          };
          let resp = axios.post('https://acypmkaeti.execute-api.us-east-1.amazonaws.com/default/feedback-post',req_object);
          if(resp && resp!=null){
            alert('Feedback submitted successfully!');
          }
          else {
            alert('Feedback submission Not Successful!!');
          }
        }
        
  };
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='header'>
      <h2>Welcome to the Ranthambore Forest Reserve Safari Tours and Travels!</h2>
      <h4>We would like to hear from you. Please send us feedback by filling form below and click 'Submit'.</h4>
      </div>
      <form className="feedback-form">
        <hr />
        <div className='feedback-q'>
          <div className='feedback-qtext'>
            Knowledge and interaction<br /> of the tour guide.
          </div>
          <div className='feedback-scale'>
              <input type='range' id="q1" min="1" max="5" step="1" onChange={handleDrag} value={q1}/>
              <span>{q1}</span>
          </div>
        </div>
        <hr />
        <div className='feedback-q'>
          <div className='feedback-qtext'>
            Alertness and guidance <br />of the tour guide.
          </div>
          <div className='feedback-scale'>
              <input type='range' id="q2" min="1" max="5" step="1" onChange={handleDrag} value={q2}/>
              <span>{q2}</span>
          </div>
        </div>
        <hr />
        <div className='feedback-q'>
          <div className='feedback-qtext'>
            Facilities and arrangements <br /> before and after the trip.
          </div>
          <div className='feedback-scale'>
              <input type='range' id="q3" min="1" max="5" step="1" onChange={handleDrag} value={q3}/>
              <span>{q3}</span>
          </div>
        </div>
        <hr />
        <div className='feedback-q'>
          <div className='feedback-qtext'>
            Overall experience <br /> of the safari trip.
          </div>
          <div className='feedback-scale'>
              <input type='range' id="q4" min="1" max="5" step="1" onChange={handleDrag} value={q4}/>
              <span>{q4}</span>
          </div>
        </div>
        <div className='loc'>
        <label for="city">Please select your closest city : </label>
        <select id="city" value={city} placeholder='Select City' onChange={changeCity}>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Visakhapatnam">Visakhapatnam</option>
          <option value="Tirupathi">Tirupathi</option>
          <option value="Vijayawada">Vijayawada</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mangalore">Mangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Kochi">Kochi</option>
          <option value="Thiruvananthapuram">Thiruvananthapuram</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Indore">Indore</option>
        </select>
        </div>
        <div className='loc'>
        <label for="state">Please select your state: </label>
        <select id="state" value={state} placeholder='Select State' onChange={(e) => setState(e.target.value)} required>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Telangana">Telangana</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Orissa">Orissa</option>
          <option value="Chattisgardh">Chattisgardh</option>
          <option value="Maharashtra">Maharashtra</option>
          
        </select>
        </div>
        <input type='submit' id='feedback-submit' value="Submit" onClick={sendFeedback}/>
      </form>
    </div>
  );
}

export default App;
