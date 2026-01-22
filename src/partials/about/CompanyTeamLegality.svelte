<script lang="ts">
  const organizationStructures: {
    name: string;
    position: string;
  }[] = [
    {
      name: 'Puguh',
      position: 'CEO'
    },
    {
      name: 'Kafi',
      position: 'Project Manager'
    },
    {
      name: 'Yudi',
      position: 'Operational Manager'
    },
    {
      name: 'Ekik',
      position: 'Marketing'
    }
  ]
</script>

<div class="md:container w-full px-5 md:px-0 mx-auto md:my-14 my-7">
  <div class="md:grid md:grid-cols-2 gap-7 flex flex-col">
    <div class="flex md:flex-row flex-col gap-6 justify-evenly items-center">
      <h2 class="text-4xl font-orbitron font-bold">Our Team</h2>
      <div class="flex flex-col md:gap-4 gap-3 justify-center items-center">
        {#each organizationStructures as os, idx}
          <div class="bg-black rounded-xl py-3 px-14 text-white flex flex-col gap-1 justify-center items-center">
            <span class="text-xl md:text-2xl font-bold">{os.name}</span>
            <span class="w-full h-px bg-slate-300"></span>
            <span class="font-orbitron">{os.position}</span>
          </div>
          {#if idx !== organizationStructures.length - 1}
            <div class="w-1 bg-mnine md:h-12 h-7 rounded-full"></div>
          {/if}
        {/each}
      </div>
    </div>
    <div class="bg-slate-100 rounded-xl md:px-10 px-6 py-7 flex flex-col justify-center items-center gap-9">
      <h2 class="text-4xl font-orbitron font-bold text-center">Legality</h2>
      <div class="flex flex-col justify-center text-center gap-5">
        <div class="flex flex-col gap-0.5">
          <span>
            <p>Hj. Indah Purwanti, SH.</p>
            <p>(Nomor 142 Tgl 25 Maret 2011)</p>
          </span>
          <span class="w-52 h-px bg-mnine mx-auto"></span>
          <span class="font-orbitron text-sm">Akta Notaris</span>
        </div>
        <div class="flex flex-col gap-0.5">
          <span>231 221 000 700 2</span>
          <span class="w-32 h-px bg-mnine mx-auto"></span>
          <span class="font-orbitron text-sm">NIB</span>
        </div>
        <div class="flex flex-col gap-0.5">
          <span>03.108.719.0-911.000</span>
          <span class="w-36 h-px bg-mnine mx-auto"></span>
          <span class="font-orbitron text-sm">NPWP</span>
        </div>
      </div>
      <div>
        <img
          src="/icons/cv-media-sembilan.png"
          alt="CV. Media Sembilan"
          class="w-80 h-auto"
        />
      </div>
    </div>
  </div>
</div>