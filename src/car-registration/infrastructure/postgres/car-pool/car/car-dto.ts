import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {CarPoolDto} from "../pool/car-pool-dto";

@Entity({name: "car", schema: "registration"})
export default class CarDto {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => CarPoolDto, carPool => carPool.cars)
    poolId: CarPoolDto //TODO rename to carPool

    @Column({
        length: 100,
    })
    name: string

    @Column({
        length: 100,
        nullable: true
    })
    brand: string

}
