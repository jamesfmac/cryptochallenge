import React, { Component } from 'react';
import '../styles/UpdatePortfolio.css';

import CurrencyCard from './CurrencyCard.js'


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




	render(){
		return (
			<div className = 'update-portfolio'>
				<CurrencyCard/>
				
				<button> Submit </button>

			</div>			


			)

	}
}


export default UpdatePortfolio;