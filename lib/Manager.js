const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id, officeNumber) {
        super(name, id);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;