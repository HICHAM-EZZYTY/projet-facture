<template>

<div class="containerGlobal">
  <div class="rec1">
  <img src="../../assets/img/Group 34.svg" alt="PictureOfRectange1">
  </div>
  <div class="circle"></div>
  <div id="card"></div>





</div>
  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss" >
@import "../../scss/main.scss" ;   
.containerGlobal {
    background-color: $background;
    height: 720px;
    width: 100%;
    overflow-x: hidden;
}
.rec1{
   background-image: url("../../assets/img/Rectangle 45.svg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 183px;
    width: 331px;
    border-radius: 6px;
    top: 14%;
    left: 18.2%;
    z-index: 1;
    float:left;

    img{
    height: 128px;
    position: relative;
    bottom: 50px;
    left: 13%;
    }
}
#card{

    background-color: $blue;
    height: 288px;
    width: 665px;
    border-radius: 10px;
    z-index: 2;
    position: relative;
    left: 24%;
    top: 17%;

}
.circle {
    background-image: url("../../assets/img/Ellipse 41.svg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 93px;
    width: 93px;
    z-index: 1;
    float: right;
    top: 96px;
    right: 29%;
    }

</style>