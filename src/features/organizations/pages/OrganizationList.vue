<template>
  <div>
    <div class="mb-6">
      <v-breadcrumbs :items="breadcrumbs" class="px-0">
        <template v-slot:divider>
          <v-icon icon="mdi-chevron-right" size="small" />
        </template>
      </v-breadcrumbs>
      <h1 class="text-h4 font-weight-bold">Organizaciones</h1>
    </div>

    <v-card elevation="0" border class="pa-4 rounded-lg">
      <v-card-title
        class="d-flex flex-wrap gap-2 justify-space-between align-center px-0 py-2 ga-4"
      >
        <div class="d-flex flex-grow-1 align-center ga-2">
          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            placeholder="Buscar organización..."
            variant="outlined"
            density="compact"
            hide-details
            clearable
          />
        </div>
        <div class="d-flex ga-2">
          <v-btn
            variant="outlined"
            prepend-icon="mdi-filter-variant"
            @click="showFilters = !showFilters"
          >
            Filtros
          </v-btn>
          <v-btn color="primary" prepend-icon="mdi-plus"> Nueva organización </v-btn>
        </div>
      </v-card-title>

      <v-expand-transition>
        <div v-show="showFilters" class="px-4 pb-4">
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="filterStatus"
                :items="statusOptions"
                label="Estado"
                variant="outlined"
                density="compact"
                hide-details
                clearable
              />
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                v-model="filterType"
                :items="typeOptions"
                label="Tipo"
                variant="outlined"
                density="compact"
                hide-details
                clearable
              />
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>

      <v-divider />

      <v-data-table
        :headers="headers"
        :items="organizations"
        :search="search"
        :items-per-page="10"
        class="elevation-0"
      >
        <template v-slot:item.status="{ item }">
          <v-chip
            :color="item.status === 'active' ? 'success' : 'error'"
            size="small"
            variant="tonal"
          >
            {{ item.status === 'active' ? 'Activo' : 'Inactivo' }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon="mdi-pencil" size="small" variant="text" />
          <v-btn icon="mdi-delete" size="small" variant="text" color="error" />
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const search = ref('')
const showFilters = ref(false)
const filterStatus = ref(null)
const filterType = ref(null)

const breadcrumbs = [
  { title: 'Inicio', disabled: false, to: '/' },
  { title: 'Organizaciones', disabled: true },
]

const headers = [
  { title: 'Nombre', key: 'name' },
  { title: 'Tipo', key: 'type' },
  { title: 'Email', key: 'email' },
  { title: 'Teléfono', key: 'phone' },
  { title: 'Estado', key: 'status' },
  { title: 'Acciones', key: 'actions', sortable: false, align: 'end' as const },
]

const statusOptions = ['Activo', 'Inactivo']
const typeOptions = ['Corporativo', 'PYME', 'Individual']

const organizations = [
  {
    name: 'Acme Corporation',
    type: 'Corporativo',
    email: 'contacto@acme.com',
    phone: '+52 55 1234 5678',
    status: 'active',
  },
  {
    name: 'Tech Solutions',
    type: 'PYME',
    email: 'info@techsolutions.com',
    phone: '+52 55 2345 6789',
    status: 'active',
  },
  {
    name: 'Global Services',
    type: 'Corporativo',
    email: 'hello@globalservices.com',
    phone: '+52 33 3456 7890',
    status: 'inactive',
  },
  {
    name: 'Digital Hub',
    type: 'PYME',
    email: 'contact@digitalhub.com',
    phone: '+52 81 4567 8901',
    status: 'active',
  },
]
</script>
