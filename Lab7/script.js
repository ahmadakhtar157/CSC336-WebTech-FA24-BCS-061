// const div1 = document.getElementById("div1")
// const p1 = document.getElementById("p1")
// const a1 = document.getElementById("a1")

// a1.addEventListener('click', () => {
//     console.log('a1 clicked.')
//     alert("<button> tag was clicked.")
// })

// p1.addEventListener('click', () => {
//     console.log('p1 clicked.')
//     alert("<p> tag was clicked.")
// })

// div1.addEventListener('click', () => {
//     console.log('div1 clicked.')
//     alert("<div> tag was clicked.")
// })



function fun1(e){
    let div1 = document.getElementById('div1')

    div1.addEventListener('click', (e) => {
        
        if (e.target.matches('button')) console.log("button was clicked")
        else{
            alert("DIV was clicked")
            console.log(e)
        }
    })
}

window.onload = fun1;