function mostrar() {
    document.getElementById('articles').style.display = 'block';
    document.getElementById('cont_ver').style.display = 'none';
}

function ocultar() {
    document.getElementById('articles').style.display = 'none';
    document.getElementById('cont_ver').style.display = 'block';
}

/*cambiar el id imitando una media queris
/*window.addEventListener("resize", function() {
    if (window.innerWidth < 1256) {
      document.getElementById("cartel").setAttribute("id", "responsive");
    } else {
      document.getElementById("responsive").setAttribute("id", "cartel");
    }
  });*/

window.onscroll = function() {
    if (window.scrollY > document.getElementById('cartel').offsetTop) {
        document.getElementById('cartel').style.display = "none";
        document.getElementById('margin-cartel').style.margin = '220px 0px 0px 0px';
    } else {
        document.getElementById('cartel').style.display = "block";
        document.getElementById('margin-cartel').style.margin = '300px 0px 0px 0px';
    }
  };

/*funciones responsive */

function mostraresp() {
    document.getElementById('articles-resp').style.display = 'block';
    document.getElementById('cont_veresp').style.display = 'none';
}

function ocultaresp() {
    document.getElementById('articles-resp').style.display = 'none';
    document.getElementById('cont_veresp').style.display = 'block';
}
  
  
  
  
  