<script lang="ts">
  const partners: {
    name?: string;
    imgUrl: string;
  }[] = [
    {name: 'Bank NTB Syariah', imgUrl: '/icons/partners/01-bank-ntb-syariah.png'},
    {name: 'Pemerintah Kota Mataram', imgUrl: '/icons/partners/04-pemkot-mataram.png'},
    {name: 'PT. Djarum Indo', imgUrl: '/icons/partners/02-djarum.png'},
    {name: 'Bank Dinar Ashri', imgUrl: '/icons/partners/03-bank-dinar-ashri.png'},
    {name: 'Bank Indonesia', imgUrl: '/icons/partners/05-bank-bi.png'},
    {name: 'Nahdlatul Ulama NTB', imgUrl: '/icons/partners/06-nu.png'},
    {name: 'Nahdlatul Wathan', imgUrl: '/icons/partners/07-nw.png'},
  ]
</script>

<div class="container max-w-6xl w-full px-4 md:px-0 mx-auto md:my-14 my-7">
  <div class="flex flex-col gap-10">
    <h3 class="text-3xl text-center font-bold font-poppins">Our Partners</h3>
    <div class="mdw-8/12 flex flex-wrap gap-x-14 gap-y-10 justify-center items-center mx-auto">
      {#each partners as p}
        <div class="h-fit w-auto group" title={p.name}>
          <img
            src={p.imgUrl}
            alt={p.name}
            class="h-[50px] w-auto grayscale group-hover:grayscale-0"
          />
        </div>
      {/each}
    </div>
  </div>
</div>