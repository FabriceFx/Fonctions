/**
 * @fileoverview Fonction personnalisée pour la concaténation de noms et prénoms.
 * @author Fabrice Faucheux
 */

/**
 * Combine les prénoms et les noms de famille pour générer des noms complets.
 * Gère les entrées unitaires et les plages de données (arrays).
 *
 * @param {Array<Array<string>>|string} plagePrenoms La plage ou la valeur contenant les prénoms.
 * @param {Array<Array<string>>|string} plageNoms La plage ou la valeur contenant les noms de famille.
 * @return {Array<Array<string>>|string} Un tableau avec les noms complets ou un message d'erreur.
 * @customfunction
 */
function GENERER_NOMS_COMPLETS(plagePrenoms, plageNoms) {
  // 1. Gestion du traitement unitaire (cellule unique)
  if (!Array.isArray(plagePrenoms) || !Array.isArray(plageNoms)) {
    try {
      // Conversion explicite en chaîne pour éviter les erreurs sur les nombres
      const prenomStr = (plagePrenoms || "").toString().trim();
      const nomStr = (plageNoms || "").toString().trim();
      
      return prenomStr && nomStr ? `${prenomStr} ${nomStr}` : (prenomStr || nomStr);
    } catch (erreur) {
      console.error(`[Erreur Unitaire] : ${erreur.message}`);
      return "Erreur de données";
    }
  }

  // 2. Vérification de la cohérence dimensionnelle des plages
  if (plagePrenoms.length !== plageNoms.length) {
    return "Erreur : Les plages doivent avoir la même hauteur.";
  }

  try {
    // 3. Traitement par lot (Batch processing) via .map()
    return plagePrenoms.map((lignePrenom, index) => {
      // Déstructuration sécurisée
      const [prenomBrut] = lignePrenom;
      const ligneNom = plageNoms[index];
      
      // Sécurité si la plage de noms est mal formée
      const nomBrut = ligneNom ? ligneNom[0] : "";

      // Normalisation des valeurs (gestion des null/undefined)
      const prenomStr = (prenomBrut || "").toString().trim();
      const nomStr = (nomBrut || "").toString().trim();

      // Logique de concaténation : gère les cas où l'un des deux est vide
      if (prenomStr && nomStr) {
        return [`${prenomStr} ${nomStr}`];
      } else {
        // Retourne celui qui existe, ou une chaîne vide si aucun
        return [prenomStr || nomStr];
      }
    });

  } catch (erreur) {
    // Log de l'erreur pour le débogage dans la console GCP
    console.error(`[Erreur Critique] GENERER_NOMS_COMPLETS : ${erreur.message}`);
    return "Erreur interne";
  }
}
