'use strict';
import PinCreator from '../AbstractClasses/PinCreator'
import PinPointOfInterestBase from './PinPointOfInterestBase'

export default class PinPointOfInterestCreator extends PinCreator {
    constructor() {
        super()
    }

    createPin() {
        return new PinPointOfInterestBase();
    }
}