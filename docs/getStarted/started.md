# Guía de Inicio

Didor es un framework UI / UX para Vue.js, diseñado para crear aplicaciones web adaptables a los diferentes tamaños de pantalla.

La forma más rápida de comenzar es añadir los archivos desde CDN, y realizar una configuración mínima. Si está buscando como utilizar Didor con Vue CLI, Webpack o cualquier otro sistema de compilación, lea la sección de instalación.

## CDN

Puede agregar Didor a su proyecto importando los archivos compilados de CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@didor/didor/dist/didor.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@didor/didor/dist/didor.js"></script>
```

## Plantilla de Inicio

Para probar rapidamente Didor, copie el siguiente código en su `index.html` o pruebalo directamente en JSFiddle. Este código importa la última versión de Vue y Didor, permitiéndole empezar a probar los componentes rapidamente.

Asegúrate de configurar sus páginas con los últimos estándares de diseño y desarrollo, utilizando HTML5 doctype y configurando la etiqueta meta `viewport` para tener un comportamiento responsive.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://cdn.jsdelivr.net/npm/@didor/didor/dist/didor.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
</head>
<body>
  <div id="app">
    <az-row>
      <az-col>
        <h1>Bienvenido a didor!</h1>
        <p>Esta es tu página de inicio. Asegurate de leer la documentación para ver todo lo que puedes hacer.</p>
        <az-button href="https://didor.io/docs/introduction/getting-started">Leer documentación</az-button>
      </az-col>
    </az-row>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@didor/didor/dist/didor.js"></script>
  <script>
    new Vue({
        el: '#app'
    });
  </script>
</body>
</html>
```
