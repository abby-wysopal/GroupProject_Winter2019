/*WaitTime.js*/
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, {Component} from "react"
import {Line} from "react-chartjs-2"
	
class WaitTime extends Component{

	constructor(props){
		fetch("http://colebergmann.com:5000/callPred/0")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            items: result,
	            chartData:{
	            	labels: ["12pm", "","","","","","1pm","",
	            	"", "","","","","","2pm","","",
	            	"","", "","","","3pm","","", 
	            	"", "", "","","","4pm","","","",
	            	"", "", "","","5pm","","" ,"",
	            	"", "", "","","6pm","","","", "",
	            	"", "", "","7pm","","","","",
	            	"", "", "","8pm","","","","", "",
	            	"", "", "9pm","","","","","", 
	            	"", "", "10pm","","","","","", "",
	            	"", "11pm", "","",""],
	            	datasets:[
	            		{
	            			data: result,
	            			label:'Wait Times',
							backgroundColor: 'rgb(51, 153, 255)',
							backgroundColor: 'rgb(51, 153, 255)'
	            		}
	            	]
	            }
	          });
	        },
	        // Note: it's important to handle errors here
	        // instead of a catch() block so that we don't swallow
	        // exceptions from actual bugs in components.
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
		super(props);
		this.state = {
			value: "Star Tours – The Adventures Continue",
			error: null,
	      	isLoaded: false,
	      	items: [],
			chartData:{
			labels: [],
				datasets: [
					{
						label:'Wait Times',
						borderColor: 'rgba(20, 206, 206, 1)',
						backgroundColor: 'rgba(20, 206, 206, 1)'
					}
				]
			}
		}
		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}

	handleSubmit(event) {
		event.preventDefault();
    	fetch("http://colebergmann.com:5000/callPred/"+this.state.value)
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            isLoaded: true,
	            items: result,
	            chartData:{
	            	labels: ["12pm", "","","","","","1pm","",
	            	"", "","","","","","2pm","","",
	            	"","", "","","","3pm","","", 
	            	"", "", "","","","4pm","","","",
	            	"", "", "","","5pm","","" ,"",
	            	"", "", "","","6pm","","","", "",
	            	"", "", "","7pm","","","","",
	            	"", "", "","8pm","","","","", "",
	            	"", "", "9pm","","","","","", 
	            	"", "", "10pm","","","","","", "",
	            	"", "11pm", "","",""],
	            	datasets:[
	            		{
	            			data: result,
	            			label:'Wait Times',
	            			/*	
							space moutnaint
							backgroundColor: 'rgb(51, 153, 255)',
							backgroundColor: 'rgb(51, 153, 255)'

							pirates

							borderColor: 'rgb(255,165,0)',
							backgroundColor: 'rgb(255,0,0)'
	            			*/


							backgroundColor: 'rgb(51, 153, 255)',
							backgroundColor: 'rgb(51, 153, 255)'
	            		}
	            	]
	            }
	          });
	        },
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
	      )
  	}


	render(){
			const { error, isLoaded, items } = this.state;
	    	if (error) {
		    	return <div>Error: {error.message}</div>;
		    }
	    	else if (!isLoaded) {
	      		return <div>Loading...</div>;
	    	} else {
	      		return (
	      			<div>
	      				<form onSubmit={this.handleSubmit}>
			        <label>
			          <h2 class="paragraph" > Pick your ride: </h2>

			          <select value={this.state.value} onChange={this.handleChange}>
			            <option value="0">Star Tours – The Adventures Continue</option>
			            <option value="1">it’s a small world</option>
			            <option value="2">Pirates of the Caribbean</option>
			            <option value="3">Big Thunder Mountain Railroad</option>
			            <option value="4">Indiana Jones™ Adventure</option>
			            <option value="5">Matterhorn Bobsleds</option>
			            <option value="6">Space Mountain</option>
			            <option value="7">Haunted Mansion</option>
			            <option value="8">Splash Mountain</option>
			          </select>
			        </label>
			        <input type="submit" value="Submit" />
			      </form>

			<div className = "chart">
				<Line
					data={this.state.chartData}
					options={{
						title: {
							display:true,
							text:"Disneyland Wait Time",
							fontSize:25,
							fontColor: 'black'
						},
						legend:{
							display: true,
							position: 'right'
						},
						scales: {
            				yAxes: [{
                				ticks: {
                    				beginAtZero: true,
                    				fontColor: 'black'
				                }
				            }],
				            xAxes: [{
				            	ticks:{
				            		fontColor: 'black'
				            	}
				            }],

				        }
					}}
				/>
			</div>
			</div>
		);
	}
}
}


export default WaitTime