
export class Customer {


    constructor(id, name, lastname,birthdate ,email, phone, address) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.birthdate = birthdate;
        this.email = email;
        this.phone = phone;
        this.address = address;
    }
    static toDisplayable(customer) {
        return {
            id: customer.id,
            name: customer.name,
            lastname: customer.lastname,
            birthdate: customer.birthdate,
            email: customer.email,
            phone: customer.phone,
            address: customer.address

        }
    }
}