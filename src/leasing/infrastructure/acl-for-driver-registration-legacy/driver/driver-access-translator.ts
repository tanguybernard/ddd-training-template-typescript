import Driver from "../../../application-core/driver/domain/driver";
import DriverId from "../../../application-core/driver/domain/driver-id";


export class DriverAccessTranslator {
    translate(container: any): Driver{
       let driver: Driver = null;
        if (container != null) {
            driver = Driver.load(
                new DriverId(container.getDriverDTO().getID()),//same id ? .... Mapping...
                container.getEmployeeDTO().getName(),
                container.getEmployeeDTO().getLicenceNumber(),
                container.getEmployeeDTO.getAge()
            );

        }
        return driver;
    }
}
