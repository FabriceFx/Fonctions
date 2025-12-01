/**
 * Génère une liste verticale de codes alphanumériques uniques.
 * * Cette fonction assure que chaque code généré est unique au sein du lot demandé.
 * Elle gère également les erreurs d'entrées et utilise des structures modernes.
 *
 * @param {number} nombreCodes Le nombre de codes uniques à générer.
 * @param {number} longueur La longueur souhaitée pour chaque code.
 * @return {Array<Array<string>>} Un tableau 2D contenant les codes uniques.
 * @customfunction
 * * @author Fabrice Faucheux
 */
function GENERER_CODES_UNIQUES(nombreCodes, longueur) {
  try {
    // Validation des entrées
    if (typeof nombreCodes !== 'number' || typeof longueur !== 'number') {
      throw new Error("Les paramètres 'nombreCodes' et 'longueur' doivent être des nombres.");
    }

    if (nombreCodes <= 0 || longueur <= 0) {
      throw new Error("Les paramètres doivent être supérieurs à zéro.");
    }

    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codesUniques = new Set();
    
    // Protection contre une boucle infinie si la demande dépasse les possibilités mathématiques
    // 36 est la longueur de la chaîne 'caracteres'
    const maxPossibilites = Math.pow(caracteres.length, longueur);
    
    if (nombreCodes > maxPossibilites) {
      throw new Error(`Impossible de générer ${nombreCodes} codes uniques de longueur ${longueur}. Maximum possible : ${maxPossibilites}.`);
    }

    // Boucle tant que nous n'avons pas atteint le nombre de codes uniques souhaité
    while (codesUniques.size < nombreCodes) {
      let code = '';
      for (let i = 0; i < longueur; i++) {
        const indexAleatoire = Math.floor(Math.random() * caracteres.length);
        code += caracteres.charAt(indexAleatoire);
      }
      
      // .add() sur un Set ne fait rien si la valeur existe déjà, garantissant l'unicité
      codesUniques.add(code);
    }

    // Conversion du Set en tableau 2D pour l'affichage dans Google Sheets
    // Utilisation de la méthode Array.from() et map()
    return Array.from(codesUniques).map(code => [code]);

  } catch (erreur) {
    // Log de l'erreur pour le débogage développeur
    console.error(`Erreur dans GENERER_CODES_UNIQUES : ${erreur.message}`);
    // Retourne le message d'erreur à l'utilisateur dans la cellule
    return `Erreur : ${erreur.message}`;
  }
}
