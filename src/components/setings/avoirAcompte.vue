<template>
  <div>
    <h1 class="title-ref">Préférences Pour Les Avoirs D'acomptes :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences des avoirs d'acomptes</h5>

    <div class="row">
      <div class="form1 col-md-6">
        <p>Afficher mon nom dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="avoireAcompte.is_name_shown" name="check-button" switch></b-form-checkbox>
        <h4 id="text-show">Avoirs D'acompte En Français</h4>
        <label class="descr-pay descr-facture">Texte D’introduction Par Défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea1" size="lg" v-model ="avoireAcompte.Introduction" ></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture2">Texte de conclusion par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea2" size="lg" v-model ="avoireAcompte.Conclution" ></b-form-textarea>
          </b-col>
        </b-row>
        <label class="descr-pay descr-facture3">Pied de page par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea3" size="lg" v-model ="avoireAcompte.footer" ></b-form-textarea>
          </b-col>
        </b-row>
      </div>
      <!--
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
      -->

      <b-button class="load" @click="update">
      <p class="mise">Mettre à jour votre compte</p>
    </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name : "avoirAcompte", 
  data: function () {
    return {
      
      avoireAcompte: {
        "type_text_document_parameter_id": 4,
        "is_name_shown": false,
        "Introduction": null,
        "Conclution": null,
        "footer": null
      }, 
       token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjUwMDk1NCwiZXhwIjoxNTkyNTA0NTU0LCJuYmYiOjE1OTI1MDA5NTQsImp0aSI6IjBBSVJpWGF0cVVPbzlvSDIiLCJzdWIiOjIyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.pZ-xcE4Hfp2k3fsnaI14E_a36bzoM4_tXkD87fQAlXg"
    };
  },
  methods: {
    getData: function () {
      this.$http.defaults.headers.common = { Authorization: `Bearer ${this.token}` };
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
      // this.$http.defaults.headers.common = { Authorization: `Bearer ${this.token}` };
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
</style>