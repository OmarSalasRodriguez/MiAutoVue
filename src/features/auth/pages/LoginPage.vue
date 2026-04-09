<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onLogin = () => {
  router.push('/organizations/1')
}
</script>

<template>
  <v-card class="rounded-xl" elevation="0" border>
    <v-card-text class="pa-8">
      <h2 class="text-h5 font-weight-semibold mb-1">Iniciar sesión</h2>
      <p class="text-body-1 text-medium-emphasis mb-6">Ingresa tus credenciales para continuar</p>

      <v-form @submit.prevent="onLogin">
        <v-text-field
          label="Correo electrónico"
          type="email"
          placeholder="tu@email.com"
          variant="outlined"
          density="comfortable"
          hide-details="auto"
          class="mb-4"
        />

        <v-text-field
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          variant="outlined"
          density="comfortable"
          hide-details="auto"
          class="mb-4"
        />

        <div class="d-flex justify-space-between align-center mb-6">
          <v-checkbox label="Recordarme" hide-details density="compact" color="primary" />
          <a href="#" class="text-primary text-body-2 text-decoration-none"
            >¿Olvidaste tu contraseña?</a
          >
        </div>

        <v-btn
          type="submit"
          color="primary"
          block
          size="large"
          class="text-none font-weight-medium"
        >
          Iniciar sesión
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>
