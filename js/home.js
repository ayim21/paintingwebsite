//HOME PAGE

const retrievePaintingData = () => 
    fetch('../data/painting-detail.json')
    .then(res => res.json())
    .then(data => data.paintings)
    .catch(err => console.log("Oh no", err))


const insertPaintingDetail = paintingData => {
        //PAINTING 1
        document.querySelector('#link1').setAttribute('href', `./html/detail.html?id=${paintingData[paintingData.length-1].id}`);
        document.querySelector('#painting1').setAttribute('src', `../assets/${paintingData[paintingData.length-1].id}/${paintingData[paintingData.length-1].img}`);
        document.querySelector('#painting1').setAttribute('alt', `../assets/${paintingData[paintingData.length-1].id}/${paintingData[paintingData.length-1].imgText}`);
        document.querySelector('#description1').innerHTML = `${paintingData[paintingData.length-1].title}`;

        //PAINTING 2
        document.querySelector('#link2').setAttribute('href', `./html/detail.html?id=${paintingData[paintingData.length-2].id}`);
        document.querySelector('#painting2').setAttribute('src', `../assets/${paintingData[paintingData.length-2].id}/${paintingData[paintingData.length-2].img}`);
        document.querySelector('#painting2').setAttribute('alt', `../assets/${paintingData[paintingData.length-2].id}/${paintingData[paintingData.length-2].imgText}`);
        document.querySelector('#description2').innerHTML = `${paintingData[paintingData.length-2].title}`;

        //PAINTING 3
        document.querySelector('#link3').setAttribute('href', `./html/detail.html?id=${paintingData[paintingData.length-3].id}`);
        document.querySelector('#painting3').setAttribute('src', `../assets/${paintingData[paintingData.length-3].id}/${paintingData[paintingData.length-3].img}`);
        document.querySelector('#painting3').setAttribute('alt', `../assets/${paintingData[paintingData.length-3].id}/${paintingData[paintingData.length-3].imgText}`);
        document.querySelector('#description3').innerHTML = `${paintingData[paintingData.length-3].title}`;
}

const main = async () => {
    const paintingData = await retrievePaintingData();
    insertPaintingDetail(paintingData)
    console.log(paintingData[paintingData.length-1].id)

}
main();