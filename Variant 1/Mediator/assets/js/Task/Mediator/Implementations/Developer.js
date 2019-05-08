'use strict';
import Component from '../AbstractClasses/Component';

export default class Developer extends Component {
    constructor(mediator) {
        super(mediator);
    }

    send(id, state) {
        this._mediator.send(id, state, this);
    }

    notify(id, state) {
        console.log(`Developer has got notification: TaskId: ${id} Status changed: ${state}`);
        console.log('------------------------------------------------------------');
    }
}