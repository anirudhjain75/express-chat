const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: 1,
                name: 'Ani',
                roomName: 'Dominos'
            },
            {
                id: 2,
                name: 'Janet',
                roomName: 'Dominos'
            },
            {
                id: 3,
                name: 'Jimmy',
                roomName: 'Depras'
            }
        ];
    });

    it('Should add new users', () => {
        let users = new Users();
        let user = {
            id: '12345',
            name: 'Test',
            roomName: 'Pizza'
        };
        let resUser = users.addUser(user.id, user.name, user.roomName);

        expect(users.users).toEqual([user]);
    });

    it('Should remove a user', () => {
        let listPast = [
            users.users[1],
            users.users[2]];
        let newList = users.removeUser(1);

        expect(newList).toEqual(listPast);
        expect(users.users).toEqual(listPast);
    });

    it('Should not remove user', () => {
        let newList = users.removeUser(10);
        let usersPast = users.users;

        expect(newList).toEqual(usersPast);
    });

    it('Should find user', () => {
        let user = users.getUser(1);

        expect(user).toEqual(users.users[0]);
    });

    it('Should not find user', () => {
        expect(users.getUser(10)).toBe(undefined);
    });

    it('Should return names for dominos', () => {
       let userList = users.getUserList('Dominos');

       expect(userList).toEqual(['Ani', 'Janet']);
    });

    it('Should return names for Depras', () => {
        let userList = users.getUserList('Depras');

        expect(userList).toEqual(['Jimmy']);
    });
});
