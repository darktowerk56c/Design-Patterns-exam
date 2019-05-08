'use strict';

import CreditInfoBuilder from '../AbstractClasses/CreditInfoBuilder'
import PersonalInfoService from '../ServerImmitation/PersonalInfoService'
import CurrentCreditInfoService from '../ServerImmitation/CurrentCreditInfoService'
import PreviousCreditsHistoryService from '../ServerImmitation/PreviousCreditsHistoryService'

export default class CreditInfoBuildByUserNameBuilder extends CreditInfoBuilder {
    
	constructor(personalInfoService,currentCreditInfoService,previousCreditsHistoryService,username) {
		super();
		this.username = username;
		this.personalInfoService = personalInfoService;
		this.currentCreditInfoService = currentCreditInfoService;
		this.previousCreditsHistoryService = previousCreditsHistoryService;
    }
	
	getPersonalInfo(){
		this.info.personalInfo = this.personalInfoService.getPersonalInfoByUserName(this.username);
	}
	
	getCurrentCreditInfo(){
		this.info.currentCreditInfo = this.currentCreditInfoService.getCurrentCreditInfoyByUserName(this.username);
	}
	
	getPreviousCreditsHistory(){
		this.info.previousCreditsHistory = this.previousCreditsHistoryService.getPreviousCreditsHistoryByUserName(this.username);
	}
}