<template>
      <div class="row">
        <div class="col-xl-12 col-md-12 col-sm-12 col-xs-12 mt-3 navbar shadow">
              
            <nav class="navbar navbar-light p-0 border-0 burger-menu">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </nav>
           
            <div class="logo">
                <img src="../../assets/Group 4.png" alt="logo" />    
            </div>

            <router-link class="back-btn" to="/">
              <b-button class="back-btn_arrow" >
                <i class="fa fa-arrow-right">
                  <!-- icon -->
                </i>
              </b-button>
                <span id="back-btn_text">
                  Retour
                </span>
               
            </router-link>
        </div>
      </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped >
.navbar-toggler-icon{
  color : black !important;
}
*{
  font-family: Gilroy-Medium, sans-serif; 
}

.navbar{
  background-color: #fbfbfd;
  display: flex; 
  align-items: center;
  padding: 20px 60px;  
  border-radius: 10px;  
  border: none; 
  // border: 2px solid black;
  &.shadow{
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3) ;
  }  
  & .logo{
    margin: 0px; 
  }
  & .back-btn{
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    height: 2em ; 
    width: 2em;
    &:focus{
      outline: none;
    }
    &_arrow{
      background-color: #2262c6;
      border: none; 
      // height: 2em;
      // width: 2em;
      border-radius: 100% !important;
    }
    &:hover {
      text-decoration: none; 
      color: #2350c4;
    }

    &:hover .arrow{      
      background-color: #2350c4;
    }

 }
.burger-menu{
  display: none;
}
 @media only screen and (min-width: 360px) and (max-width: 1100px) {
    .burger-menu{
      display: inline;
      padding: 0px;
    }
    & {
      flex-direction: row;
      padding: 10px 20px;
    }
    & .logo img {
      height: 2em;
      width: 10em;
    }
    & .back-btn {
      height: 1em;
      height: 1em;
      &_arrow{
        font-size: .7em;
      }
      &_text{

        font-size: .6em;
      }
    }
  }
}
 
 
</style>