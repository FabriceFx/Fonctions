/**
 * Filtre une liste d'employés selon un âge minimum spécifié.
 *
 * @author Fabrice Faucheux
 * @param {Range} plageNoms La plage de cellules contenant les noms des employés.
 * @param {Range} plageAges La plage de cellules contenant les âges correspondants.
 * @param {number} ageMinimum L'âge minimum requis pour être inclus dans la liste.
 * @return {Array<Array<string>>|string} Une liste des noms filtrés ou un message d'erreur.
 * @customfunction
 */
const FILTRER_EMPLOYES_PAR_AGE = (plageNoms, plageAges, ageMinimum) => {
  // 1. Validation des entrées
  if (typeof ageMinimum !== 'number' || ageMinimum <= 0) {
    return `Erreur : L'âge minimum "${ageMinimum}" n'est pas valide.`;
  }

  if (!Array.isArray(plageNoms) || !Array.isArray(plageAges)) {
    return "Erreur : Les plages sélectionnées doivent être des cellules valides.";
  }

  if (plageNoms.length !== plageAges.length) {
    return "Erreur : Les plages de noms et d'âges doivent avoir la même taille.";
  }

  try {
    // 2. Traitement des données avec .reduce() (ES6)
    // On itère sur les noms et on utilise l'index pour récupérer l'âge correspondant
    const resultatsFiltrés = plageNoms.reduce((acc, ligneNom, index) => {
      const nom = ligneNom[0];
      // Sécurisation de l'accès à la ligne correspondante dans la plage des âges
      const ligneAge = plageAges[index]; 
      const age = ligneAge ? ligneAge[0] : null;

      // 3. Condition de filtrage stricte
      if (typeof nom === 'string' && typeof age === 'number' && age > ageMinimum) {
        acc.push([nom]); // On pousse un tableau [nom] car Sheets attend un format 2D
      }

      return acc;
    }, []);

    // 4. Retour du résultat ou message d'information
    return resultatsFiltrés.length > 0 
      ? resultatsFiltrés 
      : `Aucun employé trouvé au-dessus de ${ageMinimum} ans.`;

  } catch (erreur) {
    // Gestion d'erreur globale
    console.error(`Erreur dans FILTRER_EMPLOYES_PAR_AGE : ${erreur.message}`);
    return "Une erreur interne est survenue lors du traitement.";
  }
};
