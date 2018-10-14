
//add user(id, name, roow)
//remove user (id)
//getUuser(id)
//getUSerList(room);

class Users {
    constructor () {
        this.users = [];
    }
    addUser(id, name, roomName) {
        let user = {id, name, roomName};
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        let users = this.users.filter((user) => {
            return user.id !== id;
        });
        this.users = users;
        return users;
    }
    getUser (id) {
        let user = this.users.filter((user) => {
            return user.id === id;
        })[0];
        return user;
    }
    getUserList (roomName) {
        let users = this.users.filter((user) => {
            return user.roomName === roomName;
        });
        let namesArray = users.map((user) => {
            return user.name;
        });

        return namesArray;
    }
}

module.exports = {Users};

// class Person {
//     constructor (name, roomName) {
//         this.name = name;
//         this.roomName = roomName;
//     }
//     getUserDescription () {
//         return `${this.name} is in ${this.roomName}`;
//     }
// }
//
// let me = new Person('Anirudh', 'YOLO');
//
// console.log(me.getUserDescription());
