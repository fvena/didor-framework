# Tablas

## Tabla básica

Didor aplica el siguiente diseño por defecto a todas las tablas:

::: demo
<table class=" no-margin">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>#</th>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <th>#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th>#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
:::

``` html
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>#</th>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <th>#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th>#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
```

## Tablas a rayas

::: demo
<table class="table--striped no-margin">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>#</th>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <th>#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th>#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
:::

``` html
<table class="table--striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>#</th>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <th>#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th>#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
```

## Hover sobre las filas

::: demo
<table class="table--striped table--hover no-margin">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>#</th>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <th>#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th>#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
:::

``` html
<table class="table--striped table--hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>#</th>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <th>#</th>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <th>#</th>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
```

## Tabla responsive

::: demo
<div class="table-wrapper width-50 width-palm-100">
  <table class="no-margin">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>#</th>
        <td>Francisco</td>
        <td>Vena</td>
        <td>@fvena</td>
        <td>fvena32@gmail.com</td>
      </tr>
      <tr>
        <th>#</th>
        <td>John</td>
        <td>Doe</td>
        <td>@johndoe</td>
        <td>johndoe@email.com</td>
      </tr>
      <tr>
        <th>#</th>
        <td>Alice</td>
        <td>Cooper</td>
        <td>@alicecooper</td>
        <td>alicecooper@email.com</td>
      </tr>
    </tbody>
  </table>
</div>
:::

``` html
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>#</th>
        <td>Francisco</td>
        <td>Vena</td>
        <td>@fvena</td>
        <td>fvena32@gmail.com</td>
      </tr>
      <tr>
        <th>#</th>
        <td>John</td>
        <td>Doe</td>
        <td>@johndoe</td>
        <td>johndoe@email.com</td>
      </tr>
      <tr>
        <th>#</th>
        <td>Alice</td>
        <td>Cooper</td>
        <td>@alicecooper</td>
        <td>alicecooper@email.com</td>
      </tr>
    </tbody>
  </table>
</div>
```
