<template>
  <div>
    <CarDetailsHero></CarDetailsHero>
    <CarDetailsAttributes></CarDetailsAttributes>
    <CarDetailsDescription></CarDetailsDescription>
    <CarDetailsContact></CarDetailsContact>
  </div>
</template>

<script setup>
const route = useRoute();
const {toTitleCase} = useUtilities();
useHead({
  title: toTitleCase(route.params.name),
});

definePageMeta({
  layout: "custom",
});


</script>