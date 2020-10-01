const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');


test('creates an Employee object', () => {
    employee = new Employee('Dale Maughan', 79);
    expect(employee.name).toBe('Dale Maughan');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('dmaughan@customcode.com');
    
});

test('get employee name', ()=> {
    employee = new Employee('Dale Maughan', 79);
    expect(employee.getName()).toBe('Dale Maughan');
});

test('get employee id', () => {
    employee = new Employee('Dale Maughan', 79);
    expect(employee.getId()).toEqual(79);
});

test('get employee email', ()=> {
    employee = new Employee('Fred Wiggins', 79);
    first = employee.name.split(' ')[0][0].toLowerCase();
    second = employee.name.split(' ')[1].toLowerCase();
    expect(employee.getEmail()).toEqual(first + second + '@customcode.com');
});

test('get employee role', () => {
    employee = new Employee('Georgia Hardwick', 79);
    expect(employee.getRole()).toEqual('Employee');
});