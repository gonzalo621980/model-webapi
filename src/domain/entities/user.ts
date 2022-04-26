
export default class User {

    id?: Number;
    login: String;
    email: String;
    name: String;

    constructor(id: Number = 0, login: String = "", email: String = "", name: String = "") {
        this.id = id;
        this.login = login;
        this.email = email;
        this.name = name;
    }
    
}
