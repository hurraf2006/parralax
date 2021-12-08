const cloud1 = document.querySelector('.cloud1'),
cloud2 = document.querySelector('.cloud2'),
cloud3 = document.querySelector('.cloud3'),
centercloudcha1 = document.querySelector('.centercloudcha1'),
centercloudcha2 = document.querySelector('.centercloudcha2'),
flatcloud1 = document.querySelector('.flatcloud1'),
flatcloud2 = document.querySelector('.flatcloud2'),
cloud1under = document.querySelector('.cloud1under'),
sun = document.querySelector('.sun'),
bird1 = document.querySelector('.bird1'),
bird2 = document.querySelector('.bird2'),
bird3 = document.querySelector('.bird3')
window.addEventListener('scroll', ()=>{
    let windowY = window.scrollY
    sun.style.transform = `translate(-${windowY}px, -${windowY}px)`
    cloud2.style.transform = `translateX(-${windowY}px)`
    centercloudcha1.style.transform = `translateX(-${windowY}px)`
    centercloudcha2.style.transform = `translateX(-${windowY}px)`
    flatcloud1.style.transform = `translateX(${windowY}px)`
    flatcloud2.style.transform = `translateX(-${windowY}px)`
    bird1.style.transform = `translate(-${windowY}px, -${windowY}px)`
    bird2.style.transform = `translate(${windowY}px, -${windowY}px)`
    bird3.style.transform = `translate(${windowY}px, -${windowY}px)`
    cloud1under.style.transform = `translateX(${windowY}px)`


})
