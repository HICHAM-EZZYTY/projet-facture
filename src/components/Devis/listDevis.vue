<template>
  <div class="container">
    <div class="Title-items bv-example-row">
      <h2 class="Title">Mes Devis</h2>
      <div class="text-center">
        <p variant="primary" class="desc">
          Exporter mes Devis
          <span class="badge badge-one">
            <a href="#">Info</a>
          </span>
          <span class="badge badge-two">
            <a href="#">/</a>
          </span>
        </p>
      </div>
    </div>
    <hr />
    <div class="projects">
    
      <b-tabs class="forms" content-class="mt-3" fill>

        <!-- <b-tab active>
          <template v-slot:title>
            <p class="Usera">title</p>
            <i class="fa fa-user usero"></i>
          </template>
          <p class="p-3">Tab contents 1</p>
        </b-tab>-->

        <b-tab active>
          <template v-slot:title :title-link-class="'tab-title-class'">
            <p class="Fact">Tous Les Devis</p>
            <span class="badge badge-inf badge-facture">
              <p class="facture">7</p>
            </span>
          </template>
          <b-table small :fields="fields" :items="items" responsive="sm">
            <!-- A virtual column -->

            <template v-slot:cell(N_de_devis)="data">
              <p class="column_1">{{ data.index + 1 }}</p>
            </template>

            <template v-slot:cell(Actions)>
              <!-- Drop Down Menu Parametres -->

              <div class="dropdown my-class">
                <a
                  type="text"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-ellipsis-v"></i>
                </a>
                <div class="dropdown-menu dropdown-left" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item active" href="#">Marquer comme signé</a>
                  <a class="dropdown-item" href="#">Marquer comme refusé</a>
                  <a class="dropdown-item" href="#">Modifier les mots-clés</a>
                  <a class="dropdown-item" href="#">Créer une opportunité</a>
                  <a class="dropdown-item" href="#">Dupliquer une oppurtunité</a>
                  <a class="dropdown-item" href="#">Dupliquer en facture</a>
                  <a class="dropdown-item" href="#">Dupliquer le devis</a>
                  <a class="dropdown-item" href="#">Envoyer par email</a>
                  <a class="dropdown-item" href="#">Télécharger</a>
                  <a class="dropdown-item" href="#">Copier l'url</a>
                </div>
              </div>


              <!-- You can also use the font-awesome-icon component here -->
            </template>

            <!-- A custom formatted column -->
            <template v-slot:cell(name)="data">
              <p>
                {{ data.value.first + " " }}
                {{ data.value.last }}
              </p>
            </template>
          </b-table>
        </b-tab>

        <b-tab>
          <template v-slot:title :title-link-class="'tab-title-class'">
            <p class="Fact">Provisoires</p>
            <span class="badge badge-inf badge-provi">
              <p class="facture">1</p>
            </span>
          </template>
        </b-tab>

        <b-tab>
          <template v-slot:title :title-link-class="'tab-title-class'">
            <p class="Fact">Finalisées</p>
            <span class="badge badge-inf badge-payes" :title-link-class="'tab-title-class'">
              <p class="facture">2</p>
            </span>
          </template>
        </b-tab>
        
        <b-tab>
          <template v-slot:title :title-link-class="'tab-title-class'">
            <p class="Fact">Refusés</p>
            <span class="badge badge-inf badge-apaye">
              <p class="facture">2</p>
            </span>
          </template>
        </b-tab>

        <b-tab>
          <template v-slot:title :title-link-class="'tab-title-class'">
            <p class="Fact">Signés</p>
            <span class="badge badge-inf badge-signe" active>
              <p class="facture">7</p>
            </span>
          </template>
        </b-tab>
        
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        // A virtual column that doesn't exist in items
        "N_de_devis",
        // A column that needs custom formatting
        { key: "name", label: "Nom de client" },
        // A regular column
        "Nom_de_société",
        // A regular column
        "Montant_totale",
        "Status",
        "Créer_le",
        "Signé_le",
        "Actions"

        // A virtual column made up from two fields
        // { key: "nameage", label: "First name and age" }
      ],
      items: [
        {
          name: { first: "Chaimaa", last: "Ess-bbah" },
          Montant_totale: "46,56 Dh",
          Nom_de_société: "Youcode",
          Status: "Signés",
          Créer_le: "12/02/20",
          Signé_le: "15/02/20",
          icon: "fa-user-secret"
        },
        {
          name: { first: "Fouzia", last: "Balibla" },
          Montant_totale: "230,36 Dh",
          Nom_de_société: "Youcode",
          Status: "Signés",
          Créer_le: "14/02/20",
          Signé_le: "16/02/20",
          isMember: "fa-user-secret"
        },
        {
          name: { first: "Hicham", last: "Ezzyti" },
          Montant_totale: "230,36 Dh",
          Nom_de_société: "Youcode",
          Status: "Finalisé",
          Créer_le: "14/02/20",
          Signé_le: "______"
        },
        {
          name: { first: "Chiamaa", last: "Ess-bbah" },
          Montant_totale: "46,56 Dh",
          Nom_de_société: "Youcode",
          Status: "Finalisé",
          Créer_le: "12/02/20",
          Signé_le: "______"
        },
        {
          name: { first: "Chaimaa", last: "Ess-bbah" },
          Montant_totale: "46,56 Dh",
          Nom_de_société: "Youcode",
          Status: "Signés",
          Créer_le: "12/02/20",
          Signé_le: "15/02/20",
          icon: "fa-user-secret"
        },
        {
          name: { first: "Fouzia", last: "Balibla" },
          Montant_totale: "230,36 Dh",
          Nom_de_société: "Youcode",
          Status: "Signés",
          Créer_le: "14/02/20",
          Signé_le: "16/02/20",
          isMember: "fa-user-secret"
        },
        {
          name: { first: "Hicham", last: "Ezzyti" },
          Montant_totale: "230,36 Dh",
          Nom_de_société: "Youcode",
          Status: "Finalisé",
          Créer_le: "14/02/20",
          Signé_le: "______"
        },
        {
          name: { first: "Chiamaa", last: "Ess-bbah" },
          Montant_totale: "46,56 Dh",
          Nom_de_société: "Youcode",
          Status: "Finalisé",
          Créer_le: "12/02/20",
          Signé_le: "______"
        }
      ]
    };
  }
};
</script>

<script>
export default {
  name: "ListDevis"
};
</script>
<style>
/* TITLE HEAD */
.Title {
  text-transform: capitalize;
  color: #2262c6;
  /* margin-bottom: 32rem; */
  position: absolute;
  font-family: Gelroy;
  font-size: 28px;
  font-weight: bold;
}

.desc {
  margin-left: 43rem;
  color: grey;
}

.badge {
  color: #fff;
  position: absolute;
  width: 50px;
  height: 34px;
  background: #ecf1f8;
  border-radius: 10px !important;
}

hr {
  margin-top: 2.5rem !important;
}

.badge-one {
  margin-left: 57px;
  margin-top: -2px;
}

b-tabs > title {
  margin-left: 20px;
}

.badge-two {
  margin-left: 7px;
  margin-top: -2px;
}

p > .badge {
  color: black;
}

/* FIN TITLE HEAD */

/* HEADER TABS */
b-tabs {
  border-style: none;
}

.badge-inf {
  background: #ecf1f8;
  /* margin-left: 31rem;
  margin-top: -6rem; */
}

.badge-inf > p {
  color: #2262c6;
  font-family: Gilroy;
  font-style: normal;
  font-size: 18px;
}

.facture {
  margin-top: 5px;
  margin-bottom: 1rem;
}

.badge-facture {
  margin-left: 0.5rem;
  top: 5rem;
}

.badge-provi {
  top: 5rem;
  margin-left: -1rem;
}

.badge-final {
  top: 5.3rem;
  margin-left: 5.8rem;
}

.badge-payes {
  margin-left: -1.9rem;
  top: 5rem;
}

.badge-apaye {
  top: 5rem;
  margin-left: -2.8rem;
}

.badge-signe {
  margin-left: -3rem;
  top: 5rem;
}

.Fact {
  margin-left: -17px;
  margin-top: -33px;
  position: absolute;
}

.Apaye {
  margin-left: -166px;
  margin-top: -33px;
  position: relative;
}

.project-tab {
  border: none;
  /* padding: 10%;
  margin-top: -8%; */
}
/* .project-tab #tabs {
  background: #007b5e;
  color: #eee;
} */
.dropdown-item.active,
.dropdown-item:active {
  color: black !important;
  text-decoration: none;
  background-color: #fff !important;
}

.dropdown-item {
  color: #616467 !important;
}

.project-tab #tabs h6.section-title {
  color: #eee;
}
.project-tab #tabs .nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #0062cc;
  background-color: transparent;
  /* border-color: transparent transparent #f3f3f3; */
  border-bottom: 3px solid !important;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  font-size: 16px;
}

.nav-fill .nav-item > a {
  font-weight: bold;
  font-style: normal;
  font-size: 16px;
  color: #aab5c6 !important;
  margin-top: 30px;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #0062cc !important;
  font-size: 16px;
  margin-top: 30px;
}

.project-tab thead {
  background: #f3f3f3;
  color: #333;
}
.project-tab a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}
/* FIN HEADER TABS */

/* Table Information */
.table {
  width: 100%;
  /* color: #212529; */
  margin-top: 2rem;
  background-color: #ecf1f8;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}
.table-sm th,
.table-sm td {
  padding: 0.3rem;
  height: 3.5rem;
}

.table-sm td > p {
  margin-left: 1rem !important;
  /* text-align: -webkit-left; */
}

.table-sm td > .column_1 {
  margin-left: -4.4rem !important;
}

.table thead th {
  font-size: 14px;
  line-height: 26px;
  color: #616467;
}

.fa-ellipsis-v:before {
  content: "\f142";
  color: #616467;
  position: absolute;
}

.my-class .dropdown-menu {
  /* max-height: 100px; */
  overflow-y: auto;
  height: 14rem;
}
/* FIN Table Information */


/* Responsive page */

/* Fin Responsive Page */
</style>

