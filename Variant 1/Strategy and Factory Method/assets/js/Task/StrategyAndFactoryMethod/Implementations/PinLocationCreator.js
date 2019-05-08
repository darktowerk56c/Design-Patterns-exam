'use strict';
import PinCreator from '../AbstractClasses/PinCreator'
import PinLocationBase from './PinLocationBase'

export default class PinLocationCreator extends PinCreator {
    constructor() {
        super()
    }

    createPin() {
        return new PinLocationBase();
    }
}