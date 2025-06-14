export interface Country {
  name: {
    common: string,
    official: string,
    nativeName: any,
  },
  capital: string[],
  region: string,
  flags: {
    png: string,
    svg: string,
    alt: string,
  },
  population: number,
}
