'use strict';

export default class Director {

    constructor() {
    }

    buildInfo(builder) {
        builder.getPersonalInfo();
        builder.getCurrentCreditInfo();
        builder.getPreviousCreditsHistory();

        return builder.getCreditInfo();
    }
}