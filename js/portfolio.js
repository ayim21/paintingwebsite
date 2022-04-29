//PORTFOLIO PAGE

const paintingsCatalog = () => {
    fetch('../data/painting-detail.json')
    .then(res => res.json())
    .then(data => {
        console.log(data.paintings.length)
        for (let i = 0; i <= data.paintings.length; i++) {
            let anchor = document.createElement('a');
            document.querySelector('main').appendChild(anchor);
            anchor.setAttribute('href', `./detail.html?id=${data.paintings[i].id}`)
            //create card content
            anchor.innerHTML = 
            `<figure>
                <img 
                    src="../assets/${data.paintings[i].img}" 
                    alt="${data.paintings[i].imgText}"
                    onmouseover="this.src='../assets/${data.paintings[i].hoverImg}'"
                    onmouseout="this.src='../assets/${data.paintings[i].img}'"
                />
                <figcaption>${data.paintings[i].title}</figcaption>
                <p>${data.paintings[i].dimension}</p>
            </figure>`
        }
    })
    .catch(err => console.log("Oops", err))
}
paintingsCatalog();


