<template>
  <div>
    <h1 class="title-ref">Préférences Pour Les Avoirs D'acomptes :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences des avoirs d'acomptes</h5>

    <div class="row">
      <div class="form1 col-md-6">
        <p>Afficher mon nom dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="checked" name="check-button" switch></b-form-checkbox>
        <h4 id="text-show">Avoirs D'acompte En Français</h4>
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
        <h4 id="text-show">Avoirs D'acompte En Anglais :</h4>
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
</style>