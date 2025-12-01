/**
 * Convertit une date donnée en nom du jour de la semaine correspondant (en français).
 * Cette fonction peut être utilisée directement dans une cellule Google Sheets.
 *
 * @author Fabrice Faucheux
 * @param {Date} dateValeur La date à convertir.
 * @return {string} Le nom du jour de la semaine ou un message d'erreur explicite.
 * @customfunction
 */
const JOUR_SEMAINE = (dateValeur) => {
  try {
    // Vérification stricte du type de donnée
    if (!(dateValeur instanceof Date)) {
      throw new Error("La valeur fournie n'est pas une date valide.");
    }

    // Déclaration du tableau des jours en français (index 0 = Dimanche)
    const jours = [
      'Dimanche',
      'Lundi',
      'Mardi',
      'Mercredi',
      'Jeudi',
      'Vendredi',
      'Samedi'
    ];

    const indexJour = dateValeur.getDay();

    // Utilisation des Template Literals pour le retour (bonne pratique ES6)
    return `${jours[indexJour]}`;

  } catch (erreur) {
    // Log de l'erreur dans la console Apps Script pour le débogage
    console.error(`Erreur dans la fonction JOUR_SEMAINE : ${erreur.message}`);
    
    // Retour visuel pour l'utilisateur dans la cellule
    return `Erreur : ${erreur.message}`;
  }
};
