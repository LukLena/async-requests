
const img = document.getElementById('loader')
const items = document.getElementsByClassName('items')
console.log(img)
let xhr = new XMLHttpRequest()
xhr.open('GET', `https://students.netoservices.ru/nestjs-backend/slow-get-courses`)
xhr.send()


xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 ){
       img.classList.remove('loader_active')
    
       // console.log(xhr.responseText)
//        const dollar = JSON.parse(xhr.responseText)
//        // массив валют 
//        const valute = dollar.response['Valute']
//        console.log(valute)
//        // для каждого элемента валют создавать див с классом item
////        const itemCode 
//        valute.forEach( (el) => {
//           items[0].insertAdjacentHTML('BeforeAfter', `<div class="item"></div>`) 
//        })
        
        }
}