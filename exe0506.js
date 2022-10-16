let btn=document.querySelector("#botao")
btn.addEventListener("click", troca) 

function troca(){
     
    if(btn.innerHTML === "Clique Aqui!"){
        btn.innerHTML="Agora Volte";
        btn.style.backgroundColor="#0f0";
        
        
    } else {
        btn.innerHTML="Clique Aqui!";
        btn.style.backgroundColor="#00f";
        
      }

}
