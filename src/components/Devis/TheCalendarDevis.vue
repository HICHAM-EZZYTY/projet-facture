<template>
    
    <div class="containerGlobal">
    <div class="rec1">
    <img src="../../assets/img/Group 34.svg" alt="PictureOfRectange1">
    </div>
    <div id="card">
      <div class="circlee">
        <img src="../../assets/img/delete.svg" alt="closing the modal">
      </div>
      <h1>Sélectionner la date de signature <span>(d2000003)</span></h1>
      <div class="calendar" >
        <vc-calendar
         title-position="left"
        :attributes='attrs'
        @dayclick='dayClicked'
        locale="fr"
        >
        </vc-calendar>
      </div>
      <p>{{selectedDay['ariaLabel']}}</p>
    </div>

    <div class="rec2"></div>
    <div class="circleclose"></div>


    </div>
</template>

<script>
export default {
  data() {
    return {
        attrs: [
        {

          highlight: true,
          popover: {
            label: 'Vous avez passez la souris sur la date d\'aujourd\'hui',
          },
          dates: new Date(),
        },
      ],
      selectedDay:new Date(),
    }
   },
  
   methods:{
      dayClicked(day) {
      this.selectedDay = day;
      console.log(this.selectedDay)
    },
      
   },
}

    // data:function(){
    //     return{
    //         date:Number,
    //     }
    // }


</script>

<style  lang="scss">
@import "../../scss/main.scss" ;   
.vc-nav-container{
.vc-grid-container{
    grid-template-columns: repeat(4, 1fr)!important;
    width: 49%;
    overflow-x: hidden;
    margin-left: 55px;
    margin-bottom: 25px;
    gap: 2px 5px;
}
}
.vc-border {
    border: none;
}

.vc-svg-icon{
  color:$blue;
}
.vc-grid-container{
  grid-template-columns: repeat(1, minmax(340px, 1fr)) !important;
}
.vc-weeks{
    grid-template-columns: repeat(7, 1fr)!important;
    gap: 0px;
}
.vc-w-full{
  height: 226px;
}
.vc-text-sm {
    font-size: 12px;
}
.vc-text-gray-800 {
    color: $blue;
}
.vc-container{
      --day-content-bg-color-hover: rgba(34,98,198, 0.3);
    --day-content-dark-bg-color-hover: rgba( 34,98,198,0.3);
    --day-content-bg-color-focus: rgba(34,98,198,0.4);
    --day-content-dark-bg-color-focus: rgba(34,98,198,0.4);
        --day-content-margin: 0.6px auto;
}

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
    float: left;
    img{
    height: 128px;
    position: relative;
    bottom: 50px;
    left: 13%;
    }
}
#card{

    background-color: #2262C6;
    height: 467px;
    width: 665px;
    border-radius: 10px;
    z-index: 2;
    position: absolute;
    left: 24%;
    top: 90px;
    h1{
        font-family: $sb;
        color:$white;
        margin-top: 70px;
        text-align: center;
        font-size: 15px;
        text-transform: capitalize;
        span{

        text-transform: lowercase;

        }
    }
}
    .rec2{

    background-image: url("../../assets/img/Rectangle 46.svg");
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 137px;
    width: 245px;
    border-radius: 6px;
    top: 323px;
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
    position: absolute;
    top: 428px;
    float: left;
    height: 192px;
    width: 173px;
    }
    .circlee{
    float: right; 
    margin-top: 5%;
    margin-right: 4%;
    width: 35px;
    height: 35px;
    border-radius: 70%;
    position: absolute;
    background-color: #F5F7FB;
    z-index: 4;
    right: 0;
    &:hover{
        animation-name: rotate-in-center;
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-delay: 0s;
        animation-iteration-count: 1;
        animation-direction: normal;
        animation-fill-mode: none;
    }
    @keyframes rotate-in-center {
      0%{
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
        opacity: 1;
      }
      100%{
        -webkit-transform: rotate(0);
        transform: rotate(0);
        opacity: 1;
      }
    }

    img{
    width: 11px;
    height: 11px;
    display: block;
    margin: 0 auto;
    margin-top: 11px;
    }
    }
    .calendar{
        display: block;
        margin: 0 auto;
    }
    .vc-container{
    display: block;
    margin: 0 auto;
    }
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
        height: 450px;
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