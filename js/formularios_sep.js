$(document).ready(function(){

    $("#enviar").on("click", function(){
        $(".error-form").hide();
        var nombre = $("#nombre").val();
        var telefono = $("#telefono").val();
        var celular = $("#celular").val();
        var email = $("#email").val();
        var asunto = $("#asunto").val();
        var mensaje = $("#mensaje-txt").val();
        var campus = $("#campus option:selected").val();
        var modalidad = $("#modalidad-form option:selected").val();
        var plan = $("#plan-estudios option:selected").val();
        console.log("plan: " + plan);
        var telLocal = true;
        var enviar = true;


        if(nombre == "" || nombre == null){
            $("#err-nombre").show("slow");
            enviar = false;
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

        if(mensaje == "" || mensaje == null){
            $("#err-mensaje").show("slow");
            enviar = false;
        }

        if(asunto == "" || asunto == null){
            $("#err-asunto").show("slow");
            enviar = false;
        }
        
        if(campus < 1){
            $("#err-campus").show("slow");
            enviar = false;
        }

        if(modalidad < 1){
            $("#err-modalidad").show("slow");
            enviar = false;
        }

        if(plan < 1){
            $("#err-plan").show("slow");
            enviar = false;
        }

        if(enviar){

            var datos = {
                'nombre' : nombre,
                'telefono' : telefono,
                'celular' : celular,
                'email' : email,
                'asunto' : asunto,
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