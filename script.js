document.addEventListener('DOMContentLoaded', (event) => {
    
/*----------------DOM-ELEMENTS---------------*/

const sideBar = document.getElementById('sidebar');
const sideBarButton = document.getElementById('open-sidebar');
const mainContainer = document.getElementById('main');



/*----------------EVENT-LISTENERS------------*/


/*----------------EVENT-HANDLERS-------------*/
let sidebarOpen = false

sideBarButton.addEventListener("click", () => {
    sidebarOpen = !sidebarOpen
    if (sidebarOpen) {
        sideBarButton.innerText = "Close Sidebar"
        sideBar.style.width = "250px";
        mainContainer.style.marginLeft = "250px";
    } else {
        sideBarButton.innerText = "Open Sidebar"
        sideBar.style.width = "0px";
        mainContainer.style.marginLeft = "0px";
    }   
})

/*----------------RENDERERS------------------*/
const flowerList = document.querySelector("#flower-list")

    function renderOneFlower(flower) {
        const flowerSpan = document.createElement('span')
        flowerSpan.className = "card"
        flowerSpan.dataset.id = flower.id
    
        flowerSpan.innerHTML = `
            <div class="image" style="background-image: url(${flower.img_url})">
               
            </div>
            <div class="content">
                <div class="name">${flower.name}</div>
                <div class="meaning"><p>Meaning: ${flower.meaning}<p></div>
                <div class="sound"><p>Sound: ${flower.sound}</p></div>
            </div> `
        flowerList.append(flowerSpan)
    }

    function renderAllFlowers(flowers) {
        flowers.forEach(renderOneFlower)
    }

    fetch("http://localhost:3000/flowers")
        .then(r => r.json())
        .then(data => {
            renderAllFlowers(data)
        })


});