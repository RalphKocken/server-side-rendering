//variables
const homepageImage = document.querySelectorAll('.homepage-image');
let setImage = homepageImage[0]
const interval = setInterval(slideShow, 6000)
const plantLink = document.querySelectorAll('.single-plant')

//eventlisteners

// Homepage Slideshow

homepageImage[0].classList.add("show-homepage-image");

function slideShow(){
        if (setImage == homepageImage[0]){
            homepageImage[0].classList.remove("show-homepage-image");
            homepageImage[1].classList.add("show-homepage-image");
            setImage = homepageImage[1];
        } else if (setImage == homepageImage[1]){
            homepageImage[1].classList.remove("show-homepage-image");
            homepageImage[2].classList.add("show-homepage-image");
            setImage = homepageImage[2]
        } else if (setImage == homepageImage[2]){
            homepageImage[2].classList.remove("show-homepage-image");
            homepageImage[0].classList.add("show-homepage-image");
            setImage = homepageImage[0];
        }
}  


// plantLink.forEach((link)=>{
//     link.addEventListener('click', () => {
//         const dataId = link.dataset.id
//         const plant = document.getElementById(dataId)
        
//     })
// })

plantLink.forEach((link)=>{
    link.addEventListener('click', () => {
        const dataId = link.dataset.id
        const plantDialog = document.getElementById(dataId)
        // card.classList.add('active')
        plantDialog.showModal();

        const close_buttons = document.querySelectorAll(".close");
        close_buttons.forEach((close) => {
            close.addEventListener("click", () => {
                card.close()
            }); 
        })
    })
})