import React,{Component} from 'react';
import Api from '../../service/api'
import './head.css';

export default class Head extends Component{


    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">StarWars</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">People</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Planets</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Starship</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
    }
}