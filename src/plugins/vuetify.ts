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
