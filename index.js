
const listaDeAlimentos = ['arroz', 'feijão', 'miojo', 'espaguete', 'milho', 'biscoito', 'banana', 'maçã', 'uva', 'espinafre', 'brócolis', 'tomate']
const listaDeBrinquedos = ['Hot Wheels', 'massinha de modelar', 'Barbie', 'Boneca Baby Alive', 'Quebra-Cabeça 3D Módulo Lunar Apollo', 'Bonecos Toy Story', 'BeyBlade', 'Lego' ]

let vitrine = prompt('Qual tipo de produto deseja ver? alimentos ou brinquedos')

 



    
while(vitrine != 'sair'){

    if(vitrine === 'alimentos'){
        for (let index = 0; index < listaDeAlimentos.length; index++) {
            const element = listaDeAlimentos[index]
            console.log(element)
            
        }
        
       
         produto = prompt('Qual produto deseja comprar?')
         
     
         const indexProduto = listaDeAlimentos.indexOf(produto)
         listaDeAlimentos.splice(indexProduto,1)
         console.log('compra realizada com sucesso!')
         console.log(listaDeAlimentos)
 
         
     
     }
vitrine = prompt('Qual tipo de produto deseja ver? alimentos ou brinquedos')
if (vitrine === 'brinquedos') {
         for (let index = 0; index < listaDeBrinquedos.length; index++) {
             const element = listaDeBrinquedos[index]
             console.log(element)
             
         }
        
          produto = prompt('Qual produto deseja comprar?')
          
     
         indexProduto = listaDeBrinquedos.indexOf(produto)
         listaDeBrinquedos.splice(indexProduto,1)
         console.log('compra realizada com sucesso!')
         console.log(listaDeBrinquedos)

     
     }

}

 



    










