# Diseños

Construye diseños básicos facilmente utilizando los componentes predefinidos.

## Diseños básicos

En los diseños que se muestran a continuación, se han añadido colores de fondo y espacios entre los bloques para facilitar la visualización. Los componentes solo proporcionan la posición correcta.

Los diseños se basan en flexbos, asegurate que tu navegador los admita.

### Cabecera, Contenido y Footer

::: demo
<div class="page-demo">
  <az-row dir="column" hgutter="small" vgutter="small">
    <header><div class="page-demo__block">Header</div></header>
    <main><div class="page-demo__block page-demo__main">Content</div></main>
    <footer><div class="page-demo__block">Footer</div></footer>
  </az-row>
</div>
:::

``` html
<az-row dir="column">
  <header>Header</header>
  <main>Content</main>
  <footer>Footer</footer>
</az-row>
```

### Cabecera, Contenido, Menú lateral y Footer (responsive)

::: demo
<div class="page-demo">
  <az-row dir="column" hgutter="small" vgutter="small">
    <header><div class="page-demo__block">Header</div></header>
    <az-row valign="stretch" :palm="{dir: 'column'}" hgutter="small" vgutter="small" grid>
      <az-col class="page-demo__aside" auto><div class="page-demo__block">Aside</div></az-col>
      <az-col expand><div class="page-demo__block page-demo__main">Content</div></az-col>
    </az-row>
    <footer><div class="page-demo__block">Footer</div></footer>
  </az-row>
</div>
:::

``` html
<az-row dir="column">
  <header>Header</header>

  <az-row valign="stretch" :palm="{dir: 'column'}" grid>
    <az-col auto class="aside">Aside</az-col>
    <az-col expand>Content</az-col>
  </az-row>

  <footer>Footer</footer>
</az-row>
```

``` scss
.aside {
  width: 150px;
}
```

### Cabecera, Contenido, dos contenedores laterales y Footer (responsive)

::: demo
<div class="page-demo">
  <az-row dir="column" hgutter="small" vgutter="small">
    <header><div class="page-demo__block">Header</div></header>
    <az-row valign="stretch" :palm="{dir: 'column'}" hgutter="small" vgutter="small" grid>
      <az-col class="page-demo__aside" auto><div class="page-demo__block">Aside Left</div></az-col>
      <az-col expand><div class="page-demo__block page-demo__main">Content</div></az-col>
      <az-col class="page-demo__aside" auto><div class="page-demo__block">Aside Right</div></az-col>
    </az-row>
    <footer><div class="page-demo__block">Footer</div></footer>
  </az-row>
</div>
:::

``` html
<az-row dir="column">
  <header>Header</header>

  <az-row valign="stretch" :palm="{dir: 'column'}" grid>
    <az-col auto class="aside">Aside Left</az-col>
    <az-col expand>Content</az-col>
    <az-col auto class="aside">Aside Right</az-col>
  </az-row>

  <footer>Footer</footer>
</az-row>
```

``` scss
.aside {
  width: 150px;
}
```

### Cabecera, Contenido, Menú lateral y Footer (responsive) - Diseño 2

::: demo
<div class="page-demo">
  <az-row valign="stretch" :palm="{dir: 'column'}" hgutter="small" vgutter="small" grid>
    <az-col class="page-demo__aside" auto><div class="page-demo__block">Aside</div></az-col>
    <az-col expand>
      <az-row dir="column" :palm="{dir: 'column'}" hgutter="small" vgutter="small">
        <header><div class="page-demo__block">Header</div></header>
        <main><div class="page-demo__block page-demo__main">Content</div></main>
        <footer><div class="page-demo__block">Footer</div></footer>
      </az-row>
    </az-col>
  </az-row>
</div>
:::

``` html
<az-row valign="stretch" :palm="{dir: 'column'}" grid>
  <az-col auto class="aside">Aside</az-col>

  <az-col expand>
    <az-row dir="column" :palm="{dir: 'column'}">
      <header>Header</header>
      <main>Content</main>
      <footer>Footer</footer>
    </az-row>
  </az-col>
</az-row>
```

``` scss
.aside {
  width: 150px;
}
```

### Cabecera, Contenido, dos contenedores laterales y Footer (responsive) - Diseño 2

::: demo
<div class="page-demo">
  <az-row valign="stretch" :palm="{dir: 'column'}" hgutter="small" vgutter="small" grid>
    <az-col class="page-demo__aside" auto><div class="page-demo__block">Aside Left</div></az-col>
    <az-col expand>
      <az-row dir="column" hgutter="small" vgutter="small" >
        <header><div class="page-demo__block">Header</div></header>
        <az-row valign="stretch" :palm="{dir: 'column'}" hgutter="small" vgutter="small" grid>
          <az-col expand><div class="page-demo__block page-demo__main">Content</div></az-col>
          <az-col class="page-demo__aside" auto><div class="page-demo__block">Aside Right</div></az-col>
        </az-row>
        <footer><div class="page-demo__block">Footer</div></footer>
      </az-row>
    </az-col>
  </az-row>
</div>
:::

``` pug
<az-row valign="stretch" :palm="{dir: 'column'}" grid>
  <az-col auto class="aside">Aside Left</az-col>

  <az-col expand>
    <az-row dir="column">
      <header>Header</header>

      <az-row valign="stretch" :palm="{dir: 'column'}" grid>
        <az-col expand>Content</az-col>
        <az-col auto class="aside">Aside Right</az-col>
      </az-row>

      <footer>Footer</footer>
    </az-row>
  </az-col>
</az-row>
```

``` scss
.aside {
  width: 150px;
}
```
