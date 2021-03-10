export const APOD = (apodObj) => {
    return `
        <article>
        <h1>${apodObj.title}</h1>
        <img src="${apodObj.url}" alt="${apodObj.explanation}">
        </article>
    `
}