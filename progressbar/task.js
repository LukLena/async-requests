const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    event.preventDefault()
    
     let xhr = new XMLHttpRequest()
     xhr.open('POST', `https://students.netoservices.ru/nestjs-backend/upload`, true)

     let file = document.getElementById('file')
     let formData = new FormData()
     formData.append('file', file.value)
    
     
    xhr.onreadystatechange = function(){
    
     
        console.log(xhr.readyState)

        const progress = document.getElementById('progress')
        if (progress.value != 1.0){
           progress.value = xhr.readyState * 0.25
     }
}
    xhr.send(formData) 
})