<template>

<div class="containerGlobal">

<div class="rec1">
  <img src="../../assets/img/Group 34.svg" alt="PictureOfRectange1">
  <div class="circle"></div>
</div>




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
    top: 20%;
    left: 18.2%;
    z-index: 1;
    img{
    height: 128px;
    position: relative;
    bottom: 50px;
    left: 13%;
    }
}


</style>