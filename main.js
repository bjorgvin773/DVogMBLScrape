
const url = 'http://localhost:3000';


fetch(url)
.then(response => response.json())
.then(data => {
    console.log(JSON.stringify(data))
    displayNews(data)
}
)

displayNews = (data) => {

    data.forEach(data => {
        document.getElementById("main").innerHTML += `
        <div>${data.title}</div>
        <img src="${data.photo}"/>
      `  
})}
