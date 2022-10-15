export interface iCountry {
    name: {
      common: string;
    };
    capital: string;
    region: string;
    population: number;
    area: number
    flags: { png: string,
             svg: string };
}
