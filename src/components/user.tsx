export class userData{
    constructor(public name: string, public password: string, public backgroundColor: string, public isLoggedIn: boolean){
        this.name = name;
        this.password = password;
        this.backgroundColor = backgroundColor;
        this.isLoggedIn = isLoggedIn;
    }

}