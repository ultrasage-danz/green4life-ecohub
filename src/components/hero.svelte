<script>
    import CARD from "./card.svelte";
    import CARDS from "./cards.svelte";
    import Strip from "./strip.svelte";
    import Header from "./Header.svelte";
import Sectionwrapper from "./sectionwrapper.svelte";
    import Footer from "./Footer.svelte";

</script>

<Sectionwrapper>
    <Header />
    <div class="pt-2.5 flex flex-col md:flex-row">
        <div class="flex flex-col pt-28 md:pt-56 gap-7 md:gap-10 flex-1 justify-center pb-10 md:pb-14  md:pl-4 font-bold md:h-[140px] md:w-[476px]">
            <h2 class=" text-3xl sm:text-4xl md:text-6xl w-full text-center md:text-left">Unite for a <br class="hidden md:block"/>sustainable <span class="md:hidden">future</span></h2>
            <span class="md:text-xl text-center md:text-left font-semibold">Collaborate effectively to stop climate change</span>
            <div class="flex justify-center md:justify-start">
                <a href="/Discover">
                  <button class="hover:bg-[#91e717] font-semibold rounded-3xl h-[52px] w-[178px] bg-slate-200 text-black text-lg grid place-items-center hover:text-white">
                    Join now
                  </button>
                </a>
            </div>
            
            <!-- <a  href="/Discover" class="items-center justify-center align-center">
                <button class="items-center justify-center hover:bg-[#91e717] 
                font-semibold rounded-3xl h-[52px] w-[178px] bg-slate-200 
                text-black text-lg grid  place-items-center hover:text-white">
                    Join now
                </button>
            </a> -->

        </div>
        <!-- <div class="flex justify-center md:justify-start pt-6 md:pt-0">
            
        </div>  -->
        <!-- <div class="md:block flex pt-6  flex-1 justify-center align-right"><CARD/></div> -->
        <!--  -->
        <div class="flex justify-center mt-9 pr-3 pt-1 md:pt-0 w-full md:w-auto">
            <!-- Conditionally render CARD or CARDS based on screen size -->
            <div class="pt-4 hidden md:block w-full">
                <CARD class="w-full h-auto pt-4 pr-3" />
              <!-- <CARD class="w-full h-auto" /> -->
            </div>
            <div class=" block md:hidden w-auto">
              <CARDS class="" />
            </div>
        </div>
        
        
    </div>
    <Strip />
    <Footer />
    <!-- <div class="pt-10"></div> -->

    
    <!-- <div class="pt-20 max-w-[1440px] max-h-[184px] bg-[#23c90a]"></div> -->
    <!-- <div ">A</div> -->
    
    <!-- <div>jin</div> -->
</Sectionwrapper>