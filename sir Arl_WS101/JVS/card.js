

const dATT = (titleWan, paraO, btnO, paraT, btnT, paraTh, btnTh) => {
    let dDiv = document.createElement("div")
    dDiv.innerHTML =   `<h1 class="pro">${titleWan}</h1>
                        <p class="one">${paraO}</p>
                        <button class="a">${btnO}</button>
                        <p class="two">${paraT}</p>
                        <button class="b">${btnT}</button>
                        <p class="tree">${paraTh}</p>
                        <button class="c">${btnTh}</button>`

    return dDiv
}

export {dATT}