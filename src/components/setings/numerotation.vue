<template>
  <div>
    <h1 class="title-ref">Préférences Pour La Numérotation :</h1>
    <h5 class="sous-title">ici, vous pouvez modifier les préférences de numérotation</h5>

    <div class="row">
      <div class="form1 col-md-6">
        <label class="descr-pay">Format De La Numérotation</label>
        <input class="custom-select custom-select0" placeholder="<doc><aa><cmp>" />

        <label class="descr-devis">Aperçu Du Résultat</label>
        <input class="custom-select custom-select1" placeholder="F2000001" />
        <label class="descr-article">Taille Minimale Du Compteur</label>
        <input class="custom-select custom-select2" type="number" placeholder="5" min="1" />
        <label class="descr-tva descr-tva1">Rénitialisation Du Compteur</label>
        <b-form-select class="tva" v-model="selected" :options="options"></b-form-select>
      </div>
      <div class="form2 col-md-6">
        <label class="descr-pay">Débuter Le Compteur Pour Les Devis à</label>
        <input class="custom-select custom-select0" type="number" placeholder="1" min="1" />
        <label class="descr-devis">Débuter Le Compteur Pour Les Factures à</label>
        <input class="custom-select custom-select1" type="number" placeholder="1" min="1" />
        <label class="descr-article">Débuter Le Compteur Pour Les Avoirs à</label>
        <input class="custom-select custom-select2" type="number" placeholder="1" min="1" />
        <label class="descr-tva">Débuter Le Compteur Pour Les Avoirs D'acompte à</label>
        <input class="custom-select tva" type="number" placeholder="1" min="1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "#vue",
  data() {
    return {
      checked: false,
      selected: null,
      options: [
        { text: "Tous les mois" },
        { text: "Tous les ans", selected: true },
        { text: "Jamais" }
      ]
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
}

.sous-title {
  font-size: 16px;
  color: gray;
  margin-left: 51px;
  margin-top: 17px;
}

.descr-tva1 {
  left: -11.2rem;
}
</style>