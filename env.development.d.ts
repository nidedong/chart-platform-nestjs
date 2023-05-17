declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    ADDRESS: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
  }
}
