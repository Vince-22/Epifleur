AOS.init();
//jQuerry formulaire date
$(document).ready(function(){

    $('.datepicker').datepicker({
    format: 'dd-mm-yyyy',
    autoclose: true,
    startDate: '0d'
    });
    
    $('.cell').click(function(){
    $('.cell').removeClass('select');
    $(this).addClass('select');
    });
    
    });
    //jQuerry toggle calendrier avec le bouton rappelez-moi. 
    $(document).ready(function(){ 
    $("#Btn_Rappel").click(function() {
        $( ".calendrier" ).toggle( "slow")
      });
});

// alerte recap apres envoi formulaire
function recap(){
  var nom =  document.getElementById('nom');
  var Prénom =  document.getElementById('Prénom');
  var numeroTel =  document.getElementById('phone');
  var date = document.getElementById('dp1');
  
  alert( nom.value +" "+ Prénom.value + " vous avez choisi d'etre rappelé au " + numeroTel.value + " le " + date.value);
}

// Vérification de la validité du tel 
