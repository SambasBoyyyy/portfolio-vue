<template>
  <div class="about">
    <h1 class="title">Welcome to the Contact Page!</h1>
    <p class="subtitle">Please sign in to continue:</p>
  </div>
</template>

<script>
export default {
  name: 'ServiceView',
}
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
}

.title {
  font-size: 32px;
  color: #0fe6e6;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 18px;
  color: #2a0b9b;
}
</style>
