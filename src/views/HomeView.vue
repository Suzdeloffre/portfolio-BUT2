<template>
  <div class="view-container">
    <header class="header-retro">
      <h1>Mon Portfolio BUT 2</h1>
    </header>

    <div class="home-grid">
      <!-- Section Objectif -->
      <div class="retro-card full-width">
        <h2>Objectif du site</h2>
        <p>
          Présenter mon travail, mes réalisations et l'évolution de mes compétences en tant qu'étudiante en <strong>BUT Informatique</strong> (IUT de Belfort), lors de mon alternance à l'<strong>Établissement Français du Sang (EFS)</strong> de Besançon.
        </p>
      </div>

      <!-- Section Contexte EFS -->
      <div class="retro-card">
        <h2>Contexte : L'EFS</h2>
        <p>
          L'EFS est un établissement public à caractère administratif (EPA), placé sous la tutelle du ministère chargé de la santé, créé le 1er janvier 2000. Il est chargé de collecter, préparer, qualifier et distribuer les produits sanguins labiles (sang, plasma, plaquettes) en France.
        </p>
        <p>
          La région Bourgogne-Franche-Comté compte environ 550 collaborateurs répartis sur 8 sites. Le service informatique régional, que j'ai rejoint, est basé à Besançon. Depuis novembre 2025, les services informatiques de l'EFS sont unifiés au niveau national : le site de Besançon regroupe désormais plusieurs pôles (systèmes centralisés, décentralisés, etc.), favorisant une proximité essentielle pour le service support.
        </p>
        <p>
          J'ai intégré cette équipe afin de répondre à des besoins de support et de maintenance informatique, tant au niveau régional que national. Mon rôle s'est également étendu au développement d'outils métiers spécifiques, destinés à sécuriser des processus locaux non couverts par les solutions nationales.
        </p>
      </div>

      <!-- Section Contexte Sujets -->
      <div class="retro-card">
        <h2>Contexte des sujets d'alternance</h2>
        
        <div class="sujet-block">
          <h3>Sujet 1 : Sécurisation du processus de décantation de paillettes (Biothèque de Dijon — Projet "VerifEtiquette")</h3>
          <p><strong>L'existant et le problème :</strong> La biothèque de Dijon est un laboratoire qui conserve des échantillons biologiques appelés <strong>paillettes</strong> — de fines pailles scellées contenant des cellules ou du matériel génétique — dans des cuves d'azote liquide. Lorsqu'un laboratoire d'analyse en fait la demande, une technicienne doit extraire les bonnes paillettes et les préparer pour l'envoi : c'est le processus de <strong>décantation</strong>. Chaque paillette porte un code-barres unique qui doit correspondre exactement au formulaire de demande du laboratoire. Une erreur de correspondance — confondre deux paillettes, coller une étiquette sur le mauvais tube — peut rendre un échantillon inutilisable et entraîner sa perte définitive. Jusqu'alors, ces vérifications étaient réalisées manuellement avec un fichier Excel, ce qui laissait la porte ouverte aux erreurs humaines et aux oublis.</p>
          <p><strong>Le sujet et les enjeux :</strong> Concevoir une application pour automatiser et sécuriser chaque étape de ces vérifications. L'objectif est de rendre toute erreur immédiatement visible et bloquante, afin d'éviter qu'un échantillon mal identifié ne soit expédié. Le projet a été déployé avec succès en mars 2026. <em>(Le processus métier complet est détaillé dans la section Suivi de Projet, via le workflow de la Trace 2.)</em></p>
        </div>

        <div class="sujet-block">
          <h3>Sujet 2 : Module de gestion de stock et alertes (Application DEDALE)</h3>
          <p><strong>L'existant et le problème :</strong> Au sein du service informatique de Besançon, le suivi des petits matériels (câbles HDMI, souris, écrans de confidentialité, etc.) n'est pas automatisé. Les commandes n'étaient passées que lorsque le manque était constaté visuellement, causant des retards dans la mise à disposition du matériel aux utilisateurs.</p>
          <p><strong>Le sujet et les enjeux :</strong> Développer et intégrer un module de gestion de stock avec système d'alertes au sein de l'application régionale existante DEDALE (en PHP/Oracle). Cet outil doit permettre au gestionnaire de parc d'avoir une vision en temps réel des stocks, d'assurer une traçabilité complète des mouvements, et de proposer une interface accessible via navigateur web ou via un Raspberry Pi équipé d'une douchette code-barres pour les saisies rapides. Le projet est actuellement en cours de déploiement.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-retro {
  margin-bottom: 2rem;
}

.home-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.full-width {
  grid-column: 1 / -1;
}

@media (max-width: 768px) {
  .home-grid {
    grid-template-columns: 1fr;
  }
}

.sujet-block {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 2px dashed rgba(28, 27, 26, 0.2);
}
.sujet-block h3 {
  color: var(--accent-orange);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
</style>