import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
    // if(/^[a-zA-Z]+-[a-zA-Z]+$/.test(id)){
    //     return heroes.find(hero => hero.id === id);
    // }
    // else{
    //     throw new Error(`Id "${id}" is not correct`);
    // }
    return heroes.find(hero => hero.id === id);
}