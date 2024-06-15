<script>
    export let cards = [
      {
        imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Card 1',
        description: 'This is the description for card 1',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Card 2',
        description: 'This is the description for card 2',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1600185109987-621f937ea7d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Card 3',
        description: 'This is the description for card 3',
      },
      {
        imageUrl: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Card 4',
        description: 'This is the description for card 4',
      }
      // Add more cards as needed
    ];
  
    let currentIndex = 0;
  
    function cycleCards() {
      currentIndex = (currentIndex + 1) % cards.length;
    }
  
    setInterval(cycleCards, 4000); // Change card every 2 seconds
  </script>
  
  <!-- <div class=" flex items-center gap-6 justify-center"> -->
    <div class="card-stack relative w-[558px] h-[348px]">
      {#each cards as card, index}
        <div
          class="card absolute w-full h-full transition-transform duration-1000"
          style="transform: translate(-{(index - currentIndex + cards.length) % cards.length * 20}px, {(index - currentIndex + cards.length) % cards.length * 20}px) rotateY(0deg); z-index: -{cards.length - ((index - currentIndex + cards.length) % cards.length)}"
        >
          <img src={card.imageUrl} alt={card.title} class="w-full h-full object-cover rounded-lg shadow-lg" />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg">
            <h2 class="text-white text-xl font-semibold">{card.title}</h2>
            <p class="text-white text-sm">{card.description}</p>
          </div>
        </div>
      {/each}
    </div>
  <!-- </div> -->
  
  <style>
    .card-stack {
      perspective: 1000px;
    }
  
    .card {
      /* backface-visibility: hidden; */
      transform-style: preserve-3d;
      box-shadow: 0 10px 16px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    }
  </style>
  