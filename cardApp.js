
const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const footer = document.getElementById('footer');
const finalizarCompra = document.getElementById('finalizarCompra');
const templateFooter = document.getElementById('templateFooter');
const fragment = document.createDocumentFragment();


document.addEventListener('click', (e) => {
    if (e.target.matches(".card .btn-outline-primary")) {
        agregarAlCarrito(e)
    }
    if (e.target.matches(".list-group-item .btn-success")) {
        agregarFruta(e);
     }
    if (e.target.matches(".list-group-item .btn-danger")) {
         quitarFruta(e);
     }

})

let carritoObjeto = [];

const agregarAlCarrito = (e) => {

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio)
    };

   const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
 
    if (indice === -1 ){
        carritoObjeto.push(producto)
        }
    pintarCarrito();
};
const pintarCarrito = () => {
    carrito.textContent = "";

    carritoObjeto.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.text-white .lead').textContent = item.titulo;
        clone.querySelector('.badge').textContent = item.cantidad;
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad; 
        clone.querySelector('.btn-danger').dataset.id = item.id;
        clone.querySelector('.btn-success').dataset.id = item.id;

        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);
    pintarFooter();
};

const pintarFooter = () => {
        footer.textContent = "";
        const total = carritoObjeto.reduce(
            (acumulador, current) => acumulador + current.cantidad * current.precio, 0
        )
        const clone = templateFooter.content.cloneNode(true);
        clone.querySelector('span').textContent=total
        footer.appendChild(clone)
};


const agregarFruta = (e) => {  
carritoObjeto = carritoObjeto.map(item => {
    if(item.id === e.target.dataset.id) {
        item.cantidad++;
    }
    return item;
});
pintarCarrito()
};

const quitarFruta = (e) => {
    carritoObjeto = carritoObjeto.filter(item => {
        if(item.id === e.target.dataset.id) {
           if (item.cantidad > 0) {
            item.cantidad--
                if (item.cantidad === 0) {
                    return
                };
                return item;
           };
        } else { return item };
        return item;
});
pintarCarrito();
};


document.addEventListener('click', (e) => {

    if(finalizarCompra == 0){
        alert('no tienes objetos en el carrito')
    }
    
    })

















































// -------------------stopPropagation*querySelectorAll------------------------------------------
// const padre = document.querySelector('.border-primary');
// const hijo = document.querySelector('.border-secundary');
// const nieto = document.querySelector('.border-danger');

// const cajitas = document.querySelectorAll('.border')
// cajitas.forEach(caja => {
//     caja.addEventListener('click', (e) => {
//         e.stopPropagation()
//         console.log('me diste click');
//     })
// })
// --------------------------preventDefault--------------------------------------

// const formulario = document.querySelector('form');

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log('me diste click');
// })





















