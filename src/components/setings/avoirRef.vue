<template>
  <div>
    <h1 class="title-ref">Préférences Pour Les Avoirs :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences des avoirs</h5>

    <div class="row">
      <div class="form1 col-md-6">
        <p>Afficher mon nom dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="avoire.is_name_shown" name="check-button" switch></b-form-checkbox>
        <h4>Avoir en français :</h4>
        <label class="descr-pay descr-facture">Texte D’introduction Par Défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea1" size="lg" v-model="avoire.Introduction" ></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture2">Texte de conclusion par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea2" size="lg" v-model="avoire.Conclution" ></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture3">Pied de page par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea3" size="lg" v-model="avoire.footer" ></b-form-textarea>
          </b-col>
        </b-row>
      </div>
      <!--<
      div class="form2 col-md-6">
        <h4>Avoir en Anglais :</h4>
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
      -->
    </div>
    <b-button class="settings-btn btn btn-primary" @click="update">
      Mettre à jour votre compte
    </b-button>
  </div>
</template>

<script>
export default {
  name: "avoireRef", 
  data: function () {
    return {
      avoire: {
        "type_text_document_parameter_id": 1,
        "is_name_shown": false,
        "Introduction": "",
        "Conclution": "",
        "footer": ""	
      }
    };
  } , 
  methods: {
    getValues: function () {
      this.$http
          .get(`/settings/text/${this.avoire.type_text_document_parameter_id}`)
          .then((res) => {
            this.avoire.is_name_shown = (parseInt(res.data.is_name_shown) == 1) ? true : false;
            this.avoire.Introduction = res.data.Introduction;
            this.avoire.Conclution = res.data.Conclution;
            this.avoire.footer = res.data.footer;
          })
          .catch(
            (e) => console.error(e)
          );
    },
    update: function () {
      this.$http
          .post(`/settings/text/`, this.avoire)
          .then((res) => {
            console.log(res);
          })
          .catch(
            (e) => console.error(e)
          );
    }
  },
  created: function () {
    this.getValues();
  }
}
</script>

<style scoped >

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

.textarea01 {
  margin-top: 6rem;
}

.textarea02 {
  margin-top: 13rem;
}
</style>