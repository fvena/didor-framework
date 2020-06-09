# Instalación

Instala Didor utilizando tu gestor de paquetes favorito para tener acceso a los archivos compilados de CSS y Javascript.

## Instalación Básica

Puede instalar Didor utilizando uno de los siguientes gestores de paquetes:

**Instalación con `npm`:

```shell
npm install --save @didor/didor
```

**Instalación con `yarn`:

```shell
yarn add @didor/didor
```

**Instalación con `composer`:

```shell
composer require @didor/didor
```

### Utilización

Primero debes importar los estilos, después importaremos los archivos javascript. Si ya tienes configurado Webpack para utilizar Vue, instalar Didor es tan sencillo como:

```js[src/main.js]
import Vue from 'vue';
import '@didor/didor/dist/didor.css';
import Didor from '@didor/didor';

Vue.use(Didor);
```

El código anterior instala todos los componentes de Didor por defecto.

¡Eso es todo, amigo! Ya puedes empezar a utilizar los componentes y estilos que te ofrece Didor.

### Tree Shacking (Sacudir el árbol)

Sacudir el árbol es suele utilizar para indicar que hay que eliminar del paquete final el código que no se utiliza. Para ello puedes importar los componentes de Didor de forma individual desde los propios archivos sin compilar:

```js[src/main.js]
import Vue from 'vue';
import '@didor/didor/src/index.scss';
import { Didor, DButton, DRow, DCol } from '@didor/didor/src/index';

Vue.use(Didor, {
    components: [
        DButton,
        DRow,
        DCol
    ]
});
```

::: tip
Didor utiliza Pug para las plantillas y SCSS para los estilos, asegurate de instalarlos como dependencia utilizando:

`npm install -D node-sass sass-loader pug pug-plain-loader`
`yarn add -D node-sass sass-loader pug pug-plain-loader`
:::
