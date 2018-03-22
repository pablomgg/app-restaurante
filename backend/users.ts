export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string) {
    }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: { [key: string]: User } = {
    'pablo@com.br': new User('Pablo', 'pablo@com.br', '123456'),
    'Alex@com.br': new User('Alex', 'alex@com.br', '123'),
    'Eli@com.br': new User('Eli', 'eli@com.br', '1234')
}
