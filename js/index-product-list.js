// (async function () {

//   const response = await fetch("api/coffee.json");
//   const products = await response.json();

//   function productInfoClick(ev) {
//     const productId = ev.target.dataset.id;
//     const product = products.filter(product => product.id === productId)[0];
//     localStorage.product = JSON.stringify(product);
//   }

//   function renderProducts(products) {
//     const productsContainer = document.querySelector('.product-list');
//     for (const product of products) {
//       productsContainer.innerHTML += `
//         <article>
//             <a class="info-link" href="product-info.html" data-id=${product.id}>
//             <img width="450" src="${product.img}" alt="${product.title} coffee"> 
//             <h3>${product.title}</h3></a>
//             <h3>${product.prise}USD</h3>
//             <button class="" href="" data-id=${product.id}>Add to cart</button>
//         </article>
//       `;
//     }
//     document.querySelectorAll('.info-link')
//       .forEach(link => link.addEventListener('click', productInfoClick));
//   }
//   renderProducts(products);
// })();


(async function() {
  const response = await fetch("api/coffee.json");
  const products = await response.json();

  function productInfoClick(ev) {
    const productId = ev.target.dataset.id;
    const product = products.filter( product => product.id === productId)[0];
    localStorage.product = JSON.stringify(product);
  }

  function renderProducts(products) {
    const productsContainer = document.querySelector('.product-list');
    for (const product of products) {
      productsContainer.innerHTML += `
        <article>
            <a class="info-link" href="product-info.html">
            <img data-id=${product.id} width="450" src="${product.img}" alt="${product.title} coffee"> 
            <h3 data-id=${product.id}>${product.title}</h3></a>
            <h3>${product.prise}USD</h3>
            <button class="" href="" data-id=${product.id}>Add to cart</button>
        </article>
      `;
    }
    document.querySelectorAll('.info-link')
     .forEach( link => link.addEventListener('click', productInfoClick) );
  }
  renderProducts(products);
})();