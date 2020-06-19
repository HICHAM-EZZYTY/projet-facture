<template>
  <div>
    <h1 class="title-ref">Préférences Pour Les Devis :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences pour les devis</h5>

    <div class="row">
      
      <div class="form1 col-md-6">
        <p>Afficher mon nom dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="document.is_name_shown" name="check-button" switch></b-form-checkbox>
        
        <label class="descr-pay descr-devis">Texte D’introduction Par Défaut</label>
        
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea1" size="lg" v-model="document.Introduction" ></b-form-textarea>
          </b-col>
        </b-row>
        
        <label class="descr-pay descr-devis2">Texte de conclusion par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea2" size="lg" v-model="document.Conclution" ></b-form-textarea>
          </b-col>
        </b-row>

        <label class="descr-pay descr-devis3">Pied de page par défaut</label>
          <b-row class="mt-2">
            <b-col sm="10">
              <b-form-textarea id="textarea-large" class="textarea3" size="lg" v-model="document.footer" ></b-form-textarea>
            </b-col>
          </b-row>
      </div>

      <div class="form2 col-md-6">

        <p>Cacher le bloc de signature dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="hideSignature" name="check-button" switch></b-form-checkbox>
      
        <label class="descr-pay descr-devis">Default introductory text</label>
      
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea1" size="lg" v-model="document.condition_general" ></b-form-textarea>
          </b-col>
        </b-row>
      <!--
        <label class="descr-pay descr-devis2">Default closing text</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea2" size="lg"></b-form-textarea>
          </b-col>
        </b-row>
      -->
      
      </div>

    </div>

    <b-button class="settings-btn btn btn-primary" @click="UpdateDevisSettings">
        Mettre à jour votre compte
      </b-button>
  </div>
</template>

<script>
export default {
  name: 'devisRef', 
  data () {
    //  type_text_document_parameter_id id the Id of the document type and there are 5 : Facture , Avoire , Devis , Facture-Acompte, Avoire-Acompte
    return {
      hideSignature: false, 

      document : {
        type_text_document_parameter_id: 5,
        is_name_shown : false,
        Introduction: "",
        Conclution: "",
        footer: "",
        condition_general: ""
      }
    };
  },
  watch: {
    
  } 
  ,
  methods: {
    getValues: function () {
      this.$http
          .get(`/settings/text/${this.document.type_text_document_parameter_id}`)
          .then((res) => {
            this.document.is_name_shown = (parseInt(res.data.is_name_shown) == 1) ? true : false;
            this.document.Introduction = res.data.Introduction;
            this.document.Conclution = res.data.Conclution;
            this.document.footer = res.data.footer;
            this.document.condition_general = res.data.condition_general;
          })
          .catch(
            (e) => console.error(e)
          );
    },
    UpdateDevisSettings: function () {
      this.$http
          .post(`/settings/text`, this.document)
          .then((res) => {
            console.log(res);
          })
          .catch(
            (e) => console.error(e)
          );
    }
  }, 
  created() {
    this.getValues();
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

.descr-devis {
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
  top: -10rem !important;
}

.descr-devis2 {
  margin-left: 0rem;
  top: 12rem;
}

.textarea2 {
  top: -3rem !important;
}

.descr-devis3 {
  top: 19.5rem;
  left: 1rem;
}

.textarea3 {
  top: 3.5rem !important;
}
</style>