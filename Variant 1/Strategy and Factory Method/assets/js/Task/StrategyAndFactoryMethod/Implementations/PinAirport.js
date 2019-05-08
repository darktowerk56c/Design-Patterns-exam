'use strict';

import PinGet from '../Interfaces/PinGet'

import PinAirportCreator from './PinAirportCreator';

export default class PinAirport extends PinGet {
    constructor() {
        super();
    }

    getPin() {
        const pinAirportCreator = new PinAirportCreator();
        pinAirportCreator.renderPin();
    }
}