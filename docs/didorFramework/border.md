# Bordes

Utiliza las utilidades de bordes para aplicar rapidamente un borde a un elemento. Muy útil para imágenes, botones o cualquier otro elemento.

### Añadir bordes

Puedes añadir un borde en todos los lados de un elemento o solo en uno.

```demo
<template>
  <az-row align="center">
    <div class="block border">.border</div>
    <div class="block border-top">.border-top</div>
    <div class="block border-right">.border-right</div>
    <div class="block border-bottom">.border-bottom</div>
    <div class="block border-left">.border-left</div>
  </az-row>
</template>

<style>
  .block {
    color: color(gray3);
    background-color: color(gray7);
    border-color: color(gray5);
    border-width: 2px !important;
    border-radius: 0;
    height: double();
    padding: 0 half();
  }
</style>
```

```html
<!-- Todos los lados -->
<div class="border">...</div>

<!-- Un solo lado -->
<div class="border-top">...</div>
<div class="border-right">...</div>
<div class="border-bottom">...</div>
<div class="border-left">...</div>
```

### Eliminar bordes

Puedes eliminar un borde en todos los lados de un elemento o solo en uno.

::: demo

<div class="page--flex page--border">
  <div class="page-block no-border">.no-border</div>
  <div class="page-block border no-border-top">.no-border-top</div>
  <div class="page-block border no-border-right">.no-border-right</div>
  <div class="page-block border no-border-bottom">.no-border-bottom</div>
  <div class="page-block border no-border-left">.no-border-left</div>
</div>
:::

```html
<!-- Todos los lados -->
<div class="no-border">...</div>

<!-- Un solo lado -->
<div class="no-border-top">...</div>
<div class="no-border-right">...</div>
<div class="no-border-bottom">...</div>
<div class="no-border-left">...</div>
```

### Bordes redondeados

Puedes redondear todos los bordes de un elemento, de un solo lado, o de los lados horizontales y verticales.

::: demo

<div class="page--flex page--border">
  <div class="page-block border rounded">.rounded</div>

  <div class="page-block border rounded-top">.rounded-top</div>
  <div class="page-block border rounded-right">.rounded-right</div>
  <div class="page-block border rounded-bottom">.rounded-bottom</div>
  <div class="page-block border rounded-left">.rounded-left</div>

  <div class="page-block border rounded-top-left">.rounded-top-left</div>
  <div class="page-block border rounded-top-right">.rounded-top-right</div>
  <div class="page-block border rounded-bottom-left">.rounded-bottom-left</div>
  <div class="page-block border rounded-bottom-right">.rounded-bottom-right</div>

  <div class="page-block border rounded no-rounded">no-rounded</div>
  <div class="page-block border rounded-circle">.rounded-circle</div>
</div>
:::

```html
<!-- Todos los lados -->
<div class="rounded">...</div>

<!-- Un solo lado -->
<div class="rounded-top">...</div>
<div class="rounded-right">...</div>
<div class="rounded-bottom">...</div>
<div class="rounded-left">...</div>

<!-- Una solo esquina -->
<div class="rounded-top-left">...</div>
<div class="rounded-top-right">...</div>
<div class="rounded-bottom-left">...</div>
<div class="rounded-bottom-right">...</div>

<!-- Ningún lado -->
<div class="no-rounded">...</div>

<!-- Círculo -->
<div class="rounded-circle">...</div>
```
