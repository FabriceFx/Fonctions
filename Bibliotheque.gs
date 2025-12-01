/**
 * @fileoverview Bibliothèque de fonctions personnalisées pour Google Sheets.
 * @author Fabrice Faucheux
 */

// --- MATHÉMATIQUES & CALCULS ---

/**
 * Additionne deux nombres.
 * @param {number} nombreA - Le premier nombre.
 * @param {number} nombreB - Le deuxième nombre.
 * @return {number} La somme des deux nombres.
 * @customfunction
 */
function AJOUTER_NOMBRES(nombreA, nombreB) {
  if (typeof nombreA !== 'number' || typeof nombreB !== 'number') {
    throw new Error("Les paramètres doivent être des nombres.");
  }
  return nombreA + nombreB;
}

/**
 * Convertit des degrés Celsius en Fahrenheit.
 * @param {number} celsius - La température en Celsius.
 * @return {number} La température en Fahrenheit.
 * @customfunction
 */
function CONVERTIR_CELSIUS_FAHRENHEIT(celsius) {
  if (typeof celsius !== 'number') throw new Error("La température doit être un nombre.");
  return (celsius * 9 / 5) + 32;
}

/**
 * Calcule des intérêts composés.
 * @param {number} capital - Le montant initial (principal).
 * @param {number} taux - Le taux d'intérêt (en pourcentage).
 * @param {number} annees - La durée en années.
 * @return {number} Le montant final avec intérêts.
 * @customfunction
 */
function INTERETS_COMPOSES(capital, taux, annees) {
  return capital * Math.pow((1 + taux / 100), annees);
}

/**
 * Trouve la valeur maximale parmi une liste ou une plage.
 * Gère automatiquement les tableaux (plages de cellules).
 * @param {...number|Array<Array<number>>} valeurs - Liste de nombres ou plage de cellules.
 * @return {number} La valeur maximale.
 * @customfunction
 */
function TROUVER_MAX(...valeurs) {
  // Aplatir le tableau si une plage (ex: A1:C3) est passée
  const listeAplaties = valeurs.flat(Infinity).filter(v => typeof v === 'number');
  if (listeAplaties.length === 0) return 0;
  return Math.max(...listeAplaties);
}

// --- DATES & TEMPS ---

/**
 * Calcule le nombre de jours entre deux dates.
 * @param {Date} dateDebut - La date de début.
 * @param {Date} dateFin - La date de fin.
 * @return {number} Le nombre de jours d'écart.
 * @customfunction
 */
function JOURS_ENTRE(dateDebut, dateFin) {
  if (!(dateDebut instanceof Date) || !(dateFin instanceof Date)) {
    throw new Error("Veuillez fournir des dates valides.");
  }
  const UN_JOUR_MS = 1000 * 60 * 60 * 24;
  return Math.ceil((dateFin - dateDebut) / UN_JOUR_MS);
}

/**
 * Convertit un nombre de minutes en chaîne lisible (heures et minutes).
 * @param {number} minutes - Le nombre total de minutes.
 * @return {string} Format "X heure(s) et Y minute(s)".
 * @customfunction
 */
function MINUTES_EN_HEURES_TEXTE(minutes) {
  const heures = Math.floor(minutes / 60);
  const minutesRestantes = minutes % 60;
  return `${heures} heure(s) et ${minutesRestantes} minute(s)`;
}

// --- MANIPULATION DE TEXTE (STRING) ---

/**
 * Génère un identifiant unique universel (UUID).
 * @return {string} Un UUID aléatoire.
 * @customfunction
 */
function GENERER_UUID() {
  return Utilities.getUuid();
}

/**
 * Convertit une chaîne en "Title Case" (Première Lettre De Chaque Mot En Majuscule).
 * @param {string} texte - Le texte à convertir.
 * @return {string} Le texte converti.
 * @customfunction
 */
function VERS_TITRE_CASE(texte) {
  if (typeof texte !== 'string') return texte;
  return texte.replace(/\w\S*/g, (mot) => 
    mot.charAt(0).toUpperCase() + mot.substr(1).toLowerCase()
  );
}

/**
 * Compte le nombre de mots dans une chaîne de caractères.
 * @param {string} texte - Le texte à analyser.
 * @return {number} Le nombre de mots.
 * @customfunction
 */
function COMPTER_MOTS(texte) {
  if (!texte) return 0;
  return texte.toString().trim().split(/\s+/).length;
}

// --- DIVERS ---

/**
 * Calcule l'Indice de Masse Corporelle (IMC / BMI).
 * @param {number} poids - Poids en kilogrammes.
 * @param {number} taille - Taille en mètres.
 * @return {number} L'indice IMC.
 * @customfunction
 */
function CALCULER_IMC(poids, taille) {
  if (taille === 0) throw new Error("La taille ne peut pas être zéro.");
  return poids / (taille * taille);
}
