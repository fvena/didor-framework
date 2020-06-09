# Visibilidad

Para facilitar un desarrollo adaptable, utiliza las clases `.hidden` y `.visible` para ocultar y mostrar elementos según el tamaño de pantalla.

## Mostrar elementos

Para que un elemento solo sea visible en un tamaño de pantalla concreto, primero
debes ocultar el elemento con la clase `.hidden` y luego indicar con la clase
`.*-visible` cuando será visible.


```html
<div class="hidden visible--tablet">
  Solo será visible en tamaños tablet
</div>
```

<div class="responsive responsive--title">
  <table class='responsive__table'>
    <tr>
      <th>&nbsp;</th>
      <th><az-icon name="palm" scale="1.1"></az-icon> Palm</th>
      <th><az-icon name="lap" scale="1.1"></az-icon> Lap</th>
      <th><az-icon name="small" scale="1.1"></az-icon> Small</th>
      <th><az-icon name="desktop" scale="1.1"></az-icon> Desk</th>
      <th><az-icon name="large" scale="1.1"></az-icon> Large</th>
    </tr>
    <tr>
      <td><div>.visible</div></td>
      <td colspan='5'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td><div>.visible--palm</div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='4'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.visible--lap</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.visible--small</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.visible--desk</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.visible.-large</div></td>
      <td colspan='4'><div class='responsive__block responsive__block--disabled'></div></span></td>
      <td><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.visible--tablet</td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.visible--portrait</td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.visible--landscape</td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.visible--touch</td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.visible--screen</td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
  </table>

  <div class="responsive--background">
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
  </div>
</div>


## Ocultar elementos

```html
<div class="hidden--tablet">
  No será visible en tamaños tablet
</div>
```

<div class="responsive responsive--title">
  <table class='responsive__table'>
    <tr>
      <th>&nbsp;</th>
      <th><az-icon name="palm" scale="1.1"></az-icon> Palm</th>
      <th><az-icon name="lap" scale="1.1"></az-icon> Lap</th>
      <th><az-icon name="small" scale="1.1"></az-icon> Small</th>
      <th><az-icon name="desktop" scale="1.1"></az-icon> Desk</th>
      <th><az-icon name="large" scale="1.1"></az-icon> Large</th>
    </tr>
    <tr>
      <td>.hidden</td>
      <td colspan='5'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.hidden--palm</td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='4'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--lap</td>
      <td><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--small</td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--desk</td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--large</td>
      <td colspan='4'><div class='responsive__block'>visible</div></span></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.hidden--tablet</td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--portrait</td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--landscape</td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.hidden--touch</td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--screen</td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
  </table>

  <div class="responsive--background">
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
  </div>
</div>

## Impresión

Podemos mostrar/ocultar elementos especificamente para la impresión:

* `.hidden-print` oculta un elemento cuando se imprime la página.
* `.visible-print` el elemento solo será visible cuando se imprima la página.

```html
<div class="hidden-print">No será visible en impresión</div>
<div class="visible-print">Solo será visible en impresión</div>
```
