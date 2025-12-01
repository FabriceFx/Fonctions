/**
 * Compte les occurrences de chaque mot unique dans une chaîne de texte.
 * Permet d'exclure ou non les mots vides (articles, prépositions...).
 *
 * @param {string} texte Le texte source à analyser.
 * @param {boolean} [exclureMotsVides=false] Si VRAI, exclut les mots courants (le, la, de...). Par défaut : FAUX.
 * @return {Array<Array<string|number>>} Un tableau à deux colonnes (Mot, Quantité).
 * @customfunction
 * @author Fabrice Faucheux
 */
function COMPTER_MOTS(texte, exclureMotsVides = false) {
  try {
    // 1. Validation de l'entrée
    if (typeof texte !== 'string' || !texte) {
      return [["Erreur", "Veuillez fournir une chaîne de caractères valide."]];
    }

    // 2. Définition de la liste des mots vides (Stop Words) français
    // Utilisation d'un Set pour une recherche instantanée (performance O(1))
    const listeMotsVides = new Set([
      "le", "la", "les", "un", "une", "des", "du", "de", "d", "l",
      "et", "ou", "mais", "donc", "or", "ni", "car", "a", "à", "au", "aux",
      "en", "par", "pour", "sur", "dans", "vers", "avec", "sans", "sous",
      "ce", "cet", "cette", "ces", "qui", "que", "quoi", "dont", "ou",
      "je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles",
      "mon", "ton", "son", "notre", "votre", "leur", "sa", "ses", "mes", "tes",
      "est", "sont", "c", "ca", "ça"
    ]);

    // 3. Extraction des mots (Minuscules + Support Accents)
    const tousLesMots = texte.toLowerCase().match(/\p{L}+/gu);

    if (!tousLesMots || tousLesMots.length === 0) {
      return [["Info", "Aucun mot trouvé."]];
    }

    // 4. Filtrage conditionnel
    // Si exclureMotsVides est VRAI, on garde uniquement ceux qui ne sont PAS dans le Set
    const motsATraiter = exclureMotsVides 
      ? tousLesMots.filter(mot => !listeMotsVides.has(mot))
      : tousLesMots;

    if (motsATraiter.length === 0) {
      return [["Info", "Ne contient que des mots vides."]];
    }

    // 5. Comptage des occurrences
    const frequenceMots = motsATraiter.reduce((acc, mot) => {
      acc[mot] = (acc[mot] || 0) + 1;
      return acc;
    }, {});

    // 6. Transformation et Tri
    const resultat = Object.entries(frequenceMots)
      .map(([mot, quantite]) => [mot, quantite])
      .sort((a, b) => b[1] - a[1]); // Tri décroissant

    // En-têtes
    resultat.unshift(["Mot", "Fréquence"]);

    return resultat;

  } catch (erreur) {
    console.error(`Erreur dans COMPTER_MOTS : ${erreur.message}`);
    return [[`Erreur critique`, `Voir les logs.`]];
  }
}
