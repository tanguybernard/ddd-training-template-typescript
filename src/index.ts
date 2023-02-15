import 'module-alias/register';
import {initServer} from "./app";
import { PORT } from './env';
import {AppDataSource} from "./data-source";
import {DomainEvents} from "./shared-kernel/domain-event-dispatching/domain-events";
import CarRentedEvent from "./leasing/application-core/driver/domain/events/car-rented-event";
import CarRentedEventHandler
    from "./leasing/application-core/car/application/event-handlers/car-rented-event-handler";
import CarPgRepository from "./leasing/infrastructure/postgres/car/car-repository";
import CarDto from "./leasing/infrastructure/postgres/car/car-dto";
import CarDao from "./leasing/infrastructure/postgres/car/car-dao";
import LeasingFactory from "./leasing/leasing-factory";



AppDataSource.initialize().then(async () => {

    console.log("Inserting a new car into the database...")
    const car = new CarDto()

    car.name = "Toyota"
    car.id = "VFS1V2009ASIV2009"
    await AppDataSource.manager.save(car)
    console.log("Saved a new car with id: " + car.id)

    console.log("Loading car from the database...")
    const carFound = await AppDataSource.manager.find(CarDto)
    console.log("Loaded car: ", carFound);


}).catch(error => console.log(error))

DomainEvents.register(new CarRentedEventHandler(LeasingFactory.carRepository()), CarRentedEvent.name);

//const amqp = require("amqplib");


const server =  initServer().listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is listening on port ${PORT}`);
});

export default server;
