<template>
     <div id="wrapper">
    <!-- Sidebar -->
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav nav-pills nav-stacked" id="menu">

        <li class="active">
          <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-dashboard fa-stack-1x "></i></span> Clients</a>
      
        </li>
        <li>
          <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-flag fa-stack-1x "></i></span> Sociétés</a>
     
        </li>
        <li>
          <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-cloud-download fa-stack-1x "></i></span>Devis</a>
        </li>
        <li>
          <a href="#"> <span class="fa-stack fa-lg pull-left"><i class="fa fa-cart-plus fa-stack-1x "></i></span>Factures</a>
        </li>
        <li>
          <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-youtube-play fa-stack-1x "></i></span>Opportunités</a>
        </li>
        <li>
          <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-wrench fa-stack-1x "></i></span>Paramétres</a>
        </li>
        <li>
          <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-server fa-stack-1x "></i></span>Feedback</a>
        </li>
        <ul>
          <li>
               <a href="#"><span class="fa-stack fa-lg pull-left"><i class="fa fa-server fa-stack-1x "></i></span>Déconnexion</a>
          </li>
      </ul>
      </ul>
      
    </div>
    <!-- /#sidebar-wrapper -->
    <!-- Page Content -->

    <!-- /#page-content-wrapper -->
  </div>
</template>

<script>
export default {

    name: "Sidebar",
    
}
</script>

<style scoped>
#wrapper {
  padding-left: 0;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 250px;
    border-radius: 0px 110px 0px 0;

}

#sidebar-wrapper {
  z-index: 1000;
  position: fixed;
  left: 250px;
  width: 0;
  top: 20%;
  height: 100%;
  margin-left: -250px;
  overflow-y: auto;
  background: #2262C6;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
   border-radius: 0px 110px 0px 0;

}

#wrapper.toggled #sidebar-wrapper {
  width: 250px;
}

#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
  position: absolute;
  margin-right: -250px;
}

.fixed-brand {
  width: auto;
}
/* Sidebar Styles */

.sidebar-nav {
  position: absolute;
  top: 110px;
  left: 55px;
  width: 250px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 2px;
}

.sidebar-nav li {
  text-indent: 15px;
  line-height: 40px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #FAFAFA;
}

.sidebar-nav li a:hover {
  text-decoration: none;
  color: #fff;
  background: rgba(255, 255, 255, 0.2);
  border-left: rgb(117, 117, 117) 2px solid;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  height: 65px;
  font-size: 18px;
  line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
  color: #999999;
}

.sidebar-nav > .sidebar-brand a:hover {
  color: #fff;
  background: none;
}

.no-margin {
  margin: 0;
}

@media(min-width:768px) {
  #wrapper {
    padding-left: 250px;
  }
  .fixed-brand {
    width: 250px;
  }
  #wrapper.toggled {
    padding-left: 0;
  }
  #sidebar-wrapper {
    width: 298px;
  }
  #wrapper.toggled #sidebar-wrapper {
    width: 250px;
  }
  #wrapper.toggled-2 #sidebar-wrapper {
    width: 150px;
  }
  #wrapper.toggled-2 #sidebar-wrapper:hover {
    width: 250px;
  }
  #page-content-wrapper {
    padding: 20px;
    position: relative;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
  #wrapper.toggled #page-content-wrapper {
    position: relative;
    margin-right: 0;
    padding-left: 250px;
  }
  #wrapper.toggled-2 #page-content-wrapper {
    position: relative;
    margin-right: 0;
    margin-left: -200px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
  }
}
</style>