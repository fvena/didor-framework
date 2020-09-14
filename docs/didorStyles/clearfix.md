# Clearfix

Utiliza la clase clearfix para evitar que los elementos floten.

## Clase

Puede controlar que los elementos floten solo dentro de otro, añadiendo a este la clase `.clearfix`.

En el siguiente ejemplo, sin añadir la clase clearfix, mostrará los dos botones en líneas separadas, lo que provocaría que el diseño se rompiese.

::: demo
<div class="clearfix">
  <az-button class="float-left" type="brand">Izquierda</az-button>
  <az-button class="float-right" type="brand">Derecha</az-button>
</div>
:::

``` html
<div class="clearfix">
  <az-button class="float-left">Izquierda</az-button>
  <az-button class="float-right">Derecha</az-button>
</div>
```

## Mixin

También está disponible como un Mixin de Sass

``` scss
.elemento {
  @include clearfix;
}
```
