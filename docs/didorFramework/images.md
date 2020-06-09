# Imágenes

## Imágenes adaptables

Didor por defecto no modifica el tamaño de la imágenes, pero no permite que una imagen supere el tamaño de su contenedor, por lo que nunca podrán sobrepasar el ancho de la pantalla y verse cortada. Pero si la imagen es menor que su contenedor, esta no crecerá.

Si queremos que una imagen crezca siempre ajustándose al ancho de su contenedor, debemos aplicar la clase `.image--fluid`.

::: demo
<p style="height: 150px" class="margin-bottom">
  <img src="/aidoo-landscape.png">
</p>

<p style="height: 48vw">
  <img src="/aidoo-landscape.png" class="image--fluid">
</p>
:::

``` html
<img src="/aidoo-landscape.png">

<img src="/aidoo-landscape.png" class="image--fluid">
```

## Imágenes enmarcadas

Didor te permite un par de variaciones para enmarcar una imagen.

::: demo
<div style="height: 210px">
  <img src="/aidoo-square.png" class="image--frame margin-right-double" style="vertical-align: top">

  <img src="/aidoo-square.png" class="image--polaroid">
</div>
:::

``` html
<img src="/aidoo-square.png" class="image--frame">

<img src="/aidoo-square.png" class="image--polaroid">
```

## Pies de foto

Con la etiqueta HTML `<figure>` podemos añadir pies de foto o la autoría de un contenido multimedia.

::: demo
<figure style="height: 180px">
  <img src="/aidoo-landscape.png">
  <figcaption>Logotipo de la Aidoo</figcaption>
</figure>
:::

``` html
<figure>
  <img src="/aidoo-landscape.png">
  <figcaption>Logotipo de la Aidoo</figcaption>
</figure>
```
