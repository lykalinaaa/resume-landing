<script>

</script>

<template>
  <div class="first_page">
    <p class="text subtitle">Портфолио</p>
    <div class="title_block">
      <p class="text title">Frontend</p>
      <p class="text name">Алина Лу</p>
    </div>
    <div class="menu">
      <p class="text menu_text">Обо мне</p>
      <p class="text menu_text">Skills</p>
      <p class="text menu_text">Работы</p>
      <p class="text menu_text">Для связи</p>
    </div>
  </div>
</template>

<style scoped>

.first_page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text {
  font-family: Haettenschweiler;
  text-transform: uppercase;
}

.subtitle {
  color: #ffffff;
  font-size: 5vh;
}

.title_block {
  width: 100%;
  text-align: center;
  display: flex;
  position: relative;
}

.title {
  color: #ffffff;
  font-size: 33.3vw;
}

.name {
  color: #9d0e0e;
  font-size: 8vw;
  position: absolute;
  top: 43%;
  left: 34%;
  background-color: #191b32;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 10px;
}

.menu {
  width: 95%;
  color: #302f4a;
  font-size: 4vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 25px;
}

.menu p{
  align-self: center;
}

.menu p:hover {
  color: #ffffff;
  transition: 0.5s;
  cursor: pointer;
}

</style>
