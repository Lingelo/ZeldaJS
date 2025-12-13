# 🗡️ ZeldaJS - Link's Awakening

Un remake du classique **The Legend of Zelda: Link's Awakening** en JavaScript, propulsé par [KAPLAY](https://kaplayjs.com/).

![Version](https://img.shields.io/badge/version-3.0.0-blue)
![KAPLAY](https://img.shields.io/badge/KAPLAY-3001-green)
![Vite](https://img.shields.io/badge/Vite-5.0-purple)

## 🎮 Démo

Explorez l'île de Koholint dans votre navigateur !

## ✨ Fonctionnalités

- 🗺️ **Carte fidèle** - 40x32 tuiles avec 133 types différents
- 🚶 **Mouvement fluide** - Déplacement 4 directions avec animations
- 🧱 **Collisions précises** - Hitbox ajustée avec glissement le long des murs
- 📖 **Transitions de pages** - Animation fluide entre les zones
- 💬 **Interactions** - Panneaux, puits, portes, téléphone
- 🌊 **Tuiles animées** - Eau et herbe animées
- 📱 **Support mobile** - Contrôles tactiles virtuels

## 🕹️ Contrôles

### Clavier
| Touche | Action |
|--------|--------|
| `↑` `↓` `←` `→` ou `WASD` | Se déplacer |
| `Espace` | Interagir |
| `Entrée` | Démarrer |
| `Échap` | Menu |

### Mobile
- **D-Pad virtuel** pour se déplacer
- **Bouton A** pour interagir

## 🚀 Installation

```bash
# Cloner le repo
git clone https://github.com/Lingelo/ZeldaJS.git
cd ZeldaJS

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du projet

```
ZeldaJS/
├── public/              # Assets statiques
│   ├── character.png    # Sprites du personnage
│   └── map.png          # Tileset de la carte
├── src/
│   ├── main.js          # Point d'entrée
│   ├── config.js        # Configuration du jeu
│   ├── sprites.js       # Gestion des sprites
│   ├── data/
│   │   └── map-data.js  # Données de la carte
│   ├── scenes/
│   │   ├── title.js     # Écran titre
│   │   └── game.js      # Scène de jeu principale
│   ├── entities/
│   │   └── player.js    # Logique du joueur
│   └── systems/
│       └── map.js       # Système de rendu de carte
├── index.html           # Page HTML principale
├── package.json
└── README.md
```

## 🛠️ Technologies

- **[KAPLAY](https://kaplayjs.com/)** - Moteur de jeu 2D (successeur de Kaboom.js)
- **[Vite](https://vitejs.dev/)** - Build tool ultra-rapide
- **JavaScript ES6+** - Modules, classes, async/await

## 🎨 Assets

Les sprites proviennent du jeu original **The Legend of Zelda: Link's Awakening** (Game Boy, 1993).

## 📜 Historique des versions

### v3.0.0 (Actuelle)
- Migration vers KAPLAY
- Architecture modulaire
- Transitions fluides
- Système d'interactions
- Support mobile

### v2.0.0
- Migration vers Kaboom.js + Vite
- Détection de collision

### v1.0.0
- Version initiale avec rendu custom

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📝 Licence

ISC License - Voir [LICENSE](LICENSE) pour plus de détails.

## 🙏 Crédits

- Nintendo pour le jeu original
- L'équipe KAPLAY pour le moteur de jeu
- Tous les contributeurs du projet

---

⭐ **Star ce repo si tu aimes le projet !**
