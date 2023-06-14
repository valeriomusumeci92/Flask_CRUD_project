// creazione di un array contente oggetti con coppie chiave valore cosi da rendere dinamico l'inserimento o cancellazione degli annunci senza intaccare la struttura della pagina

let cardsWrapper = document.querySelector('#rowPadreCard');
let annunci = [
  {name: 'Anello', category: 'Accessori breve descrizione A', price:'699.99', url:'static/images/anello2.jpg'},
  {name:'Occhiali' , category: 'Acccessori breve descrizione B', price:'159.99' , url:'static/images/occhiali.png'},
  {name:'Orologio' , category: 'Accessori breve descrizione C', price: '299.99', url:'static/images/orologio.jpg'},
  {name: 'Collana', category:'Accessori breve descrizione D' , price: '499.99', url:'static/images/collana.png'},
]

// metodo append and child con string interpolation
annunci.forEach((annuncio) => {
  let div = document.createElement('div');
  div.classList.add('col-6', 'col-md-3', 'p-3');
  div.innerHTML = `
  
  <div class="card accCard" style="width: 18rem;">
  <img src="${annuncio.url}" class="card-img-top img-miaSize imgCardAlpha" alt="...">
  
  <div class="card-body" >
    <h5 class="">${annuncio.name}<i class="fa-regular fa-heart fs-5 mx-2" id="myHeart"></i> </h5>
    
    <p class="card-text">${annuncio.category}</p>
    <p class ="card-text fw-bold lead"><i class="fa-solid fa-euro-sign p-1" style="color: #000000;"></i>${annuncio.price}</p>
    <a href="accessori" class="btn btn-dark d-block mx-auto">Vai al dettaglio</a>
  </div>
</div> 
`
  cardsWrapper.appendChild(div);
});

// animazione doppio click icona
let iconHearts = document.querySelectorAll('#myHeart');
let cardImgs = document.querySelectorAll('.card-img-top');

// utilizzo un forEach che cicla la nodelist, col queryselectorALL infatti vado a generare un cosi detto arraylike elemento cioè la nodelist e l'unico metodo degli array che funziona nel DOM per manipolare array ed arraylike è proprio il forEach 

iconHearts.forEach((icon) => {
  icon.addEventListener("dblclick", () => {
    icon.classList.toggle("fa-solid");

   
  });
});

// animazione doppio click immagine
cardImgs.forEach((cardImg, i) => {
    cardImg.addEventListener("dblclick", () => {
      iconHearts[i].classList.toggle("fa-solid");
      

    
    });
  });

  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });