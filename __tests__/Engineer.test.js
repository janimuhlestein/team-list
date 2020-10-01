const Engineer = require('../lib/Engineer');

test('verify github', ()=> {
    engineer = new Engineer('Dan Simpkins',137, 'dansimpkins');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('verify role', () => {
    engineer = new Engineer('Dan Simpkins',137, 'danskimpkins');
    expect(engineer.getRole()).toBe('Engineer');
});

