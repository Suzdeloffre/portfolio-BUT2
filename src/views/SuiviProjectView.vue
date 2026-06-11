<template>
  <div class="view-container">
    <header class="header-retro">
      <h1>Suivi de Projet</h1>
      <p class="subtitle retro-font">Pilotage, Planification et Documentation</p>
    </header>

    <!-- Navigation Secondaire -->
    <nav class="sub-nav">
      <button :class="['tab-btn', { active: activeTab === 'intro' }]" @click="activeTab = 'intro'">Intro</button>
      <button :class="['tab-btn', { active: activeTab === 'trace6' }]" @click="activeTab = 'trace6'">Trace 6</button>
      <button :class="['tab-btn', { active: activeTab === 'trace7' }]" @click="activeTab = 'trace7'">Trace 7</button>
      <button :class="['tab-btn', { active: activeTab === 'trace8' }]" @click="activeTab = 'trace8'">Trace 8</button>
      <button :class="['tab-btn', { active: activeTab === 'bilan' }]" @click="activeTab = 'bilan'">Bilan</button>
    </nav>

    <!-- Contenu des onglets -->
    <div class="tab-content">
      
      <!-- Onglet Intro -->
      <div v-if="activeTab === 'intro'">
        <div class="retro-card intro-card">
          <p>Cette page illustre ma capacité à analyser des besoins, planifier des tâches et assurer le suivi de projets informatiques en communiquant efficacement avec des acteurs non-techniques.</p>
        </div>
        <div class="retro-card">
          <h2>Pilotage et documentation</h2>
          <p><strong>Analyse et vulgarisation des besoins :</strong> Les cours de Communication et de Gestion de Projet du BUT m'ont aidée à structurer mes échanges avec les utilisatrices de la biothèque. J'ai réalisé des workflows et rédigé des cahiers des charges accessibles à des interlocuteurs sans formation informatique.</p>
          <p><strong>Planification :</strong> Création de diagrammes de Gantt permettant de partager un état d'avancement visuel lors des réunions de pilotage, en intégrant les contraintes d'alternance.</p>
          <p><strong>Documentation et tests :</strong> Rédaction de documentations fonctionnelles et réalisation de rapports de tests, mis à jour régulièrement et partagés avec l'équipe via un répertoire commun.</p>
        </div>
        <button class="next-tab-btn" @click="activeTab = 'trace6'">Continuer vers Trace 6 ➔</button>
      </div>

      <!-- Onglet Trace 6 -->
      <div v-if="activeTab === 'trace6'" class="retro-card trace-card">
        <h3>Trace 6 : Tests et assurance qualité</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-dev">Plan de test</span>
          <span class="savoir-faire-badge badge-opti">Environnement matériel</span>
        </div>
        
        <div class="trace-visual flex-images">
          <figure>
            <img src="/src/assets/trace/Tests_recetteVerifEtiquette.png" alt="Rapport de tests — VerifEtiquette" />
            <figcaption>Trace 6.1 — Tests de recette VerifEtiquette avant déploiement</figcaption>
          </figure>
          <figure>
            <img src="/src/assets/trace/rapportTestLivrable2Dedale.png" alt="Rapport de tests — DEDALE livrable 2" />
            <figcaption>Trace 6.2 — Rapport de tests du livrable 2 de DEDALE</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-pink">Définir et exécuter un plan de tests</span>, <span class="hl-purple">identifier les comportements inattendus liés à l'environnement matériel</span>.</p>
        <p><strong>Description :</strong> La trace 6.1 présente les tests de recette réalisés pour VerifEtiquette avant déploiement. Cette démarche a permis d'<span class="hl-purple">identifier un comportement inattendu lié à l'environnement matériel</span> : <span class="hl-purple">la douchette de l'utilisateur envoyait une tabulation au lieu d'une validation en fin de scan, nécessitant un ajustement du programme.</span></p>
        <p>La trace 6.2 présente le rapport de tests du livrable 2 de DEDALE. Ce rapport est rédigé dès le début du développement d'un livrable, avant même de commencer à coder, afin de me servir de feuille de route tout au long du développement et de savoir où j'en suis à tout moment. <span class="hl-pink">Il est partagé avec l'équipe via un répertoire commun, assurant une visibilité sur l'état d'avancement entre les périodes en entreprise et les semaines école.</span> Les codes couleurs et commentaires permettent à un collègue de reprendre le contexte rapidement.</p>
        <button class="next-tab-btn" @click="activeTab = 'trace7'">Continuer vers Trace 7 ➔</button>
      </div>

      <!-- Onglet Trace 7 -->
      <div v-if="activeTab === 'trace7'" class="retro-card trace-card">
        <h3>Trace 7 : Planification et suivi temporel (DEDALE)</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-plan">Planifier</span>
          <span class="savoir-faire-badge badge-plan">Estimer la charge</span>
        </div>
        
        <div class="trace-visual">
          <figure>
            <img src="/src/assets/trace/ganntDedaleprevi.png" alt="Gantt DEDALE" />
            <figcaption>Trace 7.1 — Diagramme de Gantt prévisionnel du projet DEDALE</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-blue">Planifier un projet en livrables, anticiper les dépendances, estimer la charge de travail dans un contexte d'alternance.</span></p>
        <p><strong>Description :</strong> Ce diagramme de Gantt structure le projet en six livrables. Le premier a été dédié à la prise en main de l'existant et de la base de données, avec affichage des données via des jeux d'essais — choix délibéré pour ne pas développer sur une base mal comprise. Le deuxième livrable constitue le cœur fonctionnel (gestion de stock). <span class="hl-blue">La planification intègre les alternances semaines école/semaines entreprise pour rester réaliste.</span> Des retards ont été accumulés en raison d'anomalies imprévues et de shift de support informatique ; ils ont conduit à réévaluer les priorités et à reporter certaines fonctionnalités aux livrables suivants.</p>
        <button class="next-tab-btn" @click="activeTab = 'trace8'">Continuer vers Trace 8 ➔</button>
      </div>

      <!-- Onglet Trace 8 -->
      <div v-if="activeTab === 'trace8'" class="retro-card trace-card">
        <h3>Trace 8 : Évolution du cahier des charges (DEDALE)</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-plan">Documentation vivante</span>
          <span class="savoir-faire-badge badge-team">Gérer les évolutions</span>
        </div>
        
        <div class="trace-visual">
          <figure>
            <img src="/src/assets/trace/cdcdedaleCritereRecette.png" alt="Critères de recette — cahier des charges DEDALE" />
            <figcaption>Trace 8.1 — Cahier des charges DEDALE : critères de recette et évolutions (encadré rouge)</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-blue">Maintenir une documentation projet vivante, gérer les évolutions du besoin en cours de développement.</span></p>
        <p><strong>Description :</strong> Suite au comité de pilotage du premier livrable, <span class="hl-blue">le cahier des charges a été mis à jour pour intégrer les retours de l'équipe, matérialisés par des ajouts surlignés en jaune.</span> <span class="hl-blue">Un historique des versions est maintenu pour distinguer les besoins initiaux des évolutions demandées en cours de projet.</span> Le document comprend 12 parties et intègre notamment les critères de recette, permettant de maintenir une documentation projet vivante et définir objectivement les conditions de validation de chaque livrable.</p>
        <button class="next-tab-btn" @click="activeTab = 'bilan'">Continuer vers Bilan ➔</button>
      </div>

      <!-- Onglet Bilan -->
      <div v-if="activeTab === 'bilan'" class="retro-card bilan-card">
        <h2>Bilan du niveau d'expertise en Gestion de Projet</h2>

        <div class="competence-block">
          <h3>Comprendre les besoins métiers, Organiser et piloter</h3>
          <p><strong>Niveau atteint :</strong> <span class="savoir-faire-badge badge-plan">Très Bon</span></p>
          <div class="badge-plan" style="padding: 1rem; border-radius: 8px;">
            <p><strong>Justification :</strong></p>
            <p>J'ai acquis la capacité à produire et maintenir des documents de suivi utilisables par l'ensemble du service : workflows, diagramme de Gantt, cahier des charges évolutif, rapports de tests. Ces documents ont joué un rôle concret dans la coordination avec les utilisatrices et dans la continuité du projet entre les périodes en entreprise et les semaines école.</p>
            <p>Un axe de progression identifié concerne la qualité de mes notes de travail en cours de développement. Lorsque je suis en phase active de développement, je prends des notes rapidement, au fil de la pensée, sans toujours les relire avant de passer à l'étape suivante. Il m'arrive de ne plus comprendre mes propres annotations quelques jours plus tard. Ces notes restent un support personnel avant leur mise en forme finale — mais cela m'indique que la rigueur de documentation doit s'appliquer dès la prise de notes, pas seulement à la finalisation.</p>
          </div>
        </div>

      </div>

    </div>

    <div class="bottom-nav">
      <router-link to="/integration" class="btn-retro">Aller à Intégration →</router-link>
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
  background-color: var(--accent-orange);
  display: inline-block;
  padding: 0.5rem 2rem;
  border: var(--border-thick);
  border-radius: 50px;
  transform: rotate(3deg);
}

.trace-card {
  border-color: var(--accent-pink);
  box-shadow: 6px 6px 0px var(--accent-pink);
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

.flex-images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  justify-content: flex-end;
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