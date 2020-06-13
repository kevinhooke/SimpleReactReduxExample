import React, { Component } from 'react';
import { changeLabel } from '../actions/labelActions';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { labelValue: state.labelValue };
};

function mapDispatchToProps(dispatch) {
    return {
        changeLabel: labelValue => dispatch(changeLabel(labelValue))
    };
}

class ConnectedFormComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labelValue : this.props.labelValue
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
    }


    handleOnclick() {
        //Flux approach
        //console.log("FormComponent is creating Action for Dispatcher...");
        //AppDispatcher.dispatch({
        //    actionName: 'BUTTON_CLICK',
        //    newItem: { value: this.state.name }
        //});

        //Redux action
        console.log("FormComponent is dispatching action...");
        console.log("...calling action changeLabel() with: " + this.state.labelValue);
        this.props.changeLabel(this.state.labelValue);

    }

    handleChange(event){
        this.setState({
            labelValue : event.target.value
        });
    }

    render() {
        return (
            <div className="button">
                <input type="text" value={this.state.labelValue} onChange={this.handleChange}/>
                <button onClick={this.handleOnclick}>Submit</button>
            </div>
        );
    }
}

const FormComponent = connect(mapStateToProps, mapDispatchToProps)(ConnectedFormComponent);

export default FormComponent;
