const productosConteiner = document.querySelector('#contenedor-productos')


const item = stockProductos [0]

const div = document.createElement('div')
div.classList.add('producto')

div.innerHTML = `
                <img src="./img/espejo irregular.jpg" alt="">
                <h3>Espejo irregular</h3>
                <p>Un espejo con onda</p>
                <p>Espesor: 4 mm</p>
                <P class="precioProducto">Precio: $2500</P>
                <button class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
`
console.log(div)

                

                
               