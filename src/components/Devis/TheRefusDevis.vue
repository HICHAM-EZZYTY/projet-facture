<template>

<div class="containerGlobal">

<!-- Starting of the layout  -->

  <div class="rec1">
  <img src="../../assets/img/Group 34.svg" alt="PictureOfRectange1">
  </div>
  <div class="circle"></div>
  <div id="card">

      <div class="header">
          <!-- <div id="draw1"> -->
                <img  id="draw1" src="../../assets/img/path.svg" alt="DrawingOfapath">
          <!-- </div> -->
        <h1>Hé, attends !!</h1>
          <!-- <div id="draw2"> -->
                <img id="draw2" src="../../assets/img/path (1).svg" alt="DrawingOfapath">
          <!-- </div> -->
      </div>


  </div>
  <div class="rec2"></div>
  <div class="circleclose"></div>

<!-- Ending of the layout  -->






</div>
  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss" >
@import "../../scss/main.scss" ;   


// Starting of the layout Styling

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
  // Ending of the layout Styling 
  .header{
    display:grid;
    margin-top: 3px;
    grid-template-columns: 2fr 1fr 2fr;
    position: absolute;
    width: 100%;
    h1{
      font-family:  $bd;
      font-size: 17px;
      color: #FFFFFF;
      margin-top: 113px;
      justify-self: center;
      text-transform: lowercase;
      margin-bottom: 0px;
    }
  }

  #draw1{
    
    justify-self: flex-end;
    align-self: end;
    height: 78px;
  }
  #draw2{
    
    justify-self: flex-start;
    align-self: end;
    height: 78px;
    margin-top: 55px;
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
    @media (max-width: 640px) {
          .header{
          grid-template-columns: 1fr 1fr 1fr;
          }
          #draw1{
          justify-self: center;
          height: 65px;

          }
          #draw2{
          justify-self: center;
          height: 65px;
          }
    }

        @media (max-width: 450px) {
           .rec1{
        img{
          display: none;
        }
      }
        }

        @media (max-width: 397px) {
        
          #draw1{
          justify-self: center;
          height: 40px;

          }
          #draw2{
          justify-self: center;
          height: 40px;
          }
    }
       @media (max-width: 362px) {
         
         .header{
          grid-template-columns: 0.6fr 1fr 0.6fr;
         }
    } 
     @media (max-width: 294px) {

        .header{
          h1{
            font-size: 14px;
          }
        }
         
         #draw1{
          height: 30px;

         }
         #draw2{
          height: 30px;

         }
    } 



        // Ending of responsive layout 



</style>