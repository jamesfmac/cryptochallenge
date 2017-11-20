import React, { Component } from 'react';

import firebase, {auth, provider} from './firebase.js';

import  UpdatePortfolio from './components/UpdatePortfolio.js'


import './App.css';

class App extends Component {

  constructor (){
    super();
    this.state = {
      cryptoType: '',
      cryptoPercentatge: 0,
      snapshots: [],
      user: null,
      uid: ''
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
    percentage: this.state.cryptoPercentatge,
    useruid: this.state.user.uid
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
      console.log('seeting uid to ' + user.uid)
      this.setState({
        uid: user.uid,
        user
      });
      

    }
  });








  const portfolioSnapShotRef = firebase.database().ref('portfolioSnapshots');
  
  //this isn't working for some reason. Seems to be relatedd to string vs non-string in uid 
 portfolioSnapShotRef.orderByChild("useruid").equalTo(this.state.uid).on('value', (snapshot) =>{
  console.log(this.state.uid);
  console.log(snapshot.val());
});

  portfolioSnapShotRef.on('value', (dbdata) => {
    let items = dbdata.val();
    let newState = [];
    for (let snapshot in items){
      newState.push({
        id: snapshot,
        cryptoType: items[snapshot].type,
        cryptoPercentatge:  items[snapshot].percentage,
        useruid: items[snapshot].useruid
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
            <h1> Crypto Battle </h1> 
            {this.state.user ?
            <button onClick= {this.logout}> Log Out</button>
            :
            <button onClick = {this.login}> Log in </button> 
          }
          </div>
        </header>
          {this.state.user ?
            <div>
              <div className='user-profile'>
                <img src={this.state.user.photoURL} alt = 'User Profile'/>
              </div>

              <div className = "container">
           <UpdatePortfolio/>

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
            :
            <div className='wrapper'>
              <p>Create and account or log in to view the battle</p>
            </div>
          }



        


           

        </div>

      
    );
  }
}

export default App;
