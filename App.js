const url = 'https://cors-anywhere.herokuapp.com/http://api.sportradar.us/golf/trial/pga/v3/en/2021/tournaments/1dd9d68d-dcdf-4238-a82b-ed2077ea799d/leaderboard.json?api_key=kpd2wmgkp3dzbqz7r8jwzgau';



import './App.css';
import Container from 'react-bootstrap/Container';
import background1 from './Images/ANGC.jpg';
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Managers from './managers.json'

function Manager(props) {
  const [showToggle, setToggle] = useState(false);
  return <tbody>
    <tr onClick={() => { setToggle(!showToggle);}}>
      <th scope="row">{props.row}</th>
      <td>{props.name}</td>
      <td >{props.score}</td>
    </tr>
    <tr style={(showToggle) ? {} : {display:"none"}}>
      <td colSpan={3}>      
        <Table striped borderless hover>
            <thead className="thead-dark">
              <tr>
                <th scope="col">Player Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            {props.players.map((player) =>
              <tr>
                <td>{player.Name}</td>
                <td>{player.Score}</td>
              </tr>
            )}
        </Table>
      </td>
    </tr>
  </tbody>
}

function App(props) {
  const myStyle={
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // backgroundImage: `url(${background1})`
    };

  const listItems = Managers.managers.map((manager) =>
    <Manager name={manager.name} row={manager.row} score={manager.score} players={manager.players} />
  );


  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundColor: 'white'
  };

  // useEffect(() => {
  //   fetch(url, {
  //     mode: 'cors',
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }})
  //   .then((response) => {
  //     document.title = `Get fucked newb`;
  //     setCount("fucking shit ass " + response.status + "ass ass ass");
  //     return response.json();
  //   })
  //   .then((json) => {
  //     document.title = `Get fucked newb`;
  //     setCount(json);
  //   });
  // });


  return (
    <div style={myStyle}>
      <Container className="App">
          <div>{props.data.id}</div>
          <Table striped bordered hover style={sectionStyle}>
            <thead class="thead-dark">
              <tr>
                <th scope="col">Position</th>
                <th scope="col">Manager Name</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
              {listItems}
          </Table>
      </Container>
    </div>
  );
}

export default App;
