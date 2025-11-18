function inicializarScripts() {

    let count = 1;
    const forward = document.getElementById("forward_special");
    const backward = document.getElementById("backward_special");

    function showImage() {
        const text_special = document.getElementById("especial_desc");
        const img_special = document.getElementById("especial_img");

        switch (count) {
            case 1:
                text_special.innerHTML = "Buquê de flores";
                img_special.src = "img/rosasvermelhasjornal-removebg.png";
                break;
            case 2:
                text_special.innerHTML = "Arranjo de girassóis";
                img_special.src = "img/girasol-removebg.png";
                break;
            case 3:
                text_special.innerHTML = "Buquê de flores";
                img_special.src = "img/buque_de_flores_do_campo-removebg.png";
                break;
            case 4:
                text_special.innerHTML = "Arranjo de rosas Brancas";
                img_special.src = "img/arranjo_branco-removebg.png";
                break;
            default:
                text_special.innerHTML = "Buquê de flores";
                img_special.src = "img/rosasvermelhasjornal-removebg.png";
        }
    }

    function nextImage() {
        count++;
        if(count > 4) count = 1;
        showImage();
    }

    setInterval(nextImage, 5000);

    forward?.addEventListener('click', function() {
        count = count >= 4 ? 1 : count + 1;
        showImage();
    });

    backward?.addEventListener('click', function() {
        count = count <= 1 ? 4 : count - 1;
        showImage();
    });

    const iName = document.getElementById("nome");
    const iEmail = document.getElementById("email");
    const iTelephone = document.getElementById("telefone");
    const iMessage = document.getElementById("mensagem");
    const changePage = document.getElementsByTagName("a");

    for (let i = 0; i < changePage.length; i++) {
        changePage[i].addEventListener('click', function(event){
            if(iName?.value || iEmail?.value || iTelephone?.value || iMessage?.value){
                let exit = confirm("Ao sair da página pode ser que o seu progresso no formulário seja perdido. \n Tem certeza que deseja sair?");
                if(!exit){
                    event.preventDefault();
                }
            }
        });
    }

    
    const searchInput = document.getElementById('search');
    const produtos = document.querySelectorAll('.produto');

    searchInput?.addEventListener('input', (event) => {
        const value = event.target.value.toLowerCase().trim();

        produtos.forEach(produto => {
            const text = produto.textContent.toLowerCase();
            produto.style.display = text.includes(value) ? 'grid' : 'none';
        });
    });
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('menu-open');
    });
   
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('#nav-menu a');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (currentPath === linkPath || (currentPath === '/' && linkPath.endsWith('/index.html'))) {
            link.classList.add('current_page');
        }
    });
};
function formatString(value) {
    return value
        .toLowerCase()
        .trim();
}