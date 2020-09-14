# Tamaños

Modifica el tamaño de un elemento cuando lo necesites en altura y anchura.

Todas las dimensiones del framework se toman proporcionales a una cuadrícula del tamaño de la altura de línea. Esta es una técnica utilizada en diseño editorial, y garantiza que todos los espacios entre elementos así como sus dimensiones mantengan una proporcionalidad.

A la hora de dar un tamaño a un elemento podemos dar un valor proporcional a la retícula base, o podemos dar un valor porcentual respecto de su contenedor.

## Valores Proporcional

Los valores proporcionales por defecto, respecto del tamaño base definido por la altura de línea son `1/4`, `1/2`, `1`, `2`, `3`, `4`, `5` y `6`.

::: demo
<div class="page-size">
  <div><div class="page-block width-quarter"></div>quarter() => 1/4x</div>
  <div><div class="page-block width-half"></div>half() => 1/2x</div>
  <div><div class="page-block width"></div>simple() => x</div>
  <div><div class="page-block width-double"></div>double() => 2x</div>
  <div><div class="page-block width-triple"></div>triple() => 3x</div>
  <div><div class="page-block width-quadruple"></div>quadruple() => 4x</div>
  <div><div class="page-block width-quintuple"></div>quintuple() => 5x</div>
  <div><div class="page-block width-sextuple"></div>sextuple() => 6x</div>
</div>
:::

``` html
<div class="width-quarter">...</div>
<div class="width-half">...</div>
<div class="width">...</div>
<div class="width-double">...</div>
<div class="width-triple">...</div>
<div class="width-cuadrupe">...</div>
<div class="width-quintuple">...</div>
<div class="width-sextuple">...</div>
```

``` html
<div class="height-quarter">...</div>
<div class="height-half">...</div>
<div class="height">...</div>
<div class="height-double">...</div>
<div class="height-triple">...</div>
<div class="height-cuadrupe">...</div>
<div class="height-quintuple">...</div>
<div class="height-sextuple">...</div>
```



## Valores Porcentuales

Los valores por defecto para la anchura y altura de un elemento son `25%`, `50%`, `75%`, `100%` y `auto`.

También puedes indicar que su tamaño máximo máximo sea el 100%, o que su tamaño sea relativo al viewport en vez de a su contenedor.

### Anchura

La anchura será relativa a su elemento padre.

::: demo
<div class="page-size-width">
  <div class="page-block width-25">Anchura 25%</div>
  <div class="page-block width-50">Anchura 50%</div>
  <div class="page-block width-75">Anchura 75%</div>
  <div class="page-block width-100">Anchura 100%</div>
  <div class="page-block width-auto">Anchura auto</div>
  <div class="page-block max-width-100">Anchura máxima 100%</div>
  <div class="page-block vw-100">Anchura 100% del viewport</div>
  <div class="page-block max-vw-100">Anchura máxima 100% del viewport</div>
</div>
:::

``` html
<div class="width-25">...</div>
<div class="width-50">...</div>
<div class="width-75">...</div>
<div class="width-100">...</div>
<div class="width-auto">...</div>
<div class="max-width-100">...</div>
<div class="vw-100">...</div>
<div class="max-vw-100">...</div>
```

### Altura

La altura será relativa a su elemento padre.

::: demo
<div class="page-size-height">
  <div class="page-block height-25">Altura 25%</div>
  <div class="page-block height-50">Altura 50%</div>
  <div class="page-block height-75">Altura 75%</div>
  <div class="page-block height-100">Altura 100%</div>
  <div class="page-block height-auto">Altura auto</div>
  <div class="page-block max-height-100">Altura máxima 100%</div>
  <div class="page-block vh-100">Altura 100% del viewport</div>
  <div class="page-block max-vh-100">Altura máxima 100% del viewport</div>
</div>
:::

``` html
<div class="height-25">...</div>
<div class="height-50">...</div>
<div class="height-75">...</div>
<div class="height-100">...</div>
<div class="height-auto">...</div>
<div class="max-height-100">...</div>
<div class="vh-100">...</div>
<div class="max-vh-100">...</div>
```

## Funciones

Podemos definir un tamaño o espaciado en nuestros archivos `sass` mediante la función `size(...)`. Esta función nos devolverá el valor indicado multiplicado por nuestro tamaño base.

Admite cualquier valor númerico, incluidos números negativos.

``` scss
.elemento1 {
  width: size(1/2);
  height: size(2);
}

.elemento2 {
  margin: size() size(2);
}

.elemento3 {
  margin-top: size(-2);
}
```

También existen funciones con los nombres estandarizados, para mejorar la semántica del framework:

``` scss
width: quarter();    // 1/4 * $space
width: half();      // 1/2 * $space
width: simple();     // $space
width: double();     // 2 * $space
width: triple();     // 3 * $space
width: quadruple();  // 4 * $space
width: quintuple();  // 5 * $space
width: sextuple();   // 6 * $space
```

``` scss
.elemento1 {
  width: quarter();
  height: double();
}

.elemento2 {
  margin: simple() double();
}

.elemento3 {
  margin-top: double('-');
}
```
