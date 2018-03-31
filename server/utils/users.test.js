const expect = require('expect');
const {Users} = require('./users');

describe('Users', () =>{
    var users;
    beforeEach(() =>{
      users = new Users();
      users.users = [{
        id: '1',
        name: 'Sree',
        room: 'Telangana'
        }, {
        id: '2',
        name: 'Vysh',
        room: 'Telangana'
        }, {
        id: '3',
        name: 'Shreyanvi',
        room: 'Los Angeles'
      }];
    });

    it('should add a new user', () => {
      var users = new Users();
      var user = {
        id: '234',
        name: 'Sreeni',
        room: 'Telangana'
      };
      var resUser = users.addUser(user.id,user.name,user.room);
      expect(users.users).toEqual([user]);
    });

    it('should return names of Telangana room', () => {
      var usersList = users.getUsersList('Telangana');
      expect(usersList).toEqual(['Sree','Vysh']);
    });

    it('should find user by id', () => {
      var userId = '1';
      var user = users.getUser(userId);
      expect(user.id).toBe(userId);
    });

    it('should not find user with out id exist', () => {
      var userId = '4';
      var user = users.getUser(userId);
      expect(user).toBe(undefined);
    });

    it('should remove user by id', () => {
      var userId = '1';
      var user = users.removeUser(userId);
      expect(user.id).toBe(userId);
    });

    it('should not remove user with out id exist', () => {
      var userId = '4';
      var user = users.getUser(userId);
      expect(user).toBe(undefined);
      expect(users.users.length).toBe(3);
    });
});
