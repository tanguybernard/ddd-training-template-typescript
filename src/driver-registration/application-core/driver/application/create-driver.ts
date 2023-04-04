import {CreateDriverDto} from "./create-driver-dto";
import {v4 as uuidv4} from "uuid";
import DriverRepository from "../../ports/driver-repository";
import DriverId from "../domain/model/driver-id";
import {Driver} from "../domain/model/driver";


export class CreateDriver {


    constructor(public driverRepository: DriverRepository) {
    }

    public async execute(driverDto: CreateDriverDto){

        const driver =await this.driverRepository.create(
            Driver.create(
                new DriverId(uuidv4()),
                driverDto.name,
                driverDto.licenseNumber,
                driverDto.age)
        );

        return driver;

    }

}
