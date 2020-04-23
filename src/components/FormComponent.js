import React, { Component } from 'react';
import AppDispatcher from '../dispatcher/Dispatcher';

class FormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            label : this.props.label,
            name: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
    }


    handleOnclick() {
        console.log("ButtonComponent is creating Action for Dispatcher...");

        AppDispatcher.dispatch({
            actionName: 'BUTTON_CLICK',
            newItem: { value: this.state.name }
        });

    }

    handleChange(event){
        this.setState({
            name : event.target.value
        });
    }

    render() {
        return (
            <div className="button">
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <button onClick={this.handleOnclick}>{this.state.label}</button>
            </div>
        );
    }
}

export default FormComponent;
