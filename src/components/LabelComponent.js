import React, { Component } from 'react';
import LabelStore from '../stores/LabelStore';


class LabelComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { labelValue : LabelStore.getData() };
        //this is critical - to access 'this' and call setState you need to explicitylu bind:
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        LabelStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        LabelStore.removeChangeListener(this.onChange);
    }

    onChange() {
        console.log('LabelComponent onChange triggered from LabelStore event');
        this.setState({ labelValue : LabelStore.getData() });
    }

    render() {
        return (
            <div className="label">
                Text: { this.state.labelValue.labelValue.value }
            </div>
        );
    }
}

export default LabelComponent;
