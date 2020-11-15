<template>
  <div class="header">
    <img alt="dark mode" src="../assets/icons/dark_mode.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props : {
      msg : String
  }
}
</script>