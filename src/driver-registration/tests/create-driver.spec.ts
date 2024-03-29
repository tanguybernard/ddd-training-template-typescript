import {CreateDriver} from "../application-core/driver/application/create-driver";
import {CreateDriverDto} from "../application-core/driver/application/create-driver-dto";
import DriverRepository from "../application-core/ports/driver-repository";
import {InMemoryDriverRepository} from "../application-core/ports/stubs/in-memory-driver-repository";

describe(`${CreateDriver.name}`, () => {
    let useCase: CreateDriver;
    let driverRepository: DriverRepository;

    beforeEach(async () => {
        driverRepository = new InMemoryDriverRepository()
        useCase = new CreateDriver(driverRepository);
    });


    it( 'create driver', async () => {

        //BEFORE
        const name = 'John';
        const licenceNumber = '123456789';
        const age = 36;

        //WHEN
        const driver = await useCase.execute(new CreateDriverDto(name, licenceNumber, age));

        //THEN

        const driverFound = await driverRepository.findByLicense(licenceNumber)

        expect(driverFound).toHaveProperty('age',36);
        expect(driverFound.name).toEqual("John");
        expect(driverFound.driverId.equals(driver.driverId)).toBeTruthy();
        expect(driverFound.licenseNumber).toEqual(licenceNumber);
    })

});
