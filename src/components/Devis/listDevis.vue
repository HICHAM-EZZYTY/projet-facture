<template>
  <div class="contain">

        <div class="header">
            <div class="leftHeader">
              <h1>Mes Devis</h1>
            </div>

            <div class="rightHeader">
              <h4>Exporter mes Devis</h4>
              <img  id="icn1" src="../../assets/img/Group75.svg" alt="exporterIcon">
              <img id="icn2" src="../../assets/img/Group76.svg" alt="infoIcon">
            </div>
        </div>

              <div class="divider"></div>
              <div class="devisHeader">
                  <div class="tDevis">
                      <h3>Tous Les Devis</h3>
                      <div class="rec">7</div>
                  </div>
                  <div class="Prov">
                      <h3>Provisoires</h3>
                      <div class="rec">1</div>
                  </div>
                  <div class="Final">
                      <h3>Finalisés</h3>
                      <div class="rec">2</div>
                  </div>
                  <div class="refus">
                      <h3>Refusés</h3>
                      <div class="rec">2</div>
                  </div>
                  <div class="signé">
                      <h3>Signés</h3>
                      <div class="rec">2</div>
                  </div>



              </div>


    
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss" ;  

.tDevis,.Prov,.Final,.refus,.signé{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.tDevis{
  .rec{
    margin-left: 12%;
  }
}

.devisHeader{

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-left: 5%;
  position: relative;
  bottom: 32px;

  h3{
    font-family:  $gm;
    font-size: 15px;
    line-height: 26px;
    text-transform: capitalize;
    color: #AAB5C6;
    text-align: center;
  }

}

.contain{
      margin-left: 20%;
}

.header{
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 43px;
  margin-left: 5%;
}
.leftHeader{
  h1{
  font-family: $bd;
  font-size: 19px;
  line-height: 34px;
  text-transform: capitalize;
  color: $blue;
  margin-top: 20px;
  margin-bottom: 0px;
  }
}
.rightHeader{

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  h4{
  font-family: "Gilroy-Regular";
  font-size: 13.5px;
  line-height: 23px;
  text-transform: capitalize;
  color: #AAB5C6;
  margin-top: 3px;
  justify-self: start;
  margin-right: 0%;

  }
  img{
    height:30px;
    width:30px
  }
}
 #icn1{
    
    justify-self: center;
    margin-left: 5%; 
 }
 #icn2{
  justify-self: flex-start;
 }
  
  .divider{
    height: 1px;
    background-color: #E9EAEB;
    position: relative;
    bottom: 7px;
    margin-left: 5%;
    width: 88%;
  }


////////// MediaQuery ///////////////


  @media (min-width: 420px) {

    .contain{
    margin-left: 14%;
    }
    #icn1{
    justify-self: end;
    margin-right: 9%;
    }

  }

  
  @media (min-width: 458px) {

    .header{
      grid-template-columns: 1fr 2fr;
      .rightHeader{
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        margin-top: 20px;
        h4{
        justify-self: end;
        margin-top: 4px;
        }
      }
    }
    .divider{
      bottom: 42px;
    }

  }

   
  @media (min-width: 560px) {

  .contain{
    margin-left: 10%;
  }
  .header{
    .rightHeader{
    display: grid;
    grid-template-columns: 4fr 0.5fr 1fr;
    margin-left: 82px;
      h4{
        margin-right: 12px;
      }
    }
  }
  
  }
     @media (min-width: 576px) {
     .contain{
       margin: 0px;
     }
     .header{
      margin-right: 0px;
      margin-left: 0px;
     }
   }
   @media (min-width: 821px) {
   .leftHeader{
     h1{
      margin-left: 14%;
     }
   } 

     @media (min-width: 1021px) {

 
       .header{
         margin-left: 37px;

         .rightHeader{
           h4{
             margin-right: 0px;
           }
           #icn1{
            justify-self: center;
            margin-right: 9%;
           }
          #icn2{
            justify-self: flex-start;
           }
         }
       }
     }

   }

    @media (min-width: 1134px) {

      .leftHeader{
        h1{
          margin-left: 10%;
        }
      }

    }

      @media (min-width: 1269px) {

      .leftHeader{
        h1{
        margin-left: 5%;
        }
      }

    }

     @media (min-width: 1451px) {

      .leftHeader{
        h1{
        margin-left: 0%;
        }
      }

    }



   



</style>