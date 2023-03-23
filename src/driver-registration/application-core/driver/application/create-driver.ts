import {CreateDriverDto} from "./create-driver-dto";
import DriverRepository from "../../../../leasing/application-core/ports/driver-repository";
import Driver from "../../../../leasing/application-core/driver/domain/driver";
import {v4 as uuidv4} from "uuid";
import DriverId from "../../../../leasing/application-core/driver/domain/driver-id";


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
