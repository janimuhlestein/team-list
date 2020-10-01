const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');


test('verify instantiation', () => {
    manager = new Manager('Amy Watkins', 370, 4356);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('verify manager role', () => {
    manager = new Manager('Amy Watkins',370, 4530);
    expect(manager.getRole()).toEqual('Manager');
});