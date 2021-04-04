
import React, {useState, useEffect} from "react";
import { isNull } from 'lodash';
import '../css/App.css';
import AddAppointments from  './AddAppointments';
import ListAppointments from  './ListAppointments';
import SearchAppointments from  './SearchAppointments';


function App() {


  const[appointments, setAppointments] = useState(null);

  useEffect(()=> {
    fetch('./data.json')
    .then(response => response.json())
    .then(setAppointments);
    
  }, []);
  
  return (
    <main className="page bg-white" id="petratings">
    <div className="container">
      <div className="row">
        <div className="col-md-12 bg-white">
          <div className="container">
          <AddAppointments/>
            <ListAppointments/>
              <SearchAppointments/>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
}

export default App;
