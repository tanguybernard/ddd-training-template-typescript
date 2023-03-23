import {DriverRegistrationFacadeInterface} from "./driver-registration-facade-interface";
import {DriverAccessTranslator} from "./driver-access-translator";


export class DriverAdapter {


    constructor(
        private driverRegistrationFacade: DriverRegistrationFacadeInterface,
        private driverAccessTranslator: DriverAccessTranslator
    ) {
    }

    getDriverByLicense(license){
        //const driver: Container = this.driverRegistrationFacade
        const driverContainer = this.driverRegistrationFacade.getDriverAccess(license)
        return this.driverAccessTranslator.translate(driverContainer);
    }


}
