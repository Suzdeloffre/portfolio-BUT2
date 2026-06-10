<template>
  <div class="page">
    <ArtDecoBg />

    <div class="content">
      <!-- En-tête page -->
      <header class="page-header"
        v-motion :initial="{ opacity:0, y:-20 }"
        :enter="{ opacity:1, y:0, transition:{ duration:700 } }">
        <p class="page-eyebrow">✦ {{ eyebrow }} ✦</p>
        <h1 class="page-title">{{ titre }}</h1>
        <p class="page-intro">{{ intro }}</p>
        <div class="header-divider">
          <svg viewBox="0 0 240 16" xmlns="http://www.w3.org/2000/svg">
            <!-- Frise art déco : chevrons + losange central -->
            <path d="M10,8 L18,3 L26,8 L34,3 L42,8" fill="none" stroke="#c9953a" stroke-width="0.9"/>
            <line x1="42" y1="8" x2="90" y2="8" stroke="#c9953a" stroke-width="0.7"/>
            <polygon points="120,2 128,8 120,14 112,8" fill="none" stroke="#c9953a" stroke-width="1.1"/>
            <circle cx="120" cy="8" r="2.5" fill="#c9953a" fill-opacity="0.6"/>
            <line x1="150" y1="8" x2="198" y2="8" stroke="#c9953a" stroke-width="0.7"/>
            <path d="M198,8 L206,3 L214,8 L222,3 L230,8" fill="none" stroke="#c9953a" stroke-width="0.9"/>
          </svg>
        </div>
      </header>

      <!-- Onglets sous-pages -->
      <div class="subpage-tabs"
        v-motion :initial="{ opacity:0 }"
        :enter="{ opacity:1, transition:{ duration:600, delay:200 } }">
        <button
          v-for="(sp, i) in sousPagesLabels"
          :key="i"
          class="tab-btn"
          :class="{ active: ongletActif === i }"
          @click="ongletActif = i"
        >
          <span class="tab-num">{{ String(i+1).padStart(2,'0') }}</span>
          <span class="tab-label">{{ sp }}</span>
        </button>
      </div>

      <!-- Zone sous-page -->
      <div class="subpage-zone">
        <Transition name="tab-fade" mode="out-in">
          <div :key="ongletActif" class="subpage-content">
            <slot :name="`subpage-${ongletActif}`" />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArtDecoBg from './ArtDecoBg.vue'

defineProps({
  eyebrow:         { type: String, default: 'Portfolio' },
  titre:           { type: String, required: true },
  intro:           { type: String, default: '' },
  sousPagesLabels: { type: Array,  required: true },
})

const ongletActif = ref(0)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600&display=swap');

.page {
  min-height: 100vh;
  background-color: #fdf6e3;
  overflow-x: hidden;
  position: relative;
}

.content {
  position: relative;
  z-index: 10;
  max-width: 1100px;
  margin: 0 auto;
  padding: 90px 32px 80px;
}

/* ── Header ── */
.page-header { text-align: center; margin-bottom: 40px; }

.page-eyebrow {
  font-family: 'Cinzel', serif;
  font-size: 0.68rem;
  letter-spacing: 0.32em;
  color: #c9953a;
  margin: 0 0 10px;
  text-transform: uppercase;
  text-shadow: 0 1px 8px rgba(253,246,227,0.9);
}

.page-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  font-weight: 600;
  color: rgba(139, 26, 46, 0.82);
  margin: 0 0 14px;
  letter-spacing: 0.08em;
  text-shadow: 0 1px 14px rgba(253,246,227,0.7);
}

.page-intro {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(0.95rem, 1.8vw, 1.15rem);
  font-style: italic;
  color: rgba(90, 58, 40, 0.8);
  line-height: 1.7;
  max-width: 680px;
  margin: 0 auto 18px;
  font-weight: 300;
}

.header-divider { display: flex; justify-content: center; margin-top: 6px; }
.header-divider svg { width: 240px; height: 16px; }

/* ── Onglets sous-pages ── */
.subpage-tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 36px;
  border-bottom: 1px solid rgba(201,149,58,0.2);
  padding-bottom: 0;
}

.tab-btn {
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 10px 20px 12px;
  cursor: pointer;
  display: flex;
  align-items: baseline;
  gap: 10px;
  transition: border-color 0.25s, background 0.25s;
  margin-bottom: -1px;
  border-radius: 3px 3px 0 0;
}

.tab-btn:hover {
  background: rgba(201,149,58,0.07);
}

.tab-btn.active {
  border-bottom-color: #c9953a;
  background: rgba(253,246,227,0.4);
}

.tab-num {
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  color: #c9953a;
}

.tab-label {
  font-family: 'Cinzel', serif;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  color: #8b1a2e;
  transition: color 0.2s;
}

.tab-btn.active .tab-label { color: #c9953a; }
.tab-btn:hover .tab-label  { color: #c9953a; }

/* ── Contenu sous-page ── */
.subpage-zone {
  background: rgba(253,246,227,0.22);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(201,149,58,0.28);
  border-radius: 3px;
  padding: 40px 44px;
  min-height: 460px;
  box-shadow: 0 4px 24px rgba(139,26,46,0.06);
}

/* ── Transition onglets ── */
.tab-fade-enter-active, .tab-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.tab-fade-enter-from { opacity: 0; transform: translateY(10px); }
.tab-fade-leave-to   { opacity: 0; transform: translateY(-6px); }

@media (max-width: 700px) {
  .content { padding: 80px 16px 60px; }
  .subpage-zone { padding: 24px 20px; }
  .tab-btn { padding: 8px 12px 10px; }
  .tab-label { font-size: 0.68rem; }
}
</style>