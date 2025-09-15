import { Entity, PrimaryGeneratedColumn,Column,ManyToOne,JoinColumn} from "typeorm";

@Entity("inventario")   // 👈 no "inventarios"
export class InventarioEntity {
    @PrimaryGeneratedColumn()
    id!: number;


    @Column({ type: 'varchar', length: 100 })
    nombre!: string;

    @Column({ type: "int" })
    cantidad!: number;


    @Column({ type: 'varchar', length: 50 })
    unidad!: string;
}
