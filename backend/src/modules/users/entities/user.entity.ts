import { Length, IsUrl, IsEmail } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from '../../../common/base-entity';
import { Wish } from '../../wishes/entities/wish.entity';
import { Offer } from '../../../modules/offers/entities/offer.entity';
import { Wishlist } from '../../../modules/wishlists/entities/wishlist.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  @Length(2, 30)
  username: string;

  @Column({ default: 'Пока ничего не рассказал о себе' })
  @Length(2, 200)
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  @IsUrl()
  avatar: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner)
  wishlists: Wishlist[];
}
