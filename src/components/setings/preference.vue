<template>
  <div>
    <h1 class="title-ref">Préférences Générales :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences générales</h5>
    <div class="row">
      <div class="form1 col-md-6">
        <label class="descr-pay">Pays pour défault pour les clients</label>
        <b-form-select class="custom-select0" v-model="selected" :options="options"></b-form-select>
        <i class="fa fa-angle-down angle"></i>
        <label class="descr-devis">Devise Par défaut</label>
        <b-form-select class="custom-select1" v-model="selected" :options="option"></b-form-select>
        <i class="fa fa-angle-down angle"></i>
        <label class="descr-article">Type d'article par défaut</label>
        <b-form-select class="custom-select2" v-model="selected" :options="type"></b-form-select>
        <label class="descr-tva">Tva (%)</label>
        <input class="tva" type="text" placeholder="20.0" />
        <b-form-checkbox v-model="checked" name="check-button" switch>
          <!-- Switch Checkbox
          <b>(Checked: {{ checked }})</b>-->
        </b-form-checkbox>

        <label class="description">Texte affiché si TVA n'est pas applicable en Français</label>
        <input
          type="text"
          class="select-info tva"
          placeholder="TVA non applicable, art. 293 B du CGI"
          disabled
        />
      </div>
      <div class="form2 col-md-6">
        <label class="descr-pay">Texte affiché si TVA n'est pas applicable en Anglais</label>
        <input class="custom-select custom-select0" placeholder="Reverse charge VAT" />
        <label class="descr-devis">Conditions de règlement par défaut</label>
        <b-form-select class="custom-select1" v-model="selected" :options="conditions"></b-form-select>
        <label class="descr-article">Mode de règlement par défaut</label>
        <b-form-select class="custom-select2" v-model="selected" :options="mode"></b-form-select>
        <label class="descr-tva">Intérêt de retard par défaut</label>
        <input class="tva" type="text" placeholder="Pas d'intérêts de retard" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      selected: null,
      options: [
        { text: "Maroc", selected: true },
        { text: "Maroc" },
        { text: "France" },
        { text: "Korea" },
        { text: "Chine" }
      ],
      option: [
        { text: "Dirham (dh)", selected: true },
        { text: "Dollar ($)" },
        { text: "Euro (‎€)" }
      ],
      type: [{ text: "Service", selected: true }],
      conditions: [
        { text: "45 jours fin de mois", selected: true },
        { text: "60 jours" },
        { text: "60 jours fin de mois" },
        { text: "90 jours" }
      ],
      mode: [{ text: "lettre de change relevé", selected: true }]
    };
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
  color: #2f2e4d;
}

.sous-title {
  font-size: 16px;
  color: #696990;
  margin-left: 51px;
  margin-top: 17px;
}

.form1 {
  left: 3rem;
}

.description {
  font-size: 14px;
  color: gray;
  margin-top: 24px;
}

.custom-select,
.tva {
  position: absolute;
  width: 18.6rem !important;
  left: 13px;
  height: 44px !important;
  background: #f8f9fc !important;
  border: 1px solid #eceef3 !important;
  box-sizing: border-box;
  border-radius: 4px !important;
}

.tva {
  top: 16rem;
}

.custom-select0 {
  margin-top: 1rem;
}

.angle {
  margin-left: 16.5rem;
  position: absolute;
  top: 32px;
}

.custom-select1 {
  margin-top: 6rem;
}

.custom-select2 {
  margin-top: 11rem;
}

input[type="text"] {
  font: 15px/24px "Gilroy", Arial, sans-serif;
  color: #b3b8c3;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1.5px;
  padding-left: 14px;
}

.custom-switch {
  margin-left: 16.25rem !important;
  margin-top: 14.5rem;
}

.select-info {
  margin-top: 81px;
}

.descr-pay {
  position: absolute;
  top: -10px;
  color: #b3b8c3;
  font-size: 14px;
}

.descr-devis {
  position: relative;
  left: -2px;
  color: #b3b8c3;
  font-size: 14px;
}

.descr-article {
  position: relative;
  top: 147px;
  color: #b3b8c3;
  font-size: 14px;
  left: -2px;
}

.descr-tva {
  position: relative;
  top: 228px;
  color: #b3b8c3;
  font-size: 14px;
  left: -150px;
}

.form2 > .custom-select2 {
  top: 0rem;
}

.form2 > .descr-article {
  margin-left: 1rem;
  position: absolute;
}

.form2 > .descr-tva {
  margin-left: 10.3rem;
  position: absolute;
}
</style>