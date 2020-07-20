import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participation, setParticipation] = useState(0);

  

  const handlePartner = (e) => {
    e.preventDefault();
    // 1 >> pegar os dados fN, lN, parti
    // 2 >> colocar todas participações num acumulador
    // 3 >> fazer verificação se o acumulador está menor que 100
    // 4 >> try catch
    //const data = {firstName, lastName, participation};
    //setCount(participation);


  }

  return (
    <div>
      <div className="header">
        <form onSubmit={handlePartner}>
              <input type="text"  placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}/>
              <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}/>
              <input type="number" placeholder="Participation" value={participation} onChange={e => setParticipation(e.target.value)}/>
              <button type="submit">SEND</button>
        </form>
      </div>
      <div className="data">
        <h1>DATA</h1>
        <p>Lorem ipsur dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}

export default App;