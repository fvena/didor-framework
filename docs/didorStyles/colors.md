# Colores

Didor utiliza un bonito y consistente esquema de color por defecto.

Los colores se dividen en tres grupos:

* **Colores de marca** - Atraiga la atención de sus visitantes utilizando el color de su marca.
* **Colores neutros** - Los colores neutros conforman la mayor parte del diseño y se utilizan para textos, fondos y bordes.
* **Colores de estado** - Utiliza un color coherente al estado (información, correcto, atención, error).

## Colores de fondo

Las clases para aplicar un color de fondo siguen el patrón `.backgroun-{color}`.

``` html
<div class="background-brand">Fondo color de la marca</div>
<div class="background-brand-a20">Fondo transparente al 20% del color de la marca</div>
<div class="background-transparent">Fondo transparente</div>
```

## Colores de texto

Las clases para aplicar un color de texto siguen el patrón `.color-{color}`.

``` html
<div class="color-brand">Fondo color de la marca</div>
<div class="color-gray1">Fondo transparente al 20% del color de la marca</div>
```

## Función

Podemos utilizar un color en nuestros archivos `sass` mediante la función `color(...)`.

``` scss
.elemento {
  background-color: color(brand);
}
```

::: demo
<h5 class="margin-bottom">Colores de Marca</h5>
<div class="page--color margin-bottom-double">
  <div class="page-block background-brand-darker">.background-brand-darker</div>
  <div class="page-block background-brand-dark">.background-brand-dark</div>
  <div class="page-block background-brand">.background-brand</div>
  <div class="page-block background-brand-light">.background-brand-light</div>
  <div class="page-block background-brand-lighter color-brand">.background-brand-lighter</div>
  <div class="page-block background-brand-a20 color-brand">.background-brand-a20</div>
</div>

<h5 class="margin-bottom">Colores Neutros</h5>
<div class="page--color margin-bottom-double">
  <div class="page-block background-black">.background-black</div>
  <div class="page-block background-gray1">.background-gray1</div>
  <div class="page-block background-gray2">.background-gray2</div>
  <div class="page-block background-gray3">.background-gray3</div>
  <div class="page-block background-gray4">.background-gray4</div>
  <div class="page-block background-gray5">.background-gray5</div>
  <div class="page-block background-gray6">.background-gray6</div>
  <div class="page-block background-gray7 color-gray1">.background-gray7</div>
  <div class="page-block background-white color-gray1 border">.background-white</div>
  <div class="page-block background-transparent color-gray1 border">.background-transparent</div>
</div>

<h5 class="margin-bottom">Colores de Estado</h5>
<div class="page--color">
  <div class="page-block background-warning-darker">.background-warning-darker</div>
  <div class="page-block background-warning-dark">.background-warning-dark</div>
  <div class="page-block background-warning">.background-warning</div>
  <div class="page-block background-warning-light">.background-warning-light</div>
  <div class="page-block background-warning-lighter color-warning">.background-warning-lighter</div>
  <div class="page-block background-warning-a20 color-warning">.background-warning-a20</div>

  <div class="page-block background-success-darker">.background-success-darker</div>
  <div class="page-block background-success-dark">.background-success-dark</div>
  <div class="page-block background-success">.background-success</div>
  <div class="page-block background-success-light">.background-success-light</div>
  <div class="page-block background-success-lighter color-success">.background-success-lighter</div>
  <div class="page-block background-success-a20 color-success">.background-success-a20</div>

  <div class="page-block background-danger-darker">.background-danger-darker</div>
  <div class="page-block background-danger-dark">.background-danger-dark</div>
  <div class="page-block background-danger">.background-danger</div>
  <div class="page-block background-danger-light">.background-danger-light</div>
  <div class="page-block background-danger-lighter color-danger">.background-danger-lighter</div>
  <div class="page-block background-danger-a20 color-danger">.background-danger-a20</div>
</div>
:::

## Color de texto

::: demo
<h5 class="margin-bottom">Colores de Marca</h5>
<div class="page--text margin-bottom-double">
  <div class="page-block color-brand-darker">.color-brand-darker</div>
  <div class="page-block color-brand-dark">.color-brand-dark</div>
  <div class="page-block color-brand">.color-brand</div>
  <div class="page-block color-brand-light">.color-brand-light</div>
  <div class="page-block color-brand-lighter">.color-brand-lighter</div>
  <div class="page-block color-brand-a20">.color-brand-a20</div>
</div>

<h5 class="margin-bottom">Colores Neutros</h5>
<div class="page--text margin-bottom-double">
  <div class="page-block color-black">.color-black</div>
  <div class="page-block color-gray1">.color-gray1</div>
  <div class="page-block color-gray2">.color-gray2</div>
  <div class="page-block color-gray3">.color-gray3</div>
  <div class="page-block color-gray4">.color-gray4</div>
  <div class="page-block color-gray5">.color-gray5</div>
  <div class="page-block color-gray6">.color-gray6</div>
  <div class="page-block color-gray7 background-gray5">.color-gray7</div>
  <div class="page-block color-white background-gray5">.color-white</div>
</div>

<h5 class="margin-bottom">Colores de Estado</h5>
<div class="page--text">
  <div class="page-block color-warning-darker">.color-warning-darker</div>
  <div class="page-block color-warning-dark">.color-warning-dark</div>
  <div class="page-block color-warning">.color-warning</div>
  <div class="page-block color-warning-light">.color-warning-light</div>
  <div class="page-block color-warning-lighter">.color-warning-lighter</div>
  <div class="page-block color-warning-a20">.color-warning-a20</div>

  <div class="page-block color-success-darker">.color-success-darker</div>
  <div class="page-block color-success-dark">.color-success-dark</div>
  <div class="page-block color-success">.color-success</div>
  <div class="page-block color-success-light">.color-success-light</div>
  <div class="page-block color-success-lighter">.color-success-lighter</div>
  <div class="page-block color-success-a20">.color-success-a20</div>

  <div class="page-block color-danger-darker">.color-danger-darker</div>
  <div class="page-block color-danger-dark">.color-danger-dark</div>
  <div class="page-block color-danger">.color-danger</div>
  <div class="page-block color-danger-light">.color-danger-light</div>
  <div class="page-block color-danger-lighter">.color-danger-lighter</div>
  <div class="page-block color-danger-a20">.color-danger-a20</div>
</div>
:::
