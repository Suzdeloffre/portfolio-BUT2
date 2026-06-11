<template>
  <div id="app">
    <div class="top-signature">Suzanne Deloffre | S4-2026</div>
    <NavBar />
    
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>

    <!-- Scroll to top button -->
    <button class="scroll-top-btn" @click="scrollToTop" title="Remonter">
      ↑
    </button>
  </div>
</template>

<script setup>
import NavBar from './components/layout/NavBar.vue'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style>
.app-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.top-signature {
  position: absolute;
  top: 80px;
  left: 2rem;
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--text-color);
  background-color: var(--accent-pink);
  padding: 0.5rem 1rem;
  border: var(--border-thick);
  box-shadow: 4px 4px 0px var(--text-color);
  transform: rotate(-2deg);
  z-index: 9999;
}

/* Float button */
.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--accent-yellow);
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: bold;
  border: var(--border-thick);
  box-shadow: 3px 3px 0px #1C1B1A;
  cursor: pointer;
  z-index: 999;
  transition: all 0.2s;
}

.scroll-top-btn:hover {
  background-color: var(--accent-orange);
  color: white;
  transform: translateY(-3px);
  box-shadow: 5px 5px 0px #1C1B1A;
}

.scroll-top-btn:active {
  transform: translateY(1px);
  box-shadow: 2px 2px 0px #1C1B1A;
}
</style>