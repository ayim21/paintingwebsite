//DETAIL PAGE

const currentPageUrl = window.location.href;
const newUrl = new URL(currentPageUrl);
const paintingId = newUrl.searchParams.get('id');

const retrievePaintingData = () => 
    fetch('../data/painting-detail.json')
    .then(res => res.json())
    .then(data => data.paintings)
    .catch(err => console.log("Oh no", err))


const insertPaintingDetail = paintingData => {
        //BLOCK painting_visual_mini - insert mini images
        document.querySelector('#visual1').setAttribute('src', `../assets/${paintingData[paintingId-1].miniature1}`);
        document.querySelector('#visual1').setAttribute('alt', `${paintingData[paintingId-1].imgText}`);
        document.querySelector('#visual2').setAttribute('src', `../assets/${paintingData[paintingId-1].miniature2}`);
        document.querySelector('#visual2').setAttribute('alt', `${paintingData[paintingId-1].imgText}`);
        document.querySelector('#visual3').setAttribute('src', `../assets/${paintingData[paintingId-1].miniature3}`);
        document.querySelector('#visual3').setAttribute('alt', `${paintingData[paintingId-1].imgText}`);
        document.querySelector('#visual4').setAttribute('src', `../assets/${paintingData[paintingId-1].miniature4}`);
        document.querySelector('#visual4').setAttribute('alt', `${paintingData[paintingId-1].imgText}`);
        //BLOCK painting_visual_main - insert main image
        document.querySelector('#mainvisual').setAttribute('src', `../assets/${paintingData[paintingId-1].img}`);
        document.querySelector('#mainvisual').setAttribute('alt', `${paintingData[paintingId-1].imgText}`);
        //BLOCK painting_info
        document.querySelector('h2').innerHTML = `${paintingData[paintingId-1].title}`;
        document.querySelector('.painting_info_dimension').innerHTML = `${paintingData[paintingId-1].dimension}`;
        document.querySelector('.painting_info_description').innerHTML = `${paintingData[paintingId-1].description}`;
}


const zoomIn = paintingData => {
    document.querySelector('#visual1').addEventListener('click', () => {
        document.querySelector('#mainvisual').setAttribute('src', `../assets/${paintingData[paintingId-1].miniature1}`);
    });

    document.querySelector('#visual2').addEventListener('click', () => {
        document.querySelector('#mainvisual').setAttribute('src', `../assets/${paintingData[paintingId-1].miniature2}`);
    })

    document.querySelector('#visual3').addEventListener('click', () => {
        document.querySelector('#mainvisual').setAttribute('src', `../assets/${paintingData[paintingId-1].miniature3}`);
    })

    document.querySelector('#visual4').addEventListener('click', () => {
        document.querySelector('#mainvisual').setAttribute('src', `../assets/${paintingData[paintingId-1].miniature4}`);
    })
};


const main = async () => {
    const paintingData = await retrievePaintingData();
    console.log(paintingData)

    insertPaintingDetail(paintingData);

    zoomIn(paintingData)
}
main();