'use strict';
import CreditInfo from '../Model/CreditInfo'

export default class CreditInfoBuilder {
    constructor() {
		this.info = new CreditInfo();
    }

    getPersonalInfo(){}
    getCurrentCreditInfo(){}
    getPreviousCreditsHistory(){}

    getCreditInfo(){
        return this.info;
    }
}