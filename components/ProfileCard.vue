<script setup lang="ts"></script>

<template>
  <div>
    <div
      class="flex max-w-xs flex-col justify-center rounded-xl border-teal-600 p-6 shadow-md dark:bg-gray-900 dark:text-gray-100 sm:px-12">
      <slot name="avatar">
        <img
          src="https://source.unsplash.com/150x150/?portrait?3"
          alt=""
          class="mx-auto aspect-square h-32 w-32 rounded-full dark:bg-gray-500" />
      </slot>

      <div class="space-y-4 divide-y divide-gray-700 text-center">
        <div class="my-2 space-y-1">
          <slot name="username">
            <h2 class="text-xl font-semibold sm:text-2xl">Update your name</h2>
          </slot>
          <slot name="name">
            <h2 class="text-xl font-semibold sm:text-2xl">Update your name</h2>
          </slot>

          <slot name="description">
            <p class="px-5 text-xs dark:text-gray-400 sm:text-base">
              Update description
            </p>
          </slot>
        </div>
        <div class="align-center flex justify-center space-x-4 pt-2">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="GitHub"
            class="rounded-md p-2 dark:text-gray-100 hover:dark:text-violet-400">
            <NuxtIcon name="SocialGithub" />
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Twitter"
            class="rounded-md p-2 dark:text-gray-100 hover:dark:text-violet-400">
            <NuxtIcon name="SocialTwitter" />
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Email"
            class="rounded-md p-2 dark:text-gray-100 hover:dark:text-violet-400">
            <NuxtIcon name="SocialEmail" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
