import {CreateDriver} from "./application-core/driver/application/create-driver";
import DriverRepository from "./application-core/ports/driver-repository";
import {InMemoryDriverRepository} from "./application-core/ports/stubs/in-memory-driver-repository";



export default class DriverFactory {


    public static driverRepository(): DriverRepository{
        return new InMemoryDriverRepository();
    }

    public static useCaseCreateDriver(): CreateDriver {
        return new CreateDriver(this.driverRepository());
    }

}
