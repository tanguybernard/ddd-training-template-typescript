import DriverRepository from "../../../application-core/ports/driver-repository";
import Driver from "../../../application-core/driver/domain/driver";
import DriverId from "../../../application-core/driver/domain/driver-id";
import {DriverRegistrationFacadeInterface} from "./driver-registration-facade-interface";
import {DriverAccessTranslator} from "./driver-access-translator";
import {DriverAdapter} from "./driver-adapter";


class DriverRegistrationFacade {

}

export class DriverRepositoryImplem implements DriverRepository {


    constructor(public driverAdapter: DriverAdapter) {
    }


    create(driver: Driver): Promise<Driver> {
        return Promise.resolve(undefined);
    }

    findById(driverId: DriverId): Promise<Driver> {
        return Promise.resolve(undefined);
    }

    findByLicense(license: string): Promise<Driver> {
        return Promise.resolve(this.driverAdapter.getDriverByLicense(license));
    }

    update(driver: Driver): Promise<void> {
        return Promise.resolve(undefined);
    }

}
