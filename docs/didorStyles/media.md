# Objeto Multimedia

El objeto media es una composición con una imagen en un lado, y un texto en el otro lado.

Podemos utilizarlo de forma sencilla gracias a la propiedad `flex`, ten en cuenta que no se verá correctamente en navegadores que no la soporten.

::: demo
<div class="media">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Cabecera</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>
:::

``` html
<div class="media">
  <img src="/aidoo.png">
  <div class="media__body">
    <h3>Cabecera</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>
```

## Alineación de la imagen

Podemos alinear la imagen respecto del contenido mediante las siguientes clases:

* `.media--middle` - Centra la imagen respecto del contenido.
* `.media--bottom` - Alinea la imagen y el contenido por abajo.
* `.media--right` - La imagen aparece a la derecha del contenido.

Las modificaciones se pueden sumar, es decir podemos centrar el contenido y la imagen verticalmente y que esta aparezca a la derecha añadiendo las dos clases `.media--middle.media--right`.

::: demo
<div class="media margin-bottom">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación arriba</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>


<div class="media media--middle margin-bottom">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación centrada</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>


<div class="media media--bottom margin-bottom">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación abajo</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>


<div class="media media--right margin-bottom">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación derecha</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>
:::

``` html
<div class="media margin-bottom">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación arriba</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>


<div class="media media--middle margin-bottom">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación centrada</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>


<div class="media media--bottom margin-bottom">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación abajo</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>


<div class="media media--right margin-bottom">
  <img src="/aidoo.png" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación derecha</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>
```
