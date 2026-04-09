<template>
  <v-app>
    <v-navigation-drawer permanent rail-width="80">
      <v-list-item prepend-icon="mdi-domain" title="MiAutoClient" nav class="mb-4" />
      <v-divider class="mb-2" />
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          value="dashboard"
          to="/"
          color="primary"
        />
        <v-list-item
          prepend-icon="mdi-domain"
          title="Organizaciones"
          value="organizations"
          to="/organizations"
          color="primary"
        />
        <v-list-item
          prepend-icon="mdi-account-group"
          title="Clientes"
          value="clients"
          to="/clients"
          color="primary"
        />
        <v-list-item
          prepend-icon="mdi-cog"
          title="Configuración"
          value="settings"
          to="/settings"
          color="primary"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevation="0" border>
      <template v-slot:prepend>
        <v-app-bar-title class="text-h6 font-weight-medium"> MiAutoClient </v-app-bar-title>
      </template>

      <v-spacer />

      <v-btn icon variant="text">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" variant="text">
            <v-avatar color="primary" size="36">
              <span class="text-body-2 font-weight-medium">OS</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-list density="compact" min-width="200">
          <v-list-item prepend-icon="mdi-account" title="Perfil" />
          <v-list-item prepend-icon="mdi-cog" title="Configuración" />
          <v-divider />
          <v-list-item prepend-icon="mdi-logout" title="Cerrar sesión" />
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="bg-grey-lighten-4">
      <v-container class="pa-6" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
