import {ValueObjectId} from "../../../../../shared-kernel/value-object-id";


export default class DriverId extends ValueObjectId<string> {

    constructor(readonly id: string) {
        super(id);
    }

}
