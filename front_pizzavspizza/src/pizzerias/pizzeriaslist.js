import React, { Component } from 'react';
import PizzaDetail from './pizzeriadetail';
import axios from 'axios'

class PizzaList extends Component {
    state = {
        pizzeriasData: [],
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/")
        .then((response) => {
        this.setState({pizzeriasData: response.data})
        })
        .catch((err) => {
            console.log(err);
        })
    }
    render() {
    return (
        <div>
        {this.state.pizzeriasData.map( item => {
            return <h3 key={item.id}>{item.pizzeria_name} , {item.city}</h3>
        }
        )}
        </div>
    )}
}

export default PizzaList;
