import React, { Component } from 'react';
import '../styles/CurrencyCard.css';

import BCH from '../images/BCH.svg'
import ETH from '../images/ETH.svg'



class CurrencyCard extends Component{


  render(){


    return(
      <div  className = 'currencyCard' >
              <div className = 'crypto-logo'> 
                <div className = 'crypto-image'>
                  <img src={BCH} alt="BCH Logo" />
                </div>
              </div>
              <div className = 'currencyInfo'>
                <div  className = 'currencyName'>
                 <h3>  BCH </h3>
                </div>
                <div  className = 'currencyfinancials'>
                  
                $11,000.00 
                <br/> 
                  up 4%
                </div>
              </div>
              <div className = 'currencyInput'>
                <input type = 'currency' placeholder = '$'>
                </input> 
              </div>

               
            </div>

      


    )

  }
	

  };

  export default CurrencyCard;