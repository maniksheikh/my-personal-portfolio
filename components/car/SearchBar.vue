<template>
    <div
          class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
        >
          <input
            type="text"
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
            placeholder="Search by city..."
            :class=" cityError ? 'border border-red-900' : ''"
            v-model="city"
          />
          <button class="bg-sky-500 px-10 text-white" @click="handleSearch()">Search</button>
        </div>
</template>

<script setup>
   const city =ref("");
   const cityError =ref(false);

   const handleSearch = () => {
    if(!city.value) {
      alert('Please insert your car name')
      return cityError.value = true
    }
    navigateTo(`/city/${city.value}/car`)
   }
</script>

