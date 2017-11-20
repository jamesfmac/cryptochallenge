import React, { Component } from 'react';
import '../styles/UpdatePortfolio.css';

import BCH from '../images/BCH.svg'
import ETH from '../images/ETH.svg'

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
				<table>
				<tbody>
					<tr>
						<th> Crypto </th>
						<th> Current Holdings </th>
						<th> Update</th>
					</tr>
					<tr> 
					<td>
						<div className = 'input-group'>
							<div className = 'crypto-logo'>
								
								<img src={BCH} alt="BCH Logo" />
							</div>
						</div>
					</td>	
					<td> 
						Nill	
					</td> 
					<td>
						<input type = 'text'/>
					</td>
					</tr>

					<tr> 
					<td>
						<div className = 'input-group'>
							<div className = 'crypto-logo'>
								
								<img src={ETH} alt="ETH Logo" />
							</div>
						</div>
					</td>	
					<td> 
						Nill	
					</td> 
					<td>
						<input type = 'text'/>
					</td>
					</tr>
				</tbody>

				</table> 

			</div>			


			)

	}
}


export default UpdatePortfolio;