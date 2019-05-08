'use strict';

import CreditInfoBuilder from '../AbstractClasses/CreditInfoBuilder'

export default class CreditInfoBuildByIdBuilder extends CreditInfoBuilder {
    
	constructor(personalInfoService,currentCreditInfoService,previousCreditsHistoryService,id) {
		super();
		this.id = id;
		this.personalInfoService = personalInfoService;
		this.currentCreditInfoService = currentCreditInfoService;
		this.previousCreditsHistoryService = previousCreditsHistoryService;
    }
	
	getPersonalInfo(){
		this.info.personalInfo = this.personalInfoService.getPersonalInfoById(this.id);
	}
	
	getCurrentCreditInfo(){
		this.info.currentCreditInfo = this.currentCreditInfoService.getCurrentCreditInfoById(this.id);
	}
	
	getPreviousCreditsHistory(){
		this.info.previousCreditsHistory = this.previousCreditsHistoryService.getPreviousCreditsHistoryById(this.id);
	}
}