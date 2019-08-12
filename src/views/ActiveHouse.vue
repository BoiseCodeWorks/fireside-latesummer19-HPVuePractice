<template>
  <div class="ActiveHouse container-fluid">
    <p>made it to active house</p>
    {{house}}
    //TODO prettify this house object

  </div>
</template>

<script>
  export default {
    name: "ActiveHouse",
    props: ['houseId'],
    data() {
      return {}
    },
    mounted() {
      if (!this.house._id) {
        this.$store.dispatch("getActiveHouse", this.houseId)
      }
    },
    computed: {
      house() {
        return this.$store.state.activeHouse
      }
      //TODO get students and filer by this.house.name and pass that into student component
    },
    methods: {},
    components: {
      //TODO create and register a student component
    }
  }
</script>