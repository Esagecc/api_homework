//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

let button = document.querySelector('button')

button.addEventListener('click', deliverData)


function deliverData() {
    const choice = document.querySelector('input').value
    console.log(choice)

    const url = `https://api.nasa.gov/planetary/apod?api_key=aNrjLlX05MhPRubimfhzUpYv9Ur0oQg3fHbkUG02&date=${choice}`
    fetch(url) 
.then (res => res.json())
.then (data =>{
if ( data.media_type === 'image' ){
    document.querySelector('img').src = data.hdurl
    document.querySelector('img').style.border = '5px solid rgb(228, 65, 6)'
} else if ( data.media_type === 'video' ) {
    document.querySelector('iframe').src = data.url
    document.querySelector('iframe').style.height = '500px'
}
    document.getElementById('name').innerText = data.title
    document.getElementById('des').innerText = data.explanation

} )
.catch(err => {
    console.log(`error ${err}`)
});
}


