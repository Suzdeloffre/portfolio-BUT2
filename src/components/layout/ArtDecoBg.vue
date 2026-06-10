<template>
  <div class="artdeco-bg" aria-hidden="true">
    <svg class="artdeco-svg" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="ad-glow">
          <feGaussianBlur stdDeviation="1.2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ad-soft">
          <feGaussianBlur stdDeviation="0.6"/>
        </filter>
      </defs>

      <!-- ── RAYONS CHRYSLER depuis le bas-centre ── -->
      <g opacity="0.55" filter="url(#ad-soft)">
        <!-- Rayons principaux longs -->
        <line x1="500" y1="1050" x2="0"    y2="0"    stroke="#c9953a" stroke-width="0.9"/>
        <line x1="500" y1="1050" x2="100"  y2="0"    stroke="#c9953a" stroke-width="0.8"/>
        <line x1="500" y1="1050" x2="200"  y2="0"    stroke="#c9953a" stroke-width="0.8"/>
        <line x1="500" y1="1050" x2="300"  y2="0"    stroke="#c9953a" stroke-width="0.9"/>
        <line x1="500" y1="1050" x2="400"  y2="0"    stroke="#c9953a" stroke-width="0.8"/>
        <line x1="500" y1="1050" x2="500"  y2="0"    stroke="#c9953a" stroke-width="1.1"/>
        <line x1="500" y1="1050" x2="600"  y2="0"    stroke="#c9953a" stroke-width="0.8"/>
        <line x1="500" y1="1050" x2="700"  y2="0"    stroke="#c9953a" stroke-width="0.9"/>
        <line x1="500" y1="1050" x2="800"  y2="0"    stroke="#c9953a" stroke-width="0.8"/>
        <line x1="500" y1="1050" x2="900"  y2="0"    stroke="#c9953a" stroke-width="0.8"/>
        <line x1="500" y1="1050" x2="1000" y2="0"    stroke="#c9953a" stroke-width="0.9"/>
        <!-- Rayons latéraux -->
        <line x1="500" y1="1050" x2="-50"  y2="200"  stroke="#c9953a" stroke-width="0.7"/>
        <line x1="500" y1="1050" x2="-50"  y2="500"  stroke="#c9953a" stroke-width="0.7"/>
        <line x1="500" y1="1050" x2="1050" y2="200"  stroke="#c9953a" stroke-width="0.7"/>
        <line x1="500" y1="1050" x2="1050" y2="500"  stroke="#c9953a" stroke-width="0.7"/>
      </g>

      <!-- ── ARCS CONCENTRIQUES style Chrysler ── -->
      <g opacity="0.6" fill="none">
        <!-- Arc 1 — très bas -->
        <path d="M 80,1000 Q 500,700 920,1000" stroke="#8b1a2e" stroke-width="1.4"/>
        <!-- Arc 2 -->
        <path d="M 20,900  Q 500,560 980,900"  stroke="#8b1a2e" stroke-width="1.2"/>
        <!-- Arc 3 -->
        <path d="M -40,780 Q 500,400 1040,780" stroke="#8b1a2e" stroke-width="1.3"/>
        <!-- Arc 4 -->
        <path d="M -80,640 Q 500,240 1080,640" stroke="#c9953a" stroke-width="1.0"/>
        <!-- Arc 5 -->
        <path d="M -60,500 Q 500,100 1060,500" stroke="#c9953a" stroke-width="0.9"/>
        <!-- Arc 6 — haut -->
        <path d="M 0,360   Q 500,-30 1000,360" stroke="#8b1a2e" stroke-width="0.8"/>
        <!-- Arc 7 -->
        <path d="M 60,230  Q 500,-100 940,230" stroke="#c9953a" stroke-width="0.7"/>
      </g>

      <!-- ── MOTIFS GÉOMÉTRIQUES ART DÉCO ── -->

      <!-- Pyramide Chrysler centrale haute -->
      <g opacity="0.5" filter="url(#ad-soft)">
        <!-- Échelons pyramide : séries de lignes horizontales étagées -->
        <line x1="350" y1="80"  x2="650" y2="80"  stroke="#c9953a" stroke-width="1.2"/>
        <line x1="370" y1="95"  x2="630" y2="95"  stroke="#c9953a" stroke-width="1.0"/>
        <line x1="390" y1="110" x2="610" y2="110" stroke="#c9953a" stroke-width="0.9"/>
        <line x1="410" y1="125" x2="590" y2="125" stroke="#c9953a" stroke-width="0.8"/>
        <line x1="430" y1="140" x2="570" y2="140" stroke="#c9953a" stroke-width="0.8"/>
        <line x1="450" y1="155" x2="550" y2="155" stroke="#c9953a" stroke-width="0.7"/>
        <!-- Pointe -->
        <polygon points="500,30 470,80 530,80" fill="none" stroke="#c9953a" stroke-width="1.3"/>
        <polygon points="500,50 482,80 518,80" fill="#c9953a" fill-opacity="0.2"/>
      </g>

      <!-- Motif losange gauche -->
      <g transform="translate(120,400)" opacity="0.45">
        <polygon points="0,-55 38,-28 38,28 0,55 -38,28 -38,-28"
                 fill="none" stroke="#c9953a" stroke-width="1.1"/>
        <polygon points="0,-38 26,-19 26,19 0,38 -26,19 -26,-19"
                 fill="none" stroke="#8b1a2e" stroke-width="0.9"/>
        <polygon points="0,-20 14,-10 14,10 0,20 -14,10 -14,-10"
                 fill="#c9953a" fill-opacity="0.2" stroke="#c9953a" stroke-width="0.7"/>
        <circle cx="0" cy="0" r="4" fill="#c9953a" fill-opacity="0.5"/>
        <!-- Croix décorative -->
        <line x1="0" y1="-70" x2="0"  y2="70"  stroke="#c9953a" stroke-width="0.5" opacity="0.5"/>
        <line x1="-70" y1="0" x2="70" y2="0"   stroke="#c9953a" stroke-width="0.5" opacity="0.5"/>
      </g>

      <!-- Motif losange droit -->
      <g transform="translate(880,400)" opacity="0.45">
        <polygon points="0,-55 38,-28 38,28 0,55 -38,28 -38,-28"
                 fill="none" stroke="#c9953a" stroke-width="1.1"/>
        <polygon points="0,-38 26,-19 26,19 0,38 -26,19 -26,-19"
                 fill="none" stroke="#8b1a2e" stroke-width="0.9"/>
        <polygon points="0,-20 14,-10 14,10 0,20 -14,10 -14,-10"
                 fill="#c9953a" fill-opacity="0.2" stroke="#c9953a" stroke-width="0.7"/>
        <circle cx="0" cy="0" r="4" fill="#c9953a" fill-opacity="0.5"/>
        <line x1="0" y1="-70" x2="0"  y2="70"  stroke="#c9953a" stroke-width="0.5" opacity="0.5"/>
        <line x1="-70" y1="0" x2="70" y2="0"   stroke="#c9953a" stroke-width="0.5" opacity="0.5"/>
      </g>

      <!-- Grille chevrons milieu gauche -->
      <g transform="translate(60,600)" opacity="0.35" filter="url(#ad-soft)">
        <path d="M-30,0 L0,-20 L30,0"  fill="none" stroke="#c9953a" stroke-width="1.1"/>
        <path d="M-30,16 L0,-4  L30,16" fill="none" stroke="#c9953a" stroke-width="0.9"/>
        <path d="M-30,32 L0,12  L30,32" fill="none" stroke="#c9953a" stroke-width="0.8"/>
        <path d="M-30,48 L0,28  L30,48" fill="none" stroke="#c9953a" stroke-width="0.7"/>
      </g>
      <!-- Grille chevrons milieu droit -->
      <g transform="translate(940,600)" opacity="0.35" filter="url(#ad-soft)">
        <path d="M-30,0 L0,-20 L30,0"  fill="none" stroke="#c9953a" stroke-width="1.1"/>
        <path d="M-30,16 L0,-4  L30,16" fill="none" stroke="#c9953a" stroke-width="0.9"/>
        <path d="M-30,32 L0,12  L30,32" fill="none" stroke="#c9953a" stroke-width="0.8"/>
        <path d="M-30,48 L0,28  L30,48" fill="none" stroke="#c9953a" stroke-width="0.7"/>
      </g>

      <!-- Lignes horizontales décoratives — style frise art déco -->
      <g opacity="0.3" filter="url(#ad-soft)">
        <line x1="0" y1="170" x2="1000" y2="170" stroke="#8b1a2e" stroke-width="0.7"/>
        <line x1="0" y1="175" x2="1000" y2="175" stroke="#c9953a" stroke-width="1.4"/>
        <line x1="0" y1="180" x2="1000" y2="180" stroke="#8b1a2e" stroke-width="0.7"/>
      </g>

      <!-- Motif central bas : demi-soleil Chrysler -->
      <g transform="translate(500,1000)" opacity="0.48" filter="url(#ad-soft)">
        <!-- Écailles/arcs superposés type Chrysler -->
        <path d="M-180,0 Q-140,-80 -100,0"  fill="#c9953a" fill-opacity="0.12" stroke="#c9953a" stroke-width="1"/>
        <path d="M-140,0 Q-100,-100 -60,0"  fill="#c9953a" fill-opacity="0.12" stroke="#c9953a" stroke-width="1"/>
        <path d="M-100,0 Q-60,-115 -20,0"   fill="#c9953a" fill-opacity="0.12" stroke="#c9953a" stroke-width="1"/>
        <path d="M-60,0  Q-20,-122 20,0"    fill="#8b1a2e" fill-opacity="0.1"  stroke="#8b1a2e" stroke-width="1.2"/>
        <path d="M-20,0  Q20,-125 60,0"     fill="#8b1a2e" fill-opacity="0.1"  stroke="#8b1a2e" stroke-width="1.2"/>
        <path d="M20,0   Q60,-122 100,0"    fill="#c9953a" fill-opacity="0.12" stroke="#c9953a" stroke-width="1"/>
        <path d="M60,0   Q100,-115 140,0"   fill="#c9953a" fill-opacity="0.12" stroke="#c9953a" stroke-width="1"/>
        <path d="M100,0  Q140,-100 180,0"   fill="#c9953a" fill-opacity="0.12" stroke="#c9953a" stroke-width="1"/>
        <!-- Ligne de base -->
        <line x1="-200" y1="0" x2="200" y2="0" stroke="#c9953a" stroke-width="1.3"/>
      </g>

      <!-- Points décoratifs symétriques -->
      <g fill="#c9953a" opacity="0.45">
        <circle cx="200" cy="170" r="3"/>
        <circle cx="800" cy="170" r="3"/>
        <circle cx="500" cy="170" r="4"/>
        <circle cx="350" cy="170" r="2"/>
        <circle cx="650" cy="170" r="2"/>
      </g>
    </svg>

    <!-- Overlay crème très léger -->
    <div class="artdeco-overlay"></div>
  </div>
</template>

<style scoped>
.artdeco-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-color: #fdf6e3;
}
.artdeco-svg {
  width: 100%;
  height: 100%;
}
.artdeco-overlay {
  position: absolute;
  inset: 0;
  background: rgba(253, 246, 227, 0.14);
}
</style>