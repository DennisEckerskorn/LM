# LM
```html
## Estructura mínima de una web
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

##Como se puede incluir javascript en HTML
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
#Una ID es una etiqueta que debe de ser única en el documento. No puede aplicarse a dos diferentes elementos en la misma página con el mismo valor ID. Se indica con una #.Por ejemplo:
<html>
    <head>
    <style>
    #ejemplo {
            background-color: black;
            color: yellow;
            border: 20px solid red;
            margin: 50px;
            padding:20px;
        }
    </style>
    </head>
    <body>
    <h1 id="ejemplo">Se aplica el css solo en este elemento</h1>
    </body>
</html>

#Las clases definen un mismo estilo para varios elementos. Por ejemplo:
<html>
    <head>
    <style>
        .ejemplo {
            border: 50px solid black;
            margin:20px;
            padding: 20px;
    }
    </style>
    </head>
    <body>
    <h1 class="ejemplo"> El título se muestra con un borde en negro con sus ajustes</h1>
    </body>
</html>

##Código para hacer un enlace a otra página y que esta se abra en una nueva ventana
<html>
    <head>
    </head>
    <body>
        <a href="http://blog.elinsti.com/index.php/2018/11/23/ejercicios-html-y-css/" target="_blank"> Visita este enlace</a>
    </body>
</html>

##¿Qué son las pseudoclases?, pon ejemplos.
#Las pseudoclases son usadas para  indicar el estado de un elemento. Por ejemplo hacer resaltar un enlace cuando pasas con el raton por encima o cambiar el color después de haber visitado un enlace. Por ejemplo:
<html>
    <head>
      <style>
        a:link {
            color: blue;
        }
        a:visited {
            color: purple;
        }
        a:hover {
            color: yellow;
        }
        a:active {
            color: green;
        }
      </style>
   </head>
    <body>
        <a href>Pruebalo</a>
        <a href>Segunda prueba</a>
    </body>
</html>
 #También se puede usar con pseudoclase :first-child la cual se aplicaria al primero de cada elemento.   


##Explica el modelo de caja de CSS (margin, border y padding)
#Cada elemento HTML se puede considerar envuelto por una caja, la cual se puede personalizar como se necesita.
#El modelo de caja de CSS funciona de la siguiente manera:
#margin: Define el espacio fuera de los bordes. Es transparente.
#border: Define los 4 bordes de la caja, se indica en px y se puede definir cada lado de diferentes px (border-top,border-bottom,border-right,border-left).
#padding: Define el espacio entre el contenido de la caja y los bordes. Se indica en px y es transparente.
Ejemplo de una caja con un borde de 20px, un margin de 10px y un padding de 30px:
div {
    border:20px solid black;
    margin:10px;
    padding:30px;
}
#width and height se usan junto a margin, padding y border para definir un tamaño de caja preciso. De este modo se puede aplicar a varias cajas de una página web.


##Explica que son los selectores de CSS y pon ejemplos
#Existen diferentes tipos de selectores y se usan (como dice el nombre) para seleccionar elementos html, básicamente son los nombres que se usan en css para definir cada estilo.Algunos ejemplos:

#-Selector universal: Selecciona toda la página y le aplica el estilo. Se indica asi: 
* {
   margin:0px; padding:0px;
}

#-Selector de etiqueta o tipo: Selecciona una o varias etiquetas indicadas y aplica los estilosa las etiquetas. Ejemplo:
h1,h2 {
    color:blue;
}

#Selector descendente: Seleccion elementos dentro de otros elementos:
a span {
    color:red;}
<a href="link"><span>Texto en rojo</span></a>

#Selector de clase: Cuando se quiere aplicar un estilo diferente a los mismos elementos (por ejemplo un párrafo) se usa un selector de classe.Ejemplo:
.estilo {
   color:red;
}
<p class="estilo">Texto</p>
<p>Texto</p>
<p class="estilo">Texto</p>

#Selector id: El selector ID sirve para seleccionar solamente un elemento en la página. Por ejemplo, le aplicamos a un solo párrafo un estilo con la etiueta id:
#especial {
    color:red;
    font-family: courier;
}
<p id="especial">Texto especial</p>

#Selector de hijos: Se usa para seleccionar el hijo directo de un elemento. Es decir, si tienes 3 elementos dentro de un párrafo se aplica al primer elemento, pero no se aplica al segundo o tercero. Se indica de la siguiente forma:
p > span { 
    color: blue;
}
<p><span>Texto1</span></p>
<p><a href="#"><span>Texto2</span></a></p>

#Selector adyacente: Se usa para seleccionar  un elemento de la misma familia que va justo a continuación del primero. Ejemplo:
h1 + h2 {
    color:red;
}
<h1>Texto1</h1>
    <h2>Texto2</h2> Este texto se vuelve rojo.


##Di a quien afectan:

    p a { color: red; } : Selector descendente, selecciona el elemento a dentro del elemento p.

    p > a { color: red; } Selector de hijos, selecciona al primer hijo directo, en este caso al primer elemento a dentro del elemento p.

    h1 + h2 { color: red }Selector adyacente: selecciona el elemento que esta justo a continuación del primer elemento. En este caso h2 estaría en rojo. 

    a[class] { color: blue; }: Todas las etiquetas a (enlaces) se vuelven azul. Se refiere a todas las etiquetas adel documento.

    a[class="externo"] { color: blue; }: Se refiere a un selector de clase, aplica el estilo del selector "externo". Las etiquetas a que contengan el atributo class="externo" se vuelven azul.

    a[href="http://www.ejemplo.com"] { color: blue; }: Todos los enlaces (http://www.ejemplo.com) que sean igual al anterior indicado se aplica el texto de color azul.
```
