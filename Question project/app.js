//using selectors inside the element
const questions =document.querySelectorAll('.question');
questions.forEach((que)=>{
    const btn = que.querySelector('.question-btn');
    // console.log(btn)
    btn.addEventListener('click' ,()=>{

       questions.forEach((item)=>{
            if(item !==que){
                item.classList.remove('show-text');
            }
       });



        que.classList.toggle('show-text');
    })
});








// traversing the dom
// const btns = document.querySelectorAll('.question-btn');
// btns.forEach((btn)=>{
//     btn.addEventListener('click' , (e)=>{
//         const question = (e.currentTarget.parentElement.parentElement);
//         question.classList.toggle('show-text')
//     })
// });