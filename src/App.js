import React, { Component } from 'react';

import firebase, {auth, provider} from './firebase.js';


import './App.css';

class App extends Component {

  constructor (){
    super();
    this.state = {
      cryptoType: '',
      cryptoPercentatge: '',
      snapshots: [],
      user: null
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeSnapshot = this.removeSnapshot.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this)

  }

  logout(){
    auth.signOut()
    .then (()=>{
      this.setState({
        user: null
      });
    });

  }

login() {
  auth.signInWithRedirect(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
}


handleChange(e) {
  this.setState ({
    [e.target.name]: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  const portfolioSnapShotRef = firebase.database().ref('portfolioSnapshots');
  const portfolioSnapshot = {
    type:this.state.cryptoType, 
    percentage: this.state.cryptoPercentatge
  }
  portfolioSnapShotRef.push(portfolioSnapshot);
  this.setState ({
    cryptoType: '',
    cryptoPercentatge: ''
  });
}

removeSnapshot(snapshotID) {

  const snapshotRef = firebase.database().ref('/portfolioSnapshots/'+snapshotID);
  snapshotRef.remove()
}



componentDidMount (){
  auth.onAuthStateChanged((user) => {
    if (user){
      this.setState({user});
    }
  });



  const portfolioSnapShotRef = firebase.database().ref('portfolioSnapshots');
  
  portfolioSnapShotRef.on('value', (dbdata) => {
    let items = dbdata.val();
    let newState = [];
    for (let snapshot in items){
      newState.push({
        id: snapshot,
        cryptoType: items[snapshot].type,
        cryptoPercentatge:  items[snapshot].percentage
      });
    }
    this.setState({
      snapshots: newState
    })
  });



  }



  render() {
    return (
      <div className="App">
        <header>
          <div className = "wrapper">
            <h1> Crypto Challenge </h1> 
            {this.state.user ?
            <button onClick= {this.logout}> Log Out</button>
            :
            <button onClick = {this.login}> Log in </button> 
          }
          </div>
        </header>
        <div className = "container">
          <section className = "add-item">
          {this.state.user ?
          <h3> Welcome {this.state.user.displayName} </h3>
          :
          null
        }
            <form onSubmit = {this.handleSubmit}>
              <input type = "text"  name = 'cryptoType' placeholder = 'What are you holding?' onChange = {this.handleChange} value = {this.state.cryptoType}/>
              <input type = 'number' name = 'cryptoPercentatge' placeholder = 'What % of your portfolio?' onChange = {this.handleChange} value = {this.state.cryptoPercentatge}/>
              <button> Save </button>  
            </form>
          </section>
           <section className = "display-item">
             <div className='wrapper'>
              <ul>
              {this.state.snapshots.map((snapshot) => {
                return( 
                  <li key = {snapshot.id} >
                    <h3> {snapshot.cryptoType}</h3>
                    <p> {snapshot.cryptoPercentatge}</p>
                    <button onClick = {()=> this.removeSnapshot(snapshot.id)}> Remove Snapshot</button>
                  </li>

                  )
              }

                )}
              
              </ul>
            </div>
          </section>
          </div>

        </div>

      
    );
  }
}

export default App;
