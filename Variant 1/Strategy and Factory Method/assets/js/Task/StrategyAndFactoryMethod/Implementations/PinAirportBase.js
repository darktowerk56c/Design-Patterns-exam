'use strict';

import Pin from '../Interfaces/Pin'
import AjaxRequestHandler from 'styles/js/Task/StrategyAndFactoryMethod/ServerImmitation/AjaxHandler';

export default class PinAirportBase extends Pin {
    constructor() {
        super()
    }

    move() {
        let AjaxHandler = new AjaxRequestHandler();

        let pinsData = [];

        pinsData = AjaxHandler.sendAirportPinsRequest();

        let airportPinIds = pinsData.map(function (a) {
            return a.id;
        });

        let airportPinsDetailFromService = AjaxHandler.getAirportDetailsByIds(airportPinIds);

        airportPinsDetailFromService.forEach(function (pinDetails) {
            for (let pinIndex in pinsData) {
                if (pinsData[pinIndex].id == pinDetails.id) {
                    pinsData[pinIndex].pinDetails = pinDetails.detailsInfo
                }
            }
        });

        pinsData.forEach(function (pin) {
            let outputText = "Airport PinId: " + pin.id + " | PinType: " + pin.pinType + " | PinDetails: " + pin.pinDetails;
            console.log(outputText);
        });
    }
}