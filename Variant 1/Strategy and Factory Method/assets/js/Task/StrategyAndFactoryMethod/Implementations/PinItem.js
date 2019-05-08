'use strict';

import Pin from '../Interfaces/Pin'

export default class PinItem extends Pin {
    constructor() {
        super()
    }

    paint(){
        console.log('Render PinItem.');
    }
}