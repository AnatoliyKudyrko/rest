import React,{Component} from 'react';
import Api from '../../service/api'

export default class Head extends Component{
    constructor(){
        super();
       this.state = {
           name: null
       };
    }


    upload =()=>{
        let api= new Api();
        this.setState({name: api.name})
    };

    render(){
        return (
            <div>
                <button onClick={this.upload}>OK</button>
                {this.state.name}

            </div>
    )
    }
}