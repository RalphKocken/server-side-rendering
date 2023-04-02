//variables
const homepageImage = document.querySelectorAll('.homepage-image');
let setImage = homepageImage[0]
const interval = setInterval(slideShow, 6000)
// const rightHandle = document.querySelector('.left-handle')
// const leftHandle = document.querySelector('.right-handle')

// Event Listeners

// rightHandle.addEventListener("click", moveContainerRight)
// leftHandle.addEventListener("click", moveContainerLeft)
// window.addEventListener("resize", (e) =>{
//     //recalculate progress bar
// })


//Functions

// document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)

// function calculateProgressBar(progressBar){
//     progressBar.innerHTML = ""
//     const plantList = document.querySelector(".plant-list")
//     const plantCount = plantList.children.length
//     const plantsPerScreen = parseInt(getComputedStyle(plantList).getPropertyValue("--plants-per-screen"))
//     const plantListIndex = parseInt(getComputedStyle(plantList).getPropertyValue("--plant-list-index"))
//     const progressBarItemCount = Math.ceil
//     (plantCount / plantsPerScreen)

//     if (plantListIndex >= progressBarItemCount) {
//         plantList.style.setProperty("--plant-list-index", progressBarItemCount - 1)
//         plantListIndex = progressBarItemCount -1
//     }
    
//     for (let i = 0; i < progressBarItemCount; i++) {
//         const barItem = document.createElement("section")
//         barItem.classList.add("progress-item")
//         if(i === plantListIndex) {
//             barItem.classList.add("active")
//         }
//         progressBar.append(barItem)
//     }
// }


// function moveContainerRight(){
//     const progressBar = document.querySelector(".progress-bar")
//     const plantList = document.querySelector('.plant-list')
//     const plantListIndex = parseInt(getComputedStyle(plantList).getPropertyValue("--plant-list-index"))

//     if (plantListIndex + 1 >= progressBarItemCount){
//     plantList.style.setProperty("--plant-list-index", plantListIndex + 1)
//     progressBar.children[plantListIndex].classList.remove('active')
//     progressBar.children[plantListIndex - 1].classList.add('active')
//     }
//     else{
//         plantList.style.setProperty("--plant-list-index", plantListIndex + 1)
//         progressBar.children[plantListIndex].remove('active')
//         progressBar.children[plantListIndex + 1].add('active')
//     }
// }

// function moveContainerLeft(){
//     const progressBar = document.querySelector(".progress-bar")
//     const plantList = document.querySelector('.plant-list')
//     const plantListIndex = parseInt(getComputedStyle(plantList).getPropertyValue("--plant-list-index"))
//     plantList.style.setProperty("--plant-list-index", plantListIndex - 1)

//     if (plantListIndex - 1 < 0) {
//         plantList.style.setProperty("--plant-list-index", plantListIndex - 1)
//         progressBar.children[plantListIndex].classList.remove('active')
//         progressBar.children[plantListIndex - 1].classList.add('active')
//         }
//     else{
//         plantList.style.setProperty("--plant-list-index", plantListIndex - 1)
//         progressBar.children[plantListIndex].remove('active')
//         progressBar.children[plantListIndex - 1].add('active')
// }
// }


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


    // document.addEventListener("click", e => {
    //     let handle
    //     if (e.target.matches(".handle")) {
    //       handle = e.target
    //     } else {
    //       handle = e.target.closest(".handle")
    //     }
    //     if (handle != null) onHandleClick(handle)
    //   })
      
    //   const throttleProgressBar = throttle(() => {
    //     document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
    //   }, 250)
    //   window.addEventListener("resize", throttleProgressBar)
      
    //   document.querySelectorAll(".progress-bar").forEach(calculateProgressBar)
      
    //   function calculateProgressBar(progressBar) {
    //     progressBar.innerHTML = ""
    //     const slider = progressBar.closest(".plant-list-section").querySelector(".plant-list")
    //     const itemCount = slider.children.length
    //     const itemsPerScreen = parseInt(
    //       getComputedStyle(slider).getPropertyValue("--plants-per-screen")
    //     )
    //     let sliderIndex = parseInt(
    //       getComputedStyle(slider).getPropertyValue("--plant-list-index")
    //     )
    //     const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen)
      
    //     if (sliderIndex >= progressBarItemCount) {
    //       slider.style.setProperty("--slider-index", progressBarItemCount - 1)
    //       sliderIndex = progressBarItemCount - 1
    //     }
      
    //     for (let i = 0; i < progressBarItemCount; i++) {
    //       const barItem = document.createElement("div")
    //       barItem.classList.add("progress-item")
    //       if (i === sliderIndex) {
    //         barItem.classList.add("active")
    //       }
    //       progressBar.append(barItem)
    //     }
    //   }
      
    //   function onHandleClick(handle) {
    //     const progressBar = handle.closest(".plant-list-section").querySelector(".progress-bar")
    //     const slider = handle.closest(".plant-list-container").querySelector(".plant-list")
    //     const sliderIndex = parseInt(
    //       getComputedStyle(slider).getPropertyValue("--plant-list-index")
    //     )
    //     const progressBarItemCount = progressBar.children.length
    //     if (handle.classList.contains("left-handle")) {
    //       if (sliderIndex - 1 < 0) {
    //         slider.style.setProperty("--plant-list-index", progressBarItemCount - 1)
    //         progressBar.children[sliderIndex].classList.remove("active")
    //         progressBar.children[progressBarItemCount - 1].classList.add("active")
    //       } else {
    //         slider.style.setProperty("--plant-list-index", sliderIndex - 1)
    //         progressBar.children[sliderIndex].classList.remove("active")
    //         progressBar.children[sliderIndex - 1].classList.add("active")
    //       }
    //     }
      
    //     if (handle.classList.contains("right-handle")) {
    //       if (sliderIndex + 1 >= progressBarItemCount) {
    //         slider.style.setProperty("--plant-list-index", 0)
    //         progressBar.children[sliderIndex].classList.remove("active")
    //         progressBar.children[0].classList.add("active")
    //       } else {
    //         slider.style.setProperty("--plant-list-index", sliderIndex + 1)
    //         progressBar.children[sliderIndex].classList.remove("active")
    //         progressBar.children[sliderIndex + 1].classList.add("active")
    //       }
    //     }
    //   }
      
    //   function throttle(cb, delay = 1000) {
    //     let shouldWait = false
    //     let waitingArgs
    //     const timeoutFunc = () => {
    //       if (waitingArgs == null) {
    //         shouldWait = false
    //       } else {
    //         cb(...waitingArgs)
    //         waitingArgs = null
    //         setTimeout(timeoutFunc, delay)
    //       }
    //     }
      
    //     return (...args) => {
    //       if (shouldWait) {
    //         waitingArgs = args
    //         return
    //       }
      
    //       cb(...args)
    //       shouldWait = true
    //       setTimeout(timeoutFunc, delay)
    //     }
    //   }