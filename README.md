# LM
```html
##Estructura mínima de una web
<html>
    <head>
    
    </head>
    
    <body>
    
    </body>
    
</html>

##Explica las 3 formas de usar css en html
# Externa: -->
# Se guarda el .css en un archivo separado con la extensión .css. Cuando un .css es usado de forma externa, se aplica el .css (estilo) a toda la página web. Al archivo .html se le indica mediante el elemento link, de la siguiente manera: -->
<html>
    <head>
    <link rel="stylesheet.css" type="text/css" href="stylesheet.css">
    </head>
    <body>
    </body>
</html>

# Interna:
# El propio código css esta introducido en la sección head y se aplica a la pagína actual en la que está escrito.
<html>
    <head>
     <style>
    p {
    color: red;
    background-color: yellow;
    }
     </style>
    </head>
         <body>
            <p>Este texto tiene el fondo amarillo y el texto en rojo.</p>
         </body>
</html>

# Interlineado:
# El códio css va escrito dentro de la misma linea del elemento. De esta manera, se aplica solamente a la línea escrita.
<html>
  <head>
  </head>
   <body style="background-color:green; font-family: courier;">
      <p style="color blue;font-family:courier;">Este texto se muestra de color azul  de la fuente courier.</p>
   </body>
</html>
    

##crea una lista sin ordenar con 5 ingredientes de una receta de cocina
<html>
    <head>
    </head>
    <body>
        <p>Esto es una lista no ordenada, que indica 5 ingredientes de una receta:</p>
        <ul>
            <li>Aceite</li>
            <li>Sal</li>
            <li>Tomate triturado</li>
            <li>Carne Picada</li>
            <li>Macarrones</li>
        </ul>
    </body>
</html>

##como se puede incluir javascript en HTML
# javascript se puede incluir de 2 maneras, una vez en la sección head o en la sección body:
<html>
  <head>
    <script>El códio javascript puede ir aqui</script>
  </head>
   <body>
        <script>También se podría poner aqui.</script>
   </body>
</html> 

##Que diferencia hay entre una clase y una ID
#Una ID es una etiqueta que debe de ser única en el documento. Los diferentes identificadores deben de ser únicos.

#Las clases definen un mismo estilo para varios elementos.
<html>
    
```
