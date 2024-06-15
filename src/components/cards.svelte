<script>
  import { onMount } from 'svelte';
  import EmblaCarousel from 'embla-carousel';
  import AutoScroll from 'embla-carousel-auto-scroll';

  let embla;
  const options = { loop: true };
  const plugins = [AutoScroll({ playOnInit: true, interval: 5000 })];
  let selectedScrollSnap = 0;

  let cards = [
    { imageUrl: 'https://images.unsplash.com/photo-1529123276648-af6cfff88c20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 1' },
    { imageUrl: 'https://images.unsplash.com/photo-1600185109987-621f937ea7d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 2' },
    { imageUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 3' },
    { imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 4' },
    { imageUrl: 'https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Image 5' }
  ];

  function onInit(instance) {
    embla = instance;
    embla.on('select', updateSelected);
    updateSelected();
  }

  function updateSelected() {
    selectedScrollSnap = embla.selectedScrollSnap();
  }

  onMount(() => {
    const emblaNode = document.querySelector('.embla');
    const viewportNode = emblaNode.querySelector('.embla__viewport');
    embla = EmblaCarousel(viewportNode, options, plugins);
    embla.on('select', updateSelected);
    updateSelected();
  });

  function scrollPrev() {
    embla.scrollPrev();
  }

  function scrollNext() {
    embla.scrollNext();
  }

  function scrollTo(index) {
    embla.scrollTo(index);
  }
</script>

<div class="embla" style="margin-top: -16px;">
  <div class="embla__viewport">
    <div class="embla__container">
      {#each cards as card, index}
        <div class="embla__slide">
          <img src={card.imageUrl} alt={card.title} class="image" />
        </div>
      {/each}
    </div>
  </div>
  <button class="embla__button embla__button--prev" on:click={scrollPrev}>&#x2190;</button>
  <button class="embla__button embla__button--next" on:click={scrollNext}>&#x2192;</button>
  <div class="embla__dots">
    {#each cards as _, index}
      <button class="embla__dot w-[2px] h-[2px] rounded-full" class:selected={index === selectedScrollSnap} on:click={() => scrollTo(index)}></button>
    {/each}
  </div>
</div>

<style>
  .embla {
    position: relative;
    width: 100%;
    margin-top: 16px; /* Move everything 16px closer to the top */
  }
  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }
  .embla__container {
    display: flex;
    transition: transform 0.3s ease;
  }
  .embla__slide {
    flex: 0 0 auto;
    padding: 0 10px;
  }
  .image {
    width: 280px;
    height: 170px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .embla__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
  }
  .embla__button--prev {
    left: 10px;
  }
  .embla__button--next {
    right: 10px;
  }
  .embla__dots {
    text-align: center;
    position: absolute;
    /* bottom: 10px; */
    width: 100%;
  }
  .embla__dot {
    background: #282828;
    border: 1px solid #fff;
    border-radius: 1000%;
    /* display: inline-block; */
    /* height: 20px; */
    /* width: 20px; */
    margin: 0 7px;
    cursor: pointer;
  }
  .embla__dot.selected {
    background: #91e717;
    opacity: 50%;
  }
</style>
