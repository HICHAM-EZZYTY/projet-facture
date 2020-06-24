<template>
  <nav class="navbar navbar-expand-lg navbar-dark ">
    <a class="navbar-brand" href="#"><img class="logo" src="../assets/Group.svg" alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContentLG" aria-controls="navbarSupportedContentLG" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContentLG">
        <form class="form-inline my-2 my-lg-0">
            <b-form-input
            class="search mr-2"
            id="iconified"
            placeholder="Rechercher des Devis ... "
            type="text"
          ></b-form-input>
          <!-- <b-icon class="icon" icon="search" aria-hidden="true"></b-icon> -->
          <img src="../assets/img/ssEarch.svg" class="icon">
          <b-button class="submit  my-sm-1" type="submit" variant="primary"
          > 
          <img src="../assets/img/Plus.svg" class="plus">
          Nouveau Devis
          </b-button>


        </form>
        <div id="navbar" class="navbar-collapse collapse">
           <p class="bienvenue"><span>Bienvenue,</span> Hello Anas,Chamkhi</p>
          <b-avatar
            variant="primary"
            class="avatar"
            size="2.7rem"
            id="tt"
          ></b-avatar>
        </div>
    </div>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    // initials: function () {
    //   let words = this.$store.getters.user.name.split(' ');
    //   return `${words[0][0]}${words[1][0]}`
    // }
  }
};
</script>

<style scoped lang="scss">
@import "/../scss/main.scss" ;   
#navbar{
    position: relative;
    top: 18px;
}
#tt {
      font-size: 15px;
      color:#F4F6F9;
      font-family:  $gm;
}
.logo {
    position: relative;
    width: 161px;
    top: 16px;
}

.btn-outline-dark {
    color: rgb(34, 98, 198);
    border-color: rgb(34, 98, 198);
}
.btn-outline-dark:hover {
	border-color: #343a40;	
}
.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #2262c6;
    border: 1px solid #2262c6;
    border-radius: .25rem;
}
.search {
  width: 28.4rem !important;
  margin-right: 0.6em !important;
}
.form input[type="text"] {
  padding-left: 3rem;
}

.submit {
  width: 176px;
  height: 37px;
  font-family:$bd;
  font-size: 13px;
}
.icon {
    position: absolute;
    width: 32px;
    top: 4px;
    left: 6px;
    padding: 9px 7px;
    color: #aaa;
    transition: 0.3s;
}
.avatar{
    width: 42px;
    height: 42px;
    position: relative;
    right: 4px;
    top: 2px;
    font-size: 8px;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: 19px 39px;
    font-family:  $r;
    opacity: 70%;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #E9EBEE;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.form-inline {
    display: flex;
    position: relative;
    /* align-items: center; */
  
    left: 6.4%;
    top: 19px;
}
 .bienvenue {
    font-family: $r;
    position: relative;
    top: 2px;
    color: #AAB5C6;
    margin: 1.5rem;
    margin-left: auto;
    font-size: 14px;
    span{
    font-family: $bd;
    }
}
.btn-primary {
  color: #fff;
  background-color: #2262c6;
  border-color: #2262c6;
}
.badge-primary {
  color: #fff;
  background-color: #2262c6;
}  
.form-inline {
    display: flex;
    align-items: center;
}
.plus{

    width: 12px;
    position: relative;
    right: 14px;
    bottom: 0.6px;
}

@media (max-width: 1182px) {

  .bienvenue{
    display: none;
  }
  .avatar{
    margin-left: 85%;
  }

}

@media (max-width: 1130px) {


  .avatar{
    margin-left: 75%;
  }

}

@media (max-width: 1020px) {


  .avatar{
    margin-left: 60%;
  }

}



</style>