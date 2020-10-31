export class Cat {
    private nom:string;
    private age:string;
    private race:string;
    private vivant: boolean;

    constructor(nom:string,age:string,race:string,vivant:boolean){ 
        this.nom = nom;
        this.age = age;
        this.race = race;
        this.vivant = vivant;

    }

    public getNom() : string {
        return this.nom;
    }
    public setNom(nom:string) : void {
        this.nom = nom;
    }

    public getAge() : string {
        return this.age;
    }
    public setAge(age:string) : void {
        this.age = age;
    }

    public getRace() : string {
        return this.race;
    }
    public setRace(race:string) : void {
        this.race = race;
    }
    public getVivant() : boolean {
        return this.vivant;
    }
    public setVivant(vivant:boolean) : void {
        this.vivant = vivant;
    }





   


}
