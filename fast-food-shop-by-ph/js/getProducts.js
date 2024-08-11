import { allFastFoods, heroFastFoods } from "../api/data.js"

export const getProducts = ({ amount=0, type = "ALL" }) => {
    if (amount && type === "ALL") {
        return allFastFoods.slice(0, amount);
    } else if (type === "HERO_PRODUCTS") {
        return heroFastFoods;
    } else {
        return allFastFoods;
    }
}