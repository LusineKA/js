let b = document.querySelector(".bigimg")
let s1 = document.querySelector(".smallimg1")
let s2 = document.querySelector(".smallimg2")
let s3 = document.querySelector(".smallimg3")

s1.addEventListener ("click", () => {
    let i1 = b.getAttribute("src")
    let i2 = s1.getAttribute("src")
    
    b.setAttribute("src", i2)
    s1.setAttribute("src", i1)

})

s2.addEventListener ("click", () => {
    let i1 = b.getAttribute("src")
    let i3 = s2.getAttribute("src")

    b.setAttribute("src", i3)
    s2.setAttribute("src", i1)
})

s3.addEventListener ("click", () => {
    let i1 = b.getAttribute("src")
    let i4 = s3.getAttribute("src")

    b.setAttribute("src", i4)
    s3.setAttribute("src", i1)
})

let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")


btn1.addEventListener ("click", () => {
    let i1 = b.getAttribute("src")
    let i2 = s1.getAttribute("src")
    let i3 = s2.getAttribute("src")
    let i4 = s3.getAttribute("src")
    
    b.setAttribute("src", i2)
    s1.setAttribute("src", i3)
    s2.setAttribute("src", i4)
    s3.setAttribute("src", i1)

})

btn2.addEventListener ("click", () => {
    let i1 = b.getAttribute("src")
    let i2 = s1.getAttribute("src")
    let i3 = s2.getAttribute("src")
    let i4 = s3.getAttribute("src")
    
    b.setAttribute("src", i4)
    s1.setAttribute("src", i1)
    s2.setAttribute("src", i2)
    s3.setAttribute("src", i3)

})