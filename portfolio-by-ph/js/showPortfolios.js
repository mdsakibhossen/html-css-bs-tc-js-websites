import { portfolios } from "../api/data.js"
const portfolioContainer = document.querySelector("#portfolioContainer");
const portfolioTemplate = document.querySelector("#portfolioTemplate");


export const showPortfolios = (catId)=>{
    const filteredPortfolios = portfolios.filter(portfolio=>portfolio.catId === catId);
    portfolioContainer.innerHTML = "";
    filteredPortfolios.forEach(fP=>{
        const portfolioCard = document.importNode(portfolioTemplate.content,true)
        // console.log(portfolioCard);
        portfolioCard.querySelector(".img").src = fP.image;
        portfolioCard.querySelector(".img").alt = fP.title;
        portfolioCard.querySelector(".sub-title").textContent = fP.subTitle;
        portfolioCard.querySelector(".title").textContent = fP.title;
        portfolioCard.querySelector(".info-text").textContent = fP.description;


        portfolioContainer.append(portfolioCard)
    })
}