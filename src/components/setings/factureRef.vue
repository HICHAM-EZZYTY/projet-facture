<template>
  <div>
      <!-- 
        this is a custom component . 
      -->
      <Title mainTitle="Préférences Pour Les Factures:" subTitle="ici, vous pouvez modifier les préférences des factures" />
    
    <div class="row forms px-xl-4 px-lg-4 px-md-4 px-sm-3 mt-3">
      <div class="forms-sides col-xl-6 col-lg-6 col-md-12 col-sm-12">
        
        
        <div class="forms-sides--group">
          <p class="forms-sides--group_label" >Afficher mon nom dans les PDF</p>
          <b-form-checkbox class="forms-sides--group_checkbox-2" v-model="facture.is_name_shown" name="check-button" switch></b-form-checkbox>
        </div>
  
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte D’introduction Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="facture.Introduction" ></b-form-textarea>
        </div>

          
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte conclution Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="facture.Conclution" ></b-form-textarea>
        </div>

          
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Pied de page Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="facture.footer" ></b-form-textarea>
        </div>

        
      </div>
    
    <div class="forms-sides col-xl-6 col-lg-6 col-md-12 col-sm-12">
        
        
        <div class="forms-sides--group">
          <p class="forms-sides--group_label" >Afficher mon nom dans les PDF</p>
          <b-form-checkbox class="forms-sides--group_checkbox-2" v-model="facture.is_name_shown" name="check-button" switch></b-form-checkbox>
        </div>
  
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte D’introduction Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="facture.Introduction" ></b-form-textarea>
        </div>

          
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte conclution Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="facture.Conclution" ></b-form-textarea>
        </div>

          
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Pied de page Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="facture.footer" ></b-form-textarea>
        </div>

        
      </div>
    </div>
    
    <b-button class="settings-btn btn btn-primary" @click="update">
      Mettre à jour votre compte
    </b-button>
  </div>
</template>

<script>

import Title from './Title.vue';
export default {
  name: "factureRef", 
  components: {
    Title
  },
  data: function () {
    return {
      facture: {
        type_text_document_parameter_id: 2,
        is_name_shown: false,
        Introduction: "",
        Conclution: "",
        footer: ""	
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

// .descr-facture {
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

// .textarea1 {
//   left: 15px;
//   top: -11.5rem;
// }

// .descr-facture2 {
//   margin-left: 0rem;
//   top: 12rem;
// }

// .textarea2 {
//   top: -9rem;
// }

// .descr-facture3 {
//   top: 19.5rem;
//   left: 1rem;
// }

// .textarea3 {
//   top: -6.5rem;
// }
</style>