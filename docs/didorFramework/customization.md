# Personalización

Configura Didor para que se ajuste a tu estilo.

## Dependencias de desarrollo

Para personalizar Didor, asegurate de importar los archivos no compilados. Para que puedan compilarse nuevamente, deberás tener instalado las siguientes dependencias:

```shell
npm install --save-dev node-sass sass-loader
npm install --save-dev pug pug-plain-loader
npm install --save-dev postcss-preset-env
```

## Instalación

En este caso debemos asegurarnos que estamos importando los archivos originales en lugar del código compilado. Esto nos permitirá compilar los componentes de Didor con los nuevos estilos:

```js[src/main.js]
import Vue from 'vue';
import '@didor/didor/src/index.scss';
import Didor from '@didor/didor/src/index';

Vue.use(Didor);
```

## Variables

Crea un nuevo archivo Sass llamado `_variables.scss`, donde podrás modificar cientos de variables para adaptar Didor a tu diseño. Por ejemplo, puedes modificar el color de la marca:

```scss
$color-brand: #D84550;
```

## Configuración

Por último, pero no menos importante, debemos asegurarnos que nuestro archivo `_variables.scss` se importe antes que los archivos de Didor.

### Utilizando `@vue/cli`

Primero, instalaremos un plugin para importar recursos css:

```shell
npm install --save-dev vue-cli-plugin-style-resources-loader
```

Añade el siguiente código en el campo `pluginOptions` de tu archivo `vue.config.js`:

```js[vue.config.js]
const path = require('path');

module.exports = {

    // ... Otros parámetros de configuración

    transpileDependencies: ["@didor/didor"],
    pluginOptions: {
        'style-resources-loader': {
            'preProcessor': 'scss',
            'patterns': [
                path.resolve(__dirname, 'ruta/a/variables.scss'),
            ]
        }
    }
}
```

### Utilizando `webpack`

Asegurate de tener `sass-loader` instalado y añade la siguiente configuración en tu archivo `webpack.config.js`:

```js[webpack.config.js]
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules(?!\/@didor\/didor)/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            import: [
                                path.resolve(__dirname, 'ruta/a/variables.scss')
                            ]
                        },
                    },
                ],
            }
        ],
    },
}
```

**Nota:** El código fuente de Didor también debe compilarse, por eso excluimos toda la carpeta `node_modules` menos la carpeta donde se encuentra Didor.
