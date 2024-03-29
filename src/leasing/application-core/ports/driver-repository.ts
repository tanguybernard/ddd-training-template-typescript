import Driver from "../driver/domain/driver";
import DriverId from "../driver/domain/driver-id";


export default interface DriverRepository {

    findById(driverId: DriverId): Promise<Driver>;

    findByLicense(license: string): Promise<Driver>;
    update(driver: Driver): Promise<void>

    create(driver: Driver): Promise<Driver>;

}
