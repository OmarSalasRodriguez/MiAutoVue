# Guía de Diseño - MiAutoClient

## Framework de Diseño

**Vuetify 4** - Sistema de componentes UI basado en Material Design.

---

## Filosofía

Diseño **minimalista**, **limpio** y **profesional**. Espacios amplios, jerarquía visual clara, y consistencia en todos los componentes.

---

## Paleta de Colores

### Tema Configurado (en `plugins/vuetify.ts`)

| Variable   | Hex       | Uso                                 |
| ---------- | --------- | ----------------------------------- |
| primary    | `#4F46E5` | Botones primarios, enlaces, acentos |
| secondary  | `#64748B` | Texto secundario                    |
| background | `#F8FAFC` | Fondo de página                     |
| surface    | `#FFFFFF` | Cards, contenedores                 |
| error      | `#EF4444` | Errores                             |
| warning    | `#F59E0B` | Alertas                             |
| success    | `#22C55E` | Mensajes de éxito                   |

### Clases de Color Vuetify

- **Fondo**: `bg-white`, `bg-grey-lighten-4`, `bg-grey-lighten-3`
- **Texto**: `text-primary`, `text-secondary`, `text-medium-emphasis`, `text-high-emphasis`
- **Bordes**: usar `border` con colores Vuetify

---

## Tipografía

Vuetify usa Roboto por defecto. Escala con clases:

| Clase                                | Uso           |
| ------------------------------------ | ------------- |
| `text-h1` a `text-h6`                | Títulos       |
| `text-body-1`, `text-body-2`         | Texto body    |
| `text-caption`, `text-overline`      | Texto pequeño |
| `text-subtitle-1`, `text-subtitle-2` | Subtítulos    |

Atributos adicionales:

- `font-weight-bold`, `font-weight-medium`, `font-weight-regular`
- `text-center`, `text-left`, `text-right`
- `text-uppercase`, `text-lowercase`, `text-capitalize`

---

## Espaciado

Sistema de 4px (0-16):

| Clase                     | Valor           | Uso           |
| ------------------------- | --------------- | ------------- |
| `pa-4`, `px-4`, `py-2`    | 16px, 16px, 8px | Padding       |
| `ma-2`, `mx-4`, `my-2`    | 8px, 16px, 8px  | Margin        |
| `gap-2`, `gap-4`, `gap-6` | 8px, 16px, 24px | Gap flex/grid |

Escala: `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12`

Ejemplos:

- `pa-6` = padding: 24px
- `ma-4` = margin: 16px
- `px-4` = padding-left: 16px, padding-right: 16px

---

## Sombras

| Clase           | Uso                       |
| --------------- | ------------------------- |
| `elevation="0"` | Sin sombra (cards planas) |
| `elevation="1"` | Sombra sutil              |
| `elevation="2"` | Sombra media              |
| `elevation="4"` | Cards elevadas            |

---

## Componentes

### Cards

```vue
<!-- Card básica -->
<v-card elevation="0" border>
  <v-card-text class="pa-6">
    Contenido
  </v-card-text>
</v-card>

<!-- Card con título -->
<v-card elevation="0" border>
  <v-card-title class="pa-6 pb-0">
    Título
  </v-card-title>
  <v-card-text class="pa-6">
    Contenido
  </v-card-text>
</v-card>

<!-- Card con header y acciones -->
<v-card elevation="0" border>
  <v-card-title class="d-flex justify-space-between align-center px-6 py-4">
    <span>Título</span>
    <v-btn icon="mdi-plus" />
  </v-card-title>
  <v-divider />
  <v-card-text class="pa-6">
    Contenido
  </v-card-text>
</v-card>
```

### Botones

```vue
<!-- Primario -->
<v-btn color="primary">Texto</v-btn>

<!-- Secundario (outlined) -->
<v-btn variant="outlined">Texto</v-btn>

<!-- Ghost -->
<v-btn variant="text">Texto</v-btn>

<!-- Peligro -->
<v-btn color="error">Texto</v-btn>

<!-- Tamaños -->
<v-btn size="x-small">xs</v-btn>
<v-btn size="small">sm</v-btn>
<v-btn size="default">default</v-btn>
<v-btn size="large">lg</v-btn>

<!-- Block (ancho completo) -->
<v-btn block>Block</v-btn>

<!-- Icono -->
<v-btn icon="mdi-pencil" />
<v-btn icon="mdi-plus" color="primary" />
```

### Inputs (v-text-field)

```vue
<v-text-field
  label="Correo electrónico"
  type="email"
  placeholder="tu@email.com"
  variant="outlined"
  density="comfortable"
  hide-details="auto"
/>

<!-- Con icono -->
<v-text-field prepend-inner-icon="mdi-email" label="Correo" />

<!-- Densidad -->
density="compact"
<!-- Más pequeño -->
density="comfortable"
<!-- Default -->
density="default"
<!-- Más grande -->
```

### Checkbox

```vue
<v-checkbox label="Recordarme" hide-details density="compact" color="primary" />
```

### Badges/Tags (v-chip)

```vue
<v-chip color="primary" size="small">Badge</v-chip>
<v-chip color="success" variant="outlined">Activo</v-chip>
<v-chip color="error" size="small" icon="mdi-close">Eliminado</v-chip>
```

### Tablas (v-table)

```vue
<v-table>
  <thead>
    <tr>
      <th>Columna</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item.name }}</td>
    </tr>
  </tbody>
</v-table>

<!-- Alternativa con v-data-table para funcionalidades completas -->
<v-data-table :headers="headers" :items="items" :items-per-page="10" />
```

### Navegación/Tabs (v-tabs)

```vue
<v-tabs>
  <v-tab>Tab 1</v-tab>
  <v-tab>Tab 2</v-tab>
  <v-tab>Tab 3</v-tab>
</v-tabs>
```

### Iconos

Usar Material Design Icons (MDI):

```vue
<v-icon icon="mdi-home" />
<v-icon icon="mdi-plus" color="primary" />
<v-icon icon="mdi-arrow-right" size="small" />
```

Iconos disponibles: https://pictogrammers.com/library/mdi/

---

## Layouts

### Página Principal (con sidebar)

```vue
<template>
  <v-app>
    <v-navigation-drawer permanent>
      <!-- Logo, navegación -->
    </v-navigation-drawer>

    <v-app-bar elevation="0" border>
      <v-app-bar-title>Título</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container class="pa-6">
        <!-- Contenido -->
      </v-container>
    </v-main>
  </v-app>
</template>
```

### Página Centrada (Autenticación)

```vue
<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <div class="d-flex align-center justify-center" style="min-height: 100vh;">
        <div style="width: 100%; max-width: 420px;" class="px-4">
          <slot />
        </div>
      </div>
    </v-main>
  </v-app>
</template>
```

### Grid de Contenido

```vue
<v-row>
  <v-col cols="12" sm="6" md="4" lg="3">
    <!-- Card -->
  </v-col>
</v-row>
```

---

## Display y Flex

```vue
<!-- Flex -->
<div class="d-flex align-center justify-center">
<div class="d-flex justify-space-between">
<div class="d-flex ga-4">

<!-- Display -->
<div class="d-block d-md-none">Solo mobile</div>
<div class="d-none d-md-flex">Desktop</div>

<!-- Visibility -->
<div class="hidden-sm-and-down">Oculto en mobile</div>
<div class="hidden-md-and-up">Oculto en desktop</div>
```

---

## Responsive

| Breakpoint | Ancho    |
| ---------- | -------- |
| `xs`       | < 600px  |
| `sm`       | ≥ 600px  |
| `md`       | ≥ 960px  |
| `lg`       | ≥ 1280px |
| `xl`       | ≥ 1920px |

Ejemplos:

- `cols="12" sm="8" md="6"` = 12 columnas mobile, 8 tablet, 6 desktop
- `d-none d-md-flex` = Oculto en mobile, visible desde tablet
- `hidden-lg-and-up` = Visible hasta desktop, oculto en xl

---

## Reglas Generales

1. **Fondo de página**: `bg-grey-lighten-4`
2. **Cards**: `v-card` con `elevation="0"` y `border`
3. **Radio de borde**: `rounded-lg`, `rounded-xl`
4. **Espaciado interno de contenido**: `pa-6` o `pa-8`
5. **Colores de texto**:
   - Títulos: `text-high-emphasis`
   - Body: `text-medium-emphasis`
   - Secundario: `text-disabled`
6. **Inputs**: Usar siempre `variant="outlined"` y `density="comfortable"`
7. **Botones primarios**: `color="primary"`
8. **Usar componentes Vuetify** en lugar de HTML raw

---

## Ejemplo de Página Completa

```vue
<template>
  <v-container class="pa-6" fluid>
    <!-- Header de página -->
    <div class="mb-6">
      <h1 class="text-h4 font-weight-bold mb-1">Título de Página</h1>
      <p class="text-body-1 text-medium-emphasis">Descripción de la página</p>
    </div>

    <!-- Grid de cards -->
    <v-row class="mb-6">
      <v-col cols="12" sm="6" md="4">
        <v-card elevation="0" border class="pa-6">
          <p class="text-body-2 text-medium-emphasis">Estadística</p>
          <p class="text-h4 font-weight-bold mt-2">1,234</p>
        </v-card>
      </v-col>
    </v-row>

    <!-- Card principal -->
    <v-card elevation="0" border>
      <v-card-title class="d-flex justify-space-between align-center px-6 py-4">
        <span class="text-h6">Lista de Items</span>
        <v-btn color="primary" prepend-icon="mdi-plus"> Agregar </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text class="pa-0">
        <!-- Tabla -->
      </v-card-text>
    </v-card>
  </v-container>
</template>
```
