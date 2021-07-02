export default interface IPais {
    name: string,
    capital: string,
    flag: string,
    region: string,
    subregion: string,
    population: number,
    timezones: string[],
    latlng: number[],
    currencies: [{
        code: string,
        symbol: string
    }]
}