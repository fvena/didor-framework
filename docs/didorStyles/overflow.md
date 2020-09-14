# Overflow

Puedes determinar como tiene que comportarse un elemento cuando su contenido sea mayor que el mismo.

Normalmente, no querremos que nuestro contenido se salga de su elemento padre, por lo que existen dos clases que permiten indicar como debe comportarse:

* `.overflow-auto` si es necesario, se podrá hacer scroll
* `.overflow-hidden` el contenido que no cabe se oculta

``` html
<div class="overflow-auto">Lorem ipsum...</div>
<div class="overflow-hidden">Lorem ipsum...</div>
```

::: demo
<div class="page--overflow padding-bottom-triple">
  <div class="page-block">
  <strong>Defecto</strong><br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id. </div>
  <div class="overflow-auto page-block">
  <strong>overflow-auto</strong><br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id. </div>
  <div class="overflow-hidden page-block">
  <strong>overflow-hidden</strong><br>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id. </div>
</div>
:::
