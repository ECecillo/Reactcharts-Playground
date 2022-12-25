import { useState, useCallback, useEffect } from 'react';
import { basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap } from '@codemirror/commands';
import { oneDark } from '@codemirror/theme-one-dark';

export default function useCodeMirror(onChange, text, extensions) {
  const [element, setElement] = useState();
  const [editorView, setEditorView] = useState();

  const ref = useCallback((node) => {
    if (!node) return;

    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;
    // Afficher baton verticalement.
    // Comment afficher des graphes intéressants sur la plateforme.
    // Voir avec sylvain sur quelle compo graphique et données utilié.

    const startState = EditorState.create({
      doc: text,
      extensions: [
        basicSetup,
        keymap.of(defaultKeymap),
        ...extensions,
        oneDark,
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            onChange(update.state);
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: element,
    });
    setEditorView(view);

    return () => view?.destroy();
  }, [element]);

  return { ref, editorView };
}
