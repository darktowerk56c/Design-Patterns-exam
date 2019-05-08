'use strict';

import PinGet from '../Interfaces/PinGet'

import PinLocationCreator from './PinLocationCreator';

export default class PinLocation extends PinGet {
    constructor() {
        super();
    }

    getPin() {
        const pinLocationCreator = new PinLocationCreator();
        pinLocationCreator.renderPin();
    }
}