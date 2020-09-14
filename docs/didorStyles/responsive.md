# Responsive

<!-- ## Movile o Desktop first

Trabajar con _mobile first_, significa que el sitio web está originalmente optimizado para los dispositivos móviles y que la versión de escritorio es solo una adaptación de la versión móvil y lo mismo se aplica, aunque a la inversa, cuando pensamos en desktop first.

Didor permite trabajar con los dos enfoques, basta con modificar el valor de la variable `$mobile-first` para alternar entre uno y otro.


> Por defecto didor está configurado con el enfoque **Desktop First**. -->


## Tamaños de pantalla
Didor tiene definidos cinco tamaños de pantalla.

- `palm`: Móviles
- `lap`: Tablet verticales y Móviles horizontales
- `small`: Tablet horizontales
- `desk`: Portátiles y monitores pequeños
- `large`: Monitores grandes

Al ser utilizados por el nucleo del framework, no se puede cambiar su nombre o alterar su número, pero si podemos modificar sus valores mediante las siguientes variables:


Nombre         | Tipo                           | Descripción                                                             | Defecto
---------------|--------------------------------|-------------------------------------------------------------------------|-------------
`$palm`        | <code>size</code>    | Anchura máxima de pantalla para móviles                                 | `600px`
`$lap`         | <code>size</code>    | Anchura máxima de pantalla para tablets en vertical                     | `900px`
`$small`       | <code>size</code>    | Anchura máxima de pantalla para tablets en horizontal                   | `1200px`
`$desk`        | <code>size</code>    | Anchura máxima de pantalla para portátiles                              | `1800px`

<p class="small">Los valores por defecto, se han elegido agrupando los valores más comunes entre dispositivos, [ref](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862).</p>

[9c90596b]: https://zellwk.com/blog/media-query-units/ "PX, EM or REM Media Queries?"
[e02d6c98]: https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862 "The 100% correct way to do CSS breakpoints"

## Media Queries

Didor utiliza un mixin para generar los media query de forma sencilla. Este mixin recibe un alias con el rango de tamaños de pantalla que abarca. Por defecto se han definido los siguientes alias, en base a los tipos de pantalla definidos, aunque puede añadir más alias o modificarlos en los ajustes.

<div class="responsive">
  <table class="responsive__table">
    <tr>
      <th><az-icon name="palm" scale="1.1"></az-icon> Palm</th>
      <th><az-icon name="lap" scale="1.1"></az-icon> Lap</th>
      <th><az-icon name="small" scale="1.1"></az-icon> Small</th>
      <th><az-icon name="desktop" scale="1.1"></az-icon> Desk</th>
      <th><az-icon name="large" scale="1.1"></az-icon> Large</th>
    </tr>
    <tr>
      <td><div class="responsive__block">palm</div></td>
      <td><div class="responsive__block">lap</div></td>
      <td><div class="responsive__block">small</div></td>
      <td><div class="responsive__block">desk</div></td>
      <td><div class="responsive__block">large</div></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td colspan="2"><div class="responsive__block">tablet</div></td>
      <td colspan="2">&nbsp;</td>
    </tr>
    <tr>
      <td colspan="2"><div class="responsive__block">portrait</div></td>
      <td colspan="3"><div class="responsive__block">landscape</div></td>
    </tr>
    <tr>
      <td colspan="3"><div class="responsive__block">touch</div></td>
      <td colspan="2"><div class="responsive__block">screen</div></td>
    </tr>
  </table>

  <div class="responsive--background">
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
  </div>
</div>


La sintáxis para utilizar el mixin es la siguiente:

``` scss
// Mixin media
@include media(lap) {
  .foo {
    color: green;
  }
}

// Genera
@media screen and (min-width: 600px) and (max-width: 899px) {
  .foo {
    color: green;
  }
}
```

## Notch

También existe una versión para incluir estilos específico para dispositivos con notch:

``` scss
// Mixin media notch
@include media(notch) {
  .layout {
    padding-top: env(safe-area-inset-top);
    padding-right: env(safe-area-inset-right);
    padding-bottom: env(safe-area-inset-bottom);
    padding-left: env(safe-area-inset-left);
  }
}
```
