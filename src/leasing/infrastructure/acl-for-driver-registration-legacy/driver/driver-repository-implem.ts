import DriverRepository from "../../../application-core/ports/driver-repository";
import Driver from "../../../application-core/driver/domain/driver";
import DriverId from "../../../application-core/driver/domain/driver-id";
import {DriverRegistrationFacadeInterface} from "./driver-registration-facade-interface";
import {DriverAccessTranslator} from "./driver-access-translator";

class DriverRegistrationFacade {

}

export class DriverRepositoryImplem implements DriverRepository {


    constructor(private driverRegistrationFacade: DriverRegistrationFacadeInterface,
                private driverAccessTranslator: DriverAccessTranslator) {
    }


    create(driver: Driver): Promise<Driver> {
        return Promise.resolve(undefined);
    }

    findById(driverId: DriverId): Promise<Driver> {
        return Promise.resolve(undefined);
    }

    findByLicense(license: string): Promise<Driver> {
        //const driver: Container = this.driverRegistrationFacade
        const driverContainer = this.driverRegistrationFacade.getDriverAccess(license)
        return Promise.resolve(this.driverAccessTranslator.translate(driverContainer));
    }

    update(driver: Driver): Promise<void> {
        return Promise.resolve(undefined);
    }

}
