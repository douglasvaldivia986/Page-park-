function mostrar() {
    document.getElementById('articles').style.display = 'block';
    document.getElementById('cont_ver').style.display = 'none';
}

function ocultar() {
    document.getElementById('articles').style.display = 'none';
    document.getElementById('cont_ver').style.display = 'block';
}

window.onscroll = function() {
    if (window.scrollY > document.getElementById('cartel').offsetTop) {
        document.getElementById('cartel').style.display = "none";
        document.getElementById('margin-cartel').style.margin = '220px 0px 0px 0px';
    } else {
        document.getElementById('cartel').style.display = "block";
        document.getElementById('margin-cartel').style.margin = '300px 0px 0px 0px';
    }
  };