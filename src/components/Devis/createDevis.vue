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

        <div class="ss1">
          <div class="inp6">
              <label>Type</label>
              <br>
              <select class="select-css" @change="typeSelect">
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

                  <input @blur="quan(index)" id="in1" type="text" placeholder="quantité" v-model="Article.quantité">
                  <input  @blur="ph(index)"  id="in2" type="text"  placeholder="prix ht" v-model="Article.prixht">
                <div class="tva">
                      <label id="in5">Tva</label>
                      <div class="on_off">
                          <input @blur="TVA(index)" id="in3"  placeholder="tva" type="text"  v-model="Article.tva">
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
                      <input @blur="reduction(index)" id="in6" type="text" placeholder="Reduction" v-model="Article.Reduction">
                </div>

                <div class="totalHt">
                      <label   id="in7">Total HT</label>
                      <input  @blur="TOTALHT(index)" id="in8" type="text" placeholder="Total ht" v-model="Article.totalht">
                </div>
                <div class="totalttc">
                      <label id="in9">Total TTC</label>
                      <input id="in10" @blur="TOTALTTC(index)"  type="text"  placeholder="Total ttc" v-model="Article.totalttc">
                </div>

          </div>

          <textarea id="textAreaArtcl"  v-model="Article.Decrp">
              
                  
          </textarea>



        </div>

      </div>


      <div class="results">
        <button  @click="getdata()" type="text">Ajouter Une Ligne</button>

        <div class="wrapResult">
          <div class="rg">Total HT : <span>{{totalhtTTL}}</span></div>
          <div class="tva">TVA :   <span>{{tvaTTL}}</span></div>
          <div class="ttl">Total :   <span>{{finalttl}}</span></div>
    




        </div>

      </div>

      <div class="reglement">
      <h1>Règlement : </h1>
       <div class="contain2">
          <div class="inp3">
              <label>Conditions de règlement</label>
              <br>
              <select id="inp1" class="select-css">
                  <option value="1">45 jours fin de mois</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
          </div>
           <div class="inp4">
              <label>Mode de règlement</label>
              <br>
              <select id="inp2" class="select-css">
                  <option value="">Virement bancaire</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
          </div>
          <div style="margin-top:15px" class="inp3">
              <label>Intérêt de retard</label>
              <br>
              <select id="inp1" class="select-css">
                  <option value="">Pas d'intérêts </option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
          </div>
   
        </div>
      </div>
     <div class="textDoc">
                <h1>Textes affichés sur le document:</h1>
      <div class="textWrapping">
                  <textarea id="ttl">texte d'introduction (visible sur le devis)</textarea>
                  <textarea id="ttl1">Texte de conclusion (visible sur le devis)</textarea>
                  <textarea id="ttl2">Pied de page (visible sur le devis)</textarea>
                  <textarea id="ttl3">Conditions générales de vente (visible sur le devis)</textarea>
      </div>
             <div  id="diffInp1" class="inp33">
              <label>Mots clés :</label>
              <br>
              <select id="inp3" class="select-css">
                  <option value="">Ajouter/Sélectionner des mots clés</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
              </div>

     </div>


      <div class="footer">
      <div class="icons">
        <img id="fir"  src="../../assets/img/eye.svg" alt="eyes icon">
        <img  id="fil" src="../../assets/img/print.svg" alt="print icon">
      </div>
      <div class="btnss">
        <button class="buttn" id="bbtn1" type="button">Previous</button>    
        <button class=buttn  id="bbtn2" type="submit">enregistrer & envoyer </button>


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
      finalttl:0,
      totalttc:[],
      totalttcTTL:0,
      totalht:[],
      totalhtTTL:0,
      tva:[],
      tvaTTL:0,
      redic:[],
      redicTTL:0,
      Quantité:[],
      QuantitéTTL:0,
      Prixht:[],
      PrixhtTTL:0,
      total:0,
      vq:0,
      Articles: [{
        service: 'Service',
        quantité: null,
        prixht: null,
        tva : null,
        percent:'%',
        Reduction: null,
        totalht:null,
        totalttc:null,
        Decrp:"Description de l'article",
      }],
    };
  },
  methods: {
    typeSelect(event){
      console.log(event.target.value);
    },
    addInput() {
      this.Articles.push({
      id:0,
      service: 'Service',
      quantité: 'Quantité',
      prixht: 'Prix HT',
      tva : 0,
      percent:'%',
      Reduction: 'Réduction',
      totalht:0,
      totalttc:0,
      Decrp:"Description de l'article",
      })
      this.counter+=1
      this.height=this.$refs.whitePaper.clientHeight
      this.$refs.whitePaper.style.height=(this.height+310)+"px"
      this.lineHeight=this.$refs.ligne.clientHeight
      this.$refs.ligne.style.height=(this.lineHeight+310)+"px"


    },
      deleteInput(i) {
        if (i>0){
        this.Articles.splice(i, 1);
        this.counter-=1
        this.height=this.$refs.whitePaper.clientHeight
        this.$refs.whitePaper.style.height=(this.height-310)+"px"
        this.lineHeight=this.$refs.ligne.clientHeight
        this.$refs.ligne.style.height=(this.lineHeight-310)+"px"
        }
        else{
          console.log("sorry cant delete this one")
        }
    },
    TOTALTTC(value){

    this.vq=this.Articles[value].totalttc
    let ttl=0;
    ttl=parseInt(this.vq);
      if (ttl>=0){

        console.log("hadi totalttc 9abla",this.totalttc)
        this.totalttc[value]=ttl;
        console.log("hadi totalttc ba3da",this.totalttc)
          let ttq=0;
      
          for(var i in this.totalttc) {
            ttq += this.totalttc[i]; 
          }

          this.totalttcTTL=ttq
      }
      else{
        console.log('plz fill the input')
      }

    },
    reduction(value){
  
    this.vq=this.Articles[value].Reduction
    let ttl=0;
    ttl=parseInt(this.vq);
      if (ttl>=0){

        console.log("hadi reduction 9abla",this.redic)
        this.redic[value]=ttl;
        console.log("hadi redcution ba3da",this.redic)
          let ttq=0;
      
          for(var i in this.redic) {
            ttq += this.redic[i]; 
          }

          this.redicTTL=ttq
      }
      else{
        console.log('plz fill the input')
      }

    },
    TOTALHT(value){
    this.vq=this.Articles[value].totalht
    let ttl=0;
    ttl=parseInt(this.vq);
      if (ttl>=0){

        console.log("hadi totalht 9abla",this.totalht)
        this.totalht[value]=ttl;
        console.log("hadi totalht ba3da",this.totalht)
          let ttq=0;
      
          for(var i in this.totalht) {
            ttq += this.totalht[i]; 
          }

          this.totalhtTTL=ttq
      }
      else{
        console.log('plz fill the input')
      }

    },
    quan(value){

    this.vq=this.Articles[value].quantité
    let ttl=0;
    ttl=parseInt(this.vq);
      if (ttl>=0){

        console.log("hadi quantité 9abla",this.Quantité)
        this.Quantité[value]=ttl;
        console.log("hadi quantité ba3da",this.Quantité)
          let ttq=0;
      
          for(var i in this.Quantité) {
            ttq += this.Quantité[i]; 
          }

          this.QuantitéTTL=ttq
      }
      else{
        console.log('plz fill the input')
      }
  


    },

    TVA(value){

    this.vq=this.Articles[value].tva
    let ttl=0;
    ttl=parseInt(this.vq);
      if (ttl>=0){

        console.log("hadi tva 9abla",this.tva)
        this.tva[value]=ttl;
        console.log("hadi tva ba3da",this.tva)
          let ttq=0;
      
          for(var i in this.tva) {
            ttq += this.tva[i]; 
          }

          this.tvaTTL=ttq
      }
      else{
        console.log('plz fill the input')
      }
  
    },

    ph(value){
       
    this.vq=this.Articles[value].prixht
    let ttl=0;
    ttl=parseInt(this.vq);
      if (ttl>=0){

        console.log("hadi prixht 9abla",this.Prixht)
        this.Prixht[value]=ttl;
        console.log("hadi prixht ba3da",this.Prixht)
          let ttq=0;
      
          for(var i in this.Prixht) {
            ttq += this.Prixht[i]; 
          }

          this.PrixhtTTL=ttq
      }
      else{
        console.log('plz fill the input')
      }
     }


  },

  computed:{


  },
    watch:{


    QuantitéTTL:function(){


    },
    PrixhtTTL:function(){
      let b=[];

      for(var i in this.Quantité) {

        b[i]=this.Quantité[i]*this.Prixht[i]
     
      }
      console.log(b)
      this.totalht=b;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      this.totalhtTTL=b.reduce(reducer);

    },
    tvaTTL:function(){

      console.log("asi rah tva tbadlaat")


      let s=[];


       for(var i in this.totalht) {
        let k=0;
        k=(this.totalht[i]*this.tva[i])/100
        s[i]=k
     
      }
      console.log("tva table",s)

      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      this.tvaTTL=s.reduce(reducer);
      console.log(" tva total",this.tvaTTL)


      this.finalttl=this.tvaTTL+this.totalhtTTL
      console.log(this.finalttl)



    }
    
    },

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
    // height: 1800px;
      height: 1666px;
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

.results{
  display: grid;
  grid-template-columns: 1fr 5fr;
  margin-left: 7%;
  button {
    background-color: $blue;
    font-family: $bd;
    color:$white;
    border-radius: 4px;
    border: none;
    font-size: 11px;
    width: 131px;
    height: 30px;
    margin-top: 11px;
    margin-left: 8%;

  }
  .wrapResult{
    background-color: $blue;
    width: 95%;
    height: 177px;
    margin-top: 13px;
    border-radius: 6px;
    -webkit-box-shadow:-26px 46px  0px 0px rgba(255,197,160,1);
    -moz-box-shadow: -26px 46px  0px 0px rgba(255,197,160,1);
    box-shadow: -26px 46px 0px 0px #ffc5a0;
    .rg{
      text-align: center;
      margin-top:30px;
      color:$white;
      font-family: $bd;
      margin-bottom: 5px;
      span{
        border-bottom: 1px solid $orange;
        border-bottom-width: thin;
      }
    }
    .thf{
      text-align: center;
      color:$white;
      font-family: $bd;
      margin-bottom: 5px;
      span{
        border-bottom: 1px solid $orange;
        border-bottom-width: thin;
      }
    }
    .tva{
      text-align:center;
      color:$white;
      font-family: $bd;
      margin-bottom: 5px;
       span{
        border-bottom: 1px solid $orange;
        border-bottom-width: thin;
      }
    }
    .ttl{
      text-align: center;
      color:$white;
      font-family: $bd;
      margin-bottom: 5px;
      span{
        border-bottom: 1px solid $orange;
        border-bottom-width: thin;
      }
    }
  }
}

.reglement{
  h1{
    padding-top: 76px;
  }
  #diffInp{
    margin-top:14px;
  }
  #inp1{
width: 65%;
  }
  #inp2{
width: 65%;
  }
  #inp3{
width: 65%;
  }
}
.textDoc{
  padding-top: 5px;
}
.textWrapping{
  display:grid;
  grid-template-columns: 1fr 1fr;
  #ttl{
    font-family: $r;
    margin-left: 15%;
    margin-top: 35px;
    margin-bottom: 0px;
    height: 116px;
    font-size: 14px;
    width: 40vw;
    border-radius: 5px;
    border: 0.2px solid #AAB5C6;
    resize: none;
    font-size: 13px;
    padding-top: 15px;
    padding-left: 7px;
    color: #8898AC;
    width: 82%;
  }
  #ttl1{
    font-family: $r;
    margin-left: 10%;
    margin-top: 35px;
    margin-bottom: 0px;
    height: 116px;
    font-size: 14px;
    width: 40vw;
    border-radius: 5px;
    border: 0.2px solid #AAB5C6;
    resize: none;
    font-size: 13px;
    padding-top: 15px;
    padding-left: 7px;
    color: #8898AC;
    width: 82%;
  }
   #ttl2{
    font-family: $r;
    margin-left: 15%;
    margin-top: 35px;
    margin-bottom: 0px;
    height: 116px;
    font-size: 14px;
    width: 40vw;
    border-radius: 5px;
    border: 0.2px solid #AAB5C6;
    resize: none;
    font-size: 13px;
    padding-top: 15px;
    padding-left: 7px;
    color: #8898AC;
    width: 82%;
  }
   #ttl3{
    font-family: $r;
    margin-left: 10%;
    margin-top: 35px;
    margin-bottom: 0px;
    height: 116px;
    font-size: 14px;
    width: 40vw;
    border-radius: 5px;
    border: 0.2px solid #AAB5C6;
    resize: none;
    font-size: 13px;
    padding-top: 15px;
    padding-left: 7px;
    color: #8898AC;
    width: 82%;
  }

}

.inp33{
  margin-top: 33px;
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
    width: 38%;
    border-bottom: 0.6px solid #616467;
    padding-bottom: 4px;
    margin-left: 51px;

  }

}

.footer{
    display: grid;
    grid-template-columns: 1.8fr 5fr;
    margin-top: 47px;
  .icons {
    img{
    width: 50px;
    height: 50px;
    }
    #fir{
    margin-left: 24%;
    }
    #fil{
    position: relative;
    right: 8px;
    }
  }
  .btnss{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20%;
    .buttn{
      border: none;
      background-color: $blue;
      border-radius: 8px;
      color:$white;
      font-family: $bd;
      font-size: 12px;
      text-transform: capitalize ;
      margin-right: 0px;
      margin-left: 0px;
    }
    #bbtn1{
    height: 30px;
    width: 103px;
    margin-top: 11px;
    color:#616467;
    background-color: #E2E8F1;
    border-radius: 17px;
    justify-self: end;
    
    }
    #bbtn2{
    height: 30px;
    width: 154px;
    border-radius: 17px;
    margin-top: 11px;
    margin-left: 7%;
    }
  }
}



@media (max-width: 1034px) {
  .whitePaper{
  height: 1800px;
  }

}


@media (max-width: 930px) {
 .footer{
    grid-template-columns: 2fr 5fr;
 }

}

@media (max-width: 879px) {
  .whitePaper{
  height: 1961px;
  }

}

@media (max-width: 873px) {
  .footer {
    grid-template-columns: 2fr 4fr;
}
.footer .btnss{
     margin-left: 0%;
}
}
@media (max-width: 747px) {
  .footer {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  .icons{
    display: grid;
    grid-template-columns: 1fr 1fr;
    #fir{
    justify-self: end;
    }

  }    
 
}
.footer .btnss{
     margin-left: 0%;
       #bbtn1{
      justify-self: center;
     }
     #bbtn2{
      justify-self: start;
      margin-left: 0%;
     }
}
 #bbtn2{
        margin-left: 0%;
      }
  #bbtn1{
        justify-self: center;
      }
 .whitePaper{
    height: 2049px;
  }
}

// @media (max-width: 579px) {
//  .whitePaper{
//     height: 2300px;
//   }

// }






@media (max-width: 1033px) {

  .counter .rec{
    left: 0%;
  }
  .counter .ligne{
    left: 28%;
  }
  .counter .circle{
    height: 18px;
    width: 18px;
    left: 0px;
  }
  .inp7{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 20%;
  }
  .icns{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .artcl{
    .ss1{
          margin-left: 17%;
    }
  }
}

@media (max-width: 920px) {

    .inp33 .select-css{
      width: 59%;
    }
  #diffInp1{
    display: block;
    margin: 0 auto;
    padding-top: 27px;

  }

}



@media (max-width: 879px) {
  #diffInp{
    width: 39%;
  }
.reglement #inp2{
  width: 100%;
}
.reglement #inp1{
  width: 100%;
}
.reglement #inp3{
  width:100%;
}
}

@media (max-width: 687px) {
 .results{
    display: grid;
    grid-template-columns: none;
    margin-left: 7%;
  }
}
@media (max-width: 600px) {

  .inp7{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20%;
  }
 
}

@media (max-width: 579px) {

 .results {
  .wrapResult{
    box-shadow: none;
  }
    }
    .reglement h1{
      padding-top: 0px;
    }
}
@media (max-width: 533px) {

  .inp7{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 20%;
  }
  .artcl .ss1 .inp6 .select-css{
    width: 7em;
  }

}

@media (max-width: 400px) {

  .inp7{
    margin-left: 3%;
  }

}

@media (max-width: 361px) {


  .whitePaper{
    width: 72.5vw;
  }

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
      display: block;
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
@media (max-width: 581px)
{
.whitePaper {
    height: 2193px;
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

 @media (max-width: 488px) {
   .footer{

     .btnss{
      display: grid;
      grid-template-columns: none;
       #bbtn2{
         justify-self: center;
       }
     }
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
