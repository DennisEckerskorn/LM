# ElectronJS
### Definición y sus enlaces:
```
ElectronJS es una biblioteca de código abierto hecha por GitHub, que se usa para crear aplicaciones  
de escritorio multiplataforma con los lenguajes web HTML, CSS y Javascript. ElectronJS es creada y  
mantenida por Github.  
ElectronJS esta comopuesto por dos procesos, el proceso main y el proceso renderer.  
El proceso main es un proceso de node.js y es el proceso principal, digamos que es  
nuestra aplicación en si misma, este proceso tiene acceso a varias API de Electron.js  
para poder comunicarse con nuestro Sistema Operativo.  
El procesos renderer es un proceso de Chromium que tiene un Node.js incorporado y puede acceder  
a diferentes módulos, aparte los que instalemos con npm. Esto permite usar librerías como por ejemplo:  
React.js, Angular.js, Polymer, etc. En el proceso renderer también se permite el acceso a unas pocas API  
igual que en el proceso main.
```
[Enlace a la página oficial.](https://electronjs.org/)  
[Sobre Electron](https://electronjs.org/docs/tutorial/about)  
[Guía de inicio](https://electronjs.org/docs/tutorial/quick-start)

# Flexbox
### Definición y características:
```
Flexbox (Caja Flexible) es un módulo de diseño en CSS3 (Propiedad), es una forma muy útil para crear páginas  
web responsivasy es un método para ayudar a distribuir los elementos de una interfaz y mejorar  
la capacidad de alineación de la misma.  
-Usando Flexbox evitamos usar el módulo de diseño (propiedad) float.  
-Flexbox facilita la forma en la que posicionamos elementos, es más simple y usa menos código.  
-Permite crear páginas web dinámicas, flexibles y fluidas.
```
[Referencia 1](https://filisantillan.com/el-gran-poder-de-css3-flexbox/)  
[Referencia 2](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Conceptos_Basicos_de_Flexbox)  
[Referencia 3](https://www.emenia.es/flexbox-la-caja-flexible-css3/)  
[Referencia 4](https://webappdesign.es/guia-flexbox/)

# ¿Qué es javascript y sus usos?
## Definición javascript:
```
Javascript es un lenguaje de programación que se usa para añadir contenido dinámico e inteligente a una  
página web, como por ejemplo: añadir efectos animados, controlar archivos multimedia,  
hacer aparecer o desaparecer textos o imágenes, realizar cálculos y mostrar sus resultados.  
Es un lenguaje que sirve para dar respuestas rápidas a las acciones del usuario sin necesidad de  
sincronizarse con el servidor, lo que permite ejecutar el código localmente.
```
[Definición](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Qu%C3%A9_es_JavaScript)  
[Más información y usos](https://www.aprenderaprogramar.com/index.php?option=com_content&view=article&id=777:ique-es-javascript-principales-usos-servidor-y-cliente-html-css-y-programacion-efectos-cu01103e&catid=78&Itemid=206)  

## Diferentes usos de javascript
```
El uso de javascript se divide en dos tipos de usos diferentes:
-Interno: El propio código puede ir situado en cualquier parte del documento HTML, se indica  
dentro de la etiqueta <style></style>.Ejemplo:  

<script type="text/javascript">
        Aqui va el código;
        </script>  
        
Se suele usar cuando el código javascript no es demasiado largo, de esta manera la página  
web carga más rápida ya que no tiene que acceder un archivo externo y realizar otra  
tarea simultánea al conectarse al servidor.  

-Externo: El código javascript se guarda en un archivo externo con la extensión .js.  
En el documento HTML se indica la ruta del archivo entre las etiquetas.  
<style type="text/javascript" src="./javascript.js">  
</script>
```
