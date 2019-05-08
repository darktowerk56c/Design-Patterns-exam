'use strict';

export default class PinStrategy {
    constructor(strategy) {
        this.movable = strategy;
    }

    getPin() {
        this.movable.getPin();
    }
}