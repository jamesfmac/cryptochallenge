import React, { Component } from 'react';
import '../styles/CurrencyCard.css';
import NumberFormat from 'react-number-format';

import BCH from '../images/BCH.svg'
import ETH from '../images/ETH.svg'



class CurrencyCard extends Component{


  render(){


    return(
      <div  className = 'currencyCard' >
              <div className = 'crypto-logo'> 
                
                  <img src={ETH} alt="BCH Logo" />
                
              </div>
              <div className = 'currencyInfo'>
                <div  className = 'currencyName'>
                 <h3>  BCH  <span className= 'cPrice'> A$5,000.00</span> </h3> 
                </div>

                <div  className = 'currencyFinancials'>
                                   
                  <div className = 'tradingDetails'>

                    <div className = 'amountChangeBlock'>

                      <span className = 'amountChangeSuper'> 
                      <span className='amountChangeDirectionPositive'>+ </span> 
                      A$
                      </span>
                      <span className = 'dollarChange'> $123 </span> <span className ='amountChangeSuper'>.00 </span>


                       
                      <div className = 'timePeriod'>
                        Last 24 hours (AUD)
                      </div>

                    </div> 
                  
                </div>
              </div>
              </div> 
              <div className = 'currencyInput'>
              <span className = 'currencyInputLabel'>Buy</span>
                
                <NumberFormat 
                thousandSeparator = {true} 
                prefix = {'$'} 
                isNumericString = {true} 
                decimalScale = {2} 
                fixedDecimalScale = {true}
                placeholder = '$00.00'
                />
              </div>

               
            </div>

             


    )

  }
	

  };

  export default CurrencyCard;