<template>
  <div>
    <h1 class="title-ref">Préférences Pour Les Factures D'acomptes :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences de factures d’acomptes</h5>

    <div class="row">
      <div class="form1 col-md-6">
        <p>Afficher mon nom dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="checked" name="check-button" switch></b-form-checkbox>
        <h4 id="text-show">Factures D'acompte Français :</h4>
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
        <input v-model="message" class="montant" placeholder="Montat par défaut" />
        <b-form-select class="montantRef" id="montantid" v-model="selected" :options="options"></b-form-select>
        <i class="fa fa-angle-down down-dev"></i>

        <h4 id="text-show">Factures D'acompte Anglais :</h4>
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
export default {
  data() {
    return {
      checked: false,
      selected: null,
      options: [{ text: "Dh", selected: true }, { text: "$" }, { text: "€" }]
    };
  }
};
</script>

<style scoped>
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

.form1 > #text-show,
.form2 > #text-show {
  font-size: 21.5px !important;
}

.montant {
  position: absolute;
  width: 150px !important;
  margin-top: -4.4px;
  border-top: none;
  border-bottom: 1px solid black;
  border-right: none;
  border-left: none;
}

.montantRef {
  position: absolute;
  width: 150px !important;
  /* margin-left: 0px; */
  margin-top: -18px;
}

#montantid {
  position: absolute;
  width: 60px !important;
  left: 11rem;
  top: -3px;
  border: none !important;
  border-bottom: 1px solid black !important;
  border-radius: 0px !important;
  background-color: white !important;
  border-bottom-left-radius: 0px !important;
}

.down-dev {
  position: absolute;
  left: 13.8rem;
}
</style>