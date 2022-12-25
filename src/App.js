import './App.css';
import React, { useCallback, useContext, useState } from 'react';
import SkillsBarChart from './ui/components/diagramme/diagramme-barres';
import SkillLineDiagram from './ui/components/diagramme/diagramme-lignes';
import './ui/style/theme/dark-theme.css';
import './ui/style/theme/light-theme.css';
import Data from './data/';
import SkillsForm from './ui/components/form/SkillForm';
import { ThemeContext } from './ui/components/theme/theme-provider';
import ExcelReader from './ui/components/button/excel-reader/excel-reader';
import JSONExporter from './ui/components/json-exporter/json-exporter';

import CodeEditor from './ui/components/code-editor/code-editor';
import { json, jsonLanguage } from '@codemirror/lang-json';
import { languages } from '@codemirror/language-data';
import { autoLanguage } from './hooks/code-editor/language-config';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [textEditor, setTextEditor] = useState('{hello: world}');
  const handleTextChange = useCallback((newText) => setTextEditor(newText), []);

  return (
    <div className={`${theme}-theme App`}>
      <h1>Evolution des compétences acquises en entreprise</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div>Current theme: {theme}</div>
      <CodeEditor
        extensions={[
          autoLanguage,
          json({
            base: jsonLanguage,
            codeLanguages: languages,
            addKeymap: true,
          }),
        ]}
        initialText={textEditor}
        onChange={handleTextChange}
      />
      <ExcelReader />
      <JSONExporter />
      <header className={`${theme}-theme App-header`}>
        <SkillsBarChart data={Data.skills} />
      </header>
      <SkillLineDiagram data={Data.skills} />
      <SkillsForm />
    </div>
  );
}

export default App;
