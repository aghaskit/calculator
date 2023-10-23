let result = document.querySelector('.result')
let clear = document.querySelector('.clear')
let del = document.querySelector('.del')
let equal = document.querySelector('.equal')
let spans = document.querySelectorAll('span')

console.log(spans)


 
for(let span of spans){
    span.addEventListener('click', function(){
       if(span.textContent === '='){
        result.textContent = eval(result.textContent)
       } else{
            if(span.textContent === 'del'){
              result.textContent = result.textContent.slice(0,result.textContent.length - 1)
            }else if(span.textContent === 'clear'){
                result.textContent = ''
            }else{
                result.textContent += span.textContent
            }
       }
    })
}

