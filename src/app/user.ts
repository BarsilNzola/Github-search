export class User {
    constructor(
        public login: string,
        public name: string,
        public avatar_url: string,
        public location: string,
        public html_url: string,
        public repos: number,
    ){}
}
