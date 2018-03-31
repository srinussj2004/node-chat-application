class Users{
  constructor(){
    this.users=[];
  }
  addUser(id, name, room){
    var user = {id, name, room};
    this.users.push(user);
    return user;
  };

  removeUser(id){
    var user = this.getUser(id);
    if(user){
    this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  };

  getUser(id){
    return this.users.filter((user) => user.id === id)[0];
  };

  isUniqueUser (room, name) {
		let roomUsersList = this.getUsersList(room);
		let dublicated = roomUsersList.filter((user) => user === name);
	  return dublicated.length ? false : true;
  };

  getUsersList(room){
    var users=this.users.filter((user) => user.room === room);
    var names = users.map((user) => user.name);
    return names;
  };

  getRoomsList () {
  var rooms = {};
  var roomsArray = [];

  this.users.map((user) => {
    if(rooms[user.room]) {
      rooms[user.room]++;
    } else {
      rooms[user.room] = 1;
    }
  });

  Object.keys(rooms).forEach((key) => {
    roomsArray.push({room: key, users: rooms[key]});
  });

  return roomsArray;
  };
}

module.exports ={Users};
