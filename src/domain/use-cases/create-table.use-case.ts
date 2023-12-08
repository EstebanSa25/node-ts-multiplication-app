export interface createTableOptions {
    base: number;
    limit: number;
}
export interface createTableUseCase {
    execute: (options: createTableOptions) => string;
}
export class CreateTable implements createTableUseCase {
    constructor() /**
     * DI-Dependency Injection
     */ {}
    execute({ base, limit = 10 }: createTableOptions) {
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${base} * ${i} = ${base * i}\n`;
        }
        return outputMessage;
    }
}
