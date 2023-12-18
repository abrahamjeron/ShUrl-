const darkModeBtn = document.getElementById("dark-mode")
const bod = document.getElementById("bod")
const darkImages = document.querySelector(".darkimages")
const lightImages = document.querySelector(".images")
const scrollEelement = document.getElementById("scroll")
const options = document.querySelector(".opti")
const options1 = document.querySelector(".opti1")
const options2 = document.querySelector(".opti2")
const logo = document.getElementById("logo")
const description = document.querySelector(".description")
const heading = document.querySelector("h1")
const desc = document.querySelector("#desc")
const shrinkBtn = document.querySelector(".shrink-btn")
const toggleOn = document.getElementById("toggleoff")
const toggleOff = document.getElementById("toggleon")
darkModeBtn.addEventListener("click",function(){
    if (bod.style.backgroundColor === 'black'){
        localStorage.setItem('state','lightmode')
        darkModeBtn.style.color='black'
        toggleOff.style.display='inherit'
        toggleOn.style.display='none'
        bod.style.backgroundColor='#EDF4DD'
        lightImages.style.display = 'flex'
        darkImages.style.display='none'
        scrollEelement.style.color='black'
        options.style.color='black'
        options1.style.color='black'
        options2.style.color='black'
        logo.style.color='black'
        description.style.backgroundColor='#6C7754'
        heading.style.color='black'
        desc.style.color='black'
        shrinkBtn.style.backgroundColor='#E5F2C8'
    } else{
        localStorage.setItem('state','darkmode')
        darkModeBtn.style.color='#44E37A'
        toggleOff.style.display='none'
        toggleOn.style.display='inherit'
        bod.style.backgroundColor='black'
        darkImages.style.display = 'flex'
        lightImages.style.display = 'none'
        scrollEelement.style.color='white'
        options.style.color='#44E37A'
        options1.style.color='#44E37A'
        options2.style.color='#44E37A'
        logo.style.color='#44E37A'
        description.style.backgroundColor='#43453F'
        heading.style.color='#C8C8C8'
        desc.style.color='#C8C8C8'
        shrinkBtn.style.backgroundColor='#999999'
    }
})
