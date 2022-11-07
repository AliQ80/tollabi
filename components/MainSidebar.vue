<script setup lang="ts"></script>

<template>
  <div>
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <!-- Page content here -->
        <slot />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul
          class="menu bg-base-200 text-base-content h-auto w-auto overflow-y-auto p-4">
          <!-- Sidebar content here -->
          <li><NuxtLink to="/dashboard">📊 Dashboard</NuxtLink></li>
          <li><NuxtLink to="/classes">🚪 Classes</NuxtLink></li>
          <li><NuxtLink to="/students">👨‍🎓 Students</NuxtLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
