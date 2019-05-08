'use strict';
import PinCreator from '../AbstractClasses/PinCreator'
import PinHotelBase from './PinHotelBase'

export default class PinHotelCreator extends PinCreator {
    constructor() {
        super()
    }

    createPin() {
        return new PinHotelBase();
    }
}