/**
 * Created by Fredrik on 24/11/2016.
 */

import React from 'react'
import {observer} from 'mobx-react'
import axios from 'axios'
import LoadingMask from 'd2-ui/lib/loading-mask/LoadingMask.component'

@observer
export default class Pivot extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data : {},
			rows : [],
			headers : [],
			ids : []
		}
	}

	fetchData(param) {
		 let ax = axios.create({
            auth: {
                username: 'admin',
                password: 'district'
            },
            headers: {
                'Content-Type' :'application/json'
            }
        });
        console.log("fetching..")
        ax.get(param)
            .then((response) => {
            	console.log("resolved")
                this.setState({
                	data : response.data
                });
        });
	}

	componentWillMount() {
       	this.fetchData(this.props.src)
	}

	componentDidUpdate() {
		if(this.props.title === this.state.data.title){
			console.log("Not updated")
		}
		else {
			console.log("Update")
			this.fetchData(this.props.src)
		}
		
	}

    render() {
    	//let data = this.props.store.data.reportTables.slice();
    	if(this.props.title !== this.state.data.title){
        return(
        	<div>
        		<h2>Loading...</h2>
        		<LoadingMask />
        	</div>
            //<iframe src={this.props.src} frameBorder="0" scrolling="yes" width="100%" height="100%"/>
        );
    }
    	
    else{
    	this.state.headers = {}
    	console.log(this.state.data)
    	this.state.rows = {}
    	let arr = new Array()
    	let arr2 = new Array()
    	for(let i = 0; i<this.state.data.headers.length;i++){
    		if (!this.state.data.headers[i].hidden){
    			arr.push(this.state.data.headers[i].name)
    			this.state.ids.push(i)
    		}
    	}

    	for(let i = 0; i<this.state.data.rows.length; i++){
    		let temp = new Array()
    		for(let j = 0; j<this.state.data.rows[i].length; j++){
    			console.log(j)
    			if(this.state.ids.includes(j)){
    				temp.push(this.state.data.rows[i][j])
    			}
    		}
    		if(temp.length !== 0){
    			arr2.push(temp)
    		}
    	}

    	// Placeholders
    	this.state.headers = arr
    	this.state.rows = arr2

    	return(
    		<div className="tablediv">
    			<h1>{this.state.data.title}</h1>
    			<h2>{this.state.data.subtitle}</h2>
    			<table>
    				<thead>
    					<tr>
 						 	{this.state.headers.map((name, i) =>
  								<th key={i}>{name}</th>
							)}
    					</tr>
    				</thead>
    				<tbody>
    				{this.state.rows.map((row, i)=>
    					<tr key={i}>
    					{row.map((col, j)=>	
    						<td key={j}>{col}</td>
    					)}
    					</tr>
    				)}
    				</tbody>
    			</table>
    		</div>
    		)
    	}
    }

}