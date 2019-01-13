
(function() {
    'use strict';
    window.addEventListener('load', function() {
      
      var forms = document.getElementsByClassName('needs-validation');
     
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  });
  function sehirlerigoster1() {
    var hhtpistegi = new XMLHttpRequest();
    var adres = "https://raw.githubusercontent.com/volkansenturk/turkiye-iller-ilceler/master/il-bolge.json";

    hhtpistegi.onreadystatechange = function () {
        this.readyState == 4 && this.status == 200 
            var myArr = JSON.parse(this.responseText);
            var ulkeSlc = document.getElementById('ulkeler');
            
            myArr.forEach(myArr => {
                ulkeSlc.innerHTML += '<option> ' + myArr.il + ' <option>'
            });
        
    };
    hhtpistegi.open("GET", adres, true);
    hhtpistegi.send();
}
function sehirlerigoster2() {
    var hhtpistek = new XMLHttpRequest();
    var adresi = "https://raw.githubusercontent.com/volkansenturk/turkiye-iller-ilceler/master/il-ilce.json";

    hhtpistek.onreadystatechange = function () {
        this.readyState == 4 && this.status == 200 
            var myArri = JSON.parse(this.responseText);
            var ulkeSlce = document.getElementById('ilce');
           
            myArri.forEach(myArri => {
                ulkeSlce.innerHTML += '<option> ' + myArri.ilce + ' <option>'
            });
        
    };
    hhtpistek.open("GET", adresi, true);
    hhtpistek.send();
}
function start() {
  sehirlerigoster1();
  sehirlerigoster2();
}
function login(params){
    if(document.getElementById('exampleInputEmail1').value == 'admin'){
        window.location.href = "giris.html";
    }
}
