import {Driver} from "../driver/domain/model/driver";


export default interface DriverRepository {

    create(driver: Driver): Promise<Driver>;

    findByLicense(license: string): Promise<Driver>;

}
