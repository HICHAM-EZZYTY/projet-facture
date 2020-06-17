<template>
  <div class="contain">

      <div class="header">
        <h1>Nouveau Devis</h1>
        <div class="header_logo">
        <img src="../../assets/img/eye.svg" alt="eyes icon">
        <img  id="leftIcon" src="../../assets/img/print.svg" alt="print icon">
      </div>

      <img id="ellipse" src="../../assets/img/Ellipse.svg" alt="ellipse icon">

      <hr class="solid">
      <div  ref="whitePaper" class="whitePaper">
      <div class="heading">Marjane</div>
      <div class="informations">
        <h1>Informations :</h1>
        <div class="contain1">
          <div class="inp1">
              <label>Nom de devis</label>
              <br>
              <input type="text" value="# D2000001">
          </div>
           <div class="inp2">
              <label>Durée de validité</label>
              <select class="select-css">
                  <option value="">Jours</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
          </div>
        </div>
        <div class="contain2">
          <div class="inp3">
              <label>Destinataire</label>
              <br>
              <select class="select-css">
                  <option value="">Marjane</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
          </div>
           <div class="inp4">
              <label>Devise</label>
              <br>
              <select class="select-css">
                  <option value="">Dirham  (MAD)</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
          </div>
        </div>


      <h1>Articles :</h1>


      <div class="wrapArticles"></div>

      <div class="counter">
        <div class="rec">
          <p>{{counter}}</p>
        </div>
        <div ref="ligne" class="ligne"></div>
        <div class="circle"></div>
      </div>


      <div class="artcl"  v-for="(Article,index) in Articles" :key="index">
        <!-- v-for="(variant,index) in variants  :key='index'"> -->

        <div class="ss1">
          <div class="inp6">
              <label>Type</label>
              <br>
              <select class="select-css">
                  <option value="">{{Article.service}}</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
          </div>

          <div class="icns">
            
            <img  @click="addInput" src="../../assets/img/pls.svg" alt="add icon">
            <img @click="deleteInput(index)" src="../../assets/img/rmv.svg" alt="remove icon">


          </div>
        </div>


        <div class="ss2">



              <div class="inp7">

                  <input  id="in1" type="text" v-model="Article.quantité">
                  <input   id="in2" type="text" v-model="Article.prixht">
                <div class="tva">
                      <label id="in5">Tva</label>
                      <div class="on_off">
                          <input id="in3" type="text"  v-model="Article.tva">
                          <input  id="in4" type="checkbox" class="toggle" checked>
                      </div>
                </div>

                <div class="percentage">
                    <select class="select-css">
                      <option value="">{{Article.percent}}</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="hamster">Hamster</option>
                      <option value="parrot">Parrot</option>
                      <option value="spider">Spider</option>
                      <option value="goldfish">Goldfish</option>
                </select>
                </div>

                <div class="reduction">
                      <input id="in6" type="text" v-model="Article.Reduction">
                </div>

                <div class="totalHt">
                      <label id="in7">Total HT</label>
                      <input id="in8" type="text" v-model="Article.totalht">
                </div>
                <div class="totalttc">
                      <label id="in9">Total TTC</label>
                      <input id="in10" type="text" v-model="Article.totalttc">
                </div>

          </div>

          <textarea id="textAreaArtcl"  v-model="Article.Decrp">
              
                  
          </textarea>



        </div>

      </div>

     

        


      </div>



      </div>




      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      height:Number,
      lineHeight:Number,
      Articles: [{
      service: 'Service',
      quantité: 'Quantité',
      prixht: 'Prix HT',
      tva : 20,
      percent:'%',
      Reduction: 'Réduction',
      totalht:0,
      totalttc:0,
      Decrp:"Description de l'article",
    }],
    };
  },
  methods: {
    addInput() {
      this.Articles.push({
      id:0,
      service: 'Service',
      quantité: 'Quantité',
      prixht: 'Prix HT',
      tva : 20,
      percent:'%',
      Reduction: 'Réduction',
      totalht:0,
      totalttc:0,
      Decrp:"Description de l'article",
      })
      this.counter+=1
      this.height=this.$refs.whitePaper.clientHeight
      this.$refs.whitePaper.style.height=(this.height+300)+"px"
      this.lineHeight=this.$refs.ligne.clientHeight
      this.$refs.ligne.style.height=(this.lineHeight+310)+"px"


    },
      deleteInput(i) {
        if (i>0){
        this.Articles.splice(i, 1);
        }
        else{
          console.log("sorry cant delete this one")
        }
      this.counter-=1
      this.height=this.$refs.whitePaper.clientHeight
      this.$refs.whitePaper.style.height=(this.height-300)+"px"
      this.lineHeight=this.$refs.ligne.clientHeight
      this.$refs.ligne.style.height=(this.lineHeight-310)+"px"
    }
  }
}

</script>

<style scoped lang="scss">
@import "../../scss/main.scss" ;   
body {
  margin: 0;
}

button{
  margin-right: 20px;
  margin-left:40px;
}

#ellipse{
  position: absolute;
  right: -3px;
  width: 65px;
}
#leftIcon{
  position: relative;
  right: 12px;
}

.whitePaper{
    width: 53.5vw;
    margin-left: 77px;
    margin-top: 56px;
    height: 146vh;
    background: white;
    box-shadow: 0px 4px 18px rgba(71, 71, 71, 0.3)
}

hr{
    width: 87%;
    margin-top: 15px;
    margin-bottom: 1rem;
}

.header{
  display: block;
  margin-top: 13px;
  h1{
    position: relative;
    top: 19px;
    width: 74%;
    font-size: 19px;
    margin-left: 80px;
    margin-right: 0px !important;
    display: inline-block;
    font-family: "Gilroy-Bold";
    color: #2262C6;
  }
  .header_logo{
    display: inline-block;
    position: relative;
    top: 18px;
    left: 5px;
    img{
      width: 55px;
      position: relative;
    }
  }
}

.heading{
    text-align: center;
    font-family: "Gilroy-Bold";
    color: #2262C6;
    font-size: 21px;
    padding-top: 39px
}

.informations{
  h1{
    font-family: $gm;
    color: $black;
    font-size: 16px;
    padding-top: 20px;
    margin-left: 51px;
    padding-bottom: 14px;

  }
}

.contain1{
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.inp1{
  label{
    font-family: $gm;
    font-size: 12px;
    color:$white2;
    margin-left: 51px;
    padding-top: 7px;
    margin-bottom: 7px;
  }
  input{
    border: none;
    border-bottom: 0.6px solid #616467;
    background-color: transparent;
    margin-left: 51px;
    color:#6E7275;
  }
}


.inp2{
  label{
    font-family: $gm;
    font-size: 12px;
    color:$white2;
    margin-left: 72px;
    padding-top: 7px;
    margin-bottom: 7px;
  }
  .select-css{
    outline: none;
    cursor: pointer;
    color:#6E7275;
    font-size: 14px;
    font-family: $gm;
    border: none;
    width: 10em;
    border-bottom: 0.6px solid #616467;
    padding-bottom: 4px;
    margin-left: 70px;
  }
}

.contain2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 18px;
}

.inp3{
  label{
    font-family: $gm;
    font-size: 12px;
    color:$white2;
    margin-left: 51px;
    padding-top: 7px;
    margin-bottom: 7px;
  }
  .select-css{
    outline: none;
    cursor: pointer;
    color:#6E7275;
    font-size: 14px;
    font-family: $gm;
    border: none;
    width: 10em;
    border-bottom: 0.6px solid #616467;
    padding-bottom: 4px;
    margin-left: 51px;

  }
}

.inp4{
  label{
    font-family: $gm;
    font-size: 12px;
    color:$white2;
    margin-left: 72px;
    padding-top: 7px;
    margin-bottom: 7px;
  }
  .select-css{
    outline: none;
    cursor: pointer;
    color:#6E7275;
    font-size: 14px;
    font-family: $gm;
    border: none;
    width: 10em;
    border-bottom: 0.6px solid #616467;
    padding-bottom: 4px;
    margin-left: 70px;
  }
}

.counter{
  position: absolute;
  .rec{
    width: 20px;
    background-color: #2160c4;
    position: relative;
    top: 13px;
    left: 22px;
    p{
      text-align: center;
      color:$white;
      margin-bottom: 0px;
    }
  } 
  .ligne{
    position: relative;
    top: 13px;
    height: 267px;
    width: 0.8px;
    background-color: #616467;
    left: 31px;
    z-index: 0;
    margin-right: 0px !important;
  }

  .circle{
    position: relative;
    height: 25px;
    width: 25px;
    background-color: $blue;
    border-radius: 50%;
    left: 19px;
  }
}


.artcl{
  position: relative;
    left: 8%;
    top: 0px;
    width: 50%;
    .ss1{
      display: grid;
      grid-template-columns: 1.78fr 1fr;
      .inp6{
        label{
              font-family: $gm;
              font-size: 12px;
              color:$white2;
              margin-left: 0px;
              padding-top: 7px;
              margin-bottom: 0px;
        }
        .select-css{
          outline: none;
          cursor: pointer;
          color:#6E7275;
          font-size: 14px;
          font-family: $gm;
          border: none;
          width: 13em;
          border-bottom: 0.6px solid #616467;
          padding-bottom: 4px;
          margin-left: 0px;
        }
      }
    }
    .icns{
      padding-top: 26px;
      img{
            width: 21px;
            margin-left: 4px;
            cursor: pointer;
      }
    }

}

.inp7{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr  1fr;
    label {
    font-family: $gm;
    font-size: 12px;
    color:$white2;
    margin-left: 51px;
    padding-top: 7px;
    margin-bottom: 7px;
    margin-left: 51px;
    padding-top: 13px;
    margin-bottom: 0px;
    }
    input{
      border: none;
      border-bottom: 0.6px solid #616467;
      background-color: transparent;
      margin-left: 51px;
      color:#6E7275;
    }
    .tva {

          input[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          }
          input[type="checkbox"]:focus {
            outline: 0;
          }

          .toggle {
       
            height: 11px;
            width: 28px;
            border-radius: 16px;
            display: inline-block;
            position: relative;
            margin: 0;
            /* border: 2px solid #474755; */
            background: #ecf0f1;
            transition: all 0.2s ease;
            border:none;
          }
          .toggle:after {
            content: "";
                content: "";
                position: absolute;
                top: -1px;
                left: -1px;
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #CCE0FF;
                transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
                border:none;
          }
          .toggle:checked {
            background-color: $blue;
            border:none;
          }
          .toggle:checked:after {
            transform: translatex(20px);
          }
          .on_off{
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
    }
}

 #in1{
    margin-left: 2px;
    font-size: 14px;
    width: 67px;
    padding-top:42px;
 }
 #in2{
    margin-left: 14px;
    font-size: 14px;
    width: 60px;
    padding-top: 42px;
 }
 #in3{
   margin-left:14px;
   width: 43px;
 }
 #in4{
    margin-left: 10px;
    margin-top: 15px;
 }
 #in5{
 
    margin-left: 14px;
    padding-top: 22px;
 }

.percentage{
          padding-left: 17px;
          padding-top: 37px;
  .select-css{
          width: 42px;
          outline: none;
          cursor: pointer;
          color:#6E7275;
          font-size: 14px;
          font-family: $gm;
          border: none;
          border-bottom: 0.6px solid #616467;
          padding-bottom: 4px;
          margin-left: 0px;
  }
}


 #in6{
    margin-left: 14px;
    font-size: 14px;
    width: 67px;
    padding-top:42px;
 }
 .totalHt{
      padding-top: 5px;
      margin-left: 8px;
       #in7{
      margin-left: 0px;
       }
       #in8{
      margin-left: 6px;
      width: 51px;
       }
 }


.totalttc{
    padding-top: 5px;
    margin-left: 8px;
    #in9{
    margin-left: 0px;

    }
    #in10{
    margin-left: 6px;
    width: 51px;
    }
}

#textAreaArtcl{
   margin-top: 35px;
    margin-bottom: 0px;
    height: 150px;
    font-size: 14px;
    width: 40vw;
    border-radius: 5px;
    border: 0.2px solid #AAB5C6;
    resize: none;
    font-family: $r;
    font-size: 13px;
    padding-top: 15px;
    padding-left: 7px;
    color: #8898AC;
}
#textAreaArtcl:focus{
    outline: none !important;
    border: 0.2px solid #AAB5C6;


}


 @media (max-width: 1000px) {

   .header h1{
    margin-left: 9%;
   }
}

 @media (max-width: 877px) {

   .contain1{
     grid-template-columns: none;
     grid-template-rows: 1fr 1fr;
   }
    .contain2{
     grid-template-columns: none;
     grid-template-rows: 1fr 1fr;
    margin-top: 0px;
   }
  .inp1{
    display: block;
    margin:0 auto;
    padding-bottom: 10px;
    label{
      margin-left: 0px;
    }
    input{
      margin-left:0px
    }
  }
  .inp2{
    display: block;
    margin:0 auto;
    label{
      margin-left: 0px;
    }
    .select-css{
      margin-left:0px
    }
  }
  .inp3{
    display: block;
    margin:0 auto;
      label{
      margin-left: 0px;
    }
    .select-css{
      margin-left:0px
    }
  }
  .inp4{
    display: block;
    margin:0 auto;
    label{
      margin-left: 0px;
    }
    .select-css{
      margin-left:0px
    }
  }



 }





 @media (max-width: 777px) {

   .header h1{
    margin-left: 9%;
    width: 60%;
   }
   hr{
    position: relative;
    right: 6%;
    width: 83%;
   }
}

 @media (max-width: 577px) {
.header h1{
    margin-left: 12%;
    width: 60%;
}
hr {
    position: relative;
    right: 0%;
    width: 74%;
}

}

 @media (max-width: 409px) {

hr {
    position: relative;
    left: 3%;
    width: 77%;
}

}

 @media (max-width:  395px) {

hr {
    position: relative;
    left: 3%;
    width: 49%;
}
.header h1{
    margin-left: 12%;
    width: 81%;
    text-align: center;
}
.header .header_logo{
    display: block;
    position: relative;
    float: none;
    width: 111px;
    margin:0 auto
}

}
</style>
