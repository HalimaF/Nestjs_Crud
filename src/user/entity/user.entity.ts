import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({default: true})
    isActive: boolean;

    // @OneToMany(() => Enrollment, (c) => c.user)
    // enrollments: Enrollment[];

    // @OneToMany(() => Bookmark, (b) => b.user)
    // bookmarks: Bookmark[];

    // @OneToMany(() => Review, (review) => review.user)
    // reviews: Review[];

}