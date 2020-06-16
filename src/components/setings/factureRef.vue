<template>
  <div>
    <h1 class="title-ref">Préférences Pour Les Factures :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences de factures</h5>

    <div class="row">
      <div class="form1 col-md-6">
        <p>Afficher mon nom dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="checked" name="check-button" switch></b-form-checkbox>
        <h4>Facture en français :</h4>
        <label class="descr-pay descr-facture">Texte D’introduction Par Défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea1" size="lg"></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture2">Texte de conclusion par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea2" size="lg"></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture3">Pied de page par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea3" size="lg"></b-form-textarea>
          </b-col>
        </b-row>
      </div>
      <div class="form2 col-md-6">
        <h4>Facture en Anglais :</h4>
        <label class="descr-pay descr-facture">Default introductory text</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea01" size="lg"></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture2">Default closing text</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea02" size="lg"></b-form-textarea>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title-ref {
  font-family: "Gilroy" sans-serif;
  font-size: 27px;
  font-weight: bold;
  margin-left: 49px;
  margin-top: 34px;
}

.sous-title {
  font-size: 16px;
  color: gray;
  margin-left: 51px;
  margin-top: 17px;
}

.form1 > p,
.form2 > p {
  position: absolute;
  font-family: "Gilroy" sans-serif;
  color: #696990;
}

.custom-switch1 {
  top: -14.3rem;
}

.form2 > .custom-switch1 {
  left: 2.6rem;
  top: -14.3rem !important;
}

.form1 > h4,
.form2 > h4 {
  left: -35px;
  top: 18px;
  position: absolute;
  font-size: 23px;
  font-weight: bold;
  margin-left: 49px;
  margin-top: 18px;
  color: #2f2e4d;
}

.descr-facture {
  position: absolute;
  top: 4.8rem;
  left: 0.9rem;
}

#textarea-large {
  position: absolute;
  width: 296px;
  height: 79px;
  background: #f8f9fc;
  border: 1px solid #aab5c6;
  box-sizing: border-box;
  border-radius: 4px;
}

.textarea1 {
  left: 15px;
  top: -11.5rem;
}

.descr-facture2 {
  margin-left: -22.5rem;
  top: 12rem;
}

.textarea2 {
  top: -9rem;
}

.descr-facture3 {
  top: 19.5rem;
  left: 1rem;
}

.textarea3 {
  top: -6.5rem;
}
</style>