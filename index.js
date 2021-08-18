
const listaDeAlimentos = ['arroz', 'feijão', 'miojo', 'espaguete', 'milho', 'biscoito', 'banana', 'maçã', 'uva', 'espinafre', 'brócolis', 'tomate']
const listaDeBrinquedos = ['Hot Wheels', 'massinha de modelar', 'Barbie', 'Boneca Baby Alive', 'Quebra-Cabeça 3D Módulo Lunar Apollo', 'Bonecos Toy Story', 'BeyBlade', 'Lego' ]

alert("Bem-vindo(a) a lojinha no console! \nPrimeiro abra o console do navegador e em seguida clique em 'começar a comprar' para fazer suas compras. \nLembre-se: para sair da loja digite 'sair' \nBoas compras!!")
let vitrine

function chamarLoop() {


    while(vitrine != 'sair') {
        
    vitrine = prompt('Qual tipo de produto deseja ver? alimentos ou brinquedos')

        if(vitrine === 'alimentos') {

            for (let index = 0; index < listaDeAlimentos.length; index++) {
                const element = listaDeAlimentos[index]
                console.log(element)
            }
            
            produto = prompt('Qual produto deseja comprar?')
            const indexProduto = listaDeAlimentos.indexOf(produto)

            console.log(`Compra realizada com sucesso. Você comprou ${produto}!`)
            listaDeAlimentos.splice(indexProduto,1)

            console.log(`Alimentos disponíveis: ${listaDeAlimentos}`)
        }
        
        if (vitrine === 'brinquedos') {

            for (let index = 0; index < listaDeBrinquedos.length; index++) {
                const element = listaDeBrinquedos[index]
                console.log(element)
            }
            
            produto = prompt('Qual produto deseja comprar?')
            indexProduto = listaDeBrinquedos.indexOf(produto)

            console.log(`Compra realizada com sucesso. Você comprou ${produto}!`)
            listaDeBrinquedos.splice(indexProduto,1)

            console.log(`Brinquedos disponíveis na loja: ${listaDeBrinquedos}`)
        }
    }

    if(vitrine === 'sair'){
        console.log('Obrigada por comprar aqui! Até mais')
    }

}

    
    

    



    










