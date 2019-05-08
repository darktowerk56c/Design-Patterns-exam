'use strict';

import ConcreteComponentMediator from './Implementations/ConcreteComponentMediator';

import Task from './Model/Task'
import TaskStates from './Enums/TaskStates'

import Developer from './Implementations/Developer'
import QaSpecialist from './Implementations/QaSpecialist'
import ClientPartner from './Implementations/ClientPartner'

class MediatorTask {

    constructor() {
        console.log('Mediator task entry');
        this.init();
    }

    init() {
        this.mediatorTask();
    }

    mediatorTask() {
        let mediator = new ConcreteComponentMediator();

        let task = new Task(TaskStates.Open, 1);

        let developer = new Developer(mediator);
        let qaSpecialist = new QaSpecialist(mediator);
        let clientPartner = new ClientPartner(mediator);

        mediator.developer = developer;
        mediator.qaSpecialist = qaSpecialist;
        mediator.clientPartner = clientPartner;

        developer.send(task.id, TaskStates.ReadyForQa);
        qaSpecialist.send(task.id, TaskStates.Reopened);

        developer.send(task.id, TaskStates.ReadyForQa);
        qaSpecialist.send(task.id, TaskStates.QaDone);
    }

    // mediatorTask() {
    //     let task = new Task(TaskStates.Open, 1);
    //     let developer = new Developer();
    //     let qaSpecialist = new QaSpecialist();
    //     let clientPartner = new ClientPartner();
    //
    //     let message = '';
    //     // Developer has finished the task
    //     task.state = TaskStates.ReadyForQa;
    //     message = 'TaskId:' + task.id + ' Status changed:' + task.state;
    //     qaSpecialist.notify(message);
    //
    //     // QaSpecialist has found some issues
    //     task.state = TaskStates.Reopened;
    //     message = 'TaskId:' + task.id + ' Status changed:' + task.state;
    //     developer.notify(message);
    //     clientPartner.notify(message);
    //
    //     // Developer has fixed the issues
    //     task.state = TaskStates.ReadyForQa;
    //     message = 'TaskId:' + task.id + ' Status changed:' + task.state;
    //     qaSpecialist.notify(message);
    //
    //     // QaSpecialist has checked the result
    //     task.state = TaskStates.QaDone;
    //     message = 'TaskId:' + task.id + ' Status changed:' + task.state;
    //     developer.notify(message);
    //     clientPartner.notify(message);
    //
    //     // Client Partner has checked the result
    //     task.state = TaskStates.Closed;
    //     message = 'TaskId:' + task.id + ' Status changed:' + task.state;
    //     developer.notify(message);
    //     qaSpecialist.notify(message);
    // }
}

export default new MediatorTask();
