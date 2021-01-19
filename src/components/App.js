import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			count:0
		};
	};
	clickFun=()=>{
     this.setState({count:this.state.count+1});
	}
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
    		<button id="click" onClick={this.clickFun} >click</button>
			{this.state.count===1?<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null}
			</div>
    	);
    }
}


export default App;

