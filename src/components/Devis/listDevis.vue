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

              <!-- Starting Of The Table  -->

              <table role="table">
              <thead role="rowgroup">
                <tr role="row">
                  <th role="columnheader">N° de devis</th>
                  <th role="columnheader">Nom de client</th>
                  <th role="columnheader">Nom de société </th>
                  <th role="columnheader">Montant Totale</th>
                  <th role="columnheader">Status</th>
                  <th role="columnheader">Créer le</th>
                  <th role="columnheader">Signé le</th>
                  <th role="columnheader">Actions</th>
                </tr>
              </thead>
              <tbody role="rowgroup">
          
                <tr role="row">
                  <td role="cell">D2000003</td>
                  <td role="cell">Hicham Ezzyti</td>
                  <td role="cell">Moulimeq</td>
                  <td role="cell">46,56 Dh</td>
                  <td class="specialStatus" role="cell">
                    <div  v-bind:class="{

                      'finalisé':(value[0] === 'Finalisé'),
                      'Signés':(value[0] === 'Signés'),
                      'Provisoires':(value[0] === 'Provisoires'),
                      'Refusés':(value[0] === 'Refusés'),

                    }" class="recValue">
                    <p
                     v-bind:class="{
                      'pFinalisé':(value[0] === 'Finalisé'),
                      'pSignés':(value[0] === 'Signés'),
                      'pProvisoires':(value[0] === 'Provisoires'),
                      'pRefusés':(value[0] === 'Refusés'),
                       
                     }"
                    >  
                      {{getstatus(0)}}
                      
                      </p></div>{{value[0]}}
                  </td>
                  <td role="cell">12/02/20</td>
                  <td role="cell">16/02/20</td>
                  <td role="cell">...</td>
                </tr>

                <tr role="row">
                  <td role="cell">D2000003</td>
                  <td role="cell">Hicham Ezzyti</td>
                  <td role="cell">Moulimeq</td>
                  <td role="cell">46,56 Dh</td>
                  <td class="specialStatus" role="cell">
                    <div  v-bind:class="{

                      'finalisé':(value[1] === 'Finalisé'),
                      'Signés':(value[1] === 'Signés'),
                      'Provisoires':(value[1] === 'Provisoires'),
                      'Refusés':(value[1] === 'Refusés'),

                    }" class="recValue">
                    <p
                     v-bind:class="{
                      'pFinalisé':(value[1] === 'Finalisé'),
                      'pSignés':(value[1] === 'Signés'),
                      'pProvisoires':(value[1] === 'Provisoires'),
                      'pRefusés':(value[1] === 'Refusés'),
                       
                     }"
                    >  
                      {{getstatus(1)}}
                      
                      </p></div>{{value[1]}}
                  </td>
                  <td role="cell">12/02/20</td>
                  <td role="cell">16/02/20</td>
                  <td role="cell">...</td>
                </tr>



                <tr role="row">
                  <td role="cell">D2000003</td>
                  <td role="cell">Hicham Ezzyti</td>
                  <td role="cell">Moulimeq</td>
                  <td role="cell">46,56 Dh</td>
                  <td class="specialStatus" role="cell">
                    <div  v-bind:class="{

                      'finalisé':(value[2] === 'Finalisé'),
                      'Signés':(value[2] === 'Signés'),
                      'Provisoires':(value[2] === 'Provisoires'),
                      'Refusés':(value[2] === 'Refusés'),

                    }" class="recValue">
                    <p
                     v-bind:class="{
                      'pFinalisé':(value[2] === 'Finalisé'),
                      'pSignés':(value[2] === 'Signés'),
                      'pProvisoires':(value[2] === 'Provisoires'),
                      'pRefusés':(value[2] === 'Refusés'),
                       
                     }"
                    >  
                      {{getstatus(2)}}
                      
                      </p></div>{{value[2]}}
                  </td>
                  <td role="cell">12/02/20</td>
                  <td role="cell">16/02/20</td>
                  <td role="cell">...</td>
                </tr>
     

                <tr role="row">
                  <td role="cell">D2000003</td>
                  <td role="cell">Hicham Ezzyti</td>
                  <td role="cell">Moulimeq</td>
                  <td role="cell">46,56 Dh</td>
                  <td class="specialStatus" role="cell">
                    <div  v-bind:class="{

                      'finalisé':(value[3] === 'Finalisé'),
                      'Signés':(value[3] === 'Signés'),
                      'Provisoires':(value[3] === 'Provisoires'),
                      'Refusés':(value[3] === 'Refusés'),

                    }" class="recValue">
                    <p
                     v-bind:class="{
                      'pFinalisé':(value[3] === 'Finalisé'),
                      'pSignés':(value[3] === 'Signés'),
                      'pProvisoires':(value[3] === 'Provisoires'),
                      'pRefusés':(value[3] === 'Refusés'),
                       
                     }"
                    >  
                      {{getstatus(3)}}
                      
                      </p></div>{{value[3]}}
                  </td>
                  <td role="cell">12/02/20</td>
                  <td role="cell">16/02/20</td>
                  <td role="cell">...</td>
                </tr>


                <tr role="row">
                  <td role="cell">D2000003</td>
                  <td role="cell">Hicham Ezzyti</td>
                  <td role="cell">Moulimeq</td>
                  <td role="cell">46,56 Dh</td>
                  <td  class="specialStatus" role="cell">
                    <div  v-bind:class="{

                      'finalisé':(value[0] === 'Finalisé'),
                      'Signés':(value[0] === 'Signés'),
                      'Provisoires':(value[0] === 'Provisoires'),
                      'Refusés':(value[0] === 'Refusés'),

                    }" class="recValue">
                    <p
                     v-bind:class="{
                      'pFinalisé':(value[0] === 'Finalisé'),
                      'pSignés':(value[0] === 'Signés'),
                      'pProvisoires':(value[0] === 'Provisoires'),
                      'pRefusés':(value[0] === 'Refusés'),
                       
                     }"
                    >  
                      {{getstatus(0)}}
                      
                      </p></div>{{value[0]}}
                  </td>
                  <td role="cell">12/02/20</td>
                  <td role="cell">16/02/20</td>
                  <td role="cell">...</td>
                </tr>


                <tr role="row">
                  <td role="cell">D2000003</td>
                  <td role="cell">Hicham Ezzyti</td>
                  <td role="cell">Moulimeq</td>
                  <td role="cell">46,56 Dh</td>
                  <td class="specialStatus" role="cell">
                    <div  v-bind:class="{

                      'finalisé':(value[0] === 'Finalisé'),
                      'Signés':(value[0] === 'Signés'),
                      'Provisoires':(value[0] === 'Provisoires'),
                      'Refusés':(value[0] === 'Refusés'),

                    }" class="recValue">
                    <p
                     v-bind:class="{
                      'pFinalisé':(value[0] === 'Finalisé'),
                      'pSignés':(value[0] === 'Signés'),
                      'pProvisoires':(value[0] === 'Provisoires'),
                      'pRefusés':(value[0] === 'Refusés'),
                       
                     }"
                    >  
                      {{getstatus(0)}}
                      
                      </p></div>{{value[0]}}
                  </td>
                  <td role="cell">12/02/20</td>
                  <td role="cell">16/02/20</td>
                  <td role="cell">...</td>
                </tr>


     
     
         
           
              </tbody>
            </table>


              <!-- Ending Of The Table  -->


    
  </div>
</template>

<script>
export default {

    data() {
      return {
          value:[
            "Provisoires",
            "Finalisé",
            "Signés",
            "Refusés"            
          ],
      }

    },
    methods: {
        makeSecond: function(n) {
        let para;
        para=this.$refs.devisHeader;
        let nOfNodes=para.childNodes.length;
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
        let nOfNodes=para.childNodes.length;
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
        let nOfNodes=para.childNodes.length;
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
        let nOfNodes=para.childNodes.length;
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
        let nOfNodes=para.childNodes.length;
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
        getstatus:function(indx){
          return this.value[indx].substring(0, 2);

        }

   


    },


    computed:{

   
    

    }

}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss" ;  



.finalisé{
  background-color: #CDE7F6;
}
.Signés{
  background-color: #C8F1E9;
}
.Provisoires{
  background-color: #F4C3C9;
}
.Refusés{
  background-color: #F2C8FA;
}
.pFinalisé{
color:#4BA6DF;
text-transform: uppercase;
}
.pSignés{
color:#39CCB0;
text-transform: uppercase;

}
.pProvisoires{
color:#CE4F62;
text-transform: uppercase;

}
.pRefusés{
color:#B866C8;
text-transform: uppercase;

}
table {
    display: table;
    margin: 0 auto;
    float: none;
    position: absolute;
    width: 90%;
    margin-left: 6%;
    background-color: #ECF1F8;
    border: 0.5px solid #D4D4D4;
    
}
tbody{
  text-align: center;
}
tr{
    border-bottom: 1px solid #D4D4D4;
}
th{
  text-align: center;
  padding-top: 12px;
  font-family: $sb;
  color:#616467;
  font-size: 14px;
}

th:nth-child(8){
  padding-right: 12px;
}
td{
  font-family: $r;
  color:#616467;
  font-size:14px;
}
.recValue{
    height: 20px;
    width: 20px;
    border-radius: 20%;
    display: inline-block;
    margin-right: 6px;
    font-size: 12px;
}


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
    margin-left: 0%;
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
    z-index: -1;
  }


// Start of mediaquery

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
    margin-left: 9%;
    }
   }


        @media (max-width: 576px) {
            .devisHeader{
            margin-left: 8%;
            }
        } 


    @media (min-width: 805px) {
    
    .devisHeader{
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 8%;
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
    margin-left: 9%;
    }
     .tDevis{
       h3{
         margin: 0px;
         justify-self: start;
       }
     }



    }







   @media (min-width: 821px) {
   .leftHeader{
     h1{
      margin-left: 14%;
     }
   } 

       @media (min-width: 700px) {
         
        tr{
        height: 56px;

        }

       }

         @media (max-width: 870px) {
         
          .recValue{
            display: block;
          }
          th{
          padding-left: 3px;
          padding-right: 1px;
          }

       }



   @media (max-width: 820px) {
         
         .specialStatus{
          float: left;
          position: relative;
          top: 15px;
          margin-left: 22px;
          padding-left: 44px;
        } 

       }
       
       @media (min-width: 1025px) {
         
         table{
               margin-left: 8%;
         }

       }



    @media (min-width: 940px) {


    .devisHeader{
    display: grid;
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-left: 9%;
    }

    .tDevis{
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    }


    }



    @media (max-width: 984px) {

      .specialStatus{
        margin-left: 0px;
      }
    }


    @media (max-width: 935px) {
      .specialStatus{
      padding-left: 0px;
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
        grid-template-columns: 1.3fr 1fr 1fr 1fr 1fr;
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
    margin-left: 0%;
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
    margin-left: 0%;
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


    @media (min-width: 1021px) {

      table{
        margin-left: 9%;
      }

    }

    
    @media (max-width: 1024px) {

      .table{
        margin-left: 8%;
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



  // Styling The Table 
/*
	Max width before this PARTICULAR table gets nasty. This query will take effect for any screen smaller than 760px and also iPads specifically.
	*/
	@media
	  only screen 
    and (max-width: 760px), (min-device-width: 768px) 
    and (max-device-width: 820px)  {

		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			display: block;
		}

		/* Hide table headers (but not display: none;, for accessibility) */
		thead tr {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}

    tr {
     border-bottom:none;
    }
      
    tr:nth-child(odd) {
      background:#f5f5f7;
    }
    
		td {
			/* Behave  like a "row" */
			border: none;
			position: relative;
      padding-left: 50%;
      border-bottom: 1px solid rgba(212,212,212,0.3);

		}

		td:before {
			/* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
      white-space: nowrap;
      font-family: $sb;
      color:#616467;
      font-size: 14px;
		}

		/*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
		*/
		td:nth-of-type(1):before { content: "N° de devis"; }
		td:nth-of-type(2):before { content: "Nom de client"; }
		td:nth-of-type(3):before { content: "Nom de société"; }
		td:nth-of-type(4):before { content: "Montant Totale"; }
		td:nth-of-type(5):before { content: "Status"; }
		td:nth-of-type(6):before { content: "Créer le"; }
		td:nth-of-type(7):before { content: "Signé le"; }
		td:nth-of-type(8):before { content: "Actions"; }
	}
   

  

</style>