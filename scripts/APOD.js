export const APOD = (apodObj) => {
    return `
        <article class="apodContainer">
        <h1 class="apod-title">${apodObj.title}</h1>
        <div class="apod-date-copyright">
        <h2>${apodObj.date}</h2>
        <h2>&copy;${apodObj.copyright}</h2>
        </div>
        <img  class="apodImage"src="${apodObj.url}" alt="${apodObj.explanation}">
        </article>
    `;
}