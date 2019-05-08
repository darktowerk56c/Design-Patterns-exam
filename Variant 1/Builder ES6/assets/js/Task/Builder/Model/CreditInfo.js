'use strict';

export default class CreditInfo {
    constructor() {
		this.personalInfo = '';
		this.currentCreditInfo = '';
		this.previousCreditsHistory = '';
    }
	
    toString (){
        return '\n PersonalInfo:'+this.personalInfo+'| \nCurrentCreditInfo:'+this.currentCreditInfo+'| \nPreviousCreditsHistory:'+this.previousCreditsHistory;
    }
}