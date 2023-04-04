import {RequestHandler} from "express";
import {DriverController} from "./driver-controller";
import DriverFactory from "../../driver-factory";


export class RestFactory {
    static createDriver(): RequestHandler {
        return new DriverController().createDriver(DriverFactory.useCaseCreateDriver())
    }

}
