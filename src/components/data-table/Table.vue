<template>
  <div class="container">
    <div class="Mes-Devis">
      <div class="font">
        <h6>Mes Devis</h6>
        <p>Exporter Mes Devis</p>
        <!-- <img src="src/assets/img/icon1.png"  alt="hello"> -->
      </div>
      <hr />
      <div class="tous">
      </div>
      <div class="grid-container">
        <h6>Tous les devis</h6>
        <div class="item1">7</div>
        <h6>Provisoires</h6>
        <div class="item2">1</div>
        <h6>Finalisés</h6>
        <div class="item3">2</div>
        <h6>Refusés</h6>
        <div class="item4">2</div>
        <h6>Signés</h6>
        <div class="item5">2</div>
        
      </div>
      <hr class="hr" />
    </div>

    <table class="content-table" id="example">
      <thead>
        <tr>
          <th>N° de devis</th>
          <th>Nom de client</th>
          <th>Nom de société</th>
          <th>MONTANT TOTALE</th>
          <th>Status</th>
          <th>Créer le</th>
          <th>SIGNé le</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>D2000003</td>
          <td>hicham ezzyty</td>
          <td>Moulimeq</td>
          <td>46,56 Dh</td>
          <td>fn Finalisé</td>
          <td>14/02/20</td>
          <td>16/02/20</td>
          <td>:</td>
        </tr>
        <tr>
          <td>D2000003</td>
          <td>hicham ezzyty</td>
          <td>Moulimeq</td>
          <td>46,56 Dh</td>
          <td>fn Finalisé</td>
          <td>14/02/20</td>
          <td>16/02/20</td>
          <td>:</td>
        </tr>
        <tr>
          <td>D2000003</td>
          <td>hicham ezzyty</td>
          <td>Moulimeq</td>
          <td>46,56 Dh</td>
          <td>fn Finalisé</td>
          <td>14/02/20</td>
          <td>16/02/20</td>
          <td>:</td>
        </tr>
        <tr>
          <td>D2000003</td>
          <td>hicham ezzyty</td>
          <td>Moulimeq</td>
          <td>46,56 Dh</td>
          <td>fn Finalisé</td>
          <td>14/02/20</td>
          <td>16/02/20</td>
          <td>:</td>
        </tr>
        <tr>
          <td>D2000003</td>
          <td>hicham ezzyty</td>
          <td>Moulimeq</td>
          <td>46,56 Dh</td>
          <td>fn Finalisé</td>
          <td>14/02/20</td>
          <td>16/02/20</td>
          <td>:</td>
        </tr>
        <tr>
          <td>D2000003</td>
          <td>hicham ezzyty</td>
          <td>Moulimeq</td>
          <td>46,56 Dh</td>
          <td>fn Finalisé</td>
          <td>14/02/20</td>
          <td>16/02/20</td>
          <td>:</td>
        </tr>
        <tr>
          <td>D2000003</td>
          <td>hicham ezzyty</td>
          <td>Moulimeq</td>
          <td>46,56 Dh</td>
          <td>fn Finalisé</td>
          <td>14/02/20</td>
          <td>16/02/20</td>
          <td>:</td>
        </tr>
        <tr>
          <td>D2000003</td>
          <td>hicham ezzyty</td>
          <td>Moulimeq</td>
          <td>46,56 Dh</td>
          <td>fn Finalisé</td>
          <td>14/02/20</td>
          <td>16/02/20</td>
          <td>:</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style scoped>
.Mes-Devis {
  position: relative;
  top: 11em;
  right: 3em;
}
.font h6 {
  font-family: Gilroy-Black;
  color: #2262c6;
  font-size: 28px;
  font-style: normal;
  font-weight: bold;
}

.hr {
  position: absolute;
  width: 101em;
  height: 0px;
  left: -4em;
  top: 132px;
  border: 1px solid #e9eaeb;
}

p {
  text-align: end;
  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
  text-transform: capitalize;

  color: #aab5c6;
}
.tous {
  display: flex;
  justify-content: end;
}
.grid-container h6{
  display: grid;
}
.devis {
  position: absolute;
  width: 56px;
  height: 39px;
  left: 7em;
  display: grid;
  background: #ecf1f8;
  border-radius: 10px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}
.item1 {
  background: #ecf1f8;
  border-radius: 10px;
  width: 56px;
  height: 39px;
  text-align: center;
  grid-gap: 10px;
}
.item2 {
  background: #ecf1f8;
  border-radius: 10px;
  width: 56px;
  height: 39px;
  text-align: center;
  grid-gap: 10px;
}
.item3 {
  background: #ecf1f8;
  border-radius: 10px;
  width: 56px;
  height: 39px;
  text-align: center;
  grid-gap: 10px;
}
.item4 {
  background: #ecf1f8;
  border-radius: 10px;
  width: 56px;
  height: 39px;
  text-align: center;
  grid-gap: 10px;
}
.item5 {
  background: #ecf1f8;
  border-radius: 10px;
  width: 56px;
  height: 39px;
  text-align: center;
  grid-gap: 10px;
}
.content-table {
  background: #ecf1f8;
  position: relative;
  width: 104em;
  top: 18em;
  left: -4em;
  height: 43em;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #ecf1f8;
  color: #616467;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #ecf1f8;
}

tr {
  color: #616467;
}
/* @media (min-width: 992px){
    max-width: 288px;
} */
</style>
