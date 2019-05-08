'use strict';

import Pin from '../Model/Pin'
import PinDetails from '../Model/PinDetails'
import PinTypes from '../Enums/PinTypes'

export default class AjaxHandler {
    constructor() {
    }

    sendHotelPinsRequest() {
        let pinsArr = [];
        pinsArr.push(new Pin(1, PinTypes.Hotel));
        pinsArr.push(new Pin(2, PinTypes.Hotel));
        pinsArr.push(new Pin(3, PinTypes.Hotel));
        return pinsArr;
    }

    getHotelDetailsByIds(ids) {
        let pinsDetailsArr = [];
        pinsDetailsArr.push(new PinDetails(1, "Fifth floor"));
        pinsDetailsArr.push(new PinDetails(2, "One bed"));
        pinsDetailsArr.push(new PinDetails(3, "Two beds"));
        return pinsDetailsArr;
    }

    sendPointOfInterestPinsRequest() {
        let pinsArr = [];
        pinsArr.push(new Pin(1, PinTypes.PointOfInterest));
        pinsArr.push(new Pin(2, PinTypes.PointOfInterest));
        pinsArr.push(new Pin(3, PinTypes.PointOfInterest));
        return pinsArr;
    }

    getPointOfInterestDetailsByIds(ids) {
        let pinsDetailsArr = [];
        pinsDetailsArr.push(new PinDetails(1, "Very cold place"));
        pinsDetailsArr.push(new PinDetails(2, "Too high for me"));
        pinsDetailsArr.push(new PinDetails(3, "Something interesting here"));
        return pinsDetailsArr;
    }

    sendAirportPinsRequest() {
        let pinsArr = [];
        pinsArr.push(new Pin(1, PinTypes.Airport));
        pinsArr.push(new Pin(2, PinTypes.Airport));
        pinsArr.push(new Pin(3, PinTypes.Airport));
        return pinsArr;
    }

    getAirportDetailsByIds(ids) {
        let pinsDetailsArr = [];
        pinsDetailsArr.push(new PinDetails(1, "Leeds"));
        pinsDetailsArr.push(new PinDetails(2, "London"));
        pinsDetailsArr.push(new PinDetails(3, "Moscow"));
        return pinsDetailsArr;
    }

    sendLocationPinsRequest() {
        let pinsArr = [];
        pinsArr.push(new Pin(1, PinTypes.Location));
        pinsArr.push(new Pin(2, PinTypes.Location));
        pinsArr.push(new Pin(3, PinTypes.Location));
        return pinsArr;
    }

    getLocationDetailsByIds(ids) {
        let pinsDetailsArr = [];
        pinsDetailsArr.push(new PinDetails(1, "Majorca"));
        pinsDetailsArr.push(new PinDetails(2, "Minorca"));
        pinsDetailsArr.push(new PinDetails(3, "Ibiza"));
        return pinsDetailsArr;
    }
}