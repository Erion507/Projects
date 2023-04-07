let slider = tns({
  container : ".my-slider",
  "slideBy" : "1",
  "speed" : 400,
  "nav" : false,
  autoplay : true,
  controls : false,
  autoplayButtonOutput : false,
  responsive: {
    1600: {
      items : 4,
      gutter: 20,
    },
    1024: {
      items: 4,
      gutter: 20,
    },
    768: {
      items : 2,
      gutter : 20
    },
    480: {
      items: 1
    }
  }
})

const cards = [
];

const cardContainer = document.querySelector('.card-container');

cards.forEach(card => {
  const cardHTML = `
    <div class="card2">
      <div class="card-content2">
        <i${card.iitem}></i>
        <h3>${card.title}</h3>
        <p>${card.description}</p>
      </div>
    </div>
  `;
  cardContainer.innerHTML += cardHTML;
});

{/* <i class="fa-solid fa-tv"></i> */}