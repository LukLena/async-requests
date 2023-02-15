
const img = document.getElementById('loader')
const items = document.getElementById('items')
console.log(img)
let xhr = new XMLHttpRequest()
xhr.open('GET', `https://students.netoservices.ru/nestjs-backend/slow-get-courses`)
xhr.send()


xhr.onload = function(){
    img.classList.remove('loader_active')
    const dollar = JSON.parse(xhr.responseText)
    const valute = dollar.response['Valute']
    for (let key in valute){
         const charCode = dollar.response.Valute[key].CharCode
         const value = dollar.response.Valute[key].Value
         items.insertAdjacentHTML('BeforeEnd', `<div class="item">
                <div class="item__code">
                    ${charCode}
                </div>
                <div class="item__value">
                    ${value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>`)
    }        
}