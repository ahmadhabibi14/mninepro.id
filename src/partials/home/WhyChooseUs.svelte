<script>
	import { Icon } from "svelte-icons-pack";
	import { LuHandHeart } from "svelte-icons-pack/lu";
	import { RiBusinessShakeHandsLine, RiSystemSettings4Line } from "svelte-icons-pack/ri";

</script>
<div class="container mx-auto my-14">
  <div class="flex flex-col gap-11">
    <h2 class="text-5xl text-center font-bold font-orbitron">Why Choose Us</h2>
    <div class="grid grid-cols-3 gap-6">
      <div class="bg-slate-100 rounded-xl flex flex-col gap-3 px-5 py-4">
        <Icon
          src={RiSystemSettings4Line}
          size="45"
          className="fill-blue-600"
        />
        <h4 class="text-xl font-bold font-orbitron">Sumber Daya Berkualitas</h4>
        <p class="">Tim kami terdiri dari SDM yang handal dan telah melewati berbagai proses seleksi.
Pelatihan ini bertujuan demi memberikan kualitas dan kemampuan kepada tim
dalam menjalankan tugasnya.</p>
      </div>

      <div class="bg-slate-100 rounded-xl flex flex-col gap-3 px-5 py-4">
        <Icon
          src={RiBusinessShakeHandsLine}
          size="45"
          className="fill-mnine"
        />
        <h4 class="text-xl font-bold font-orbitron">Kolaborasi Dengan Mitra</h4>
        <p class="">Kami bekerja sama dengan berbagai mitra
yang kompeten dalam bidang ini.
Mitra - mitra terpercaya kami sangat aware
dan profesionalisme dalam menangani
sebuah project.</p>
      </div>

      <div class="bg-slate-100 rounded-xl flex flex-col gap-3 px-5 py-4">
        <Icon
          src={LuHandHeart}
          size="45"
          className="stroke-green-600"
        />
        <h4 class="text-xl font-bold font-orbitron">Pelayanan Dengan Santun</h4>
        <p class="">Keramahan dan sopan santun dalam
menjalankan tugas adalah budaya yang kami
junjung tinggi. Prioritas kami adalah memberikan pelayanan yang terbaik dan
melaksanakan tugas dengan penuh tanggung jawab.</p>
      </div>
    </div>
  </div>
</div>