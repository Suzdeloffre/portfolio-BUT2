<template>
  <div class="view-container">
    <header class="header-retro">
      <h1>Compétences Techniques</h1>
      <p class="subtitle retro-font">Développement, IHM et Base de données</p>
    </header>

    <!-- Navigation Secondaire -->
    <nav class="sub-nav">
      <button :class="['tab-btn', { active: activeTab === 'intro' }]" @click="activeTab = 'intro'">Intro & Projets</button>
      <button :class="['tab-btn', { active: activeTab === 'trace1' }]" @click="activeTab = 'trace1'">Trace 1</button>
      <button :class="['tab-btn', { active: activeTab === 'trace2' }]" @click="activeTab = 'trace2'">Trace 2</button>
      <button :class="['tab-btn', { active: activeTab === 'trace3' }]" @click="activeTab = 'trace3'">Trace 3</button>
      <button :class="['tab-btn', { active: activeTab === 'trace4' }]" @click="activeTab = 'trace4'">Trace 4</button>
      <button :class="['tab-btn', { active: activeTab === 'trace5' }]" @click="activeTab = 'trace5'">Trace 5</button>
      <button :class="['tab-btn', { active: activeTab === 'bilan' }]" @click="activeTab = 'bilan'">Bilan</button>
    </nav>

    <!-- Contenu des onglets -->
    <div class="tab-content">
      
      <!-- Onglet Intro -->
      <div v-if="activeTab === 'intro'">
        <div class="retro-card intro-card">
          <p>Cette section détaille les compétences techniques mises en œuvre lors du développement des deux applications. J'y démontre ma capacité à concevoir une architecture logicielle maintenable, à gérer des entrées matérielles contraintes, et à intégrer de nouvelles fonctionnalités dans une base de données et un code existant.</p>
        </div>
        <div class="retro-card">
          <h2>Projet 1 : Application VerifEtiquette (PowerShell / .NET WinForms)</h2>
          <p><strong>Développement d'interfaces et IHM :</strong> Création d'un programme en PowerShell intégrant une interface graphique avec le framework .NET WinForms. J'ai anticipé les erreurs de saisie : marqueurs rouges dynamiques pour les erreurs de format, pop-ups bloquantes pour les erreurs de validation (visa non reconnu, imprimante indisponible), messages de confirmation à chaque étape du processus.</p>
          <p><strong>Gestion des paramètres et impression :</strong> Génération et impression d'étiquettes au format ZPL. Séparation entre les variables internes du script et les paramètres modifiables externalisés dans un fichier <code>.ini</code> (nom de l'imprimante, chemin des traces, liste des visas autorisés).</p>
        </div>
        <div class="retro-card">
          <h2>Projet 2 : Module de gestion de stock DEDALE (PHP / Oracle / JavaScript)</h2>
          <p><strong>Développement web et asynchronisme :</strong> Intégration dans une application existante des années 2000, en PHP sans framework. Pour dynamiser l'interface sans rechargement de page, j'ai utilisé AJAX (Asynchronous JavaScript and XML), technique permettant au navigateur d'envoyer et de recevoir des données du serveur en arrière-plan.</p>
          <p><strong>Logique algorithmique et structure de données :</strong> Suite à une réflexion sur la cohérence entre les champs de saisie (code-barres et quantité), j'ai conçu un buffer de scan utilisant la clé produit comme identifiant unique. Cette réflexion m'a amené à découvrir que les tableaux PHP sont nativement des maps associatives (clé → valeur), rendant l'implémentation côté serveur directement compatible. Mon collègue David Bensoussan a suggéré l'utilisation d'un tableau ; j'ai identifié la structure Map comme solution au problème de cohérence inter-champs.</p>
          <p><strong>Base de données :</strong> Intégration de nouvelles tables dans une base Oracle existante, en respectant les conventions en place (nommage, types d'attributs, gestion des historiques). Accès aux données via les fonctions natives <code>db.fetch</code> et <code>db.execute</code> en PHP.</p>
        </div>
        <button class="next-tab-btn" @click="activeTab = 'trace1'">Continuer vers Trace 1 ➔</button>
      </div>

      <!-- Onglet Trace 1 -->
      <div v-if="activeTab === 'trace1'" class="retro-card trace-card">
        <h3>Trace 1 : Modélisation du processus métier (VerifEtiquette)</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-needs">Vulgariser un besoin</span>
          <span class="savoir-faire-badge badge-dev">Logique de programmation</span>
        </div>
        
        <div class="trace-visual">
          <figure>
            <img src="/src/assets/trace/workFlowverifEtiquette.png" alt="Workflow VerifEtiquette" />
            <figcaption>Trace 1.1 — Workflow du processus de décantation de paillettes</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-yellow">Traduire un processus métier en logique de programmation</span>, <span class="hl-blue">valider la compréhension du besoin avec un interlocuteur non-informaticien</span>.</p>
        <p><strong>Description :</strong> Ce workflow (trace 1) a été réalisé dès la première réunion avec la biothèque, pour <span class="hl-yellow">vulgariser le besoin</span> et <span class="hl-blue">formaliser le processus de décantation</span> afin d'en déduire la <span class="hl-yellow">logique de programmation</span> applicative. Il a évolué à plusieurs reprises au fil des échanges pour intégrer de nouvelles règles de gestion, comme la validation des visas techniciens. Il constitue le support utilisé pour confirmer avec les utilisateurs que le comportement attendu du programme correspond bien à la réalité du terrain.</p>
        <p>Sa réalisation n'a pas été sans difficulté : il a fallu se mettre d'accord sur l'ordre des opérations — notamment savoir à quel moment coller l'étiquette sur le tube et s'il fallait d'abord scanner les paillettes. Ce processus n'étant pas officiellement inscrit nulle part, <span class="hl-blue">le workflow a servi de document de référence pour fixer ces décisions</span>.</p>
        <p>Le processus modélisé est le suivant : réception du formulaire de demande, impression de l'étiquette et vérification de son code-barres par rapport au formulaire, scan séquentiel de chaque paillette pour contrôler sa conformité, puis transvasement dans le tube d'envoi. Le workflow précise également les étapes journalisées dans les fichiers traces, les erreurs bloquantes, et les points de redirection en cas d'anomalie.</p>
        
        <button class="next-tab-btn" @click="activeTab = 'trace2'">Continuer vers Trace 2 ➤</button>
      </div>

      <!-- Onglet Trace 2 -->
      <div v-if="activeTab === 'trace2'" class="retro-card trace-card">
        <h3>Trace 2 : Architecture modulaire et documentation nationale (VerifEtiquette)</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-dev">Architecture logicielle</span>
          <span class="savoir-faire-badge badge-plan">Documentation</span>
        </div>
        
        <div class="trace-visual flex-images">
          <figure>
            <img src="/src/assets/trace/initialiserChemintraceVerifEtiquette.png" alt="Trace initialisation" />
            <figcaption>Trace 2.1 — Fonction Initialiser-CheminTrace (code PowerShell)</figcaption>
          </figure>
          <figure>
            <img src="/src/assets/trace/ficheIntiVerifEtiquette2.png" alt="Fiche INTI XWiki - fichier configuration" />
            <figcaption>Trace 2.2 — Fiche XWiki : liste des visas autorisés dans le .ini</figcaption>
          </figure>
          <figure>
            <img src="/src/assets/trace/ficheIntiVerifEtiquette4.png" alt="Fiche INTI XWiki - dysfonctionnements" />
            <figcaption>Trace 2.3 — Fiche XWiki : dysfonctionnements courants et diagnostic</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-green">Concevoir une architecture logicielle maintenable par des non-développeurs</span>, <span class="hl-pink">rédiger une documentation opérationnelle destinée à des techniciens tiers</span>.</p>
        <p><strong>Description :</strong> Dans la trace 2.1, cet extrait de code montre la fonction <code>Initialiser-CheminTrace</code>. Elle lit d'abord le chemin du dossier de traces dans l'encadré rouge dans le fichier de configuration <code>.ini</code>, puis enchaîne une série de vérifications défensives (flèches rouges) : existence du lecteur réseau, existence du dossier cible (créé automatiquement si absent), et permissions d'écriture testées via un fichier temporaire. En cas d'échec à n'importe quelle étape, une exception explicite est levée avec un message d'erreur contextualisé. Cela montre une <span class="hl-green">architecture logicielle robuste</span>.</p>
        <p>Ce choix d'architecture répond à une contrainte concrète : je suis la seule développeuse de cette application, et les utilisateurs de la biothèque doivent pouvoir modifier certains paramètres sans intervenir sur le code. <span class="hl-green">Le fichier <code>.ini</code> externalise trois éléments : le nom de l'imprimante, le chemin des fichiers de trace, et la liste des visas techniciens autorisés que l'on voit dans la trace 2.2.</span> Cela permet, par exemple, d'ajouter le visa d'un nouveau collaborateur sans aucune modification du script.</p>
        <p>Pour garantir la maintenabilité au-delà de ma présence, j'ai <span class="hl-pink">rédigé une documentation</span> publiée sur la plateforme nationale XWiki de l'EFS. La trace 2.3 illustre la section dédiée aux dysfonctionnements typiques et aux commandes PowerShell de diagnostic associées. <span class="hl-pink">Accessible à tous les techniciens de support au niveau national,</span> concrètement si un technicien de support informatique (AMI) national est appelé pour un incident sur ce poste à Dijon, il peut consulter cette fiche sans avoir à me contacter — ce qui était l'un des objectifs explicites de la conception.</p>
        
        <button class="next-tab-btn" @click="activeTab = 'trace3'">Continuer vers Trace 3 ➔</button>
      </div>

      <!-- Onglet Trace 3 -->
      <div v-if="activeTab === 'trace3'" class="retro-card trace-card">
        <h3>Trace 3 : Algorithme de vérification séquentielle des paillettes (VerifEtiquette)</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-dev">Algorithmique</span>
          <span class="savoir-faire-badge badge-opti">Gérer l'état GUI</span>
        </div>
        
        <div class="trace-visual">
          <figure>
            <img src="/src/assets/trace/scanVerifAutoverifetiquette.png" alt="Vérification code-barres paillettes" />
            <figcaption>Trace 3.1 — Gestionnaire TextChanged : algorithme de vérification séquentielle</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-purple">Concevoir un algorithme de vérification adapté aux contraintes matérielles</span>, <span class="hl-orange">gérer l'état d'un formulaire GUI en environnement événementiel</span>.</p>
        <p><strong>Description :</strong> Cet extrait de code (trace 3) montre le gestionnaire d'événement <code>TextChanged</code>, déclenché automatiquement à chaque scan (premier encadré rouge). Il valide d'abord la longueur du code (11 caractères) et son format via une expression régulière, puis compare le code scanné au code de référence issu du formulaire. C'est l'<span class="hl-purple">algorithmique</span> principale. En cas de non-conformité, l'erreur est consignée dans le fichier de trace et l'utilisateur est invité à rescanner, sans interrompre le processus (deuxième encadré rouge). Si le code est valide, un compteur s'incrémente ; une fois toutes les paillettes validées, une pop-up de confirmation s'affiche et le formulaire se ferme avec un résultat de succès (troisième encadré rouge).</p>
        <p>Un détail notable : le commentaire <code># PAS de $form.Close() ni de DialogResult ici</code> (première flèche rouge) en cas d'erreur n'est pas une explication générale — c'est une note de décision d'architecture. Fermer le formulaire en cas d'erreur aurait terminé l'étape en cours et forcé un redémarrage du processus depuis le début. <span class="hl-orange">Le choix a été fait de maintenir le formulaire ouvert, de signaler l'erreur visuellement en rouge, et de permettre un nouveau scan sans perdre le contexte de l'opération.</span></p>
        <p>Le <code>BeginInvoke([Action]{...})</code> (deuxième flèche rouge) utilisé pour vider le champ après chaque lecture répond à une contrainte matérielle : <span class="hl-purple">une douchette code-barres envoie ses caractères très rapidement</span>. Appeler <code>$txtScan.Text = ""</code> directement dans le gestionnaire <code>TextChanged</code> risque de déclencher un nouvel événement avant que le traitement du scan en cours soit terminé, provoquant des lectures partielles ou des validations ratées. <code>BeginInvoke</code> reporte cette réinitialisation après la fin du traitement en cours, garantissant qu'aucune paillette ne soit ignorée ou mal validée lors d'un passage rapide de la douchette. Ceci est indispensable pour <span class="hl-orange">gérer l'état GUI</span>.</p>
        
        <button class="next-tab-btn" @click="activeTab = 'trace4'">Continuer vers Trace 4 ➔</button>
      </div>

      <!-- Onglet Trace 4 -->
      <div v-if="activeTab === 'trace4'" class="retro-card trace-card">
        <h3>Trace 4 : Intégration dans une base de données existante (DEDALE)</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-data">Modélisation BDD</span>
          <span class="savoir-faire-badge badge-plan">Documentation</span>
        </div>
        
        <div class="trace-visual flex-images">
          <figure>
            <img src="/src/assets/trace/MLDdedale.png" alt="MLD DEDALE" />
            <figcaption>Trace 4.1 — MLD : tables existantes (rose) et nouvelles tables (bleu)</figcaption>
          </figure>
          <figure>
            <img src="/src/assets/trace/cdcdedaleHisto.png" alt="Dictionnaire de données - table NETWORK_HISTO" />
            <figcaption>Trace 4.2 — Dictionnaire de données : attributs de la table NETWORK_HISTO</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-cyan">Concevoir et intégrer de nouvelles tables dans une base de données existante, justifier des choix de modélisation en cohérence avec l'existant</span>.</p>
        <p><strong>Description :</strong> La trace 4.1 présente le Modèle Logique de Données (MLD) qui distingue visuellement les tables existantes (rose) et les tables créées pour le module (bleu). <span class="hl-green">Les nouvelles tables ont été nommées et typées en cohérence avec les conventions de la base Oracle existante</span>, pour assurer la modélisation en base de données pérenne et <span class="hl-green">la maintenabilité par l'équipe après ma période d'alternance</span>.</p>
        <p>Deux choix de modélisation méritent justification. Le champ <code>STATUT_ALERTE</code> dans la table <code>STOCK_ALERT</code> utilise un entier (0, 1) plutôt qu'une table de référence dédiée : deux états fixes ne justifiaient pas une table supplémentaire, à condition que les valeurs soient documentées — ce qui est le cas dans le cahier des charges. De même, <code>STOCK_STATUT</code> dans la table <code>STOCK_MATERIEL</code> est un booléen permettant de désactiver un produit sans le supprimer, afin de préserver l'historique des mouvements. Ces choix pragmatiques ont été validés avec l'équipe et documentés.</p>
        <p>La table <code>STOCK_MOUVEMENT</code> référence des codes-barres physiques correspondant aux étiquettes collées sur le Raspberry Pi (codes d'incrément et de décrément), auxquels s'ajoute une option de correction manuelle pour le gestionnaire de parc.</p>
        <p>La trace 4.2 présente le dictionnaire de données qui précise pour chaque attribut de <code>NETWORK_HISTO</code> son rôle dans le module, les valeurs attendues et les contraintes. <span class="hl-magenta">Ce document a été utilisé lors des réunions de validation pour s'assurer que les données enregistrées correspondaient aux besoins métier.</span> Il fait office de <span class="hl-magenta">documentation technique</span> de référence.</p>
        
        <button class="next-tab-btn" @click="activeTab = 'trace5'">Continuer vers Trace 5 ➔</button>
      </div>

      <!-- Onglet Trace 5 -->
      <div v-if="activeTab === 'trace5'" class="retro-card trace-card">
        <h3>Trace 5 : Gestion du buffer de scan et soumission automatique (DEDALE)</h3>
        <div class="badge-meta">
          <span class="savoir-faire-badge badge-dev">Gestion d'état</span>
          <span class="savoir-faire-badge badge-opti">Structure de données</span>
        </div>
        
        <div class="trace-visual flex-images">
          <figure>
            <img src="/src/assets/trace/soumettrebuffer.png" alt="Fonction soumettreBuffer" />
            <figcaption>Trace 5.1 — Fonction soumettreBuffer : logique de décision à chaque scan</figcaption>
          </figure>
          <figure>
            <img src="/src/assets/trace/onSessionExpire.png" alt="Fonction onSessionExpire" />
            <figcaption>Trace 5.2 — Fonction onSessionExpire : soumission automatique à l'expiration</figcaption>
          </figure>
        </div>
        
        <p><strong>Savoir-faire illustrés :</strong> <span class="hl-teal">Concevoir une logique de gestion d'état adaptée aux contraintes d'usage</span>, <span class="hl-teal">implémenter un mécanisme de buffer en JavaScript</span>, <span class="hl-amber">identifier la structure de données adaptée à un problème de cohérence inter-champs</span>.</p>
        <p><strong>Description :</strong> Ces deux fonctions de la trace 4 implémentent la logique de <strong>buffer</strong> de scan. Un buffer est une zone mémoire temporaire qui stocke des données en attente de traitement — ici, il retient le produit en cours de scan et sa quantité accumulée, avant de les envoyer au serveur. Cette logique est conçue pour permettre à un utilisateur de scanner plusieurs produits différents à la suite avec une douchette, sans manipulation manuelle entre chaque produit.</p>
        <p>À chaque scan <strong>EAN</strong> (code-barres international d'identification des produits, comme les codes-barres des supermarchés), le système vérifie si le code correspond au produit dans le buffer pour <span class="hl-teal">gérer l'état</span>. Si c'est le même produit, la quantité est incrémentée sans soumission immédiate. Si c'est un produit différent, le buffer est soumis automatiquement — enregistrant le mouvement de stock — et une nouvelle session commence avec le nouveau produit. La fonction <code>onSessionExpire()</code> déclenche le même mécanisme à l'expiration du compte à rebours : si un scan est en attente, il est soumis avant réinitialisation ; sinon, la session reste active avec le même sens d'action (entrée ou sortie), évitant à l'utilisateur de devoir le resélectionner.</p>
        <p>La soumission est réalisée via <code>requestSubmit()</code> avec un fallback sur <code>submit.call()</code> pour la compatibilité navigateur, sans passer par le bouton visible — ce qui garantit l'exécution de la logique de validation du formulaire.</p>
        <p>Ce buffer est né d'un problème de cohérence : les deux champs du formulaire (code-barres et quantité) étaient liés à deux variables séparées, rendant la vérification avant soumission complexe. En regroupant les données d'un scan dans une <span class="hl-amber">structure de données</span> unique indexée par la clé produit, la vérification se réduit à tester l'existence d'une seule variable. <span class="hl-amber">C'est au cours de cette réflexion que j'ai découvert que les tableaux PHP sont nativement des maps associatives (clé → valeur), rendant l'implémentation côté serveur directement compatible.</span></p>
        
        <button class="next-tab-btn" @click="activeTab = 'bilan'">Continuer vers Bilan ➔</button>
      </div>

      <!-- Onglet Bilan -->
      <div v-if="activeTab === 'bilan'" class="retro-card bilan-card">
        <h2>Bilan du niveau d'expertise Technique</h2>

        <div class="competence-block">
          <h3>Réaliser le développement, Optimiser, Gérer des données</h3>
          <p><strong>Niveau atteint :</strong> <span class="savoir-faire-badge badge-dev">Bon</span></p>
          <div class="badge-dev" style="padding: 1rem; border-radius: 8px;">
            <p><strong>Justification :</strong></p>
            <p>Sur VerifEtiquette, j'ai su concevoir une architecture adaptée à un environnement contraint (utilisateurs non-techniques, matériel spécifique, absence de développeur en support local) et anticiper des problèmes liés à la vitesse d'une douchette code-barres — une contrainte que les cours ne m'avaient pas préparée à rencontrer. Sur DEDALE, j'ai appris à intégrer dans du code existant, à utiliser AJAX pour dynamiser une interface sans la refondre, et à raisonner sur les structures de données en JavaScript et PHP.</p>
            <p>Deux limites sont clairement identifiées. Sur VerifEtiquette, le découpage en plusieurs fenêtres distinctes alourdit la gestion de l'interface ; avec du recul, une fenêtre unique à contenu dynamique aurait été plus maintenable. Sur DEDALE, je m'appuie encore fortement sur les patterns du code PHP existant : cela me permet d'avancer efficacement, mais limite ma compréhension des mécanismes sous-jacents — notamment sur les raisons pour lesquelles certaines fonctions de versions récentes de PHP ne fonctionnent pas dans l'environnement en place.</p>
          </div>
        </div>

      </div>

    </div>

    <div class="bottom-nav">
      <router-link to="/suivi-projet" class="btn-retro">Aller à Suivi Projet →</router-link>
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
  background-color: var(--accent-pink);
  display: inline-block;
  padding: 0.5rem 2rem;
  border: var(--border-thick);
  border-radius: 50px;
  transform: rotate(2deg);
}

.trace-card {
  border-color: var(--accent-blue);
  box-shadow: 6px 6px 0px var(--accent-blue);
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