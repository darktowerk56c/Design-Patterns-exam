'use strict';
import ComponentMediator from '../AbstractClasses/ComponentMediator'

export default class ConcreteComponentMediator extends ComponentMediator {

    constructor() {
        super();
    }

    send(id, state, component) {
        if (component == this.developer) {
            this.qaSpecialist.notify(id, state);
        }

        if (component == this.qaSpecialist) {
            this.developer.notify(id, state);
            this.clientPartner.notify(id, state);
        }
    }
}