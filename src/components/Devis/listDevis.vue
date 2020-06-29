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
              <div ref="devisHeader" class="devisHeader">
                  <div id="active" class="tDevis" @click="makeFirst(0)">
                      <h3 id="activeTitre">Tous Les Devis</h3>
                      <div id="activerectangle" class="rec">7</div>
                  </div>

                  <div class="Prov" @click="makeSecond(1)">
                      <h3>Provisoires</h3>
                      <div class="rec">1</div>
                  </div>
                  <div class="Final" @click="makeThird(2)">
                      <h3>Finalisés</h3>
                      <div class="rec">2</div>
                  </div>
                  <div class="refus" @click="makeFourth(3)">
                      <h3>Refusés</h3>
                      <div class="rec">2</div>
                  </div>
                  <div class="signé" @click="makeFifth(4)">
                      <h3>Signés</h3>
                      <div class="rec">2</div>
                  </div>



              </div>


    
  </div>
</template>

<script>
export default {

    data() {
      return {
        data: {
        }
      }

    },
    methods: {
        makeSecond: function(n) {
        let para;
        para=this.$refs.devisHeader;
        let nOfNodes=para.childNodes.length-1;
        let i;
        
        for(i=0;i<nOfNodes;i++){
          para.childNodes[i].removeAttribute("id")
          para.childNodes[i].childNodes[0].removeAttribute("id")
          para.childNodes[i].childNodes[1].removeAttribute("id")

        }
        para.childNodes[n].setAttribute("id", "active")
        para.childNodes[n].childNodes[0].setAttribute("id", "activeTitre")
        para.childNodes[n].childNodes[1].setAttribute("id", "activerectangle")

        },
        makeFirst: function(n) {
        let para;
        para=this.$refs.devisHeader;
        let nOfNodes=para.childNodes.length-1;
        let i;
        
        for(i=0;i<nOfNodes;i++){
          para.childNodes[i].removeAttribute("id")
          para.childNodes[i].childNodes[0].removeAttribute("id")
          para.childNodes[i].childNodes[1].removeAttribute("id")

        }
        para.childNodes[n].setAttribute("id", "active")
        para.childNodes[n].childNodes[0].setAttribute("id", "activeTitre")
        para.childNodes[n].childNodes[1].setAttribute("id", "activerectangle")

        },
        makeThird: function(n) {
        let para;
        para=this.$refs.devisHeader;
        let nOfNodes=para.childNodes.length-1;
        let i;
        
        for(i=0;i<nOfNodes;i++){
          para.childNodes[i].removeAttribute("id")
          para.childNodes[i].childNodes[0].removeAttribute("id")
          para.childNodes[i].childNodes[1].removeAttribute("id")

        }
        para.childNodes[n].setAttribute("id", "active")
        para.childNodes[n].childNodes[0].setAttribute("id", "activeTitre")
        para.childNodes[n].childNodes[1].setAttribute("id", "activerectangle")

        },
        makeFourth: function(n) {
        let para;
        para=this.$refs.devisHeader;
        let nOfNodes=para.childNodes.length-1;
        let i;
        
        for(i=0;i<nOfNodes;i++){
          para.childNodes[i].removeAttribute("id")
          para.childNodes[i].childNodes[0].removeAttribute("id")
          para.childNodes[i].childNodes[1].removeAttribute("id")

        }
        para.childNodes[n].setAttribute("id", "active")
        para.childNodes[n].childNodes[0].setAttribute("id", "activeTitre")
        para.childNodes[n].childNodes[1].setAttribute("id", "activerectangle")

        },
        makeFifth: function(n) {
        let para;
        para=this.$refs.devisHeader;
        let nOfNodes=para.childNodes.length-1;
        let i;
        
        for(i=0;i<nOfNodes;i++){
          para.childNodes[i].removeAttribute("id")
          para.childNodes[i].childNodes[0].removeAttribute("id")
          para.childNodes[i].childNodes[1].removeAttribute("id")

        }
        para.childNodes[n].setAttribute("id", "active")
        para.childNodes[n].childNodes[0].setAttribute("id", "activeTitre")
        para.childNodes[n].childNodes[1].setAttribute("id", "activerectangle")

        }


    }


    

  

}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss" ;  

.tDevis,.Prov,.Final,.refus,.signé{
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;

    .rec{
    background: #ECF1F8;
    border-radius: 10px;
    height: 28px;
    width: 28px;
    text-align: center;
    color:$blue;
    cursor: pointer;
    }
    &::after{
    content: "";
    display: block;
    margin-left: 13%;
    width: 106%;
    border-bottom: 1px solid #E9EAEB;
    border-width: thin;
    margin-bottom: 15px;
    pointer-events: none
    }
}

#activeTitre{
  color: $blue;
  font-family:  $sb;
}
#activerectangle{
  background-color: $blue;
  color: white;
}

#active{
      &::after{
    content: "";
    display: block;
    margin-left: 13%;
    width: 106%;
    border-bottom: 2px solid #2262C6;
    border-radius: 8px;
    margin-bottom: 15px;
    pointer-events: none
    }

}

.devisHeader{


  display: grid;
  grid-template-rows: 1fr ;
  position: relative;
  top: 5px;

  h3{
    font-family:  $gm;
    font-size: 15px;
    line-height: 26px;
    text-transform: capitalize;
    color: #AAB5C6;
    float: right;
    margin-left: 12%;
    cursor: pointer;
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

    .devisHeader{
      top:0px;
      bottom: 10px;
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

     @media (min-width: 579px) {
    .devisHeader{
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
    }
   }

    @media (min-width: 805px) {
    
    .devisHeader{
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
    }

    .tDevis,.Prov,.Final,.refus,.signé{

      .rec{

        margin-left: 10px;
      }

    &::after{
  
    width: 120%;
    pointer-events: none

    }

    }

    #active{
      &::after{
    width: 120%;
    pointer-events: none
    }

}
    
} 


    @media (min-width: 821px) {

      
    .devisHeader{
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 5%;
    }
     .tDevis{
       h3{
         margin: 0px;
         justify-self: end;
       }
     }

    }




   @media (min-width: 821px) {
   .leftHeader{
     h1{
      margin-left: 14%;
     }
   } 


    @media (min-width: 940px) {


    .devisHeader{
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: 5%;
    }

    .tDevis{
    display: grid;
    grid-template-columns: 1.4fr 1fr;
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

    @media (min-width: 1104px) {

      .devisHeader{
        display: grid;
        grid-template-rows: none;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        margin-left: 8%;
        h3{
          justify-self: end;
        }
      }

      #active{
      &::after{
      content: "";
      position: relative;
      top:16px;
      display: block;
      margin-left: 0%;
      width: 141%;
      border-bottom: 3px solid #2262C6;
      border-radius: 8px;
      margin-bottom: 15px;
      pointer-events: none
    }
    }

    .tDevis,.Prov,.Final,.refus,.signé{

    &::after{
    content: "";
    display: none;
    margin-left: 13%;
    width: 106%;
    border-bottom: 1px solid #E9EAEB;
    border-width: thin;
    margin-bottom: 15px;
    pointer-events: none
    }
    }

    .devisHeader{
    &::after{
    content: "";
    display: block;
    margin-left: 13%;
    width: 456%;
    border-bottom: 1px solid #E9EAEB;
    border-width: thin;
    margin-bottom: 15px;
    pointer-events: none
    
    }

    }

    }


    
    @media (min-width: 1135px) {

      .devisHeader{
        margin-left: 7%;
      }

    }

     
    @media (min-width: 1200px) {

      .devisHeader{
        margin-left: 6%;
      }

    }


    @media (min-width: 1269px) {

      .leftHeader{
        h1{
        margin-left: 5%;
        }
      }
      #activeTitre{
        justify-self: start;
      }

    }

  
      @media (min-width: 1300px) {

      .devisHeader{
        margin-left: 3%;
      }
      #active{
      &::after{
      margin-left: 14%;
      pointer-events: none
      }
      }
      #activeTitre{
        justify-self: start;
      }
    }

    @media (min-width: 1350px) {
        .devisHeader{
        margin-left: 2%;
      }
      #active{
        &::after{
        margin-left: 24%;
        pointer-events: none
        }
      }
      
      #activeTitre{
        justify-self: start;
      }

    }


     @media (min-width: 1451px) {

      .leftHeader{
        h1{
        margin-left: 0%;
        }
      }

      .devisHeader{
      margin-left: 1%; 
      }

      #active{

        &::after{
          margin-left:28%;
          pointer-events: none
        }
      }

      #activeTitre{
        justify-self: start;
      }

    }



   



</style>