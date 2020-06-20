<template>
  <div class="pb-sm-4 pb-xs-4">
   
    <!-- 
        this is a custom component . 
      -->
      <Title mainTitle="Les Avoirs :" subTitle="ici, vous pouvez modifier les préférences des avoirs" />

    <div class="row forms px-xl-4 px-lg-4 px-md-4 px-sm-3">
      <div class="forms-sides col-xl-6 col-lg-6 col-md-12 col-sm-12">

        <div class="forms-sides--group">
          <p class="forms-sides--group_label" >Afficher mon nom dans les PDF</p>
          <b-form-checkbox class="forms-sides--group_checkbox-2" v-model="avoire.is_name_shown" name="check-button" switch></b-form-checkbox>
        </div>
       
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte D’introduction Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoire.Introduction" ></b-form-textarea>
        </div>

        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte de Conclution Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoire.Conclution" ></b-form-textarea>
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label"> Pied de la page Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoire.footer" ></b-form-textarea>
        </div>
      
      </div>

      <div class="forms-sides col-xl-6 col-lg-6 col-md-12 col-sm-12">

        <div class="forms-sides--group">
          <p class="forms-sides--group_label" >Afficher mon nom dans les PDF</p>
          <b-form-checkbox class="forms-sides--group_checkbox-2" v-model="avoire.is_name_shown" name="check-button" switch></b-form-checkbox>
        </div>
       
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte D’introduction Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoire.Introduction" ></b-form-textarea>
        </div>

        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte de Conclution Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoire.Conclution" ></b-form-textarea>
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label"> Pied de la page Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoire.footer" ></b-form-textarea>
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
  name: "avoireRef", 
  components:{
    Title,
  }, 
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

<style lang="scss" scoped >

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

// .textarea01 {
//   margin-top: 6rem;
// }

// .textarea02 {
//   margin-top: 13rem;
// }
</style>