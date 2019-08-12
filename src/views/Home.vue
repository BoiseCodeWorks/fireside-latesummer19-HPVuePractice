<template>
  <div class="home container-fluid">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="row">
      <houseComponent v-for="house in houses" :house="house" :key="house._id"></houseComponent>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import houseComponent from '../components/houseComponent'
  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getHouses')

    },
    computed: {
      houses() {
        return this.$store.state.houses
      }
    },
    components: {
      houseComponent
    }
  }
</script>