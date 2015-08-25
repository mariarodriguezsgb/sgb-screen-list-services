<h1>SGB-screen-list</h1>

<h3>Propósito</h3>

Esta pantalla es una vista que permite visualizar una lista de elementos, donde cada elemento tiene al menos un campo de información, por ejemplo se pueden visualizar contactos, productos, etc.  Cada elemento es a su vez, un enlace a una vista detallada de dicho elemento. Cada ítem puede tener su propia vista, en la sección de diseño se encuentran las instrucciones para lograr esta funcionalidad. 

<h3>Datos esperados</h3>

Se debe recibir una lista (items) donde obligatoriamente todos los ítems deben tener los siguientes campos.

<h3>Datos obligatorios</h3>


- **id**: id del ítem
- **title**: títutlo del ítem

<h3>Datos opcionales</h3>


- **image**: enlace a una imágen correspondiente al ítem
- **detail_1**: subtítulo con información del ítem
- **detail_2**: subtítulo con información del ítem
- **desc**: descripcion extensa del ítem
- **url**: enlace a más información o detalles


Adicionalmente para cada ítem, se puede proveer una lista de máximo tres recursos para indicar si el item tiene otros enlaces (por ejemplo alguna persona que tenga perfil en Linkedin, Twitter y Facebook. Cada recurso será un pequeño ícono con el enlace correspondiente. Estos recursos se identifican por resources, cada resource es un registro que tiene dos campos. El primer campo se identifica por url, que es el enlace a donde se direcciona al hacer click en cada imágen. El segundo campo es src, que es donde se encuentra la imágen (en el proyecto o dirección remota).  Estos recursos se podrán visualizar unícamente en la vista detallada del ítem.   Esta adición tiene sentido utilizarla con la opcion *@compact-left*

<h3>Ejemplo JSON</h3>

    [ 
        { 
            "id": 1, 
            "title": "<titutlo>", 
		    "detail_1": "<subtitulo_1>", 
		    "detail_2": "<subtitulo_2>", 
		    "desc": "<descripcion extensa>", 
		    "image":"<enlace>", 
		    "resources" : [ 
			    {"url" : "www.google.com", "src" : "../resources/telephone_icon.png"}, 
				{"url" : "www.google.com",  "src" : "../resources/email_icon.png"}, 
				{"url" : "www.google.com", "src" : "../resources/linkedin_icon.png"} 
			] 
    
    	},
    
    	{ 
		    "id": 2, 
		    "title": "<titutlo>", 
		    "detail_1": "<subtitulo_1>", 
		    "detail_2": "<subtitulo_2>", 
		    "desc": "<descripcion extensa>", 
		    "image":"<enlace a la imagen>", 
		    "resources" : [ 
				{"url" : "www.google.com", "src" : "../resources/telephone_icon.png"}, 
				{"url" : "www.google.com", "src" : "../resources/email_icon.png"}, 
				{"url" : "www.google.com",  "src" : "../resources/linkedin_icon.png"} 
		    ] 
  	    } 
    ] 

<h3>Parámetros de la pantalla</h3>

- **showSearch**: Booleano que indica si se desea un agregar un buscador. *True* por defecto  
- **templateType**: Funcion o string que indica que template se va a utilizar para cada item de la lista.
- **showIcon**: Ícono adicional que se va a mostrar en la opción de template *@compact-left*. Por ejemplo: ion-chevron-right

<h3>Diseño</h3>

Para que cada ítem se muestre de forma distinta, se debe proveer una función en los parámetros de la pantalla bajo el nombre de templateType. Por ejemplo: 

	<screen>: {
	   <resto de parametros> : "...",
	   params: {
	      templateFunc: function(item) {
	         return (item.desc.length>30 ? "@compact-left" : 
	                (item.desc.length>10 ? "@news" : "@compact-left")); 
	      }
	   }

Actualmente se cuentan con las siguientes opciones

<h4>Opción @compact-left</h4>

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-list-compact-left.png)


Para esta vista existe la posibilidad de incluir un ićono a la derecha del texto.  Para lograr esto se debe proveer un parámetro (showIcon) en la pantalla que indique que ícono de ionic se va a desplegar, por ejemplo ion-chevron-right.  En caso de no proveer dicho parámetro no se mostrará ningún ícono

<h4>Opción @compact-right</h4>

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-list-compact-right.png)


<h4>Opción @large</h4>

![Alt Text](https://s3.amazonaws.com/megazord-framework/balsamiq+mockups/sgb-screen-list-large.png)

