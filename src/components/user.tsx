export class userData{
    constructor(public name: string, public password: string, public backgroundColor: string, public isLoggedIn: boolean,public username:string){
        this.name = name;
        this.password = password;
        this.backgroundColor = backgroundColor;
        this.isLoggedIn = isLoggedIn;
        this.username = username;
    }

}