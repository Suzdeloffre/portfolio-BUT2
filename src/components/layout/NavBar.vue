<template>
  <nav class="arc-nav">
    <div class="arc-container">
      <router-link to="/" class="nav-ball" title="Accueil">
        <span class="icon">🏠</span>
        <span class="label">Accueil</span>
      </router-link>
      <router-link to="/technique" class="nav-ball" title="Technique">
        <span class="icon">💻</span>
        <span class="label">Technique</span>
      </router-link>
      <router-link to="/suivi-projet" class="nav-ball" title="Suivi Projet">
        <span class="icon">📈</span>
        <span class="label">Projet</span>
      </router-link>
      <router-link to="/integration" class="nav-ball" title="Intégration">
        <span class="icon">🤝</span>
        <span class="label">Intégration</span>
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.arc-nav {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  pointer-events: none; /* Let clicks pass through empty space */
}

.arc-container {
  position: relative;
  width: 400px;
  height: 180px; 
  pointer-events: auto; /* Re-enable clicks for the nav area */
}

.nav-ball {
  position: absolute;
  width: 70px;
  height: 70px;
  border: 4px solid #1C1B1A;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #1C1B1A;
  box-shadow: 3px 3px 0px #1C1B1A;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.nav-ball:nth-child(1) { left: 10px; top: 10px; background-color: var(--accent-orange); }
.nav-ball:nth-child(2) { left: 100px; top: 80px; background-color: var(--accent-pink); }
.nav-ball:nth-child(3) { right: 100px; top: 80px; background-color: var(--accent-blue); }
.nav-ball:nth-child(4) { right: 10px; top: 10px; background-color: var(--accent-yellow); }

.icon {
  font-size: 1.8rem;
}

.label {
  position: absolute;
  bottom: -35px;
  font-size: 0.9rem;
  font-weight: 800;
  font-family: 'Outfit', sans-serif;
  background: #1C1B1A;
  color: #fff;
  padding: 4px 10px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.2s, transform 0.2s;
  transform: translateY(10px);
  white-space: nowrap;
}

.nav-ball:hover {
  transform: scale(1.2) translateY(-5px);
  box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.7), 4px 4px 0px #1C1B1A;
  z-index: 10;
}

.nav-ball:hover .label {
  opacity: 1;
  transform: translateY(0);
}

.router-link-active {
  transform: scale(1.15);
  border-width: 5px;
  border-color: #fff;
  box-shadow: 0 0 15px currentColor;
}
</style>