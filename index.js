// let currentSlideID = 1;

// let sliderElement = document.querySelector('#slider')

// const totalSlides = sliderElement.childElementCount

// const prev = () => {
//     if(currentSlideID > 1) {
//         currentSlideID--
//         showSlide()
//     } else {
//         currentSlideID = totalSlides
//     }
// }

// const next = () => {
//     if(currentSlideID < totalSlides) {
//         currentSlideID++
//         showSlide()
//     } else {
//         currentSlideID = 1
//         showSlide()
//     }
// }

// const showSlide = () => {

//     const slides = document.querySelector('#slider').getElementsByTagName('li')
//     for (let index = 0; index < totalSlides; index++) {
//         const element = slides[index];
//         if(currentSlideID === index + 1) {
//             element.classList.remove('hidden')
//         } else {
//             element.classList.add('hidden')
//         }
//     }
// }

// ------------

const carousel = document.querySelector('.carousel')
const firstImage = carousel.querySelectorAll('img')[0]
const arrowIcons = document.querySelectorAll('.wrapper i')

let firstImageWidth = firstImage.clientWidth + 18

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // console.log(icon)
        carousel.scrollLeft += icon.id == 'left' ? -firstImageWidth : firstImageWidth
    })
})

// const dragging = e => {
//     carousel.scrollLeft = e.pageX
// }

// carousel.addEventListener('mousemove', dragging)