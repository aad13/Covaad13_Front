import {Trip} from './Trip';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  vehicle: string;
  nbPlaces: number;
  tripsAsOwner: Trip[];
  tripsAsPassenger: Trip[];
}
