<template>
  <div class="containerGlobal">
    <div class="rec1">
      <img src="../../assets/img/Rec1.svg" alt="PictureOfRectange1" />
    </div>
    <div class="rec2">
      <img id="rec" src="../../assets/img/Rec2.svg" alt="PictureOfRectange2" />
      <div class="containerCard">
        <div class="circle">
          <img src="../../assets/img/delete.svg" alt="closing the modal" />
        </div>
        <h1>
          Exporter la liste : <button id="btn">12 factures</button>
          <p>Quel type de fichiers source souhaitez-vous télécharger ?</p>
        </h1>

        <div class="technos">
          <div
            @mouseover="hoverIcons()"
            v-on:mouseleave="hoverIconsLeave()"
            class="first"
          >
            <div class="background">
              <img src="../../assets/img/pdf.svg" alt="Pdf Icon" />
            </div>
            <p v-bind:class="{ active: IsColor }">PDF</p>
          </div>
          <div
            @mouseover="hoverIcons1()"
            v-on:mouseleave="hoverIconsLeave1()"
            class="second"
          >
            <div class="background">
              <img src="../../assets/img/csv.svg" alt="csv Icon" />
            </div>
            <p v-bind:class="{ active: IsColor1 }">CSV</p>
          </div>

          <div
            @mouseover="hoverIcons2()"
            v-on:mouseleave="hoverIconsLeave2()"
            class="third"
          >
            <div class="background">
              <img
                src="../../assets/img/spreadsheet.svg"
                alt="spreadsheet Icon"
              />
            </div>
            <p v-bind:class="{ active: IsColor2 }">EXCEL</p>
          </div>

          <div
            @mouseover="hoverIcons3()"
            v-on:mouseleave="hoverIconsLeave3()"
            class="fourth"
          >
            <div class="background">
              <img src="../../assets/img/json.svg" alt="json Icon" />
            </div>
            <p v-bind:class="{ active: IsColor3 }">JSON</p>
          </div>

          <div
            @mouseover="hoverIcons4()"
            v-on:mouseleave="hoverIconsLeave4()"
            class="fifth"
          >
            <div class="background">
              <img src="../../assets/img/vcf.svg" alt="vcards Icon" />
            </div>
            <p v-bind:class="{ active: IsColor4 }">VCARDS</p>
          </div>
        </div>

        <div class="buttonContainer">
          <button id="btn1" type="button">Fermer</button>
          <button id="btn2" type="button">
            <img id="heart" src="../../assets/img/HeartEmoji.svg" /> Ceci s'il
            vous plaît !
          </button>
        </div>

        <p id="nb">
          La génération des fichiers peut prendre plusieurs minutes.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : "theExportFacture",
  data: function() {
    return {
      IsColor: false,
      IsColor1: false,
      IsColor2: false,
      IsColor3: false,
      IsColor4: false
    };
  },

  props: {},
  methods: {
    hoverIcons() {
      this.IsColor = true;
    },
    hoverIconsLeave() {
      this.IsColor = false;
    },
    hoverIcons1() {
      this.IsColor1 = true;
    },
    hoverIconsLeave1() {
      this.IsColor1 = false;
    },
    hoverIcons2() {
      this.IsColor2 = true;
    },
    hoverIconsLeave2() {
      this.IsColor2 = false;
    },
    hoverIcons3() {
      this.IsColor3 = true;
    },
    hoverIconsLeave3() {
      this.IsColor3 = false;
    },
    hoverIcons4() {
      this.IsColor4 = true;
    },
    hoverIconsLeave4() {
      this.IsColor4 = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../scss/main.scss";

$Swr1: 23%;
$Swr2: 53%;
$Scr: 54%;
$ts: 20vw;
$tss: 50vw;

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

@mixin paraHover() {
  color: #2262c6;
  opacity: 100%;
}

.active {
  color: #2262c6 !important;
  opacity: 100% !important;
}

.containerGlobal {
  background-color: $background;
  height: 720px;
  width: 100%;
  overflow-x: hidden;
}

.rec1 > img {
  display: block;
  margin: 0 auto;
  position: relative;
  width: $Swr1;
  height: 209px;
  right: 17%;
  top: 75px;
  z-index: 0;
}

#rec {
  position: relative;
  width: $Swr2;
  height: 394px;
  display: block;
  margin: 0 auto;
  left: 12%;
  bottom: 57px;
  z-index: 0;
}

.containerCard {
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

.containerCard {
  .circle {
    float: right;
    margin-top: 26px;
    margin-right: 5%;
    width: 35px;
    height: 35px;
    border-radius: 70%;
    position: relative;
    background-color: #f5f7fb;
    z-index: 1;

    &:hover {
      animation: rotating 2s linear infinite;
    }
    @keyframes rotating {
      from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    img {
      width: 11px;
      height: 11px;
      display: block;
      margin: 0 auto;
      margin-top: 11px;
    }
  }
  .circle:hover {
    background-color: #f5f7fb;
  }
  h1 {
    font-family: $sb;
    color: black;
    font-size: 17px;
    margin-top: 9%;
    margin-left: 8%;
  }
  button {
    border: none;
    background-color: #2262c6;
    color: white;
    border-radius: 3px;
    font-size: 12px;
    margin-left: 10px;
    height: 23px;
    width: 79px;
    // transition: background-color 2s ease-in;
  }
  #btn:hover {
    -webkit-animation: bounce-top 0.9s both;
    animation: bounce-top 0.9s both;
  }

  @keyframes bounce-top {
    0% {
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-16px);
      transform: translateY(-16px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }

  p {
    margin-top: 17px;
    font-size: 14px;
  }
}
.technos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin-top: 43px;
  width: 47%;
  margin-left: 24%;
}
.background {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: $white1;
  box-shadow: none;
  box-shadow: 32px 5px 62px rgba(0, 0, 0, 0.07);
  transition: all 0.7s 0.2s ease-out;

  &:hover {
    background-color: $blue;
    transform: rotate(1080deg);
  }
  img {
    height: 33px;
    display: block;
    margin: 0 auto;
    padding-top: 3px;
  }
}
.buttonContainer {
  #btn1 {
    margin-right: 0px;
    height: 29px;
    width: 147px;
    background-color: transparent;
    border: 0.9px solid #000000;
    color: #7a7e89;
    font-size: 11px;
    font-family: $sb;
    &:hover {
      background-color: #eb4d4b;
      border: none;
      color: white;
    }
  }

  #btn2 {
    height: 29px;
    width: 149px;
    font-size: 11px;
    font-family: $sb;
    font-size: 10px;
    font-family: "Gilroy-SemiBold";
    &:hover {
      animation: pulsate 3s 0.6s ease-out;
      animation-iteration-count: infinite;
      opacity: 1;
    }
    img {
      margin-right: 5px;
    }
    @keyframes pulsate {
      10% {
        opacity: 0.4;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.4;
      }
    }
  }
}

.first {
  p {
    @include paragraph();
  }
  p:hover {
    @include paraHover();
  }
}

.second {
  p {
    @include paragraph();
  }
  p:hover {
    @include paraHover();
  }
}
.third {
  p {
    @include paragraph();
  }
  p:hover {
    @include paraHover();
  }
}

.fourth {
  p {
    @include paragraph();
  }
  p:hover {
    @include paraHover();
  }
}

.fifth {
  justify-self: center;
  p {
    @include paragraph();
    margin-left: 0px !important;
  }
  p:hover {
    @include paraHover();
  }
}
.buttonContainer {
  margin-left: 24%;
  margin-top: 39px;
}
#nb {
  margin-top: 13px;
  font-size: 10.1px;
  margin-left: 25%;
  color: black;
  &:hover {
    animation: text-shadow-pop-left 0.6s both;
  }
  @keyframes text-shadow-pop-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
  }
}

// start Styling the responsive for small devices

@media (max-width: 990px) {
  .buttonContainer {
    margin-left: 16%;
    margin-top: 39px;
  }
}

@media (max-width: 518px) {
  .buttonContainer {
    margin-left: 25%;
    margin-top: 39px;
  }
}

@media (max-width: 600px) {
  .buttonContainer {
    margin-left: 25%;
    margin-top: 39px;
  }
  #btn1 {
    margin-bottom: 10px;
  }
  #nb {
    margin-left: 15%;
  }
}

@media (max-width: 480px) {
  .technos {
    width: 70%;
    margin-left: 15%;
  }
  .containerCard {
    height: 600px;
    h1 {
      margin-top: 26%;
    }
    p {
      padding-right: 10px;
    }
  }
}

@media (max-width: 379px) {
  .buttonContainer {
    margin-top: 17px;
    display: block;
    margin-left: 15%;
    position: relative;
    width: 144px;
  }
  .technos {
    width: 70%;
    margin-left: 15%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 43px;
  }
  .containerCard {
    h1 {
      margin-top: 32%;
    }
    button {
      margin-top: 11px;
      margin-left: 0px;
    }
  }
  .fifth {
    justify-self: start;
    margin-top: 13px;
  }
}

@media (max-width: 766px) {
  .technos {
    width: 70%;
    margin-left: 15%;
  }
}

@media (max-width: 841px) {
  .rec1 > img {
    display: block;
    margin: 0 auto;
    position: relative;
    width: 30%;
    height: 209px;
    right: 160px;
    top: 25px;
    z-index: 0;
  }

  .containerCard {
    width: $tss + 20;
    left: 10vw;
  }

  .rec2 > img {
    position: relative;
    left: 12%;
    top: 52px;
  }
}
</style>
