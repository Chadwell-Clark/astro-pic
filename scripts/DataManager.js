export const getAPODData = () => {
    return fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => response.json())
    // .then(parsedData => {
    //     console.log(parsedData)
    //     return parsedData;
//     })
}