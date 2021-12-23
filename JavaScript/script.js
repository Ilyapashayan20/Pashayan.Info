const hamburger = document.querySelector(".hamburger")
const logo = document.querySelector(".logo")
const header = document.querySelector(".body")
const line = document.querySelector(".line")
const linetwo = document.querySelector(".middle")
const linethree = document.querySelector(".bottom")
const mobilemenu = document.querySelector(".mobile-menu")

hamburger.addEventListener("click", function(){
    console.log("barev");
    header.classList.toggle("header-active")
    line.classList.toggle("line-active")
    linetwo.classList.toggle("line-active")
    linethree.classList.toggle("line-active")
    logo.classList.toggle("logo-active")
    mobilemenu.classList.toggle("menu-mobile-active")
    header.classList.remove("header-active-white")
    header.classList.remove("header-active-telegram")
    header.classList.remove("header-active-viber")
    header.classList.remove("header-active-insta")
    header.classList.remove("header-active-fb")
    header.classList.remove("header-active-twitter")
    span.classList.remove("span-active")
  
    span.classList.remove("span-active-2")

    setTimeout(() => {
           
            mobilemenu.classList.toggle("menu-mobile-active-2")
    }, 10);


    
});




const telegram = document.querySelector(".telegram")
const viber = document.querySelector(".viber")
const twitter = document.querySelector(".twitter")
const insta = document.querySelector(".insta")
const facebook = document.querySelector(".facebook")
const contactblock = document.querySelector(".block-contact")
const homeblock = document.querySelector(".header")
const footer = document.querySelector(".footer")
const span = document.querySelector(".span")
const r = document.querySelector(".rc")
const skills = document.querySelector(".skills-block")
const about = document.querySelector(".about")
const projectblock = document.querySelector(".projects-block")



projectblock.addEventListener("mouseover", function(){
    span.classList.add("span-active-2")
    header.classList.add("header-active-white")
})

contactblock.addEventListener("mouseover", function(){
    span.classList.add("span-active-2")
    header.classList.add("header-active-white")
})

about.addEventListener("mouseover", function(){
    span.classList.add("span-active-2")
    header.classList.add("header-active-white")
})

skills.addEventListener("mouseover", function(){
    span.classList.add("span-active-2")
    header.classList.add("header-active-white")
})

footer.addEventListener("mouseover", function(){
    span.classList.add("span-active-2")
    header.classList.add("header-active-white")
})


r.addEventListener("mouseover", function(){
    span.classList.add("span-active-2")
    header.classList.add("header-active-white")
})


// homeblock.addEventListener("mouseover", function(){
//     // span.classList.add("span-active-2")
//     // header.classList.add("header-active-white")
// })
// social media

telegram.addEventListener("mouseover", function(){
    header.classList.add("header-active-telegram")
    header.classList.remove("header-active-viber")
    header.classList.remove("header-active-insta")
    header.classList.remove("header-active-fb")
    header.classList.remove("header-active-twitter")
    span.classList.add("span-active")
    header.classList.remove("header-active-white")
    span.classList.remove("span-active-2")

})


viber.addEventListener("mouseover", function(){
    header.classList.add("header-active-viber")
    header.classList.remove("header-active-telegram")
    header.classList.remove("header-active-insta")
    header.classList.remove("header-active-fb")
    span.classList.add("span-active")
    header.classList.remove("header-active-twitter")
    header.classList.remove("header-active-white")
    span.classList.remove("span-active-2")
})

twitter.addEventListener("mouseover", function(){
    header.classList.add("header-active-twitter")
    header.classList.remove("header-active-telegram")
    header.classList.remove("header-active-viber")
    header.classList.remove("header-active-insta")
    header.classList.remove("header-active-white")
    span.classList.add("span-active")
    header.classList.remove("header-active-fb")
    span.classList.remove("span-active-2")
})


insta.addEventListener("mouseover", function(){
    header.classList.add("header-active-insta")
    header.classList.remove("header-active-telegram")
    header.classList.remove("header-active-twiiter")
    header.classList.remove("header-active-viber")
    header.classList.remove("header-active-white")
    span.classList.add("span-active")
    header.classList.remove("header-active-fb")
    span.classList.remove("span-active-2")
})


facebook.addEventListener("mouseover", function(){
    header.classList.add("header-active-fb")
    header.classList.remove("header-active-viber")
    span.classList.add("span-active")
    header.classList.remove("header-active-insta")
    header.classList.remove("header-active-twiiter")
    header.classList.remove("header-active-telegram")
    header.classList.remove("header-active-white")
    span.classList.remove("span-active-2")
})




const github = document.querySelector(".github-img")

// github.addEventListener("click", ()=>{
//     location.href = "https://github.com/Ilyapashayan20";
// })

const viberlink = document.querySelector(".viber-link")

viberlink.addEventListener("click", ()=>{
    alert("try another social platform")
})