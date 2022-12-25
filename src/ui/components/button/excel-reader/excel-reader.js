import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function ExcelReader() {
  const [data, setData] = useState([]); // Créez un état local pour stocker les données du tableur

  // Définissez une fonction de gestion de clic pour le bouton
  const handleClick = () => {
    // Demandez à l'utilisateur de sélectionner un fichier en utilisant une boîte de dialogue de fichier HTML
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.xlsx';
    fileInput.click();

    // Ajoutez un gestionnaire d'événement qui sera appelé lorsque l'utilisateur sélectionne un fichier
    fileInput.addEventListener('change', (event) => {
      // Récupérez le fichier sélectionné
      const file = event.target.files[0];

      // Chargez le fichier en utilisant la méthode readAsBinaryString de l'objet FileReader
      const reader = new FileReader();
      reader.readAsBinaryString(file);

      // Ajoutez un gestionnaire d'événement qui sera appelé lorsque le fichier est chargé
      reader.addEventListener('load', () => {
        // Convertissez la chaîne binaire en un objet Workbook en utilisant la méthode read de la bibliothèque XLSX
        const workbook = XLSX.read(reader.result, { type: 'binary' });

        // Sélectionnez la première feuille de calcul de votre fichier
        const sheet = workbook.Sheets[workbook.SheetNames[0]];

        // Convertissez la feuille de calcul en un tableau d'objets JSON en utilisant la méthode utils.sheet_to_json de la bibliothèque XLSX
        const excelData = XLSX.utils.sheet_to_json(sheet);

        // Mettez à jour l'état local avec les données du tableur
        setData(excelData);
      });
    });
  };

  return (
    <div>
      {/* Affichez le bouton */}
      <button onClick={handleClick}>Lire le fichier</button>
      {/* Affichez les données du tableur */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ExcelReader;
