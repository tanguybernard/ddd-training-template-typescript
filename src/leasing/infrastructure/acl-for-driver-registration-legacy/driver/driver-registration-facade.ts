import {DriverRegistrationFacadeInterface} from "./driver-registration-facade-interface";

export class DriverRegistrationFacade implements DriverRegistrationFacadeInterface{


    constructor() {
        //inject service http call registration driver, maybe another subsystem....
        //service1, service2, service3

    }
    getDriverAccess(license:any) {

        //http get driver info (idUser, firstName, lastName, birthdate)
        // http get driver info about license (licenseId, licenseDate, licenseType  [Permis B, A....], idUser)

        //place all into container

        return null;
    }

}
