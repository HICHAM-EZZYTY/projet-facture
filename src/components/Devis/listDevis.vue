<template>
  <div class="contain">

        <div class="header">
            <div class="leftHeader">
              <h1>Mes Devis</h1>
            </div>

            <div class="rightHeader">
              <h4>Exporter mes Devis</h4>
              <router-link to="/devis-export">
              <img  id="icn1" src="../../assets/img/Group75.svg" alt="exporterIcon">
              </router-link>
              <img id="icn2" src="../../assets/img/Group76.svg" alt="infoIcon">
            </div>
        </div>

              <div class="divider"></div>
              <div ref="devisHeader" class="devisHeader">
                  <div id="active" class="tDevis" @click="makeFirst(0)">
                      <h3 id="activeTitre">Tous Les Devis</h3>
                      <div id="activerectangle" class="rec">{{Devises.length}}</div>
                  </div>

                  <div class="Prov" @click="makeSecond(1)">
                      <h3>Provisoires</h3>
                      <div class="rec">{{howManyProvisoire}}</div>
                  </div>
                  <div class="Final" @click="makeThird(2)">
                      <h3>Finalisés</h3>
                      <div class="rec">{{howManyFinalised}}</div>
                  </div>
                  <div class="refus" @click="makeFourth(3)">
                      <h3>Refusés</h3>
                      <div class="rec">{{howManyRefused}}</div>
                  </div>
                  <div class="signé" @click="makeFifth(4)">
                      <h3>Signés</h3>
                      <div class="rec">{{howManySigned}}</div>
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
          
                <tr role="row" v-for="devis in toShow" :key="devis.Devis_id" >

                  <td role="cell">{{devis.Devis_uid}}</td>
                  <td role="cell">{{devis.userName}}</td>
                  <td role="cell">{{devis.Devis_uid}}</td>
                  <td role="cell">{{devis.total_ttc}}</td>
                  <td class="specialStatus" role="cell">
                    <div  v-bind:class="{

                      'finalisé':(devis.statut_id === 'Finalisés'),
                      'Signés':(devis.statut_id === 'Signés'),
                      'Provisoires':(devis.statut_id === 'provisoire'),
                      'Refusés':(devis.statut_id === 'Refusés'),

                    }" class="recValue">
                    <p
                     v-bind:class="{
                      'pFinalisé':(devis.statut_id ==='Finalisés'),
                      'pSignés':(devis.statut_id === 'Signés'),
                      'pProvisoires':(devis.statut_id === 'provisoire'),
                      'pRefusés':(devis.statut_id === 'Refusés'),
                       
                     }"
                    >  
                    
                      {{getstatus(devis.statut_id)}}

                    </p>
                      
                    </div>
                    <h5>{{devis.statut_id}}</h5>

                  </td>
                  <td role="cell">{{ devis.created_at.split("T")[0] }}</td>
                  <td role="cell">{{ devis.updated_at.split("T")[0] }}</td>
                  <td role="cell">
                    <img  @click="doMore(devis.Devis_id)" style="height: 18px;width: 18px;cursor: pointer;" src="../../assets/img/Domore.svg" alt="doMore">   

                    <div v-if="DoMoreIndx==devis.Devis_id" class="cardDoMore">
                      <h1 @click="finalise(devis.Devis_id)" v-if="devis.isFinalised == 0">Finalisé</h1>  
                      <h1 @click="sign(devis.Devis_id)" v-if=" devis.isFinalised == 1 && devis.isRefused == 0 &&  devis.isSigned == 0 " >Marquer comme signé </h1>
                      <h1 @click="unsign(devis.Devis_id)" v-if="devis.isFinalised == 1 && devis.isSigned == 1 " >Annuler la signature </h1>
                      <h1 @click="decline(devis.Devis_id)" v-if=" devis.isFinalised == 1 && devis.isRefused == 0 &&  devis.isSigned == 0 " >Marquer comme refusé </h1>
                      <h1 @click="undecline(devis.Devis_id)" v-if="devis.isFinalised == 1 && devis.isRefused == 1 " >Annuler le refus </h1>
                      <h1 v-if="devis.isFinalised == 0" >Modifier les mots-clés </h1>
                      <h1 @click="download(devis.Devis_id)" v-if="devis.isFinalised == 1">Télécharger</h1> 
                      <h1 @click="_delete(devis.Devis_id)"> Delete</h1> 
                    </div>

                  </td>
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
          className:"theme",
          DoMoreIndx:0,
          Devises: [],
          toShow: [], 
          howManyProvisoire: 0,
          howManyFinalised: 0,
          howManySigned: 0,
          howManyRefused: 0,
      }

    },
    methods: {
        getDevises: function() {
          this.$http.get("/devis")
          .then((resp) => {
            console.log("hada resp",resp.data.data)
            this.Devises = resp.data.data;
            this.toShow = this.Devises; 
            this.howManyProvisoire = this.countDevis("provisoire");
            this.howManyFinalised = this.countDevis("Finalisés");
            this.howManySigned = this.countDevis("Signés");
            this.howManyRefused = this.countDevis("Refusés");
            console.log(this.countDevis("provisoire"))

          } )
          .catch();
        },
        countDevis: function(key){
          let counter = 0; 
          this.Devises.forEach( (d) => {
            if( d.statut_id === key){
              counter++;
            }
          });
          return counter;
        },
        getDevis: function(key){
          // let counter = []; 
          this.toShow = [];
          this.Devises.forEach( (d) => {
            if(key !== ""){
              if( d.statut_id === key){
                this.toShow.push(d);
              }
            }else{
              this.toShow.push(d);
            }
            
          });
          // return counter;
        },
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
       this.getDevis("provisoire");
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
          this.getDevis("");
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

          this.getDevis("Finalisés");
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
          this.getDevis("Refusés");
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
          this.getDevis("Signés");
        },
        getstatus:function(string){
          return string.substring(0, 2);

        },
        doMore:function(number){
         if(this.DoMoreIndx==0){
           this.DoMoreIndx=number
         }
         else if(this.devisHeader!==0){
           this.DoMoreIndx=0
         }
        },
        sign: function(id){
           this.$http.get(`/devis/${id}/sign`)
                    .then( (rep) => {
                      console.log(rep);
                      window.location.reload();
                    })
                    .catch();
        },
        decline: function(id){
          this.$http.get(`/devis/${id}/refuse`)
                    .then( (rep) => {
                      console.log(rep);
                      window.location.reload();
                    })
                    .catch();
        },      
        unsign: function(id){
           this.$http.get(`/devis/${id}/unsign`)
                    .then( (rep) => {
                      console.log(rep);
                      window.location.reload();
                    })
                    .catch();
        },
        undecline: function(id){
          this.$http.get(`/devis/${id}/cancel-refuse`)
                    .then( (rep) => {
                      console.log(rep);
                      window.location.reload();
                    })
                    .catch();
        },
        updateKeywords: function(){

        },
        download: function(id){

          this.$http.get(`/devis/${id}/download`)
                    .then( (rep) => {
                      console.log(rep);
                      window.location.reload();
                    })
                    .catch();
        },
        finalise: function(id){
          
          this.$http.get(`/devis/${id}/finalise`)
                    .then( (rep) => {
                      console.log(rep);
                      window.location.reload();
                    })
                    .catch();
        }, 
        _delete: function(id){   
          this.$http.delete(`/devis/${id}`)
                    .then( (rep) => {
                      console.log(rep);
                      window.location.reload();
                    })
                    .catch();
        }
    },

    created:function () {
      this.getDevises();
    }

}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss" ;  


.cardDoMore{
    position: absolute;
    background-color: white;
    height: 201px;
    width: 168px;
    padding-left: -14px;
    right: 64px;
    padding-top: 17px;
    font-size: 12px;
    z-index: 99;
    margin-right: 0px;

    h1{
      font-size: 12px;
      color:#868789;
      font-family: $r
    }
    h1:hover{
      color:#616467;
      font-family: $gm;
      font-size: 13px;
      cursor: pointer;
    }
}


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

h5{
    font-family: $r;
    color: #616467;
    font-size: 14px;
    margin-bottom: 0px;
    margin-left: 0px;
    text-align: left;
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
        justify-self: center;
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

	@media
	  only screen 
    and (max-width: 760px), (min-device-width: 768px) 
    and (max-device-width: 820px)  {
      
h5{
    text-align: center;
}

		table, thead, tbody, th, td, tr {
			display: block;
		}
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
			position: absolute;
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
      white-space: nowrap;
      font-family: $sb;
      color:#616467;
      font-size: 14px;
		}


		td:nth-of-type(1):before { content: "N° de devis"; }
		td:nth-of-type(2):before { content: "Nom de client"; }
		td:nth-of-type(3):before { content: "Nom de société"; }
		td:nth-of-type(4):before { content: "Montant Totale"; }
		td:nth-of-type(5):before { content: "Status"; }
		td:nth-of-type(6):before { content: "Créer le"; }
		td:nth-of-type(7):before { content: "Signé le"; }
		td:nth-of-type(8):before { content: "Actions"; }
	}
   

 @media (max-width: 419px) {

      table{
        margin-left:0%
      }

}
  
@media (max-width: 363px) {

      table{
        margin-left:0%
      }
      td{
        padding-left: 30%;
      }

}


        @media (min-width: 762px) {
         
         .specialStatus{
          float: left;
          position: relative;
          top: 0px;
          margin-left: 0px;
          padding-left: -4px;
          width: 80%;
        } 

       }
       

        @media (min-width: 820px) {
         
         .specialStatus{
          display: inline-grid;
          position: relative;
          top: 11px;
          padding-left: 0px;

        } 

        h5{
          font-size: 14px;
          margin-bottom: 0px;
          margin-left: 0px;
          text-align: center;
        }

        .recValue{
          margin: 0 auto;
          height: 20px;
          width: 20px;
          border-radius: 20%;
          display: inline-block;
          font-size: 12px;
        }

       }


       @media (min-width: 1230px) {

         table {
        margin-left: 6%;
        }

       }

         @media (min-width: 1300px) {

        #activeTitre{
          justify-self: center;
        }
        #active{
          &::after{
            margin-left: 18%;
          }
        }

       }

       
         @media (min-width: 1450px) {

      
         table {
        margin-left: 4%;
        }

       }


  


</style>