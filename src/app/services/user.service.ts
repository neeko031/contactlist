import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Leanne Graham',
      emailName: 'Sincere@april.biz',
      phoneName: '1-770-736-8031 x56442'
    },
    {
      id: 2,
      firstName: 'Ervin Howell',
      emailName: 'Shanna@melissa.tv',
      phoneName: '010-692-6593 x09125'
    },
    {
      id: 3,
      firstName: 'Clementine Bauch',
      emailName: 'Nathan@yesenia.net',
      phoneName: '1-463-123-4447'
    },
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons;
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);

  }
  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    this.upersons[index] = user;
  }
  deleteUser(user: User) {
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

}
