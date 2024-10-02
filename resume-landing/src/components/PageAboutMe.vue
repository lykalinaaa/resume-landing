<script>

</script>

<template>
  <div class="about_page">
    <p class="title">Обо мне</p>
    <div class="info">
      <div class="about_text">
      Я Лукьянченкова Алина - <br><span>junior frontend-developer</span> из Санкт-Петербурга. <br><br>
      Образование: диплом бакалавра СПбПУ 2024 <br>
      Направление: прикладная математика и информатика <br><br>
      Опыт работы: 8 месяцев<br>
      Подробнее об опыте работы смотреть <a href="">тут.</a>
      </div>
      <img src="../assets/photo1.png" alt="Мое фото" class="profile">
    </div>
    
  </div>
</template>

<style scoped>
  .about_page {
    height: 100vh;
    
    
  }

  .title {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 8vw;
    font-family: Haettenschweiler;
  }

  .info {
    display: flex;
    flex-direction: row;
    width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }

  .about_text{
    color: #ffffff;
    width: 70%;
    font-size: 5vh;
    margin-top: 80px;
  }

  .about_text span {
    color: #9d0e0e;
  }

  .about_text a{
    color: #9d0e0e;
    outline: none;
    text-decoration: none;
  }

  .about_text a:hover {
    border-bottom: 2px solid;
  }

  .profile{
    border: solid 3px #ffffff;
    padding-top: 15px;
  }

</style>
