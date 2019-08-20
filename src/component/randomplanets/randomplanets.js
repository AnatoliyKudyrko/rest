import React,{Component} from 'react';
import Api from '../../service/api'
import Spiner from '../loading/loading';
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

    getPlanetsID(){
        const id = Math.floor(Math.random()*24+2);
         this.api.getPlanetsID(id).then(this.onLoadPlanets);
    }


    render() {
        const {planets, loading} = this.state;
        const load = loading ? <Spiner />: null;
        const content = !loading ?  <ViewPlanets planets={planets} /> : null;
            return(
            <div>
                {load}
                {content}

            </div>
            )
    }
}

const ViewPlanets = ({planets})=>{
    const {id, name,population,rotationPeriod} = planets;
    return(
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{population}</p>
            <p>{rotationPeriod}</p>
        </div>
    )
};