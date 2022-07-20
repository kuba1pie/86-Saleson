<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <RouterView />
    <nav text-xl mt-6>
      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>

      <a
        class="icon-btn mx-2" rel="noreferrer"
        href="https://github.com/kuba1pie/85-Cepiker/commit/5b231b29bc27796c1eee7399f3047258845c19d3" target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </a>
    </nav>
    <div class="py-8">
      <p>{{ t('footer.info') }}</p>
    </div>
  </main>
</template>
