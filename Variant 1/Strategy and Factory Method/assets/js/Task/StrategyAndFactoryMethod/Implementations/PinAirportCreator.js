'use strict';
import PinCreator from '../AbstractClasses/PinCreator'
import PinAirportBase from './PinAirportBase'

export default class PinAirportCreator extends PinCreator {
    constructor() {
        super()
    }

    createPin() {
        return new PinAirportBase();
    }
}