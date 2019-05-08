'use strict';

import PinTypes from './Enums/PinTypes'
import AjaxRequestHandler from './ServerImmitation/AjaxHandler'

import PinStrategy from './Implementations/PinStrategy';
import PinHotel from './Implementations/PinHotel';
import PinPointOfInterest from './Implementations/PinPointOfInterest';
import PinAirport from './Implementations/PinAirport';
import PinLocation from './Implementations/PinLocation';

class StrategyAndFactoryMethodTask {

    constructor() {
        console.log('Strategy And Factory Method task entry');
        this.init();
    }

    init() {
        this.strategyAndFactoryMethodTask();
    }

    strategyAndFactoryMethodTask() {
        // CHANGE TYPE HERE
        // let pinType = PinTypes.Hotel;
        // let pinType = PinTypes.PointOfInterest;
        // let pinType = PinTypes.Airport;
        let pinType = PinTypes.Location;
        // CHANGE TYPE HERE

        let AjaxHandler = new AjaxRequestHandler();

        if (pinType > 0 && pinType < 5) {

            let pinsData = [];

            switch (pinType) {
                case PinTypes.Hotel:
                    const pinHotel = new PinStrategy(new PinHotel);
                    pinHotel.getPin();

                    // pinsData = AjaxHandler.sendHotelPinsRequest();
                    //
                    // let hotelPinIds = pinsData.map(function (a) {
                    //     return a.id;
                    // });
                    //
                    // let hotelPinsDetailFromService = AjaxHandler.getHotelDetailsByIds(hotelPinIds);
                    //
                    // hotelPinsDetailFromService.forEach(function (pinDetails) {
                    //     for (let pinIndex in pinsData) {
                    //         if (pinsData[pinIndex].id == pinDetails.id) {
                    //             pinsData[pinIndex].pinDetails = pinDetails.detailsInfo
                    //         }
                    //     }
                    // });
                    //
                    // pinsData.forEach(function (pin) {
                    //     let outputText = "Hotel PinId: " + pin.id + " | PinType: " + pin.pinType + " | PinDetails: " + pin.pinDetails;
                    //     console.log(outputText);
                    // });

                    break;

                case PinTypes.PointOfInterest:
                    const pinPointOfInterest = new PinStrategy(new PinPointOfInterest);
                    pinPointOfInterest.getPin();

                    // pinsData = AjaxHandler.sendPointOfInterestPinsRequest();
                    //
                    // let poiPinIds = pinsData.map(function (a) {
                    //     return a.id;
                    // });
                    //
                    // let poiPinsDetailFromService = AjaxHandler.getPointOfInterestDetailsByIds(poiPinIds);
                    //
                    // poiPinsDetailFromService.forEach(function (pinDetails) {
                    //     for (let pinIndex in pinsData) {
                    //         if (pinsData[pinIndex].id == pinDetails.id) {
                    //             pinsData[pinIndex].pinDetails = pinDetails.detailsInfo
                    //         }
                    //     }
                    // });
                    //
                    // pinsData.forEach(function (pin) {
                    //     let outputText = "PointOfInterest PinId: " + pin.id + " | PinType: " + pin.pinType + " | PinDetails: " + pin.pinDetails;
                    //     console.log(outputText);
                    // });

                    break;

                case PinTypes.Airport:
                    const pinAirport = new PinStrategy(new PinAirport);
                    pinAirport.getPin();

                    // pinsData = AjaxHandler.sendAirportPinsRequest();
                    //
                    // let airportPinIds = pinsData.map(function (a) {
                    //     return a.id;
                    // });
                    //
                    // let airportPinsDetailFromService = AjaxHandler.getAirportDetailsByIds(airportPinIds);
                    //
                    // airportPinsDetailFromService.forEach(function (pinDetails) {
                    //     for (let pinIndex in pinsData) {
                    //         if (pinsData[pinIndex].id == pinDetails.id) {
                    //             pinsData[pinIndex].pinDetails = pinDetails.detailsInfo
                    //         }
                    //     }
                    // });
                    //
                    // pinsData.forEach(function (pin) {
                    //     let outputText = "Airport PinId: " + pin.id + " | PinType: " + pin.pinType + " | PinDetails: " + pin.pinDetails;
                    //     console.log(outputText);
                    // });

                    break;

                case PinTypes.Location:
                    const pinLocation = new PinStrategy(new PinLocation);
                    pinLocation.getPin();

                    // pinsData = AjaxHandler.sendLocationPinsRequest();
                    //
                    // let locationPinIds = pinsData.map(function (a) {
                    //     return a.id;
                    // });
                    //
                    // let locationPinsDetailFromService = AjaxHandler.getLocationDetailsByIds(locationPinIds);
                    //
                    // locationPinsDetailFromService.forEach(function (pinDetails) {
                    //     for (let pinIndex in pinsData) {
                    //         if (pinsData[pinIndex].id == pinDetails.id) {
                    //             pinsData[pinIndex].pinDetails = pinDetails.detailsInfo
                    //         }
                    //     }
                    // });
                    //
                    // pinsData.forEach(function (pin) {
                    //     let outputText = "Location PinId: " + pin.id + " | PinType: " + pin.pinType + " | PinDetails:" + pin.pinDetails;
                    //     console.log(outputText);
                    // });

                    break;

                default:
                    console.log("Incorrect input. Please use 1-4 number to proceed.");
                    break;
            }
        }
    }
}

export default new StrategyAndFactoryMethodTask();
