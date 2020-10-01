class Employee {
    constructor(name = '', id){
        this.name = name;
       this.id = id;
       var first = name.split(' ')[0][0].toLowerCase();
       var second = name.split(' ')[1].toLowerCase();
       this.email = first + second + '@customcode.com';
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };
};

module.exports = Employee;