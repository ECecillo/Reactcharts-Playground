import React, { useState } from 'react';
import {utils, writeFile} from 'xlsx';
import { writeFileSync } from 'fs';

function JSONExporter() {
  const [json, setJson] = useState(''); // Créez un état local pour stocker le contenu de la boîte de texte

  // Définissez une fonction de gestion de clic pour le bouton .xlsx
  const handleXLSXExport = () => {
    // Parsez le contenu de la boîte de texte en un objet JSON
    const data = JSON.parse(json);

    // Créez un nouveau fichier de travail en utilisant la méthode utils.book_new de la bibliothèque XLSX
    const workbook = utils.book_new();

    // Créez une feuille de calcul en utilisant la méthode json_to_sheet de la bibliothèque XLSX
    const sheet = utils.json_to_sheet(data);

    // Ajoutez la feuille de calcul au fichier de travail en utilisant la méthode book_append_sheet de la bibliothèque XLSX
    utils.book_append_sheet(workbook, sheet, 'Sheet1');

    // Créez un fichier .xlsx en utilisant la méthode writeFile de la bibliothèque XLSX
    writeFile(workbook, 'data.xlsx');
  };

  // Définissez une fonction de gestion de clic pour le bouton .csv
  const handleCSVExport = () => {
    // Parsez le contenu de la boîte de texte en un objet JSON
    const data = JSON.parse(json);

    // Convertissez l'objet JSON en une chaîne de caractères au format CSV en utilisant la méthode utils.sheet_to_csv de la bibliothèque XLSX
    const csv = utils.sheet_to_csv(data);

    // Créez un fichier .csv en utilisant la méthode fs.writeFile de Node.js
    writeFileSync('data.csv', csv);
  };

  return (
    <div>
      {/* Affichez la boîte de texte */}
      <textarea value={json} onChange={(event) => setJson(event.target.value)} />
      {/* Affichez les boutons */}
      <button onClick={handleXLSXExport}>.xlsx</button>
      <button onClick={handleCSVExport}>.cs</button>
    </div>
  );
}

export default JSONExporter
