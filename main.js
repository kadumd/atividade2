const opcoesDeFlores = document.querySelectorAll('.opcoesDeFlores')
const florEmAmostra = document.querySelector('#florEmAmostra')
const descricaoDoPerfume = document.querySelector('#descricaoDoPerfumeEmAmostra')
const nomeDoPerfume = document.querySelector('#nomeDoPerfume')

opcoesDeFlores.forEach(element => {
    element.addEventListener('click', trocarFoto)
});

let perfumeAAmostra = "Arabesque"

function trocarFoto(params) {
    let idDoProduto = params.target.id
    nomeDoPerfume.textContent = idDoProduto
    florEmAmostra.src = `./img/${idDoProduto}.webp`

    if (idDoProduto === "Arabesque") {
        descricaoDoPerfume.textContent = "Um perfume natural de aura exótica, combinando notas quentes e especiadas com um toque floral suave. Ideal para quem gosta de fragrâncias marcantes e misteriosas."
        perfumeAAmostra = "Arabesque"
        return
    }

    if (idDoProduto === "Basil") {
        descricaoDoPerfume.textContent = "Frescor verde e herbal direto da natureza. Notas de manjericão em destaque, limpas e revigorantes, perfeito para quem busca leveza e sensação de ar puro."
        perfumeAAmostra = "Basil"
        return
    }

    if (idDoProduto === "Gizeh") {
        descricaoDoPerfume.textContent = "Uma fragrância terrosa e mineral, inspirada em paisagens desérticas. Seco, sofisticado e orgânico — ideal para quem prefere perfumes naturais mais densos e enraizados."
        perfumeAAmostra = "Gizeh"
        return
    }
}

//whatsapp

const button = document.querySelectorAll('button')

button.forEach(element => {
    element.addEventListener('click', () => {
        window.open(`https://wa.me/5587999336770?text=Olá,%20gostaria%20de%20mais%20detalhes%20sobre%20o%20produto%20${perfumeAAmostra}.`, "_blank")
    })
});

//setas

const setas = document.querySelectorAll('.setas')
const textoQuinto = document.querySelectorAll('.texto-quinto')

setas.forEach(element => {
    element.addEventListener('click', clickSetasFuncao)
});

function clickSetasFuncao(params) {
    let setaEspecifica = params.target
    if (setaEspecifica.style.transform === 'scale(1, 1)') {
        setas.forEach(element => {
            element.style.transform = 'scale(1, 1)'
        });
        setaEspecifica.style.transform = 'scale(1, -1)'


        textoQuinto.forEach(element => {
            element.style.display = 'none'
        });
        let texto = document.querySelector(`#${'texto-quinto' + setaEspecifica.id}`)
        texto.style.display = 'flex'
        console.log(texto)
        return
    } else {
        setaEspecifica.style.transform = 'scale(1, 1)'
        textoQuinto.forEach(element => {
            element.style.display = 'none'
        });
        return
    }
}

// dark mode 

// const html = document.querySelector('html')

// function mostrarHora() {
//     const agora = new Date();
//     let horas = agora.getHours();

//     horas = horas.toString().padStart(2, '0');
//     if (horas > 5 && horas <18) {
//         html.classList.remove("dark-mode")
//     } else {
//         html.classList.add("dark-mode")
//     }
//     console.log(horas)
// }

// setInterval(mostrarHora, 1000);

// mostrarHora();