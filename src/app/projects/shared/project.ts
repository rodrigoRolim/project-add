export class Project {
    constructor(
        public name: string,
        public begin: Date,
        public end: Date,
        public collaborator: string,
        public description: string,
        public team: string[]
    ) {}
}
