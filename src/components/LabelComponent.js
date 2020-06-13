import React, { Component } from 'react';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return { labelValue: state.labelValue };
};

class ConnectedLabelComponent extends Component {

    // default constructor not needed
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className="label">
                Text: { this.props.labelValue }
            </div>
        );
    }
}
const LabelComponent = connect(mapStateToProps)(ConnectedLabelComponent);
export default LabelComponent;
