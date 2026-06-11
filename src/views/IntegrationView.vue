<template>
  <div class="view-container">
    <header class="header-retro">
      <h1>Intégration en Entreprise</h1>
      <p class="subtitle retro-font">Adaptabilité, Autonomie et Équipe</p>
    </header>

    <!-- Navigation Secondaire -->
    <nav class="sub-nav">
      <button :class="['tab-btn', { active: activeTab === 'intro' }]" @click="activeTab = 'intro'">Intro</button>
      <button :class="['tab-btn', { active: activeTab === 'trace9' }]" @click="activeTab = 'trace9'">Trace 9</button>
      <button :class="['tab-btn', { active: activeTab === 'trace10' }]" @click="activeTab = 'trace10'">Trace 10</button>
      <button :class="['tab-btn', { active: activeTab === 'bilan' }]" @click="activeTab = 'bilan'">Bilan</button>
    </nav>

    <!-- Contenu des onglets -->
    <div class="tab-content">
      
      <!-- Onglet Intro -->
      <div v-if="activeTab === 'intro'">
        <div class="retro-card intro-card">
          <p>L'intégration au sein d'une équipe technique en pleine transition nationale a requis adaptabilité, autonomie et communication proactive avec des profils variés.</p>
        </div>
        <div class="retro-card">
          <h2>Environnement de travail et communication</h2>
          <p><strong>Contexte :</strong> Je travaille dans un open space avec les collègues du support informatique. Cette proximité favorise les échanges informels et permet de capter des informations de contexte en direct — incidents en cours, priorités du service, retours d'expérience des techniciens.</p>
          <p><strong>Outils de communication :</strong> Utilisation quotidienne de Microsoft Teams (canaux régionaux et nationaux d'entraide) et des mails pour le suivi des actualités et la coordination technique.</p>
        </div>
        <div class="retro-card">
          <h2>Collaboration et accompagnement</h2>
          <p>Sur le projet DEDALE, j'ai travaillé régulièrement avec David Bensoussan. Nos domaines techniques diffèrent, mais nos échanges ont abouti à des solutions concrètes. Je soumets régulièrement mon code à sa relecture pour m'assurer de sa maintenabilité dans le contexte de l'application existante.</p>
          <p>Des points réguliers avec mon responsable Laurent Sanseigne structurent le suivi de mon activité, en complément d'une communication informelle au quotidien.</p>
        </div>
        <button class="next-tab-btn" @click="activeTab = 'trace9'">Continuer vers Trace 9 ➔</button>
      </div>

      <!-- Onglet Trace 9 -->
      <div v-if="activeTab === 'trace9'" class="retro-card trace-card">
        <h3>Trace 9 : Utilisation des canaux collaboratifs nationaux</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-team">Outils collaboratifs</span>
          <span class="savoir-faire-badge badge-team">Identifier les interlocuteurs</span>
        </div>
        
        <div class="trace-visual">
          <figure>
            <img src="/src/assets/trace/canauxTeams.png" alt="Canaux Teams" />
            <figcaption>Trace 9.1 — Canaux Teams : régionaux (encadré rouge 1) et nationaux par service (encadré rouge 2)</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-purple">Identifier les bons interlocuteurs dans une organisation étendue</span>, <span class="hl-pink">utiliser les outils collaboratifs de manière proactive pour débloquer des situations techniques</span>.</p>
        <p><strong>Description :</strong> La trace 9.1 montre les canaux Teams de l'EFS. Le premier encadré rouge montre les canaux régionaux, et le deuxième encadré montre les différents canaux nationaux avec les services que l'on peut contacter en cas de problème. En cas de blocage technique, <span class="hl-purple">j'utilise ces canaux pour solliciter directement les experts compétents au niveau national, plutôt qu'attendre une escalade hiérarchique.</span> Cette organisation s'appuie également sur une réunion d'entraide AMI quotidienne, active toute la journée de shift national : elle permet de poser des questions en direct, de tagger un service ou une personne sur un ticket, et d'identifier les interlocuteurs pour obtenir une réponse rapide. <span class="hl-pink">Cette démarche m'a permis de résoudre des situations que mon périmètre régional seul n'aurait pas pu traiter.</span></p>
        <button class="next-tab-btn" @click="activeTab = 'trace10'">Continuer vers Trace 10 ➤</button>
      </div>

      <!-- Onglet Trace 10 -->
      <div v-if="activeTab === 'trace10'" class="retro-card trace-card">
        <h3>Trace 10 : Suivi managérial régulier</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-team">Rendre compte</span>
          <span class="savoir-faire-badge badge-team">Relation hiérarchique</span>
        </div>
        
        <div class="trace-visual">
          <figure>
            <img src="/src/assets/trace/rdvLaurentoutlook.png" alt="RDV Laurent Outlook" />
            <figcaption>Trace 10.1 — Calendrier Outlook : points réguliers avec le responsable</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-pink">Rendre compte de son activité</span>, <span class="hl-blue">s'inscrire dans une relation hiérarchique structurée</span>.</p>
        <p><strong>Description :</strong> La trace 10.1 montre cet extrait de calendrier Outlook illustrant l'organisation de points réguliers avec mon responsable. <span class="hl-pink">Ces réunions sont l'occasion de faire le bilan des avancées, de partager les difficultés rencontrées</span> et d'aligner les priorités avec les objectifs du service pour rendre compte efficacement. <span class="hl-blue">Elles complètent les échanges informels du quotidien et assurent un suivi formalisé de mon activité</span>, témoignant de mon adaptation à la relation hiérarchique.</p>
        <button class="next-tab-btn" @click="activeTab = 'bilan'">Continuer vers Bilan ➤</button>
      </div>

      <!-- Onglet Bilan -->
      <div v-if="activeTab === 'bilan'" class="retro-card bilan-card">
        <h2>Bilan du niveau d'expertise en Intégration</h2>

        <div class="competence-block">
          <h3>S'intégrer dans un environnement professionnel</h3>
          <p><strong>Niveau atteint :</strong> <span class="savoir-faire-badge badge-team">Bon</span></p>
          <div class="badge-team" style="padding: 1rem; border-radius: 8px;">
            <p><strong>Justification :</strong></p>
            <p>Mon intégration s'est construite progressivement dans un contexte de forte charge pour l'équipe, mobilisée par la migration Windows 11 et la restructuration nationale du service informatique. J'ai su m'adapter à cet environnement en trouvant ma place à la fois sur le plan professionnel et humain : participation aux échanges du quotidien, disponibilité pour les collègues, et implication dans la vie du service au-delà de mes seules missions de développement.</p>
            <p>Sur le plan technique, j'ai gagné en autonomie en apprenant à utiliser les ressources disponibles (XWiki, canaux Teams, réunions AMI) pour avancer sans dépendre systématiquement de mes collègues directs. Un axe de progression reste la gestion des situations où mes priorités de développement entrent en tension avec des sollicitations de support imprévues — un équilibre que j'apprends à trouver au fil de l'alternance.</p>
          </div>
        </div>

      </div>

    </div>

    <div class="bottom-nav">
      <!-- Last page, back to home -->
      <router-link to="/" class="btn-retro">← Retour à l'Accueil</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('intro')
</script>

<style scoped>
.header-retro {
  margin-bottom: 2rem;
}
.subtitle {
  font-size: 1.5rem;
  color: var(--text-color);
  background-color: var(--accent-blue);
  display: inline-block;
  padding: 0.5rem 2rem;
  border: var(--border-thick);
  border-radius: 50px;
  transform: rotate(-3deg);
}

.trace-card {
  border-color: var(--accent-orange);
  box-shadow: 6px 6px 0px var(--accent-orange);
}

.bilan-card {
  background-color: var(--accent-yellow);
  color: #1C1B1A;
}

.competence-block {
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border: 2px dashed #1C1B1A;
  border-radius: 8px;
}

.competence-block h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.trace-visual {
  margin-bottom: 1.5rem;
  text-align: center;
}

.trace-visual img {
  max-width: 100%;
  margin: 0 auto;
}

.next-tab-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--accent-yellow);
  color: var(--text-color);
  font-weight: bold;
  border: var(--border-thick);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 3px 3px 0 var(--text-color);
  transition: transform 0.1s, box-shadow 0.1s;
}
.next-tab-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0 var(--text-color);
}

.bottom-nav {
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
}

figure {
  margin: 0;
  width: 100%;
}

figcaption {
  display: inline-block;
  margin-top: 0.4rem;
  padding: 0.25rem 0.75rem;
  background-color: var(--text-color);
  color: var(--bg-color);
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 4px;
  letter-spacing: 0.05em;
}
</style>