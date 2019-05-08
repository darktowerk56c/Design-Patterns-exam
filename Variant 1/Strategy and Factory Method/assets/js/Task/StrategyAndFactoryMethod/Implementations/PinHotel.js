'use strict';

import PinGet from '../Interfaces/PinGet'

import PinHotelCreator from './PinHotelCreator';

export default class PinHotel extends PinGet {
    constructor() {
        super();
    }

    getPin() {
        const pinHotelCreator = new PinHotelCreator();
        pinHotelCreator.renderPin();
    }
}