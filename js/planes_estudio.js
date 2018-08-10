$(document).ready(function(){

	/*##############################
	################################
	######### O F E R T A ##########
	################################
	################################
	*/
	////////Secundaria///////
	var seleccione = "<option id='0' value='0'>Seleccione plan de estudios*</option>";
	var secundaria = "<option id='1' value='1'>Secundaria</option>";

	///////Bachilleratos tecnológicos///////
	var bachComunicacion = "<option id='2' value='2'>Bachillerato Tecnológico en Comunicación - DGTI</option>";
	var bachInformatica = "<option id='3' value='3'>Bachillerato Tecnológico en Informática- DGTI</option>";
	var bachTurismo = "<option id='4' value='4'>Bachillerato Tecnológico en Turismo- DGTI</option>";
	var bachVentas = "<option id='5' value='5'>Bachillerato Tecnológico en Ventas- DGTI</option>";

	///////Preparatoria////////////////////
	var prepa = "<option id='6' value='6'>Preparatoria - UNAM</option>";
	var cch = "<option id='7' value='7'>Colegio de Ciencias y Humanidades - UNAM</option>";

	//////Licenciaturas///////////////////
	var licDerecho = "<option id='8' value='8'>Licenciatura en Derecho - UNAM</option>";
	var licAdministracion = "<option id='9' value='9'>Licenciatura en Administración  - UNAM</option>";
	var licPsicologia = "<option id='10' value='10'>Licenciatura en Psicología  - UNAM</option>";
	var licInformatica = "<option id='11' value='11'>Licenciatura en Informática  - UNAM</option>";	
	var licPedagogia = "<option id='12' value='12'>Licenciatura en Pedagogía  - UNAM</option>";
	var licContaduria = "<option id='13' value='13'>Licenciatura en Contaduría y Gestión Financiera - SEP</option>";
	var licGastronomia = "<option id='14' value='14'>Licenciatura en Gastronomía y Administración Operativa - SEEM</option>";
	var licComunicacion = "<option id='15' value='15'>Licenciatura en Ciencias de la Comunicación y Periodismo - SEP</option>";	
	var licMercadotecnia = "<option id='16' value='16'>Licenciatura en Mercadotecnia y Publicidad - SEP</option>";
	var licTurismo = "<option id='17' value='17'>Licenciatura en Turismo - SEEM</option>";

	/////Maestrías///////////////////////
	var man = "<option id='18' value='18'>Maestría en Administración de Negocios - SEP</option>";
	var madm = "<option id='19' value='19'>Maestría en Alta Dirección en Mercadotecnia - SEP</option>";
	var mcd = "<option id='20' value='20'>Maestría en Comunicación Digital - SEP</option>";
	var mdpeja = "<option id='21' value='21'>Maestría en Derecho Penal con Énfasis en Juicios Adversariales - SEP</option>";	
	var md = "<option id='22' value='22'>Maestría en Docencia - SEP</option>";
	var mgfp = "<option id='23' value='23'>Maestría en Gestión y Finanzas Públicas - SEP</option>";
	var mrh = "<option id='24' value='24'>Maestría en Recursos Humanos - SEP</option>";

	////Doctorado///////////////////////
	var doctorado = "<option id='25' value='25'>Doctorado en Educación - SEP</option>";


	////SEP/////////////////////////////
	var licDerechoSep = "<option id='26' value='26'>Licenciatura en Derecho - SEP</option>";

	//// Especialidad en publicidad ////////////////////////////////
	var ep = "<option id='27' value='27'>Especialidad en Publicidad - SEP</option>";
	var licPedagogiaSEEM = "<option id='28' value='28'>Licenciatura en Pedagogía - SEEM</option>";


	$("#campus").on("change", function(){
		$("#plan-estudios-select").html("");
		var campus = $("#campus option:selected").val();
		console.log("campus: " + campus);

		switch (campus*=1){
			case 1:
				$("#plan-estudios-select").append(seleccione);
				$("#plan-estudios-select").append(prepa);
				$("#plan-estudios-select").append(cch);
				$("#plan-estudios-select").append(licAdministracion);
				$("#plan-estudios-select").append(licInformatica);
				$("#plan-estudios-select").append(licDerecho);
				$("#plan-estudios-select").append(licPsicologia);
				$("#plan-estudios-select").append(licPedagogia);
				$("#plan-estudios-select").append(licComunicacion);
				$("#plan-estudios-select").append(licContaduria);
				$("#plan-estudios-select").append(licMercadotecnia);
				$("#plan-estudios-select").append(man);
				$("#plan-estudios-select").append(md);
				$("#plan-estudios-select").append(mcd);
				$("#plan-estudios-select").append(madm);
				$("#plan-estudios-select").append(doctorado);
				break;

			case 2:
				$("#plan-estudios-select").append(seleccione);
				$("#plan-estudios-select").append(licAdministracion);
				$("#plan-estudios-select").append(licInformatica);
				$("#plan-estudios-select").append(licDerecho);
				$("#plan-estudios-select").append(licComunicacion);
				$("#plan-estudios-select").append(licContaduria);
				$("#plan-estudios-select").append(licDerechoSep);
				$("#plan-estudios-select").append(licMercadotecnia);
				$("#plan-estudios-select").append(man);
				$("#plan-estudios-select").append(md);
				$("#plan-estudios-select").append(mdpeja);
				$("#plan-estudios-select").append(madm);
				$("#plan-estudios-select").append(mcd);
				break;

			case 3:
				$("#plan-estudios-select").append(seleccione);
				$("#plan-estudios-select").append(secundaria);
				$("#plan-estudios-select").append(prepa);
				$("#plan-estudios-select").append(bachComunicacion);
				$("#plan-estudios-select").append(bachInformatica);
				$("#plan-estudios-select").append(bachTurismo);
				$("#plan-estudios-select").append(bachVentas);
				$("#plan-estudios-select").append(licComunicacion);
				$("#plan-estudios-select").append(licContaduria);
				$("#plan-estudios-select").append(licMercadotecnia);
				$("#plan-estudios-select").append(licGastronomia);
				$("#plan-estudios-select").append(licTurismo);
				$("#plan-estudios-select").append(licPedagogiaSEEM);
				$("#plan-estudios-select").append(licDerechoSep);
				$("#plan-estudios-select").append(licPsicologia);
				$("#plan-estudios-select").append(mcd);
				$("#plan-estudios-select").append(madm);
				$("#plan-estudios-select").append(mdpeja);
				$("#plan-estudios-select").append(mgfp);
				$("#plan-estudios-select").append(md);		
				$("#plan-estudios-select").append(man);
				break;

			case 4:
				$("#plan-estudios-select").append(seleccione);
				$("#plan-estudios-select").append(prepa);
				$("#plan-estudios-select").append(bachComunicacion);
				$("#plan-estudios-select").append(bachInformatica);
				$("#plan-estudios-select").append(bachTurismo);
				$("#plan-estudios-select").append(bachVentas);
				$("#plan-estudios-select").append(licAdministracion);
				//$("#plan-estudios-select").append(licInformatica);
				$("#plan-estudios-select").append(licDerecho);
				$("#plan-estudios-select").append(licPsicologia);
				$("#plan-estudios-select").append(licPedagogia);
				$("#plan-estudios-select").append(licComunicacion);
				$("#plan-estudios-select").append(licContaduria);
				$("#plan-estudios-select").append(licTurismo);
				$("#plan-estudios-select").append(licGastronomia);
				$("#plan-estudios-select").append(licMercadotecnia);
				$("#plan-estudios-select").append(man);
				$("#plan-estudios-select").append(mrh);
				$("#plan-estudios-select").append(mgfp);
				$("#plan-estudios-select").append(md);
				$("#plan-estudios-select").append(mcd);
				$("#plan-estudios-select").append(madm);
				$("#plan-estudios-select").append(ep);
				break;

			default:
				break;
		}
	});
});