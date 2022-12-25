import { useCallback, useEffect } from 'react';
import useCodeMirror from 'src/hooks/code-editor/useCodeMirror';

const style = {
  textAlign: 'left',
  display: "flex",
  width: '50%',
  justifyContent: 'center',
  flexDirection: 'column',
}

const CodeEditor = ({ onChange, initialText, extensions }) => {
  const handleChange = useCallback((state) => onChange(state.doc.toString()), [onChange]);

  const { ref, editorView } = useCodeMirror(handleChange, initialText, extensions);

  useEffect(() => {
    if (editorView) {
      // DO nothing
    } else {
      // do smthg
    }
  }, [editorView]);
  return <div ref={ref} style={style} />;
};

export default CodeEditor;
