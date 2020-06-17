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
      <div class="whitePaper">
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
          <p>1</p>
        </div>
        <div class="ligne"></div>
        <div class="circle"></div>
      </div>


      <div class="artcl">
        <div class="ss1">
          <div class="inp6">
              <label>Type</label>
              <br>
              <select class="select-css">
                  <option value="">Service</option>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="hamster">Hamster</option>
                  <option value="parrot">Parrot</option>
                  <option value="spider">Spider</option>
                  <option value="goldfish">Goldfish</option>
             </select>
          </div>

          <div class="icns">
            
            <img src="../../assets/img/pls.svg" alt="add icon">
            <img src="../../assets/img/rmv.svg" alt="remove icon">


          </div>
        </div>
        <div class="ss2">
          <div class="inp7">
              <input  id="in1" type="text" value="Quantité">
              <input   id="in2" type="text" value="prix HT">
                <div class="tva">
                <label>Tva</label>
                <div class="on_off">
                <input id="in3" type="text" value="20.00">
                <input  id="in4" type="checkbox" class="toggle" checked>
                </div>
                </div>


          </div>


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
      counter: 0,
      inputs: [{
      id: 'fruit0',
      label: 'Enter Fruit Name',
      value: 'Marjane',
    }],
    };
  },
  methods: {
    addInput() {
      this.inputs.push({
        id: `fruit${++this.counter}`,
        label: 'Enter Fruit Name',
        value: '',
      });
    },
      removeInput() {
      this.inputs.pop();
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
    height: 200px;
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
            width: 38px;
            border-radius: 16px;
            display: inline-block;
            position: relative;
            margin: 0;
            /* border: 2px solid #474755; */
            background: #2262C6;
            transition: all 0.2s ease;
          }
          .toggle:after {
            content: "";
                content: "";
                position: absolute;
                top: -4px;
                left: -1px;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background: #CCE0FF;
                box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
                transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
          }
          .toggle:checked {
            border-color: #654FEC;
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
