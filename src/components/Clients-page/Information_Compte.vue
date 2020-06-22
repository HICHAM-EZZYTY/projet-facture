<template>
    <div>
      <h2>Information sur le compte :</h2>

      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Prénom</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Name">
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Name</label>
            <input type="text" class="form-control" id="inputPassword4" placeholder="Name">
          </div>

          <div class="form-group col-md-6">
            <label for="inputEmail4">Adresse email</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="email">
          </div>

          <div class="form-group col-md-6">
            <label for="inputEmail4">Fonction</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Fonction">
          </div>
                <span>Coordonnées du client :</span>
            <br>
            <hr>
            <br>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Numéro de téléphone</label>
            <input type="numero" class="form-control" id="inputEmail4" placeholder="Numéro de téléphone">
          </div>
           <div class="form-group col-md-6">
            <label for="inputEmail4">Société</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Société">
          </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Notes</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>
    
          </div>  
        </form>
    </div>

</template>

<script>

export default {
   name: "Information_Compte",
   components : {

   },
}
</script>

<style scoped>

</style>