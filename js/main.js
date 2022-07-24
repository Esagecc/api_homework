//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

let date = document.querySelector('input.value')
let button = document.querySelector('button')

button.addEventListener('click', deliverData)


function deliverData() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=aNrjLlX05MhPRubimfhzUpYv9Ur0oQg3fHbkUG02") 
.then (res => res.json())
.then (data =>{
    console.log(data)
    console.log(data.hdurl)
    document.querySelector('img').src = data.hdurl
    console.log(data.title)
    document.getElementById('name').innerText = data.title
    console.log(data.explanation)
    document.getElementById('des').innerText = data.explanation

} )
.catch(err => {
    console.log(`error ${err}`)
});
}


