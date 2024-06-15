<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faLeaf, faTree, faGlobe } from "@fortawesome/free-solid-svg-icons";
  import '../lib/icons'; // Import the icons configuration
</script>
  
<footer class="w-full h-auto bg-[#282828] text-white flex flex-col justify-center items-center py-8 absolute left-0" style="top: 898px;">
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap justify-between">
      <!-- Left Section -->
      <div class="w-full md:w-1/3 mb-4 md:mb-0">
        <h1 class="text-lg font-bold">Green4Life EcoHub</h1>
        <p class="text-sm mt-2">Empowering spaces to enable communities to achieve balance.</p>
        <div class="mt-4">
          <span class="text-sm">Connect with us:</span>
          <div class="flex space-x-3 mt-2">
            <!-- Icons -->
            <a href="#" class="text-white"><FontAwesomeIcon icon={faLeaf} /></a>
            <a href="#" class="text-white"><FontAwesomeIcon icon={faTree} /></a>
            <a href="#" class="text-white"><FontAwesomeIcon icon={faGlobe} /></a>
          </div>
        </div>
      </div>

      <!-- Right Sections -->
      <div class="w-full md:w-2/3 flex flex-wrap justify-between space-y-4 md:space-y-0">
        <div class="w-1/2 md:w-auto">
          <h2 class="text-sm font-bold">Resources</h2>
          <ul class="text-sm mt-2 space-y-1">
            <li>Hackathons</li>
            <li>Collaborations</li>
            <li>Innovations</li>
          </ul>
        </div>
        <div class="w-1/2 md:w-auto">
          <h2 class="text-sm font-bold">Community</h2>
          <ul class="text-sm mt-2 space-y-1">
            <li>Mentorship</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div class="w-1/2 md:w-auto">
          <h2 class="text-sm font-bold">Empowerment</h2>
          <ul class="text-sm mt-2 space-y-1">
            <li>Information</li>
            <li>Opportunities</li>
            <li>Updates</li>
          </ul>
        </div>
        <div class="w-1/2 md:w-auto">
          <h2 class="text-sm font-bold">Inspiration</h2>
          <ul class="text-sm mt-2 space-y-1">
            <li>Support</li>
            <li>Knowledge sharing</li>
            <li>Awareness</li>
          </ul>
        </div>
        <div class="w-1/2 md:w-auto">
          <h2 class="text-sm font-bold">Connection</h2>
          <ul class="text-sm mt-2 space-y-1">
            <li>Engage</li>
            <li>Suggestions</li>
            <li>Get in touch</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
