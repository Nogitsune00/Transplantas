let count = 1;
let forward = document.getElementById("forward_special")
let backward = document.getElementById("backward_special")
let iName = document.getElementById("nome")
let iEmail = document.getElementById("email")
let iTelephone = document.getElementById("telefone")
let iMessage = document.getElementById("mensagem")
let changePage = document.getElementsByTagName("a")

setInterval(function(){
    nextImage();
},5000)

for (let i = 0; i < changePage.length; i++) {
    changePage[i].addEventListener('click', function(event){
        if(iName.value || iEmail.value || iTelephone.value || iMessage.value){
            let exit = showConfirm();
            if(!exit){
                event.preventDefault();
            }
        }
    });
}

forward.addEventListener('click', function(){
    if(count > 3){
        count = 1
    }else{
        count += 1;
    }
    showImage();
});

backward.addEventListener('click', function(){
    if (count > 1) {
        count -= 1;
    }else{
        count = 4
    }
    showImage();
});

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    showImage();
};

function showImage(){
    let text_special = document.getElementById("especial_desc")
    let img_special = document.getElementById("especial_img")
    switch (count) {
        case 1:
            text_special.innerHTML = "Buquê de flores"
            img_special.src = "img/rosasvermelhasjornal-removebg.png"
            break;
        case 2:
            text_special.innerHTML = "Arranjo de girassóis"
            img_special.src = "img/girasol-removebg.png"
            break;
        case 3:
            text_special.innerHTML = "Buquê de flores"
            img_special.src = "img/buque_de_flores_do_campo-removebg.png"
            break;
        case 4:
            text_special.innerHTML = "Arranjo de rosas Brancas"
            img_special.src = "img/arranjo_branco-removebg.png"
            break;
        default:
            text_special.innerHTML = "Buquê de flores"
            img_special.src = "img/rosasvermelhasjornal-removebg.png"
            break;
    }
};

function showConfirm(){
    return confirm("Ao sair da página pode ser que o seu progresso no formulário seja perdido. \n Tem certeza que deseja sair?");
}