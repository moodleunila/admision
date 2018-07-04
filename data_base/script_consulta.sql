/*
Consulta de obtención de datos general
*/
SELECT 
	lead.id, 
	lead.nombre, 
	lead.telefono, 
	lead.celular, 
	lead.email, 
	plan.nombre as plan, 
	nivel.nombre as nivel, 
	campus.nombre as campus, 
	modalidad.nombre as modalidad, 
	lead.fecha_registro, 
	lead.asunto, 
	lead.mensaje 
FROM tbl_lead as lead 
INNER JOIN cat_plan_estudios as plan ON lead.fk_plan_estudios = plan.id 
INNER JOIN cat_nivel_educativo as nivel ON plan.fk_nivel_educativo = nivel.id 
INNER JOIN cat_campus as campus ON lead.fk_campus = campus.id 
INNER JOIN cat_modalidad as modalidad ON lead.fk_modalidad = modalidad.id

/*
Consulta de obtención de datos por medio de una fecha
*/
SELECT 
	lead.id, 
	lead.nombre, 
	lead.telefono, 
	lead.celular, 
	lead.email, 
	plan.nombre as plan, 
	nivel.nombre as nivel, 
	campus.nombre as campus, 
	modalidad.nombre as modalidad, 
	lead.fecha_registro, 
	lead.asunto, 
	lead.mensaje 
FROM tbl_lead as lead 
INNER JOIN cat_plan_estudios as plan ON lead.fk_plan_estudios = plan.id 
INNER JOIN cat_nivel_educativo as nivel ON plan.fk_nivel_educativo = nivel.id 
INNER JOIN cat_campus as campus ON lead.fk_campus = campus.id 
INNER JOIN cat_modalidad as modalidad ON lead.fk_modalidad = modalidad.id
WHERE lead.fecha_registro BETWEEN '2018-07-03' AND '2018-07-04'
