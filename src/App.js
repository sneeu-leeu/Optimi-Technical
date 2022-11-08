import React, {useEffect, useState} from "react";
import Navigation from "./components/Navigation";

const App = () => {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(()=> {
     fetch("/api").then(
         response => response.json()
     ).then(
         data => {
             setBackendData(data)
         }
     )
  }, [])

  return (
    <div>
        {
          backendData.empty ? <h1>Loading...</h1> : <Navigation data={backendData} />
        }
    </div>
  );
}

export default App;
