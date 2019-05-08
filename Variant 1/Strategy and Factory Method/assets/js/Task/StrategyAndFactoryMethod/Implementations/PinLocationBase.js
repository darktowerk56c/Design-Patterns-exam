'use strict';

import Pin from '../Interfaces/Pin'
import AjaxRequestHandler from 'styles/js/Task/StrategyAndFactoryMethod/ServerImmitation/AjaxHandler';

export default class PinLocationBase extends Pin {
    constructor() {
        super()
    }

    move() {
        let AjaxHandler = new AjaxRequestHandler();

        let pinsData = [];

        pinsData = AjaxHandler.sendLocationPinsRequest();

        let locationPinIds = pinsData.map(function (a) {
            return a.id;
        });

        let locationPinsDetailFromService = AjaxHandler.getLocationDetailsByIds(locationPinIds);

        locationPinsDetailFromService.forEach(function (pinDetails) {
            for (let pinIndex in pinsData) {
                if (pinsData[pinIndex].id == pinDetails.id) {
                    pinsData[pinIndex].pinDetails = pinDetails.detailsInfo
                }
            }
        });

        pinsData.forEach(function (pin) {
            let outputText = "Location PinId: " + pin.id + " | PinType: " + pin.pinType + " | PinDetails:" + pin.pinDetails;
            console.log(outputText);
        });
    }
}