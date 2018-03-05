export class Project {

    public _id?: string;
    public name?: string;
    public start?: Date;
    public end?: Date;
    public boss?: string;
    public description?: string;
    public team?: { member: string, timeSpend: string }[];

    constructor() {}
}
