import DriverRepository from "../driver-repository";
import {Driver} from "../../driver/domain/model/driver";


export class InMemoryDriverRepository implements DriverRepository{

    public drivers : Driver[] = [];

    create(driver: Driver): Promise<Driver> {
        this.drivers.push(driver);
        return Promise.resolve(driver);
    }

    findByLicense(license: string): Promise<Driver> {
        return Promise.resolve(this.drivers.find(d => d.licenseNumber = license));
    }

}
