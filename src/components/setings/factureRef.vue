<template>
  <div>
    <h1 class="title-ref">Préférences Pour Les Factures :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences de factures</h5>

    <div class="row">
      <div class="form1 col-md-6">
        <p>Afficher mon nom dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="facture.is_name_shown" name="check-button" switch></b-form-checkbox>
        
        <label class="descr-pay descr-facture">Texte D’introduction Par Défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea1" size="lg" v-model="facture.Introduction" ></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture2">Texte de conclusion par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea2" size="lg" v-model="facture.Conclution" ></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture3">Pied de page par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea3" size="lg" v-model="facture.footer" ></b-form-textarea>
          </b-col>
        </b-row>
      </div>
    
    <!--
    <div class="form2 col-md-6">
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
    
    <b-button class="load" @click="update">
      <p class="mise">Mettre à jour votre compte</p>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "factureRef", 
  data: function () {
    return {
      facture: {
        "type_text_document_parameter_id": 2,
        "is_name_shown": false,
        "Introduction": "",
        "Conclution": "",
        "footer": ""	
      },
    };
  } , 
  methods: {
    getValues: function () {
      this.$http
          .get(`/settings/text/${this.facture.type_text_document_parameter_id}`)
          .then((res) => {
            this.facture.is_name_shown = (parseInt(res.data.is_name_shown) == 1) ? true : false;
            this.facture.Introduction = res.data.Introduction;
            this.facture.Conclution = res.data.Conclution;
            this.facture.footer = res.data.footer;
          })
          .catch(
            (e) => console.error(e)
          );
    },
    update: function () {
      this.$http
          .post(`/settings/text/`, this.facture)
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
  margin-left: 0rem;
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