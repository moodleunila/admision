$(document).ready(function(){

    $("#enviar").on("click", function(){
        $(".error-form").hide();
        var nombre = $("#nombre").val();
        var aPaterno = $("#aPaterno").val();
        var aMaterno = $("#aMaterno").val();
        var telefono = $("#telefono").val();
        var celular = $("#celular").val();
        var email = $("#email").val();       
        var mensaje = $("#mensaje-txt").val();
        var campus = $("#campus option:selected").val();
        var modalidad = $("#modalidad-form option:selected").val();
        var plan = $("#plan-estudios-select option:selected").val();
        var telLocal = true;
        var enviar = true;
        var acentos = new RegExp(/[á|é|í|ó|ú]/);  

        if(nombre == "" || nombre == null){
            $("#err-nombre").show("slow");
            enviar = false;
        }

              
        if (acentos.test(nombre)){
            enviar = false;            
            $("#err-nombre").show("slow");
        }
        
        if(aPaterno == "" || aPaterno == null){            
            $("#err-paterno").show("slow");
            enviar = false;
        }


        if (acentos.test(aPaterno)){
            enviar = false;            
            $("#err-paterno").show("slow");
        }

        if(aMaterno != "" || aMaterno != null){
            if (acentos.test(aMaterno)){
                enviar = false;            
                $("#err-materno").show("slow");
            }
        }

        if(mensaje != "" || mensaje != null){
            if (acentos.test(mensaje)){
                enviar = false;
                $("#err-mensaje").show("slow");
            }
        }

        if(telefono == "" || telefono == null || isNaN(telefono))
            telLocal = false;
        if(!telLocal){
            if(celular == "" || celular == null || isNaN(celular)){
                $("#err-telefono").show("slow");
                enviar = false;
            }
        }
        
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        if (caract.test(email) == false){
            enviar = false;
            $("#err-email").show("slow");
        }

                
        if(campus < 1){
            $("#err-campus").show("slow");
            enviar = false;
        }

        if(plan < 1){
            $("#err-plan").show("slow");
            enviar = false;   
        }

        if(modalidad < 1){
            $("#err-modalidad").show("slow");
            enviar = false;
        }        
        
        if(enviar){            
            var datos = {
                'nombre' : nombre,
                'aPaterno' : aPaterno,
                'aMaterno' : aMaterno,
                'telefono' : telefono,
                'celular' : celular,
                'email' : email,                
                'mensaje' : mensaje,
                'campus' : campus,
                'modalidad' : modalidad,
                'plan' : plan
            };
            
            $.ajax({
                type: 'POST',
                url : 'process.php',
                data : datos,
                dataType : 'json',
                encode: true,
                success: function(json){
                    console.log("json: " + json);
                    $("#success-form").show("slow");
                    $("#contactform").hide("slow");
                    $("#danger-form").hide("slow");
                    $("#calculo").show("slow");
                    $("#titulo-formulario").hide("slow");
                    window.piwikAsyncInit = function () {
                        var et_tracker = Piwik.getTracker();
                        et_tracker.setUserId(md5(email));                        
                        et_tracker.trackGoal(1);
                    }
                },
                error: function(xhr, status){
                    $("#danger-form").show("slow");
                }                
            });
        }
        else
            return false;
    });
})