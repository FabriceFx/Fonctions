/**
 * Calcule la moyenne d'une plage et lui attribue une catégorie personnalisable.
 * Les noms des catégories sont optionnels et prennent des valeurs par défaut si non renseignés.
 *
 * @author Fabrice Faucheux
 * @param {Array<Array<number>>|number} plageDonnees La plage de nombres à analyser.
 * @param {number} seuilBas La valeur limite supérieure pour la première catégorie.
 * @param {number} seuilHaut La valeur limite inférieure pour la troisième catégorie.
 * @param {string} [etiquetteBas="Bas"] (Optionnel) Nom de la catégorie inférieure.
 * @param {string} [etiquetteMoyen="Moyen"] (Optionnel) Nom de la catégorie intermédiaire.
 * @param {string} [etiquetteHaut="Haut"] (Optionnel) Nom de la catégorie supérieure.
 * @return {string} Une chaîne indiquant la moyenne et la catégorie correspondante.
 * @customfunction
 */
const MOYENNE_AVEC_CATEGORIE = (
  plageDonnees, 
  seuilBas, 
  seuilHaut, 
  etiquetteBas = "Bas", 
  etiquetteMoyen = "Moyen", 
  etiquetteHaut = "Haut"
) => {
  try {
    // Validation et aplatissement des données
    const tableauBrut = Array.isArray(plageDonnees) ? plageDonnees : [[plageDonnees]];
    
    const nombresValides = tableauBrut
      .flat()
      .filter(valeur => typeof valeur === 'number' && !isNaN(valeur));

    if (nombresValides.length === 0) {
      return "Aucune donnée numérique valide.";
    }

    // Calcul de la moyenne
    const sommeTotale = nombresValides.reduce((acc, valeur) => acc + valeur, 0);
    const moyenne = sommeTotale / nombresValides.length;

    // Détermination de la catégorie dynamique
    let resultatCategorie = etiquetteMoyen; 

    if (moyenne < seuilBas) {
      resultatCategorie = etiquetteBas;
    } else if (moyenne >= seuilHaut) {
      resultatCategorie = etiquetteHaut;
    }

    // Retour formaté
    return `Moyenne : ${moyenne.toFixed(2)} | Catégorie : ${resultatCategorie}`;

  } catch (erreur) {
    console.error(`Erreur dans MOYENNE_AVEC_CATEGORIE : ${erreur.message}`);
    return `Erreur : ${erreur.message}`;
  }
};
