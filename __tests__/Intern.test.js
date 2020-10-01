const { TestScheduler } = require('jest');

Intern = require('../lib/Intern');

test('verify getSchool',() => {
intern = new Intern('bill the intern',230, 'byu');
expect(intern.getSchool()).toEqual(expect.any(String));
});

test('verify getRole', ()=> {
    intern = new Intern('bill the intern',230, 'u of u');
    expect(intern.getRole()).toBe('Intern');
});