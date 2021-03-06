import Driver from "../driver";
import Car from "../../../car/domain/car";
import AvailableCar from "../../../car/domain/available-car";

export default class CarService {

    public canRentCar(driver: Driver, car: AvailableCar) {

        if(driver.car){
            return false;
        }

        if(car.type === "LUXUARY" && driver.age < 25){
            return false;
        }
        driver.rentCar(car);
        return true;
    }
}
