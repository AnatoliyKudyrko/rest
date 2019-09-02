import React,{Component} from 'react';
import Api from '../../service/api'
import Spiner from '../loading/loading';
import Erorr from "../error/erorr";
import "./randomplanets.css"
export default class Randomplanets extends Component{
    state = {
     planets:{},
        loading: true,
        error:false
    };
    api = new Api();
    constructor(){
        super();
        this.getPlanetsID();
    }
    onLoadPlanets=(planets)=>{this.setState({planets, loading:false})};
    onError= (err) =>{
        this.setState({
            error:true,
            loading:false
        })
    };
    getPlanetsID(){
        const id = Math.floor(Math.random()*24+2);
        this.api.getPlanetsID(id).then(this.onLoadPlanets).catch(this.onError);
    }


    render() {
        const {planets, loading,error} = this.state;
        const err = error ? <Erorr/>:null;
        const load = loading ? <Spiner />: null;
        const content = !loading ?  <ViewPlanets planets={planets} /> : null;
            return(
            <div className="bg-dark text-light">
                {err}
                {load}
                {content}

            </div>
            )
    }
}

const ViewPlanets = ({planets})=>{
    const {id, name,population,rotationPeriod} = planets;
return(
    <div className="random-planets">
        <div className="random-img">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=""/>
        </div>
        <ul className="list-group">
            <li className="list-group-item list-group-item-dark">{name}</li>
            <li className="list-group-item list-group-item-dark">{population}</li>
            <li className="list-group-item list-group-item-dark">{rotationPeriod}</li>
        </ul>
    </div>
)
};