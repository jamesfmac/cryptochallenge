import React, { Component } from 'react';
import '../styles/UpdatePortfolio.css';

import BTC from '../images/BTC.svg'
import ETH from '../images/ETH.svg'
import DOGE from '../images/DOGE.svg'
import LTC from '../images/LTC.svg'
import XRP from '../images/XRP.svg'
import GLD from '../images/GLD.svg'

import CurrencyCard from './CurrencyCard.js'


var tradableCurrencies = [ 

	{
		currencyDisplayName:'BTC',
		currencyImage:BTC
	},
	{
		currencyDisplayName:'ETH',
		currencyImage:ETH
	},
	{
		currencyDisplayName:'DOGE',
		currencyImage:DOGE
	},
	{
		currencyDisplayName:'LTC',
		currencyImage:LTC
	},
	{
		currencyDisplayName:'XRP',
		currencyImage:XRP
	},
	{
		currencyDisplayName:'GLD',
		currencyImage:GLD
	},

];



    /*
                <section className = "add-item">
                
               
                  <form onSubmit = {this.handleSubmit}>
                    <input type = "text"  name = 'cryptoType' placeholder = 'What are you holding?' onChange = {this.handleChange} value = {this.state.cryptoType}/>
                    <input type = 'number' name = 'cryptoPercentatge' placeholder = 'What % of your portfolio?' onChange = {this.handleChange} value = {this.state.cryptoPercentatge}/>
                    <button> Save </button>  
                  </form>
                </section>

                */
               



class UpdatePortfolio extends Component{


	renderCards (){
		let cards = tradableCurrencies
		return (
			cards.map ( card =>(
			<CurrencyCard currencyDisplayName = {card.currencyDisplayName} currencyImage = {card.currencyImage} />)
			))
	}


	render(){
		return (
			<div className = 'update-portfolio'>
				{this.renderCards()}
				<button> Submit </button>

			</div>			


			)

	}
}


export default UpdatePortfolio;