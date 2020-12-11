class Reservation {
    constructor(name, phone, email, id) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
    }

    getName() {
        return this.name;
    }
    
    getPhone() {
        return this.phone;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }
}

module.exports = Reservation;
