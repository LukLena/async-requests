
form.addEventListener('submit', (e) => {
    event.preventDefault()
    
     let xhr = new XMLHttpRequest()
     xhr.open('POST', `https://students.netoservices.ru/nestjs-backend/upload`, true)

     let file = document.getElementById('file')
   
     xhr.upload.onprogress = function(event) {
         const progress = document.getElementById('progress')
         
         const percent = event.loaded / event.total 
         progress.value = percent
     };
     
    xhr.upload.onload = function() {
          alert(`Файл успешно загружен`);
    };

    xhr.send(file.files[0]) 
})
