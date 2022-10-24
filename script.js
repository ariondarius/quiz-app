const quizData = [
    {
        question: 'Care este capitala României?',
        a: 'Viena',
        b: 'Amsterdam',
        c: 'București',
        d: 'Sofia',
        correct: 'c'
    },
    {
        question: 'Ce fluviu străbate România?',
        a: 'Volga',
        b: 'Amazon',
        c: 'Sena',
        d: 'Dunărea',
        correct: 'd'
    },
    {
        question: 'În ce an a intrat România in Uniunea Europeană?',
        a: '2005',
        b: '2007',
        c: '2003',
        d: '2011',
        correct: 'b'
    },
    {
        question: 'În ce oraș se află opera de artă Coloana Infinitului a marelui sculptor Constantin Brâncuși?',
        a: 'Târgu-Jiu',
        b: 'Râmnicu-Vâlcea',
        c: 'București',
        d: 'Brașov',
        correct: 'a'
    }
];   /*create an object with value pair keys */
const questionEl = document.getElementById('question');    /*select h2 */
const first = document.getElementById('first');  /*select label for a */
const second = document.getElementById('second');      /*select label for b */
const third = document.getElementById('third'); /*select label for c */
const fourth = document.getElementById('fourth');  /*select label for d*/
const submitBtn=document.getElementById('submit'); /*select the buttonm*/
let currentQuiz = 0;   /* var for counting question */

loadQuiz();       /*call the function */
function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    first.innerText = currentQuizData.a;
    second.innerText = currentQuizData.b;
    third.innerText = currentQuizData.c;
    fourth.innerText = currentQuizData.d;
     
}

submitBtn.addEventListener("click", ()=>{
    currentQuiz++;
    if(currentQuiz<quizData.length){
        loadQuiz();  
    }
    else {
        alert("You finished the questions!")
    }
});