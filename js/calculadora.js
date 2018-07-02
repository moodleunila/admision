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




	/*###  C A M P U S   R O M A  #################*/
		
		function licAdministracionRoma(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,372";
					colegiatura = "$2,875";
					tramites = "$1,276";				
					break;

				case 2://Vespertino
					inscripcion = "$1,801";
					colegiatura = "$2,634";
					tramites = "$1,073";
					break;

				case 3://SUA
					inscripcion = "$1,896";
					colegiatura = "$2,921";
					tramites = "$1,218";
					break;

				default:
					break;
			}		
		}

		function licInformaticaRoma(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,372";
					colegiatura = "$2,912";
					tramites = "$1,276";				
					break;

				case 2://Vespertino
					inscripcion = "$1,801";
					colegiatura = "$2,590";
					tramites = "$1,073";
					break;
			}
		}

		function licDerechoRoma(){
			$("#sua-label").show("slow");
			inscripcion = "$1,889";
			colegiatura = "$2,854";
			tramites = "$1,218";
		}

		function licComunicacionRoma(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,477";
					colegiatura = "$3,089";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,786";
					colegiatura = "$2,704";
					tramites = "$232";
					break;
			}
		}

		function licContaduriaRoma(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,477";
					colegiatura = "$2,862";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,786";
					colegiatura = "$2,709";
					tramites = "$232";
					break;
			}			
		}

		function licDerechoSepRoma(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,290";
					colegiatura = "$2,861";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,579";
					colegiatura = "$2,612";
					tramites = "$232";
					break;
			}
		}

		function licMercadotecniaRoma(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,638";
					colegiatura = "$3,022";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,749";
					colegiatura = "$2,694";
					tramites = "$232";
					break;
			}
		}

		function MANRoma(){			
			inscripcion = "$1,716";
			colegiatura = "$3,100";
			tramites = "$232";					
		}

		function MDPEJARoma(){			
			inscripcion = "$1,716";
			colegiatura = "$3,100";
			tramites = "$232";					
		}

		function MDRoma(){			
			inscripcion = "$1,494";
			colegiatura = "$2,467";
			tramites = "$232";					
		}

		function MADMRoma(){			
			inscripcion = "$2,678";
			colegiatura = "$3,529";
			tramites = "$232";					
		}

		function MCDRoma(){			
			inscripcion = "$2,768";
			colegiatura = "$3,647";
			tramites = "$232";
		}
	//######## F I N   C A M P U S  R O M A ############




	/*######## C A M P U S   C U A U T L A ###########*/
		function secundariaCuautla(){				
			inscripcion = "$3,281";
			colegiatura = "$2,855";
			tramites = "$232";				
		}

		function prepaCuautla(){
			inscripcion = "$2,975";
			colegiatura = "$2,416";
			tramites = "$1,218";	
		}

		function bachComunicacionCuautla(){
			inscripcion = "$2,673";
			colegiatura = "$2,231";
			tramites = "$232";
		}

		function bachInformaticaCuautla(){
			inscripcion = "$2,673";
			colegiatura = "$2,231";
			tramites = "$232";
		}

		function bachTurismoCuautla(){
			inscripcion = "$2,673";
			colegiatura = "$2,231";
			tramites = "$232";
		}

		function bachVentasCuautla(){
			inscripcion = "$2,673";
			colegiatura = "$2,231";
			tramites = "$232";
		}

		function licComunicacionCuautla(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,660";
					colegiatura = "$3,062";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,535";
					colegiatura = "$2,725";
					tramites = "$232";
					break;
			}
		}

		function licContaduriaCuautla(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,633";
					colegiatura = "$2,908";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,492";
					colegiatura = "$2,609";
					tramites = "$232";
					break;
			}
		}

		function licMercadotecniaCuautla(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,847";
					colegiatura = "$2,872";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,518";
					colegiatura = "$2,427";
					tramites = "$232";
					break;
			}
		}

		function licGastronomiaCuautla(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,117";
					colegiatura = "$2,968";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,489";
					colegiatura = "$2,778";
					tramites = "$232";
					break;
			}
		}

		function licTurismoCuautla(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,398";
					colegiatura = "$2,660";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,492";
					colegiatura = "$2,467";
					tramites = "$232";
					break;
			}
		}

		function licPedagogiaCuautla(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,453";
					colegiatura = "$2,954";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,489";
					colegiatura = "$2,443";
					tramites = "$232";
					break;
			}
		}

		function licDerechoSepCuautla(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,667";
					colegiatura = "$2,961";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,480";
					colegiatura = "$2,596";
					tramites = "$232";
					break;
			}
		}

		function licPsicologiaCuautla(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,089";
					colegiatura = "$3,062";
					tramites = "$1,195";				
					break;

				case 2://Vespertino
					inscripcion = "$1,493";
					colegiatura = "$2,521";
					tramites = "$1,032";
					break;
			}
		}

		function mcdCuautla(){
			inscripcion = "$5,317";
			colegiatura = "$3,844";
			tramites = "$232";
		}

		function madmCuautla(){
			inscripcion = "$5,317";
			colegiatura = "$3,844";
			tramites = "$232";
		}

		function mdpejaCuautla(){
			inscripcion = "$1,845";
			colegiatura = "$2,112";
			tramites = "$232";
		}

		function mgfpCuautla(){
			inscripcion = "$1,845";
			colegiatura = "$2,112";
			tramites = "$232";
		}

		function mdCuautla(){
			inscripcion = "$1,780";
			colegiatura = "$1,917";
			tramites = "$232";
		}

		function epCuautla(){
			inscripcion = "$1,773";
			colegiatura = "$2,274";
			tramites = "$232";
		}

		function manCuautla(){
			inscripcion = "$1,845";
			colegiatura = "$2,112";
			tramites = "$232";
		}
	/*##### F I N   C A M P U S   C U A U T L A ######*/




	/*############## C A M P U S   C U E R N A V A C A ######*/
		function prepaCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$5,198";
					colegiatura = "$2,896";
					tramites = "$1,653";				
					break;				
			}
		}

		function bachComunicacionCuernavaca(){
			inscripcion = "$3,455";
			colegiatura = "$3,042";
			tramites = "$232";
			console.log("JAMON");
		}

		function bachInformaticaCuernavaca(){
			inscripcion = "$3,455";
			colegiatura = "$3,042";
			tramites = "$232";
		}

		function bachTurismoCuernavaca(){
			inscripcion = "$3,455";
			colegiatura = "$3,042";
			tramites = "$232";
		}

		function bachVentasCuernavaca(){
			inscripcion = "$3,455";
			colegiatura = "$3,042";
			tramites = "$232";
		}

		function licAdministracionCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,287";
					colegiatura = "$2,749";
					tramites = "$1,102";				
					break;

				case 2://Vespertino
					inscripcion = "$1,563";
					colegiatura = "$2,610";
					tramites = "$1,044";
					break;
			}
		}

		function licInformaticaCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$";
					colegiatura = "$";
					tramites = "$";				
					break;

				case 2://Vespertino
					inscripcion = "$";
					colegiatura = "$";
					tramites = "$";
					break;
			}
		}

		function licDerechoCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,747";
					colegiatura = "$2,573";
					tramites = "$1044";				
					break;

				case 2://Vespertino
					inscripcion = "$1,563";
					colegiatura = "$2,347";
					tramites = "$986";
					break;

				case 3://SUA
					inscripcion = "$2,633";
					colegiatura = "$2,271";
					tramites = "$928";
					break;
			}
		}

		function licPsicologiaCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,396";
					colegiatura = "$2,733";
					tramites = "$1102";				
					break;

				case 2://Vespertino
					inscripcion = "$1,566";
					colegiatura = "$2,580";
					tramites = "$1044";
					break;

				case 3://SUA
					inscripcion = "$1,869";
					colegiatura = "$2,586";
					tramites = "$1102";
					break;
			}
		}

		function licPedagogiaCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,858";
					colegiatura = "$2,115";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$3,015";
					colegiatura = "$2,231";
					tramites = "$232";
					break;				
			}
		}

		function licComunicacionCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,298";
					colegiatura = "$3,564";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,610";
					colegiatura = "$2,356";
					tramites = "$232";
					break;				
			}
		}

		function licContaduriaCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,660";
					colegiatura = "$2,654";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,577";
					colegiatura = "$2,573";
					tramites = "$232";
					break;				
			}
		}

		function licTurismoCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,470";
					colegiatura = "$2,975";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,567";
					colegiatura = "$2,573";
					tramites = "$232";
					break;				
			}
		}

		function licGastronomiaCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$3,659";
					colegiatura = "$3,222";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,566";
					colegiatura = "$2,543";
					tramites = "$250";
					break;				
			}
		}

		function licMercadotecniaCuernavaca(){
			switch (modalidad){
				case 1://Matutino
					inscripcion = "$2,787";
					colegiatura = "$2,898";
					tramites = "$232";				
					break;

				case 2://Vespertino
					inscripcion = "$1,561";
					colegiatura = "$2,314";
					tramites = "$232";
					break;				
			}
		}

		function manCuernavaca(){
			inscripcion = "$2,994";
			colegiatura = "$2,251";
			tramites = "$232";
		}

		function mrhCuernavaca(){
			inscripcion = "$2,994";
			colegiatura = "$2,251";
			tramites = "$232";
		}

		function mgfpCuernavaca(){
			inscripcion = "$2,994";
			colegiatura = "$2,251";
			tramites = "$232";
		}

		function mdCuernavaca(){
			inscripcion = "$1,761";
			colegiatura = "$1,903";
			tramites = "$232";
		}

		function mcdCuernavaca(){
			inscripcion = "$5,317";
			colegiatura = "$3,844";
			tramites = "$232";
		}

		function madmCuernavaca(){
			inscripcion = "$5,317";
			colegiatura = "$3,844";
			tramites = "$232";
		}

		function epCuernavaca(){
			inscripcion = "$1,765";
			colegiatura = "$2,431";
			tramites = "$232";
		}
	/*############## F I N  C A M P U S   C U E R N A V A C A ######*/














	/*##############################
	################################
	####### V A R I A B L E S ######
	################################
	################################
	*/
	var campusSeleccionado = -1;	
	var comboOnFocus = -1;
	var nivelSeleccionado = -1;
	var planEducativo = -1;
	var inscripcion = -1;
	var colegiatura = -1;
	var tramites = -1;
	var modalidad = -1;

	







	/*##############################
	################################
	######### O F E R T A ##########
	################################
	################################
	*/
	////////Secundaria///////
	var secundaria = "<option id='1' value='1'>Secundaria</option>";

	///////Bachilleratos tecnológicos///////
	var bachComunicacion = "<option id='2' value='2'>Bachillerato Tecnológico en Comunicación</option>";
	var bachInformatica = "<option id='3' value='3'>Bachillerato Tecnológico en Informática</option>";
	var bachTurismo = "<option id='4' value='4'>Bachillerato Tecnológico en Turismo</option>";
	var bachVentas = "<option id='5' value='5'>Bachillerato Tecnológico en Ventas</option>";

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
	var licGastronomia = "<option id='14' value='14'>Licenciatura en Gastronomía y Administración Operativa - UNAM</option>";
	var licComunicacion = "<option id='15' value='15'>Licenciatura en Ciencias de la Comunicación y Periodismo - SEP</option>";	
	var licMercadotecnia = "<option id='16' value='16'>Licenciatura en Mercadotecnia y Publicidad - SEP</option>";
	var licTurismo = "<option id='17' value='17'>Licenciatura en Turismo - UNAM</option>";

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


	////SEP/////////////////////////////
	var licDerechoSep = "<option id='26' value='26'>Licenciatura en Derecho - SEP</option>";

	//// Especialidad en publicidad ////////////////////////////////
	var ep = "<option id='27' value='27'>Especialidad en Publicidad</option>";







	/*##############################
	################################
	######### B O T O N E S ########
	################################
	################################
	*/
	/*Botón campus sur*/
	$("#btn-sur").on("click", function(){
		preparacionCalculadora();	
		campusSeleccionado = 1;	
		$("#btn-sur").addClass("btn btn-primary");
		$("#nivel-educativo").append("<option id='2' value='2'>Medio superior</option>");
		$("#nivel-educativo").append("<option id='3' value='3'>Licenciaturas</option>");
		$("#nivel-educativo").append("<option id='4' value='4'>Posgrados</option>");
	});

	/*Botón campus roma*/
	$("#btn-roma").on("click", function(){
		preparacionCalculadora();
		campusSeleccionado = 2;
		$("#btn-roma").addClass("btn btn-primary");
		$("#nivel-educativo").append("<option id='3' value='3'>Licenciaturas</option>");
		$("#nivel-educativo").append("<option id='4' value='4'>Posgrados</option>");
	});

	/*Botón campus Cuautla*/
	$("#btn-cuau").on("click", function(){
		preparacionCalculadora();
		campusSeleccionado = 3;
		$("#btn-cuau").addClass("btn btn-primary");
		$("#nivel-educativo").append("<option id='1' value='1'>Básica</option>");
		$("#nivel-educativo").append("<option id='2' value='2'>Medio superior</option>");
		$("#nivel-educativo").append("<option id='3' value='3'>Licenciaturas</option>");
		$("#nivel-educativo").append("<option id='4' value='4'>Posgrados</option>");
	});

	/*Botón campus Cuernavaca*/
	$("#btn-cuer").on("click", function(){
		preparacionCalculadora();
		campusSeleccionado = 4;
		$("#btn-cuer").addClass("btn btn-primary");
		$("#nivel-educativo").append("<option id='2' value='2'>Medio superior</option>");
		$("#nivel-educativo").append("<option id='3' value='3'>Licenciaturas</option>");
		$("#nivel-educativo").append("<option id='4' value='4'>Posgrados</option>");
	});



	/*##############################
	################################
	######### C O M B O S  #########
	################################
	################################
	*/
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
		$("#sua-label").hide("slow");	
		$("#mat-label").hide("slow");		
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

	function removerClasesBotones(){
		$("#btn-sur").removeClass();
		$("#btn-roma").removeClass();
		$("#btn-cuau").removeClass();
		$("#btn-cuer").removeClass();
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

	function preparacionCalculadora(){
		vaciarPlanEducativo();
		vaciarNivelEducativo();
		ocularCostos();		
		removerClasesBotones();	
		asignarClasesBotones();
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

	function asignarClasesBotones(){
		$("#btn-sur").addClass("btn btn-default");
		$("#btn-roma").addClass("btn btn-default");
		$("#btn-cuau").addClass("btn btn-default");
		$("#btn-cuer").addClass("btn btn-default");
	}









	/*
	###########################
	###########################
	###### L L E N A D O S ####
	###########################
	###########################
	*/
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

	function llenarComboSuperiorROMA(){
		$("#plan-educativo").append(licAdministracion);
		$("#plan-educativo").append(licInformatica);
		$("#plan-educativo").append(licDerecho);
		$("#plan-educativo").append(licComunicacion);
		$("#plan-educativo").append(licContaduria);
		$("#plan-educativo").append(licDerechoSep);
		$("#plan-educativo").append(licMercadotecnia);
	}

	function llenarComboPosgradosROMA(){
		$("#plan-educativo").append(man);
		$("#plan-educativo").append(md);
		$("#plan-educativo").append(mdpeja);
		$("#plan-educativo").append(madm);
		$("#plan-educativo").append(mcd);
	}

	function llenarComboBasicaCuautla(){
		$("#plan-educativo").append(secundaria);
	}

	function llenarComboMedioSuperiorCuautla(){
		$("#plan-educativo").append(prepa);
		$("#plan-educativo").append(bachComunicacion);
		$("#plan-educativo").append(bachInformatica);
		$("#plan-educativo").append(bachTurismo);
		$("#plan-educativo").append(bachVentas);
	}

	function llenarComboSuperiorCuautla(){
		$("#plan-educativo").append(licComunicacion);
		$("#plan-educativo").append(licContaduria);
		$("#plan-educativo").append(licMercadotecnia);
		$("#plan-educativo").append(licGastronomia);
		$("#plan-educativo").append(licTurismo);
		$("#plan-educativo").append(licPedagogia);
		$("#plan-educativo").append(licDerechoSep);
		$("#plan-educativo").append(licPsicologia);
	}

	function llenarComboPosgradosCuautla(){
		$("#plan-educativo").append(mcd);
		$("#plan-educativo").append(madm);
		$("#plan-educativo").append(mdpeja);
		$("#plan-educativo").append(mgfp);
		$("#plan-educativo").append(md);
		$("#plan-educativo").append(ep);
		$("#plan-educativo").append(man);
	}

	function llenarComboMedioSuperiorCuernavaca(){
		$("#plan-educativo").append(prepa);
		$("#plan-educativo").append(bachComunicacion);
		$("#plan-educativo").append(bachInformatica);
		$("#plan-educativo").append(bachTurismo);
		$("#plan-educativo").append(bachVentas);
	}

	function llenarComboSuperiorCuernavaca(){
		$("#plan-educativo").append(licAdministracion);
		$("#plan-educativo").append(licInformatica);
		$("#plan-educativo").append(licDerecho);
		$("#plan-educativo").append(licPsicologia);
		$("#plan-educativo").append(licPedagogia);
		$("#plan-educativo").append(licComunicacion);
		$("#plan-educativo").append(licContaduria);
		$("#plan-educativo").append(licTurismo);
		$("#plan-educativo").append(licGastronomia);
		$("#plan-educativo").append(licMercadotecnia);		
	}

	function llenarComboPosgradosCuernavaca(){
		$("#plan-educativo").append(man);
		$("#plan-educativo").append(mrh);
		$("#plan-educativo").append(mgfp);
		$("#plan-educativo").append(md);
		$("#plan-educativo").append(mcd);
		$("#plan-educativo").append(madm);
		$("#plan-educativo").append(ep);
	}




	/*
	###########################
	###########################
	######## L O  G  S ########
	###########################
	###########################
	*/
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



	/*
	###########################
	###########################
	## C O N T R O L A D O R ##
	###########################
	###########################
	*/
	function campusController(){
		switch (campusSeleccionado){

			///SUR
			case 1:
				controladorSur();
				break;				

			///ROMA	
			case 2:
				controladorRoma();
				break;


			//CUAUTLA
			case 3:
				controladorCuautla();
				break;


			//CUERNAVACA
			case 4:
				controladorCuernavaca();
				break;
		}
		logueo();
	}






	/*
	###########################
	###########################
	## C O M B O  C H A N G E #
	###########################
	###########################
	*/
	$("input[type=radio][name=modalidad]").on("change", function(){
		campusController();
	});






	/*
	###########################
	###########################
	######### P R I N T  ######
	###########################
	###########################
	*/
	function pintarDatos(){		
		$("#inscripcion").html(inscripcion);
		$("#colegiatura").html(colegiatura);
		$("#tramites").html(tramites);
		$("#costos").show("slow");
	}




	/*
	###########################################
	###########################################
	#C O N T R O L A D O R   C A M P U S ######
	###########################################
	###########################################
	*/
	function controladorSur(){
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
	}



	function controladorRoma(){
		nivelSeleccionado *=1;
		if(comboOnFocus == 1){
			switch (nivelSeleccionado){

				case 3:
					llenarComboSuperiorROMA();
					break;

				case 4:
					llenarComboPosgradosROMA();
					break;

				default:						
			}
		}
		if(comboOnFocus == 2){
			modalidad = $('input:radio[name=modalidad]:checked').val();		
			modalidad *= 1;
			switch (planEducativo){
				case 9:							
					licAdministracionRoma();
					break;

				case 11:							
					ocultarLabelSUA();
					licInformaticaRoma();
					break;

				case 8:
					ocultarLabelSUA();
					ocultarLabelVespetino();
					ocultarLabelMatutino();
					licDerechoRoma();
					break;

				case 15:
					ocultarLabelSUA();
					licComunicacionRoma();
					break;

				case 13:
					ocultarLabelSUA();
					licContaduriaRoma();
					break;

				case 26:
					ocultarLabelSUA();
					licDerechoSepRoma();
					break;

				case 16:
					ocultarLabelSUA();
					licMercadotecniaRoma();
					break;

				case 18:
					$("#modalidades").hide();
					MANRoma();
					break;

				case 22:
					$("#modalidades").hide();
					MDRoma();							
					break;

				case 21:
					$("#modalidades").hide();
					MDPEJARoma();
					break;						

				case 19:
					$("#modalidades").hide();
					MADMRoma();
					break;						

				case 20:
					$("#modalidades").hide();
					MCDRoma();
					break;						
			}
			pintarDatos();
		}
	}


	function controladorCuautla(){
		nivelSeleccionado *=1;
		if(comboOnFocus == 1){
			switch (nivelSeleccionado){

				case 1:
					llenarComboBasicaCuautla();
					break;

				case 2:
					llenarComboMedioSuperiorCuautla();
					break;

				case 3:
					llenarComboSuperiorCuautla();
					break;

				case 4:
					llenarComboPosgradosCuautla();
					break;

				default:
				break;						
			}
		}
		if(comboOnFocus == 2){					
			modalidad = $('input:radio[name=modalidad]:checked').val();		
			modalidad *= 1;
			switch (planEducativo){
				case 1:
					$("#modalidades").hide();							
					secundariaCuautla();
					break;

				case 6:	
					$("#modalidades").hide();							
					prepaCuautla();
					break;

				case 2:
					$("#modalidades").hide();
					bachComunicacionCuautla();					
					break;

				case 3:
					$("#modalidades").hide();
					bachInformaticaCuautla();
					break;

				case 4:
					$("#modalidades").hide();
					bachTurismoCuautla	();
					break;

				case 5:
					$("#modalidades").hide();
					bachVentasCuautla();
					break;

				case 15:
					ocultarLabelSUA();
					licComunicacionCuautla();
					break;

				case 13:					
					ocultarLabelSUA();
					licContaduriaCuautla();
					break;

				case 16:
					ocultarLabelSUA();
					licMercadotecniaCuautla();
					break;

				case 14:
					ocultarLabelSUA();
					licGastronomiaCuautla();
					break;						

				case 17:
					ocultarLabelSUA();
					licTurismoCuautla();
					break;						

				case 12:
					ocultarLabelSUA();
					licPedagogiaCuautla();
					break;	

				case 26:
					ocultarLabelSUA();
					licDerechoSepCuautla();
					break;	

				case 10:
					ocultarLabelSUA();
					licPsicologiaCuautla();
					break;

				case 20:
					$("#modalidades").hide();
					mcdCuautla();
					break;	

				case 19:
					$("#modalidades").hide();
					madmCuautla();
					break;	

				case 21:
					$("#modalidades").hide();
					mdpejaCuautla();
					break;	

				case 23:
					$("#modalidades").hide();
					mgfpCuautla();
					break;	

				case 22:
					$("#modalidades").hide();
					mdCuautla();
					break;

				case 27:
					$("#modalidades").hide();
					epCuautla();
					break;	

				case 18:
					$("#modalidades").hide();
					manCuautla();
					break;						
			}
			pintarDatos();
		}
	}


	function controladorCuernavaca(){
		nivelSeleccionado *=1;
		if(comboOnFocus == 1){
			switch (nivelSeleccionado){

				case 2:
					llenarComboMedioSuperiorCuernavaca();
					break;

				case 3:
					llenarComboSuperiorCuernavaca();
					break;

				case 4:
					llenarComboPosgradosCuernavaca();
					break;

				default:
				break;						
			}
		}
		if(comboOnFocus == 2){					
			modalidad = $('input:radio[name=modalidad]:checked').val();		
			modalidad *= 1;
			switch (planEducativo){

				case 6:	
					ocultarLabelSUA();
					ocultarLabelVespetino();
					ocultarLabelMatutino();
					$("#mat-label").show("slow");
					prepaCuernavaca();
					break;

				case 2:					
					ocultarLabelSUA();
					ocultarLabelVespetino();
					ocultarLabelMatutino();
					$("#mat-label").show("slow");
					bachComunicacionCuernavaca();					
					break;

				case 3:
					ocultarLabelSUA();
					ocultarLabelVespetino();
					ocultarLabelMatutino();
					$("#mat-label").show("slow");
					bachInformaticaCuernavaca();
					break;

				case 4:
					ocultarLabelSUA();
					ocultarLabelVespetino();
					ocultarLabelMatutino();
					$("#mat-label").show("slow");
					bachTurismoCuernavaca();
					break;

				case 5:
					ocultarLabelSUA();
					ocultarLabelVespetino();
					ocultarLabelMatutino();
					$("#mat-label").show("slow"); 
					bachVentasCuernavaca();
					break;

				case 9:
					ocultarLabelSUA();
					licAdministracionCuernavaca();
					break;

				case 11:					
					ocultarLabelSUA();
					licInformaticaCuernavaca();
					break;

				case 8:					
					licDerechoCuernavaca();
					break;

				case 10:					
					licPsicologiaCuernavaca();
					break;						

				case 12:
					ocultarLabelSUA();
					licPedagogiaCuernavaca();
					break;						

				case 15:
					ocultarLabelSUA();
					licComunicacionCuernavaca();
					break;	

				case 13:
					ocultarLabelSUA();
					licContaduriaCuernavaca();
					break;	

				case 17:
					ocultarLabelSUA();
					licTurismoCuernavaca();
					break;

				case 14:
					ocultarLabelSUA();
					licGastronomiaCuernavaca();
					break;	

				case 16:
					ocultarLabelSUA();
					licMercadotecniaCuernavaca();
					break;

				case 18:
					$("#modalidades").hide();
					manCuernavaca();
					break;	

				case 24:
					$("#modalidades").hide();
					mrhCuernavaca();
					break;

				case 23:
					$("#modalidades").hide();
					mgfpCuernavaca();
					break;

				case 22:
					$("#modalidades").hide();
					mdCuernavaca();
					break;

				case 20:
					$("#modalidades").hide();
					mcdCuernavaca();
					break;

				case 19:
					$("#modalidades").hide();
					madmCuernavaca();
					break;

				case 27:
					$("#modalidades").hide();
					epCuernavaca();
					break;						
			}
			pintarDatos();
		}
	}

});