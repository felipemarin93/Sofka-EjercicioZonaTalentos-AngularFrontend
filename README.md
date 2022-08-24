# Reto Angular 

# Proyecto práctico para validación y mejoramiento de habilidades en Programación Frontend (Angular)

Pre-requisitos:
- El desarrollo de este proyecto se centra en el uso del framework Angular, se sugiere trabajar con la versión 11+
- Instalar node.js en su última versión estable (recomendado: lts/gallium -> v16.17.0)
- Instalar npm en su última versión (actual: 8.11.0)
- Instalar Angular CLI
- Se utiliza  (Visual Studio Code).

Este front tiene un catálogo de una tienda digital la cual ofrece productos.
Dichos artículos son obtenidos de una API Local usando Json Server.

Por ende para la ejecucion de este servidor se requiere:

- instalar npm con el comando: npm install.
- instalar el JSON server con: npm install --save json-server.
- luego iniciar el servidor con el comando : json-server --watch server/database.json.
- por último ejecutar el servidor con: ng serve -o lo que abrirá un ventana en tu navegador con el front consumiendo dicha api.


En la Tienda se cuenta con los productos, los cuales tienen su id, nombre, descripción, precio y cantidad, además se le crea 
un botón que simula el agregarlos al carrito de compras como se ve en la siguiente imagen:

![image](https://user-images.githubusercontent.com/51167724/186485800-0590d843-bc22-45c5-875c-382c00d60cf9.png)


por último se agrega caracteristica responsiva para dispositivos móviles.

![image](https://user-images.githubusercontent.com/51167724/186486567-271cb012-d8dd-4109-8b37-c6ae8f1abffa.png)


autor: Daniel Felipe Marín
