import React, { Component } from 'react';
import './App.css';

import Card from './components/Card/Card';
import Map from './components/Map/Map';


const ENDPOINT = 'https://data.cityofnewyork.us/resource/fhrw-4uyv.json';



class App extends Component {


  constructor(props) {
    super(props);

    this.state = {
      data: [],
      myName: 'Jon'
      };
    }


  componentDidMount(){
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(dataJSON => this.setState({data: dataJSON}));
  }



  render() {

    const cardList = this.state.data.map((incident, index) => (
      <Card
        key={index}
        title={incident.complaint_type}
        card_body={incident.agency_name}

      />
    )
  )

    return (
      <div className="App">
        <>

          <Map
            position={[40.7831, -73.9712]}
          />
          <div className="cards-container">
            {cardList}
          </div>
        </>
      </div>
    );
  }
}

export default App;
