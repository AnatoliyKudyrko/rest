import React,{Component} from "react";
import Api from "../../service/api";


export default class NamePeople extends Component{
    constructor(){
        super();
        this.state = {
            people: []
        }
        ;
        this.getPeople();


    }
    api = new Api();
    onLoadPeople=(people)=>{this.setState({people:people})};
     getPeople(){
    return  this.api.getPeople().then(this.onLoadPeople);

     }

    render() {
         const mas = this.state.people.map(a=>a.name);
         const masitem = mas.map(a=> <li>{a}</li>
         );
        return(

            <div>
                <ul>
                    {masitem}
                </ul>

            </div>
        )

    }
}