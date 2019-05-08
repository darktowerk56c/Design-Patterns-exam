'use strict';

export default class TaskStates {

    static get Open() {
        return 'open'; //for developer
    }

    static get Reopened() {
        return 'reopened'; //for developer
    }

    static get ReadyForQa() {
        return 'readyForQa'; //for tester
    }

    static get QaDone() {
        return 'qaDone'; //for tester
    }

    static get Closed() {
        return 'closed'; //for client partner
    }
}