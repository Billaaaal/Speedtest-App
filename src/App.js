
import './App.css';
import {useState, useEffect} from 'react'
import { ReactInternetSpeedMeter } from 'react-internet-meter'
import axios from 'axios'



function App() {

  const [speed, setwifiSpeed] = useState("");
  const [buttonsOnCanvos, setButtonsOnCanvos] = useState([]);
  const [showbutton, setshowbutton] = useState("block");
  const [ip,setIP] = useState('');
  const [country,setcountry] = useState('');


  const getData = async()=>{
    const res = await axios.get('https://geolocation-db.com/json/')
    //console.log(res.data);
    setIP(res.data.IPv4)
    setcountry(res.data.country_name)
  }

  useEffect(()=>{
      //passing getData method to the lifecycle method
      getData()
  },[])

  
  function nothing(){
    
  }

  





  

  
  

 function launchtest(e){
  e.target.style.display = "none"
  setshowbutton("none")
   //alert("SpeedTest loading...")
   setButtonsOnCanvos([buttonsOnCanvos, 
   <ReactInternetSpeedMeter
    //txtSubHeading={"Internet is too slow " + speed + " MB/s"}
    outputType="alert"
    customClassName={null}f
    //txtMainHeading="Opps..."
    pingInterval={100} // milliseconds
    thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
    threshold={8}
    imageUrl="https://images4.alphacoders.com/936/936378.jpg"
    downloadSize="2550420" //bytes
    //callbackFunctionOnNetworkDown={(speed) =>
    //  console.log(`Internet speed is down ${speed}`)
    //}
    callbackFunctionOnNetworkDown={()=>nothing()}
    callbackFunctionOnNetworkTest={(speed) => setwifiSpeed((parseInt(speed)*8)+ " Mbps")}
  />])
 }


  return (

    
    <div className="App">
      
      <header className="App-header">

        
        <nav>

          <ul>

              <li><a href="index.html">Apps</a></li>
              <li><a href="articles.html">Insights</a></li>
              <li><a href="Contact.html">Network</a></li>
              <li><a href="qsn.html">About</a></li>

          </ul>

        </nav>



        <p id="desc">Test the speed of your internet connection</p>
        
        <h1>{speed}</h1>

        <div className="canvos">{buttonsOnCanvos}</div>

        <button id="button" onClick={(e)=>launchtest(e)}>GO</button>

        

        <div id="user_info">
    
          <p id="country">{country}</p>
          <p id="ip">{ip}</p>
          <img id= "user_icon" src="https://freesvg.org/img/abstract-user-flat-1.png"></img>

        </div>
        
      </header>
    </div>
  );
}

export default App;
