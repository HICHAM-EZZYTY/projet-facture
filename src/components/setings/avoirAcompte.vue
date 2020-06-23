<template>
  <div class="avoireAcompte-settings pb-sm-4 pb-xs-4">
 
      <!-- 
        this is a custom component . 
      -->
      <Title mainTitle="Avoirs D'acomptes :" subTitle="ici, vous pouvez modifier les préférences des avoirs d'acomptes" />

    <div class="row forms px-xl-4 px-lg-4 px-md-4 px-sm-3 mt-3">
      <div class="forms-sides col-xl-6 col-lg-6 col-md-12 col-sm-12">
        
        <div class="forms-sides--group">
          <p class="forms-sides--group_label" >Afficher mon nom dans les PDF</p>
          <b-form-checkbox class="forms-sides--group_checkbox-2" v-model="avoireAcompte.is_name_shown" name="check-button" switch></b-form-checkbox>
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte D’introduction Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoireAcompte.Introduction" ></b-form-textarea>
        </div> 

        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte de conclusion Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoireAcompte.Conclution" ></b-form-textarea>
        </div> 
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Pied de page Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoireAcompte.footer" ></b-form-textarea>
        </div> 
        
      </div>

      <div class="forms-sides col-xl-6 col-lg-6 col-md-12 col-sm-12">
        
        <div class="forms-sides--group">
          <p class="forms-sides--group_label" >Afficher mon nom dans les PDF</p>
          <b-form-checkbox class="forms-sides--group_checkbox-2" v-model="avoireAcompte.is_name_shown" name="check-button" switch></b-form-checkbox>
        </div>
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte D’introduction Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoireAcompte.Introduction" ></b-form-textarea>
        </div> 

        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Texte de conclusion Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoireAcompte.Conclution" ></b-form-textarea>
        </div> 
        
        <div class="forms-sides--group">
          <label class="forms-sides--group_label">Pied de page Par Défaut</label>
          <b-form-textarea rows="3" class="forms-sides--group_textarea" size="lg" v-model="avoireAcompte.footer" ></b-form-textarea>
        </div> 
        
      </div>
      
      
      
    </div>

    <b-button class="settings-btn btn-primary" @click="update">
      Mettre à jour votre compte
    </b-button>
  </div>
</template>

<script>
import Title from './Title.vue'; 
export default {
  name : "avoirAcompte", 
  components: {
    Title,
  }, 
  data: function () {
    return {
      
      avoireAcompte: {
        "type_text_document_parameter_id": 4,
        "is_name_shown": false,
        "Introduction": null,
        "Conclution": null,
        "footer": null
      }
    };
  },
  methods: {
    getData: function () {
      
      this.$http
          .get(`/settings/text/${this.avoireAcompte.type_text_document_parameter_id}`)
          .then((res) => {
            
            this.avoireAcompte.is_name_shown = (res.data.is_name_shown == 1) ? true: false ; 
            this.avoireAcompte.Introduction = res.data.Introduction;
            this.avoireAcompte.Conclution = res.data.Conclution;
            this.avoireAcompte.footer = res.data.footer;
            // this.avoireAcompte.amount = res.data.amount;

          })
          .catch((e) => {console.error(e)});
    }, 
    update: function (){
       this.$http
          .post("/settings/text", this.avoireAcompte)
          .then( () => {
            console.log("done");
          } )
          .catch( (e) => {
            console.error(e)
          });
      // console.log(this.avoireAcompte)
    }
  }, 
  created: function () {
    this.getData();
  }

};
</script>

<style lang="scss" scoped>
.avoireAcompte-settings{
  position: relative;
  min-height: 100%;
  width: 100%; 
}
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
</style>