import CarService from "./application-core/driver/domain/services/car-service";
import DriverPgRepository from "./infrastructure/postgres/driver/driver-repository";
import CarPgRepository from "./infrastructure/postgres/car/car-repository";
import DriverDao from "./infrastructure/postgres/driver/driver-dao";
import CarDao from "./infrastructure/postgres/car/car-dao";
import CarRepository from "./application-core/car/ports/car-repository";
import DriverRepository from "./application-core/ports/driver-repository";
import {DriverMapper} from "./infrastructure/postgres/driver/driver-mapper";
import RentCar from "./application-core/driver/application/rent-car";


export default class LeasingFactory {

    public static useCaseRentCar(): RentCar {
        return new RentCar(new CarService(), this.driverRepository(), this.carRepository());
    }

    //TODO move to BC driver registration
    /*public static useCaseCreateDriver(): CreateDriver {
        return new CreateDriver(this.driverRepository());
    }*/


    public static carRepository(): CarRepository{
        return new CarPgRepository(CarDao)
    }

    public static driverRepository(): DriverRepository{
        return new DriverPgRepository(DriverDao, new DriverMapper());
    }

}
