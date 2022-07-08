
// const $option1 = document.querySelector('#op-1'),
//     $option2 = document.querySelector('#op-2'),
//     $option3 = document.querySelector('#op-3')


    
// function options(op, a, b){
//     document.querySelector(op).classList.add('is-active')
//     document.querySelector(a).classList.remove('is-active')
//     document.querySelector(b).classList.remove('is-active')
// }

// $option1.addEventListener('click', ()=>{
//     options('#first', '#second', '#thirst')

// })
// $option2.addEventListener('click', ()=>{
//     options('#second', '#first', '#thirst')

// })
// $option3.addEventListener('click', ()=>{
//     options('#thirst', '#second', '#first')

// })


const cards = document.querySelectorAll('.hero-res');
const arrowBtn = document.querySelectorAll('.option-hero');


function showAnswer(button) {
    cards.forEach(cards => {
        cards.style.display = 'none';
    })
    document.querySelector(`#${button}`).style.display = 'flex';
    console.log(button)
    arrowBtn.forEach(arrowBtn =>{
        arrowBtn.classList.remove('border-active')
    })
}

/* -------------- CLICK EVENT -------------- */

arrowBtn.forEach(arrowBtn => {
    arrowBtn.onclick = function() {
        showAnswer(arrowBtn.dataset.button);
        
    arrowBtn.classList.add('border-active')
    }
})

// form
const $input = document.querySelector('.inputMail'),
    $inputLabel = document.querySelector('.invalid-msg'),
    $submit = document.querySelector('.btn-contact');

function form(e){
    e.preventDefault();

    const input = $input.value;
    let regex = new RegExp($input.pattern)
    if(input ===''){
        $input.classList.add('input-invalid');
        $inputLabel.classList.add('block')
    }else if(!regex.exec(input)){
        $input.classList.add('input-invalid');
        $inputLabel.classList.add('block')
    }else if(input !== ''){
        $input.classList.remove('input-invalid');
        $inputLabel.classList.remove('block')
        $input.value='';
        
    }
}
$submit.addEventListener('click', e =>{
    form(e)
})

