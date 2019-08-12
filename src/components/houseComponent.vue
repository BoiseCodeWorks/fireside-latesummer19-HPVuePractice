<template>
  <div class="houseComponent col-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{house.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{house.mascot}}</h6>
        <p v-for="value in house.values" class="card-text">
          {{value}}
        </p>
        <a class="card-link" @click="setActiveHouse(house)">View Members In House</a>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  export default {
    name: "houseComponent",
    props: ['house'],
    data() {
      return {}
    },
    computed: {},
    methods: {
      setActiveHouse(house) {
        this.$store.dispatch('setActiveHouse', house)
      }
    },
    components: {}
  }
</script>