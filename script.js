let btn = document.getElementById("btn")
let input = document.getElementById("user_id")
let output = document.getElementById('out')
const host = 'https://6061c50bac47190017a71a55.mockapi.io'
let endpoint = 'users'
btn.addEventListener("click", function(event) {
    let id = input.value
    makeRequest(host + '/' + endpoint + '/' + id + '/products')

})

async function makeRequest(url) {
    console.log('Make request')
    let response = await fetch(url)
    let data = await response.json()


    let out_str = []
    for(let i = 0;i<data.length;i++){
        // out_str.push(data[i].name)
        // out_str.push(data[i].avatar)
        output.innerHTML += `<img src="${data[i].avatar}">`
    }
    
    //     // show ra man hinh
}