//set initial count
let count =0;
//select value and btns
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) =>{
    btn.addEventListener('click' ,(e)=>{
        const styles =e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;        
            // value.style.color = "red";
        }else if(styles.contains('increase')){
            count++;          
            // value.style.color = "green";
        }else{
            count = 0
            // value.style.color = "var(--clr-grey-1)";
        }

        //we can do in this way also
        if(count >0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;//we can write this statement in if else also
        
    });
});;
