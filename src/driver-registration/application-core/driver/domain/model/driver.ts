import {AggregateRoot} from "../../../../../shared-kernel/aggregate-root";
import DriverId from "./driver-id";

export class Driver extends AggregateRoot<DriverId>{

    //TODO create value object
    private constructor(
        public driverId: DriverId,
        public name: string,
        public licenseNumber: string,
        public age: number,

    ) {
        super(driverId);
    }

    public static create(userId: DriverId, name: string, licenseNumber: string, age: number) {
        return new Driver(userId, name, licenseNumber, age);
    }

    public static load(userId: DriverId, name: string, licenseNumber: string, age: number) {
        return new Driver(userId, name, licenseNumber, age);
    }




}
