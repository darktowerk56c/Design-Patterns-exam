'use strict';

import Director from './Implementations/Director'

import PersonalInfoService from './ServerImmitation/PersonalInfoService'
import CurrentCreditInfoService from './ServerImmitation/CurrentCreditInfoService'
import PreviousCreditsHistoryService from './ServerImmitation/PreviousCreditsHistoryService'
import CreditInfoBuildByIdBuilder from './Implementations/CreditInfoBuildByIdBuilder'
import CreditInfoBuildByUserNameBuilder from './Implementations/CreditInfoBuildByUserNameBuilder'

class BuilderTask {

    constructor() {
        console.log('Builder task entry');
		this.init();
    }
	
	init(){
		this.builderTask();
	}
	
	builderTask(){
		let personalInfoService = new PersonalInfoService();
        let currentCreditInfoService = new CurrentCreditInfoService();
        let creditsHistoryService = new PreviousCreditsHistoryService();

        let director = new Director();

        let byIdBuilder = new CreditInfoBuildByIdBuilder(personalInfoService, currentCreditInfoService, creditsHistoryService, 1);
        // byIdBuilder.getPersonalInfo();
        // byIdBuilder.getCurrentCreditInfo();
        // byIdBuilder.getPreviousCreditsHistory();
        const byId = director.buildInfo(byIdBuilder);;

        // let vasilyInfo = byIdBuilder.getCreditInfo();
        // console.log(vasilyInfo.toString());
        console.log('byId:');
        this.printInfoStructure(byId);

        let byUsernameBuilder = new CreditInfoBuildByUserNameBuilder(personalInfoService, currentCreditInfoService, creditsHistoryService, "Pupkina");
        // byUsernameBuilder.getPersonalInfo();
        // byUsernameBuilder.getCurrentCreditInfo();
        // byUsernameBuilder.getPreviousCreditsHistory();
        const byUsername = director.buildInfo(byUsernameBuilder);
        
        // let svetlanaInfo = byUsernameBuilder.getCreditInfo();
        // console.log(svetlanaInfo.toString());
        console.log('byUsername:');
        this.printInfoStructure(byUsername);
	}

    printInfoStructure(info){
        console.log('personalInfo:', info.personalInfo);
        console.log('currentCreditInfo:', info.currentCreditInfo);
        console.log('previousCreditsHistory:', info.previousCreditsHistory);
    }
}

export default new BuilderTask();
