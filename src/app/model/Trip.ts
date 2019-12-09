import {User} from './User';

export class Trip {
  id: number;
  price: number;
  departureS: string;
  arrivalS: string;
  departureT: Date;
  owner: User;
  passengers: User[];
}
