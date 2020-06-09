# Espaciados

Existen una amplia variedad de clases para modificar los margenes interiores y exteriores de un elemento.

## Notación

### Añadir un margen interno/externo

Las clases se forman con el siguiente formato

* `.margin-{sides}-{breakpoint}-{size}` para añadir un margin externo
* `.padding-{sides}-{breakpoint}-{size}` para añadir un margin interno

`sides` puede ser:

* `top`, `bottom`, `left` y `right` indica el lado al que afecta.
* `x` e `y` indican el eje al que aplica (horizontal/vertical).
* Si no indicamos nada, se aplica a los cuatro lados.

```html
<div class="margin">Margen a todos los lados</div>
<div class="margin-top">Margen superior</div>
<div class="margin-right">Margen derecho</div>
<div class="margin-x">Margenes horizontales</div>
```

`breakpoint` puede ser:

* `palm`, `lap`, `small`, `desk` y `large` indica el tamaño de pantalla al que afecta.
* Si no indicamos nada, se aplica a todos.

```html
<div class="margin">Margen a todos los tamaños</div>
<div class="margin-palm">Margen solo a los móviles</div>
```

`size` puede ser:

* `quarter`, `half`, `double`, `triple`, `quadruple`, `quintuple`, `sextuple` y `auto` indica el tamaño del margen.
* Si no indicamos nada, se aplica el tamaño estandar 1x.
* El valor `auto` solo se aplica a los valores horizontales

```html
<div class="margin">Margen tamaño base</div>
<div class="margin-half">Margen la mitad del tamaño base</div>
<div class="margin-triple">Margen tres veces el tamaño base</div>
```

#### Ejemplos

```html
<div class="margin">...</div>
<div class="margin-top-double">...</div>
<div class="margin-left-lap">...</div>
<div class="margin-palm-half">...</div>
<div class="margin margin-right-desk-triple">...</div>
```

```html
<div class="padding">...</div>
<div class="padding-top-double">...</div>
<div class="padding-left-lap">...</div>
<div class="padding-palm-double">...</div>
<div class="padding padding-right-desk-triple">...</div>
```

### Eliminar márginas

Para eliminar márgenes se sigue la misma notación pero se añade el prefijo `no-`y no se indica el tamaño del margen.

* `.no-margin-{sides}-{breakpoint}` para eliminar un margin externo
* `.no-padding-{sides}-{breakpoint}` para eliminar un margin interno

#### Ejemplos

```html
<div class="no-margin">...</div>
<div class="no-margin-top">...</div>
<div class="no-margin-palm">...</div>
<div class="no-margin-right-desk">...</div>
```

```html
<div class="no-padding">...</div>
<div class="no-padding-top">...</div>
<div class="no-padding-palm">...</div>
<div class="no-padding-right-desk">...</div>
```

## Centrado horizontal

Puedes centrar cualquier elemento también de forma responsive.

```html
<div class="margin-auto">Centra horizontalmente</div>
<div class="margin-auto-palm">Centra horizontalmente solo en los móviles</div>
```
