const pollTitle = document.getElementsByClassName('poll__title')
const answersActive =document.getElementsByClassName('poll__answers_active')
const pollAnswer = document.getElementsByClassName('poll__answer')
const xhr = new XMLHttpRequest()
//xhr.withCredentials = true;
xhr.open('GET','https://students.netoservices.ru/nestjs-backend/poll' )
xhr.send()


xhr.onload= function(){
    console.log(xhr.responseText)
    const text = JSON.parse(xhr.responseText)
    
   
    const question = text.data['title']
    
    pollTitle[0].insertAdjacentHTML('afterBegin', question)
    const answers = text.data['answers']
    console.log(answers)
    answers.forEach( el =>{
        answersActive[0].insertAdjacentHTML('AfterBegin', `<button class="poll__answer">
          ${el}
        </button>`)
    })
    const buttons= Array.from(pollAnswer)
    buttons.forEach( el => {
        el.addEventListener( 'click', choice)
        function choice(event){
        
        alert('Спасибо, ваш голос засчитан!')
        } 
    })

} 