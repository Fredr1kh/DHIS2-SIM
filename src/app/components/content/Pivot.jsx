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

// Fetch json data and set data if success
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
        ax.get(param)
            .then((response) => {
                this.setState({
                	data : response.data
                });
        }).catch(function(err){
            console.error("Error fetching data, try again")
        });
	}

	componentWillMount() {
       	this.fetchData(this.props.src)
	}

    // Rerenders view if another item from the list is selected
	componentDidUpdate() {
		if(this.props.title !== this.state.data.title){
			this.fetchData(this.props.src)
		}
	}

    render() {

        if(this.props.selectedTitle == ""){
            return (<h2>Please select dataset</h2>)
        }

    	if(this.props.title !== this.state.data.title){
        return(
        	<div>
        		<h2>Loading...</h2>
        		<LoadingMask className="loader" />
        	</div>
            );
        }
    	
         else {
           // Get json data in correct array format to be displayed in HTML-table 
    	   this.state.headers = {}
    	   this.state.rows = {}
            // Placeholder arrays 
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
                        if(this.state.ids.includes(j)){
                        temp.push(this.state.data.rows[i][j])
                    }
            }
    		if(temp.length !== 0){
    			arr2.push(temp)
    		}
    	}

    	return(
    		<div className="tablediv">
    			<h1>{this.state.data.title}</h1>
    			<h2>{this.state.data.subtitle}</h2>
    			<table>
    				<thead>
    					<tr>
 						 	{arr.map((name, i) =>
  								<th key={i}>{name}</th>
							)}
    					</tr>
    				</thead>
    				<tbody>
    				    {arr2.map((row, i)=>
    					   <tr key={i}>
    					   {row.map((col, j)=>	
    					       <td key={j}>{col}</td>
    					   )}
    					   </tr>
    				    )}
    				</tbody>
    			</table>
    		</div>
    		);
    	}
    }

}