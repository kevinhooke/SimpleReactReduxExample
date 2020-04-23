import AppDispatcher from '../dispatcher/Dispatcher';
import EventEmitter from 'events';

var labelStoreData = {

    labelValue : ''

}

class LabelStore extends EventEmitter {

    constructor() {
        super();
        this.payload = AppDispatcher.register(this.handleAction.bind(this));
    }

    addChangeListener(callback){
        this.on('change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }

    getData(){
        return labelStoreData;
    }

    handleAction(action) {

        switch (action.actionName) {

            // Do we know how to handle this action?
            case 'BUTTON_CLICK':
                console.log("LabelStore is handling BUTTON_CLICK action!");
                labelStoreData.labelValue = action.newItem;
                this.emit('change');
                break;
        }
    }

}

export default new LabelStore();