<template>
  <div class="container">
    <div class="Title-items bv-example-row">
      <h2 class="Title">Mes Factures</h2>
      <div class="text-center">
        <p variant="primary" class="desc">
          Exporter mes Factures d’acompte
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
        <span class="badge badge-inf badge-facture">
          <p class="facture">7</p>
        </span>
        <b-tab title="Tous Les Factures" :title-link-class="'tab-title-class'" active>
          <b-table small :fields="fields" :items="items" responsive="sm">
            <!-- A virtual column -->
            <template v-slot:cell(N_de_devis)="data">{{ data.index + 1 }}</template>

            <!-- A custom formatted column -->
            <template v-slot:cell(name)="data">
              {{ data.value.first + " " }}
              {{ data.value.last }}
            </template>

            <!-- A virtual composite column -->
            <!-- <template
          v-slot:cell(nameage)="data"
            >{{ data.item.name.first }} is {{ data.item.age }} years old</template>-->

            <!-- Optional default data cell scoped slot -->
            <template v-slot:cell()="data">
              <i>{{ data.value }}</i>
            </template>
          </b-table>

          <!-- <div>
            <b-table :items="items" :fields="fields" :tbody-tr-class="rowClass"></b-table>
          </div>-->
        </b-tab>
        <span class="badge badge-inf badge-provi">
          <p class="facture">1</p>
        </span>
        <b-tab title="Provisoires" :title-link-class="'tab-title-class'">
          <p>I'm the second tab</p>
        </b-tab>
        <span class="badge badge-inf badge-final">
          <p class="facture">2</p>
        </span>
        <b-tab title="Finalisées" :title-link-class="'tab-title-class'">
          <p>I'm the tab with the very, very long title</p>
        </b-tab>
        <span class="badge badge-inf badge-payes" :title-link-class="'tab-title-class'">
          <p class="facture">2</p>
        </span>
        <b-tab title="Payées" :title-link-class="'tab-title-class'">
          <p>I'm a disabled tab!</p>
        </b-tab>
        <span class="badge badge-inf badge-apaye">
          <p class="facture">2</p>
        </span>
        <b-tab title="A payer" :title-link-class="'tab-title-class'">
          <p>I'm a disabled tab!</p>
        </b-tab>
      </b-tabs>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     fields: [
  //       "N_de_devis",
  //       "Nom_de_client",
  //       "Nom_de_société",
  //       "Montant_totale",
  //       "Status",
  //       "Créer_le",
  //       "Signé_le",
  //       "Actions"
  //     ],
  //     items: [
  //       {
  //         N_de_devis: "D2000003",
  //         Nom_de_client: "Chaimaa Ess-bbah",
  //         Nom_de_société: "youcode",
  //         Montant_totale: "46,56 Dh",
  //         Status: "Finalisé",
  //         Créer_le: "12/02/20",
  //         Signé_le: "______"
  //       },
  //       {
  //         N_de_devis: "D2007703",
  //         Nom_de_client: "Hicham Ezzyti",
  //         Nom_de_société: "youcode",
  //         Montant_totale: "230,36 Dh",
  //         Status: "Signés",
  //         Créer_le: "14/02/20",
  //         Signé_le: "16/02/20"
  //       },
  //       {
  //         N_de_devis: "D2007703",
  //         Nom_de_client: "Fouzia Balibla",
  //         Nom_de_société: "youcode",
  //         Montant_totale: "230,36 Dh",
  //         Status: "Provisoires",
  //         Créer_le: "14/02/20",
  //         Signé_le: "______"
  //       },
  //       {
  //         N_de_devis: "D2000003",
  //         Nom_de_client: "Chaimaa Ess-bbah",
  //         Nom_de_société: "youcode",
  //         Montant_totale: "46,56 Dh",
  //         Status: "Finalisé",
  //         Créer_le: "12/02/20",
  //         Signé_le: "______"
  //       },
  //       {
  //         N_de_devis: "D2000003",
  //         Nom_de_client: "Chaimaa Ess-bbah",
  //         Nom_de_société: "youcode",
  //         Montant_totale: "46,56 Dh",
  //         Status: "Finalisé",
  //         Créer_le: "12/02/20",
  //         Signé_le: "______"
  //       }
  //     ]
  //   };
  // }

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
        "Signé_le"
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
          Signé_le: "15/02/20"
        },
        {
          name: { first: "Fouzia", last: "Balibla" },
          Montant_totale: "230,36 Dh",
          Nom_de_société: "Youcode",
          Status: "Signés",
          Créer_le: "14/02/20",
          Signé_le: "16/02/20"
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
  width: 40px;
  height: 31px;
  background: #ecf1f8;
  border-radius: 10px;
}

hr {
  margin-top: 2.5rem !important;
}

.badge-one {
  margin-left: 57px;
  margin-top: -2px;
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

b-tab > title {
  margin-left: 2rem !important;
  color: gray;
}

.badge-inf {
  color: #000;
  background: #ecf1f8;
  /* margin-left: 31rem;
  margin-top: -6rem; */
}

.facture {
  margin-top: 5px;
  margin-bottom: 1rem;
}

.tab-title-class {
  color: gray !important;
}

.badge-facture {
  margin-left: -21.5rem;
  top: 5.5rem;
}

.badge-provi {
  top: 5.5rem;
  margin-left: -7.5rem;
}

.badge-final {
  top: 5.5rem;
  margin-left: 5.8rem;
}

.badge-payes {
  margin-left: 18.1rem;
  top: 5.5rem;
}

.badge-apaye {
  top: 5.5rem;
  margin-left: 30.5rem;
}

.badge-provi {
  margin-right: 2rem !important;
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
.project-tab #tabs h6.section-title {
  color: #eee;
}
.project-tab #tabs .nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #0062cc;
  background-color: transparent;
  border-color: transparent transparent #f3f3f3;
  border-bottom: 3px solid !important;
  border-top: none !important;
  border-right: none !important;
  border-left: none !important;
  font-size: 16px;
  font-weight: bold;
}
.project-tab .nav-link {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: #0062cc;
  font-size: 16px;
  font-weight: 600;
}
.project-tab .nav-link:hover {
  border: none;
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
}
/* FIN Table Information */
</style>