<template>

<div class="containerGlobal">
  <div class="rec1">
  <img src="../../assets/img/Group 34.svg" alt="PictureOfRectange1">
  </div>
  <div class="circle"></div>
  <div id="card"></div>
  <div class="rec2"></div>
  <div class="circleclose"></div>





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
    height: 615px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
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
    top: 19%;
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
    top: 24%;

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
    top: 120px;
    right: 29%;
    }
    .rec2{

    background-image: url("../../assets/img/Rectangle 46.svg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 137px;
    width: 245px;
    border-radius: 6px;
    top: 46px;
    right: 22%;
    z-index: 1;
    float: right;
    }
    .circleclose{
    background-image: url("../../assets/img/Ellipse 33.svg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: 162px;
    float: left;
    height: 192px;
    width: 173px;
    }
    // Start the responsive web 
    @media (max-width: 1000px) {

      .circle{
        right:13%;
      }
      .rec2{
        right: 12%;
      }
      .rec1{
        left: 10%;
      }
      #card{
        left: 18%;
      }
    }
      @media (max-width: 850px) {

      .circle{
        right:13%;
      }
      .rec2{
        right: 12%;
      }
      .rec1{
        left: 4%;
      }
      #card{
        left: 13%;
      }
    }
    @media (max-width: 792px) {

      .circle{
        display:none
      }
      .rec2{
        right: 12%;
      }
      .rec1{
        left: 1%;
        img{
          left: 3%;
        }
      }
      #card{
        left: 9%;
        height: 70%;
        width: 85%;
      }
    }

        @media (max-width: 450px) {
           .rec1{
        img{
          display: none;
        }
      }
        }



</style>