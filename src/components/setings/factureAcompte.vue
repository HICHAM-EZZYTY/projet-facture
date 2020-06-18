<template>
  <div>
    <h1 class="title-ref">Préférences Pour Les Factures D'acomptes :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences de factures d’acomptes</h5>

    <div class="row">
      <div class="form1 col-md-6">
        
        <p>Afficher mon nom dans les PDF</p>
        <b-form-checkbox class="custom-switch1" v-model="factureAcompte.is_name_shown" name="check-button" switch></b-form-checkbox>
        <h4 id="text-show">Factures D'acompte Français :</h4>
        
        <label class="descr-pay descr-facture">Texte D’introduction Par Défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea1" size="lg" v-model="factureAcompte.Introduction"></b-form-textarea>
          </b-col>
        </b-row>
        
        <label class="descr-pay descr-facture2">Texte de conclusion par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea2" size="lg" v-model="factureAcompte.Conclution"></b-form-textarea>
          </b-col>
        </b-row>
        
        <label class="descr-pay descr-facture3">Pied de page par défaut</label>
        <b-row class="mt-2">
          <b-col sm="10">
            <b-form-textarea id="textarea-large" class="textarea3" size="lg" v-model="factureAcompte.footer"></b-form-textarea>
          </b-col>
        </b-row> 

      </div>

    
       <div class="form2 col-md-6">
       
        <input v-model="factureAcompte.amount" class="montant" placeholder="Montat par défaut" />
        <b-form-select class="montantRef" id="montantid" v-model="factureAcompte.amount_unit_id" :options="options"></b-form-select>
        <i class="fa fa-angle-down down-dev"></i>
 <!-- 
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
   -->
      </div>
  

    </div>
    <b-button class="load" @click="update">
        <p class="mise">Mettre à jour votre compte</p>
      </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { text: "Dh" , value: 1 }, 
        { text: "$"  , value: 2 }, 
        { text: "€"  , value: 3 }
      ], 
      factureAcompte: {
        "type_text_document_parameter_id": 3,
        "amount_unit_id": null,
        "amount": 0,
        "is_name_shown": false,
        "Introduction": null,
        "Conclution": null,
        "footer":null
      }, 
      
      token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU5MjUwMDk1NCwiZXhwIjoxNTkyNTA0NTU0LCJuYmYiOjE1OTI1MDA5NTQsImp0aSI6IjBBSVJpWGF0cVVPbzlvSDIiLCJzdWIiOjIyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.pZ-xcE4Hfp2k3fsnaI14E_a36bzoM4_tXkD87fQAlXg"
    };
  }, 
  methods: {
    getValues: function() {
      this.$http.defaults.headers.common = { Authorization: `Bearer ${this.token}` };
      this.$http
          .get(`/settings/text/${this.factureAcompte.type_text_document_parameter_id}`)
          .then((res) => {
            
            this.options.forEach( (op) => {
              if(op.value == res.data.amount_unit_id) this.factureAcompte.amount_unit_id = op.value;
            } );

            this.factureAcompte.is_name_shown = (res.data.is_name_shown == 1) ? true: false ; 
            this.factureAcompte.Introduction = res.data.Introduction;
            this.factureAcompte.Conclution = res.data.Conclution;
            this.factureAcompte.footer = res.data.footer;
            this.factureAcompte.amount = res.data.amount;

          })
          .catch((e) => {console.error(e)});
    }, 
    getUnits: function () {
      this.options = [
        {text: "pick " , value: null}
      ]
      this.$http.defaults.headers.common = { Authorization: `Bearer ${this.token}` };
      this.$http
          .get("/amount-unit")
          .then((res) => {
            res.data.forEach( (data) => {
              let obj = { text: data.value, value: data.id }
              this.options.push(obj);
            });
          })
          .catch(
            (e) => console.error(e)
          );
    }, 
    update: function () {
      this.$http
          .post("/settings/text", this.factureAcompte)
          .then(() => {
            console.log("done")
          })
          .catch(
            (e) => console.error(e)
          );
    }
  }, 
  created () {
    this.getUnits();
    this.getValues();
  }
};
</script>

<style >
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
  width: 200px !important;
  /* margin-left: 0px; */
  margin-top: -18px;
}

#montantid {
  position: absolute;
  width: 70px !important;
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