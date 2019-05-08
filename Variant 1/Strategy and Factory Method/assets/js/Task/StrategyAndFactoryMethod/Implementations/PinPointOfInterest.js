'use strict';

import PinGet from '../Interfaces/PinGet'

import PinPointOfInterestCreator from './PinPointOfInterestCreator';

export default class PinPointOfInterest extends PinGet {
    constructor() {
        super();
    }

    getPin() {
        const pinPointOfInterestCreator = new PinPointOfInterestCreator();
        pinPointOfInterestCreator.renderPin();
    }
}