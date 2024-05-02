export class User{

    constructor(id,name,lastname,username,password,email,birthday,subscription,idListProducts,idListSales,idListCustomers,idListProviders,idListShops){
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
        this.email = email;
        this.birthday = birthday;
        this.subscription = subscription;
        this.idListProducts = idListProducts;
        this.idListSales = idListSales;
        this.idListCustomers = idListCustomers;
        this.idListProviders = idListProviders;
        this.idListShops = idListShops;

    }
    static toDisplayableUser(user){
        return{
            birthday:user.birthday,
            id:user.id,
            name:user.name,
            lastname:user.lastname,
            username:user.username,
            password:user.password,
            email:user.email,
            subscription:user.subscription,
            idListProducts:user.idListProducts,
            idListSales:user.idListSales,
            idListCustomers:user.idListCustomers,
            idListProviders:user.idListProviders,
            idListShops:user.idListShops
        }
    }
}