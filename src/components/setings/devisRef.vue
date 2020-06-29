<template>
  <div class="pb-sm-4 pb-xs-4">
      <!-- 
        this is a custom component . 
      -->
      <div v-show="isDone" style="color: green;">
        Updated
      </div>

      <Title mainTitle="Préférences Pour Les Devis:" subTitle="ici, vous pouvez modifier les préférences des Devis" />
    
    <div class="row forms px-xl-4 px-lg-4 px-md-4 px-sm-3 mt-3">
      
      <div class="forms-sides col-xl-6 col-lg-6 col-md-12 col-sm-12">
        
        <div class="forms-sides--group">
          <p class="forms-sides--group_label" >Afficher mon nom dans les PDF</p>
          <b-form-checkbox class="forms-sides--group_checkbox-2" v-model="document.is_name_shown" name="check-button" switch></b-form-checkbox>
        </div>
        
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte D’introduction Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="document.Introduction" ></b-form-textarea>
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte de conclusion par défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="document.Conclution" ></b-form-textarea>
        </div>
        
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Pied de page par défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="document.footer" ></b-form-textarea>
        </div>
        
      </div>

      <div class="forms-sides col-xl-6 col-lg-6 col-md-12 col-sm-12">

        <div class="forms-sides--group">
          <p class="forms-sides--group_label" >Cacher le bloc de signature dans les PDF</p>
          <b-form-checkbox class="forms-sides--group_checkbox-2" v-model="hideSignature" name="check-button" switch></b-form-checkbox>
        </div>
        
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Default introductory text</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="document.condition_general" ></b-form-textarea>
        </div>
             
      </div>

    </div>

    <b-button class="settings-btn btn btn-primary" @click="UpdateDevisSettings">
        Mettre à jour votre compte
      </b-button>
  </div>
</template>

<script>
import Title from './Title.vue';
export default {
  name: 'devisRef', 
  components: {
    Title
  }, 
  data () {
    //  type_text_document_parameter_id id the Id of the document type and there are 5 : Facture , Avoire , Devis , Facture-Acompte, Avoire-Acompte
    return {
      hideSignature: false, 
      isDone: false,
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
            this.isDone = true;
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

<style lang="scss" scoped>
// .title-ref {
//   font-family: "Gilroy" sans-serif;
//   font-size: 27px;
//   font-weight: bold;
//   margin-left: 49px;
//   margin-top: 34px;
// }

// .sous-title {
//   font-size: 16px;
//   color: gray;
//   margin-left: 51px;
//   margin-top: 17px;
// }

// .form1 > p,
// .form2 > p {
//   position: absolute;
//   font-family: "Gilroy" sans-serif;
//   color: #696990;
// }

// .custom-switch1 {
//   top: -14.3rem;
// }

// .form2 > .custom-switch1 {
//   left: 2.6rem;
//   top: -14.3rem !important;
// }

// .form1 > h4,
// .form2 > h4 {
//   left: -35px;
//   top: 18px;
//   position: absolute;
//   font-size: 23px;
//   font-weight: bold;
//   margin-left: 49px;
//   margin-top: 18px;
//   color: #2f2e4d;
// }

// .descr-devis {
//   position: absolute;
//   top: 4.8rem;
//   left: 0.9rem;
// }

// #textarea-large {
//   position: absolute;
//   width: 296px;
//   height: 79px;
//   background: #f8f9fc;
//   border: 1px solid #aab5c6;
//   box-sizing: border-box;
//   border-radius: 4px;
// }


// .descr-devis2 {
//   margin-left: 0rem;
//   top: 12rem;
// }

// .textarea2 {
//   top: -3rem !important;
// }

// .descr-devis3 {
//   top: 19.5rem;
//   left: 1rem;
// }

// .textarea3 {
//   top: 3.5rem !important;
// }
</style>