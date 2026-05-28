# Fonctions personnalisées Google Sheets


[🇫🇷 Version Française](#-version-française) | [🇬🇧 English Version](#-english-version)

![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Google%20Apps%20Script-green)
![Runtime](https://img.shields.io/badge/Google%20Apps%20Script-V8-green)
![Author](https://img.shields.io/badge/Auteur-Fabrice%20Faucheux-orange)

## 🇫🇷 Version Française


Une collection de fonctions personnalisées optimisées pour Google Sheets, développées avec le moteur V8 moderne. Ce projet vise à étendre les capacités natives du tableur avec des formules métier spécifiques.

## 🚀 Installation

1. Ouvrez votre feuille Google Sheets.
2. Allez dans le menu **Extensions** > **Apps Script**.
3. Copiez le contenu du fichier `Code.js` de ce dépôt.
4. Collez-le dans l'éditeur de script (remplacez tout contenu existant).
5. Sauvegardez le projet (Icône disquette ou `Ctrl + S`).
6. Revenez à votre feuille de calcul, la fonction est prête à l'emploi.

## 📚 Liste des fonctions

### `MOYENNE_AVEC_CATEGORIE`

Calcule la moyenne d'une plage de données et renvoie un libellé textuel (catégorie) en fonction de seuils définis.

#### Syntaxe
```excel
=MOYENNE_AVEC_CATEGORIE(plage; seuil_bas; seuil_haut; [label_bas]; [label_moyen]; [label_haut])
```

### `COMPTER_MOTS`

Analyse une chaîne de texte pour compter les occurrences de chaque mot unique. Cette fonction est idéale pour l'analyse sémantique, la création de nuages de mots ou l'audit de contenu.

#### Syntaxe
```excel
=COMPTER_MOTS(texte; [exclure_mots_vides])
```

### `GENERER_CODES_UNIQUES`

Génère une liste verticale de codes alphanumériques aléatoires (A-Z, 0-9). Cette fonction utilise un algorithme basé sur l'objet `Set` pour garantir mathématiquement qu'aucun doublon n'est présent dans la liste générée. Idéal pour la création d'identifiants uniques, de numéros de série ou de coupons promotionnels.

#### Syntaxe
```excel
=GENERER_CODES_UNIQUES(nombreCodes; longueur)
```

### `JOUR_SEMAINE`

Convertit une date donnée en nom du jour de la semaine correspondant (en français).
Cette fonction peut être utilisée directement dans une cellule Google Sheets.

#### Syntaxe
```excel
=JOUR_SEMAINE(A1) (où A1 contient une date)
```


---
## 🇬🇧 English Version

> English translation coming soon.

---
<p align="center"><a href="https://faucheux.bzh" target="_blank" style="color: inherit; text-decoration: none;">&lt;&gt; par Fabrice Faucheux</a></p>