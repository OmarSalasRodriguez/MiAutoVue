# Vuetify

## Instalación

```bash
pnpm add vuetify @mdi/font
```

Paquetes instalados:

- `vuetify` v4.0.5
- `@mdi/font` v7.4.47 (iconos Material Design)

## Configuración

### 1. Crear plugin `src/plugins/vuetify.ts`

```ts
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#4F46E5',
          secondary: '#64748B',
          background: '#F8FAFC',
          surface: '#FFFFFF',
          error: '#EF4444',
          warning: '#F59E0B',
          success: '#22C55E',
        },
      },
    },
  },
})
```

### 2. Registrar en `main.ts`

```ts
import vuetify from './plugins/vuetify'

app.use(vuetify)
```

### 3. Agregar en `vite.config.ts` (opcional para árboles de componentes)

```ts
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [vue(), vuetify()],
})
```

## Personalización de Tema

Los colores del tema están alineados con la paleta de diseño en `docs/design.md`:

| Variable Vuetify | Color Hex | Uso                        |
| ---------------- | --------- | -------------------------- |
| primary          | `#4F46E5` | Botones primarios, enlaces |
| secondary        | `#64748B` | Texto secundario           |
| background       | `#F8FAFC` | Fondo de página            |
| surface          | `#FFFFFF` | Cards, contenedores        |
| error            | `#EF4444` | Errores                    |
| warning          | `#F59E0B` | Alertas                    |
| success          | `#22C55E` | Éxito                      |

## Componentes Principales

### v-text-field

```vue
<v-text-field label="Correo" type="email" placeholder="tu@email.com" />
```

### v-btn

```vue
<v-btn color="primary">Texto</v-btn>
<v-btn variant="outlined">Secundario</v-btn>
<v-btn variant="text">Ghost</v-btn>
<v-btn color="error">Peligro</v-btn>
```

### v-checkbox

```vue
<v-checkbox label="Recordarme" hide-details />
```

### v-card

```vue
<v-card>
  <v-card-title>Título</v-card-title>
  <v-card-text>Contenido</v-card-text>
</v-card>
```

### v-table

```vue
<v-table>
  <thead>
    <tr><th>Columna</th></tr>
  </thead>
  <tbody>
    <tr><td>Dato</td></tr>
  </tbody>
</v-table>
```

## Recursos

- [Documentación Vuetify](https://vuetifyjs.com/)
- [Iconos MDI](https://pictogrammers.com/library/mdi/)
