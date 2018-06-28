$(document).ready(function(){

	/*##############################
	################################
	######### N E G O C I  O #######
	################################
	################################
	/*
	/*###C A M P U S   S U R ############*/
		function preparatoriaSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$4,160";
					colegiatura = "$3,680";
					tramites = "$1,885";				
					break;

				case 2://Vespertino
					inscripcion = "$1,714";
					colegiatura = "$2,612";
					tramites = "$1,740";
					break;

				default:
					break;
			}		
		}

		function cchSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,551";
					colegiatura = "$2,847";
					tramites = "$1,218";				
					break;

				default:
					break;
			}		
		}

		function licAdministracionSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,371";
					colegiatura = "$3,430";
					tramites = "$1,380";				
					break;

				case 2://Vespertino
					inscripcion = "$1,801";
					colegiatura = "$2,962";
					tramites = "$1,380";
					break;

				case 3://SUA
					inscripcion = "$1,902";
					colegiatura = "$2,848";
					tramites = "$1,334";
					break;

				default:
					break;
			}		
		}

		function licInformaticaSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,650";
					colegiatura = "$3,138";
					tramites = "$1,334";				
					break;

				case 2://Vespertino
					inscripcion = "$1,757";
					colegiatura = "$2,831";
					tramites = "$1,102";
					break;

				default:
					break;
			}		
		}

		function licDerechoSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$4,020";
					colegiatura = "$3,584";
					tramites = "$1,450";				
					break;

				case 2://Vespertino
					inscripcion = "$1,798";
					colegiatura = "$2,955";
					tramites = "$1,183";
					break;

				case 3://SUA
					inscripcion = "$1,883";
					colegiatura = "$2,848";
					tramites = "$1,148";
					break;

				default:
					break;
			}		
		}

		function licPsicologiaSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,660";
					colegiatura = "$3,505";
					tramites = "$1,380";				
					break;

				case 2://Vespertino
					inscripcion = "$1,791";
					colegiatura = "$2,817";
					tramites = "$1,334";
					break;

				case 3://SUA
					inscripcion = "$1,870";
					colegiatura = "$2,586";
					tramites = "$1,102";
					break;

				default:
					break;
			}		
		}

		function licPedagogiaSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,009";
					colegiatura = "$2,734";
					tramites = "$1,334";
					break;

				case 2://Vespertino
					inscripcion = "$1,569";
					colegiatura = "$2,193";
					tramites = "$1,102";
					break;

				default:
					break;
			}		
		}

		function licComunicacionSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,196";
					colegiatura = "$3,470";
					tramites = "$232";
					break;

				case 2://Vespertino
					inscripcion = "$1,785";
					colegiatura = "$2,826";
					tramites = "$232";
					break;

				default:
					break;
			}		
		}

		function licContaduriaSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,196";
					colegiatura = "$3,324";
					tramites = "$232";
					break;

				case 2://Vespertino
					inscripcion = "$1,799";
					colegiatura = "$2,958";
					tramites = "$232";
					break;

				default:
					break;
			}		
		}

		function licMercadotecniaSur(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,638";
					colegiatura = "$3,405";
					tramites = "$232";
					break;

				case 2://Vespertino
					inscripcion = "$1,749";
					colegiatura = "$2,758";
					tramites = "$232";
					break;

				default:
					break;
			}		
		}

		function MANSur(){			
			inscripcion = "$2,785";
			colegiatura = "$2,989";
			tramites = "$232";					
		}

		function MDSur(){			
			inscripcion = "$1,735";
			colegiatura = "$2,469";
			tramites = "$232";					
		}

		function MCDSur(){			
			inscripcion = "$2,678";
			colegiatura = "$3,530";
			tramites = "$232";					
		}

		function MADMSur(){			
			inscripcion = "$2,678";
			colegiatura = "$3,530";
			tramites = "$232";					
		}

		function DoctoradoSur(){			
			inscripcion = "$8,269";
			colegiatura = "$6,560";
			tramites = "$232";
		}
	/*###  F I N   C A M P U S   S U R ############*/











	/*#############  V  A  R  I  A  B  L  E  S  ############*/
	var campusSeleccionado = -1;	
	var comboOnFocus = -1;
	var nivelSeleccionado = -1;
	var planEducativo = -1;
	var inscripcion = -1;
	var colegiatura = -1;
	var tramites = -1;
	var modalidad = -1;

	/*
	####### O F E R T A S  E D U C A T I V A S ######
	*/

	////////Secundaria///////
	var secundaria = "<option id='1' value='1'>Secundaria</option>";

	///////Bachilleratos tecnológicos///////
	var bachComunicacion = "<option id='2' value='2'>Bachillerato Tecnológico en Comunicación</option>";
	var bachInformatica = "<option id='3' value='3'>Bachillerato Tecnológico en Informática</option>";
	var bachTurismo = "<option id='4' value='4'>Bachillerato Tecnológico en Turismo</option>";
	var bachVentas = "<option id='5' value='5'>Bachillerato Tecnológico en Ventas</option>";

	///////Preparatoria////////////////////
	var prepa = "<option id='6' value='6'>Preparatoria</option>";
	var cch = "<option id='7' value='7'>Colegio de Ciencias y Humanidades</option>";

	//////Licenciaturas///////////////////
	var licDerecho = "<option id='8' value='8'>Licenciatura en Derecho</option>";
	var licAdministracion = "<option id='9' value='9'>Licenciatura en Administración</option>";
	var licPsicologia = "<option id='10' value='10'>Licenciatura en Psicología</option>";
	var licInformatica = "<option id='11' value='11'>Licenciatura en Informática</option>";	
	var licPedagogia = "<option id='12' value='12'>Licenciatura en Pedagogía</option>";
	var licContaduria = "<option id='13' value='13'>Licenciatura en Contaduría y Gestión Financiera</option>";
	var licGastronomia = "<option id='14' value='14'>Licenciatura en Gastronomía y Administración Operativa</option>";
	var licComunicacion = "<option id='15' value='15'>Licenciatura en Ciencias de la Comunicación y Periodismo</option>";	
	var licMercadotecnia = "<option id='16' value='16'>Licenciatura en Mercadotecnia y Publicidad</option>";
	var licTurismo = "<option id='17' value='17'>Licenciatura en Turismo</option>";

	/////Maestrías///////////////////////
	var man = "<option id='18' value='18'>Maestría en Administración de Negocios</option>";
	var madm = "<option id='19' value='19'>Maestría en Alta Dirección en Mercadotecnia</option>";
	var mcd = "<option id='20' value='20'>Maestría en Comunicación Digital</option>";
	var mdpeja = "<option id='21' value='21'>Maestría en Derecho Penal con Énfasis en Juicios Adversariales</option>";	
	var md = "<option id='22' value='22'>Maestría en Docencia</option>";
	var mgfp = "<option id='23' value='23'>Maestría en Gestión y Finanzas Públicas</option>";
	var mrh = "<option id='24' value='24'>Maestría en Recursos Humanos</option>";

	////Doctorado///////////////////////
	var doctorado = "<option id='25' value='25'>Doctorado en Educación</option>";







	/*Botón campus sur*/
	$("#btn-sur").on("click", function(){
		vaciarPlanEducativo();
		vaciarNivelEducativo();
		ocularCostos();
		campusSeleccionado = 1;
		$("#btn-sur").removeClass()
		$("#btn-sur").addClass("btn btn-primary");
		$("#nivel-educativo").append("<option id='2' value='2'>Medio superior</option>");
		$("#nivel-educativo").append("<option id='3' value='3'>Licenciaturas</option>");
		$("#nivel-educativo").append("<option id='4' value='4'>Posgrados</option>");
	});

	/*Botón campus roma*/
	$("#btn-roma").on("click", function(){
		
	});

	/*Botón campus Cuautla*/
	$("#btn-roma").on("click", function(){

	});

	/*Botón campus Cuernavaca*/
	$("#btn-roma").on("click", function(){

	});


	/*Combo nivel educativo*/
	$("#nivel-educativo").on("change",function(){
		vaciarPlanEducativo();
		$("#modalidades").hide("slow");
		$("#costos").hide("slow");		
		vaciarValores();
		mostrarModalidadCompleta();		
		nivelSeleccionado = $("#nivel-educativo option:selected").val();		
		if(nivelSeleccionado > 0){
			comboOnFocus = 1;
			campusController();
		}			
	});


	//Combo plan educativo
	$("#plan-educativo").on("change", function(){		
		$("#modalidades").hide("slow");
		$("#costos").hide("slow");		
		vaciarValores();
		mostrarModalidadCompleta();		
		planEducativo = $("#plan-educativo option:selected").val();
		planEducativo *= 1;
		if(planEducativo > 0){
			comboOnFocus = 2;
			$("#modalidades").show("slow");
			campusController();
		}
	});





	/*
	###########################
	###########################
	####### V A C I A R #####
	###########################
	###########################
	*/
	/*función vaciar combo nivel-educativo*/
	function vaciarNivelEducativo(){
		$("#nivel-educativo").html("");
		$("#nivel-educativo").append("<option id='0' value='0'>selecciona una opción</option>");
	}
	/*función vaciar combo plan-educativo*/
	function vaciarPlanEducativo(){
		$("#plan-educativo").html("");
		$("#plan-educativo").append("<option id='0' value='0'>selecciona una opción</option>");
	}
	/*Eliminar valores*/
	function vaciarValores(){
		inscripcion = -1;
		colegiatura = -1;
		tramites = -1;
	}


	/*
	###########################
	###########################
	####### O C U L T A R #####
	###########################
	###########################
	*/
	function ocularCostos(){
		$("#modalidades").hide("slow");
		$("#costos").hide("slow");
	}

	function ocultarLabelMatutino(){
		$("#label-matutino").hide("slow");
		$("#matutino").hide("slow");
	}

	function ocultarLabelVespetino(){
		$("#label-vespertino").hide("slow");
		$("#vespertino").hide("slow");
	}

	function ocultarLabelSUA(){
		$("#label-sua").hide("slow");
		$("#sua").hide("slow");
	}



	/*
	###########################
	###########################
	####### M O S T R A R #####
	###########################
	###########################
	*/
	function mostrarModalidadCompleta(){
		$("#label-matutino").show("");
		$("#matutino").show("");
		$("#label-vespertino").show("");
		$("#vespertino").show("");
		$("#label-sua").show("");
		$("#sua").show("");
		$("#matutino").prop("checked", true);		
	}




	/*función de llenado de Medio Sup S U R*/
	function llenarComboMedioSuperiorSUR(){		
		$("#plan-educativo").append(prepa);
		$("#plan-educativo").append(cch);
	}


	/*función de llenado de Medio Sup S U R*/
	function llenarComboSuperiorSUR(){
		$("#plan-educativo").append(licAdministracion);
		$("#plan-educativo").append(licInformatica);
		$("#plan-educativo").append(licDerecho);
		$("#plan-educativo").append(licPsicologia);
		$("#plan-educativo").append(licPedagogia);
		$("#plan-educativo").append(licComunicacion);
		$("#plan-educativo").append(licContaduria);
		$("#plan-educativo").append(licMercadotecnia);		
	}

	/*función de llenado de posgrados*/
	function llenarComboPosgradosSUR(){
		$("#plan-educativo").append(man);
		$("#plan-educativo").append(md);
		$("#plan-educativo").append(mcd);
		$("#plan-educativo").append(madm);
		$("#plan-educativo").append(doctorado);
	}


	/*L O G S*/
	function logueo(){
		console.log("campusSeleccionado: " + campusSeleccionado);
		console.log("comboOnFocus: " + comboOnFocus);
		console.log("nivelSeleccionado: " + nivelSeleccionado);
		console.log("planEducativo: " + planEducativo);
		console.log("inscripcion: " + inscripcion);
		console.log("colegiatura: " + colegiatura);
		console.log("tramites: " + tramites);
		console.log("modalidad: " + modalidad);
	}


	function campusController(){
		switch (campusSeleccionado){

			///SUR
			case 1:
				nivelSeleccionado *=1;
				if(comboOnFocus == 1){
					switch (nivelSeleccionado){
						case 2:							
							llenarComboMedioSuperiorSUR();
							break;

						case 3:
							llenarComboSuperiorSUR();
							break;

						case 4:
							llenarComboPosgradosSUR();
							break;

						default:						
					}
				}
				if(comboOnFocus == 2){					
					modalidad = $('input:radio[name=modalidad]:checked').val();		
					modalidad *= 1;
					switch (planEducativo){
						case 6:
							ocultarLabelSUA();
							preparatoriaSur();
							break;

						case 7:
							ocultarLabelVespetino();
							ocultarLabelSUA();
							cchSur();
							break;

						case 9:
							licAdministracionSur();
							break;

						case 11:
							ocultarLabelSUA();
							licInformaticaSur();
							break;

						case 8:
							licDerechoSur();
							break;

						case 10:
							licPsicologiaSur();
							break;

						case 12:
							ocultarLabelSUA();
							licPedagogiaSur();
							break;

						case 15:
							ocultarLabelSUA();
							licComunicacionSur();
							break;

						case 13:
							ocultarLabelSUA();
							licContaduriaSur();
							break;

						case 16:
							ocultarLabelSUA();
							licMercadotecniaSur();
							break;						

						case 18:
							$("#modalidades").hide();
							MANSur();
							break;

						case 22:
							$("#modalidades").hide();
							MDSur();
							break;

						case 20:
							$("#modalidades").hide();
							MCDSur();
							break;

						case 19:
							$("#modalidades").hide();
							MADMSur();
							break;						

						case 25:
							$("#modalidades").hide();
							DoctoradoSur();
							break;
					}
					pintarDatos();
				}
				break;

				

			///ROMA	
			case 2:
				alert("ROMA");
				break;


			//CUAUTLA
			case 3:
				alert("Cuautla");
				break;


			//CUERNAVACA
			case 4:
				alert("Cuernavaca");
				break;
		}
		logueo();
	}






	/*Cambio de radio*/
	$("input[type=radio][name=modalidad]").on("change", function(){
		campusController();
	});

	function pintarDatos(){		
		$("#inscripcion").html(inscripcion);
		$("#colegiatura").html(colegiatura);
		$("#tramites").html(tramites);
		$("#costos").show("slow");
	}
});