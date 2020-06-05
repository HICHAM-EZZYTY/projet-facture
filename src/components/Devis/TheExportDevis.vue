<template>
<div class="containerGlobal">

<div class="rec1"><img src="../../assets/img/Rec1.svg" alt="PictureOfRectange1"></div>
<div class="rec2"><img id="rec" src="../../assets/img/Rec2.svg" alt="PictureOfRectange2">
<div class="containerCard">
<div class="circle">
    <img src="../../assets/img/delete.svg" alt="closing the modal">
</div>
<h1>Exporter la liste :  <button>12 devis</button>
<p>Quel type de fichiers source souhaitez-vous télécharger ?</p>
</h1>

<div class="technos">

    <div class="first">
        <div class="background">
            <img src="../../assets/img/pdf.svg" alt="Pdf Icon">
        </div>
        <p>PDF</p>
    </div>

      <div class="second">
        <div class="background">
            <img src="../../assets/img/csv.svg" alt="csv Icon">
        </div>
        <p>CSV</p>
    </div>

    
      <div class="third">
        <div class="background">
            <img src="../../assets/img/spreadsheet.svg" alt="spreadsheet Icon">
        </div>
        <p>EXCEL</p>
    </div>

       <div class="fourth">
        <div class="background">
            <img src="../../assets/img/json.svg" alt="json Icon">
        </div>
        <p>JSON</p>
    </div>

          <div class="fifth">
        <div class="background">
            <img src="../../assets/img/vcf.svg" alt="vcards Icon">
        </div>
        <p>VCARDS</p>
    </div>



</div>

<div class="buttonContainer">

<button id="btn1" type="button">Fermer</button>
<button id="btn2" type="button"> <img src="../../assets/img/HeartEmoji.svg"> Ceci s'il vous plaît !</button>
</div>

<p id="nb">La génération des fichiers peut prendre plusieurs minutes.</p>




</div>
</div>
</div>
</template>

<script>
export default {
      props:{
      
        DevisId:{

            type:String,
            required:true
        }
    },

        methods:{
        test(){
            console.log("hada tibiyen bali params khadma",this.DevisId)
            
        },
     
    },
 
 

}
</script>

<style  scoped lang="scss" >
@import "../../scss/main.scss" ;   

$Swr1:23%;
$Swr2:53%;
$Scr: 54%;
$ts:20vw;
$tss:50vw;


@mixin paragraph() {
        display: block;
        margin: 0 auto;
        margin-left: 8px;
        margin-top: 6px;
        color: $blacklight;
        font-family: $sb;
        font-size: 12px;
        opacity: 0.7;
}


.containerGlobal {
    background-color: $background;
    height: 720px;
    width: 100%;
    overflow-x: hidden;
}

.rec1>img{
    display: block;
    margin: 0 auto;
    position: relative;
    width: $Swr1;
    height: 209px;
    right: 17%;
    top: 75px;
    z-index: 0;
}

#rec{
   position: relative;
    width: $Swr2;
    height: 394px;
    display: block;
    margin: 0 auto;
    left: 12%;
    bottom: 57px;
    z-index: 0;
}

.containerCard{

    background-color: $white;
    display: block;
    margin: 0 auto;
    width: $Scr;
    height: 400px;
    border-radius: 6px;
    z-index: 2;
    position: absolute;
    top: 102px;
    left: 25%;
    box-shadow: -2px -5px 24px rgba(0, 0, 0, 0.07);    
}

.containerCard{
    .circle{
   float: right;
    margin-top: 26px;
    margin-right: 5%;
    width: 35px;
    height: 35px;
    border-radius: 70%;
    position: relative;
    background-color: #F5F7FB;
    z-index: 1;
    img
    {
    width: 11px;
    height: 11px;
    display: block;
    margin: 0 auto;
    margin-top: 11px;
    }
    }
    .circle:hover{
    background-color:#F5F7FB;
    }
    h1{
        font-family: $sb;
        color:black;
        font-size:17px;
        margin-top: 9%;
         margin-left: 8%;

    }
    button{
    border: none;
    background-color: #2262C6;
    color: white;
    border-radius: 3px;
    font-size: 12px;
    margin-left: 10px;
    height: 23px;
    width: 79px;
    }
    p{
    margin-top: 17px;
    font-size: 14px;
    }
    }
    .technos{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 43px;
    width: 47%;
    margin-left: 24%;
    }
    .background{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $white1;
    box-shadow: none;
    box-shadow: 32px 5px 62px rgba(0, 0, 0, 0.07);
    img{
    height: 33px;
    display: block;
    margin: 0 auto;
    padding-top: 3px;
    }
    }
    .buttonContainer{


    #btn1{
    margin-right: 0px;
    height: 29px;
    width: 147px;
    background-color: transparent;
    border: 0.9px solid #000000;
    color: #7A7E89;
    font-size: 11px;
    font-family: $sb;
    }

    #btn2{
    height: 29px;
    width: 149px;
    font-size: 11px;
    font-family: $sb;
    font-size: 10px;
    font-family: "Gilroy-SemiBold";
    img {
        margin-right: 5px;
    }
    }



    }



    .first{
        p{
        @include paragraph();
   
        }
    }

    .second{
        p{
        @include paragraph();

        }
    }
      .third{
           p{
            @include paragraph();

        }
      }

         .fourth{
           p{
           @include paragraph();

        }
    }

      .fifth{
          justify-self: center;
           p{
           @include paragraph();
           margin-left: 0px !important;

        }
    }
    .buttonContainer{
        margin-left: 24%;
        margin-top: 39px;
    }
    #nb{
    margin-top: 13px;
    font-size: 10.1px;
    margin-left: 25%;
    color: black;
    }

// start Styling the responsive for small devices 

@media (max-width: 990px) {
.buttonContainer {
    margin-left: 16%;
    margin-top: 39px;

}
}

@media (max-width: 518px) {
    .buttonContainer{
        margin-left: 25%;
        margin-top: 39px;
    }

}







@media (max-width: 600px) {
.buttonContainer {
    margin-left: 25%;
    margin-top: 39px;

}
#btn1{
    margin-bottom: 10px;
}
#nb {
    margin-left: 15%;
}
}

@media (max-width: 480px) {
.technos{
    width: 70%;
    margin-left: 15%;
}
.containerCard{
    height: 600px;
h1{
    margin-top: 26%;
}
p{
    padding-right: 10px;
}
}

}

@media (max-width: 379px) {
.buttonContainer{
    margin-top: 17px;
    display: block;
    margin-left: 15%;
    position: relative;
    width: 144px;
}
.technos{
    width: 70%;
    margin-left: 15%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 43px;
}
.containerCard{
h1{
    margin-top: 32%;
}
button{
    
    margin-top: 11px;
    margin-left: 0px;
}
}
.fifth{
    justify-self: start;
    margin-top: 13px;
}
}


@media (max-width: 766px) {
.technos{
    width: 70%;
    margin-left: 15%;
}
}

@media (max-width: 841px) {

.rec1>img{
 
    display: block;
    margin: 0 auto;
    position: relative;
    width: 30%;
    height: 209px;
    right: 160px;
    top: 25px;
    z-index: 0;
}

.containerCard{
    width: $tss+20;
    left: 10vw;
}

.rec2>img{
    position: relative;
    left: 12%;
    top: 52px;
}

}


</style>