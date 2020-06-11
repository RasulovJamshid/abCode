import React, {Suspense} from 'react';
import Loader from "../helpers/Loader"
import { connect } from "react-redux";
import {editorValAct} from "../../redux/store"
// import {  } from "react-monaco-editor";
const MonacoEditor = React.lazy(() => import('react-monaco-editor'));


var monacoThemesDefined = false;
const defineMonacoThemes = monaco => {
  if (monacoThemesDefined) {
    return;
  }
  monacoThemesDefined = true;
  const yellowColor = 'FFFF00';
  const lightBlueColor = '9CDCFE';
  const darkBlueColor = '00107E';
  monaco.editor.defineTheme('vs-dark-custom', {
    base: 'hc-black',
    inherit: true,
    colors: {
      'editor.background': '#211e2f'
    },
    rules: [
      { token: 'delimiter.js', foreground: lightBlueColor },
      { token: 'delimiter.parenthesis.js', foreground: yellowColor },
      { token: 'delimiter.array.js', foreground: yellowColor },
      { token: 'delimiter.bracket.js', foreground: yellowColor }
    ]
  });
  monaco.editor.defineTheme('vs-custom', {
    base: 'vs',
    inherit: true,
    rules: [{ token: 'identifier.js', foreground: darkBlueColor }]
  });
};



class Editor extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      code: "//...type here",
    }
    this.options = {
      fontSize: '18px',
      scrollBeyondLastLine: false,
      selectionHighlight: false,
      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      renderIndentGuides: false,
      minimap: {
        enabled: false
      },
      selectOnLineNumbers: true,
      wordWrap: 'on',
      scrollbar: {
        horizontal: 'hidden',
        vertical: 'auto',
        verticalHasArrows: false,
        useShadows: false,
        verticalScrollbarSize: 5
      },
      parameterHints: {
        enabled: false
      },
      tabSize: 2,
      hover: false,
      dragAndDrop: true,
      lightbulb: {
        enabled: false
      },    };
    this._editor = null;
  }
  editorDidMount = (editor, monaco) => {
    this._editor = editor;
    editor.updateOptions({
      accessibilitySupport:'auto',
    });
    editor.focus();
  };


  shouldComponentUpdate(nextProps,nextState){   //resizes content of editor
    if(nextProps.resize!==this.props.resize||nextProps.precode!==this.props.precode){   // if parent changes 
      nextProps.resize!==this.props.resize&&this._editor.layout();
      return true;
    }
      return false;
  }
  editorWillMount = monaco => {
      defineMonacoThemes(monaco);
    };
    
  onChange(newValue, e) {
    this.props.updateVal(newValue);
    this.setState({code:newValue})
  }
  
  render() {
    const code = this.state.code;
    return (
      <Suspense fallback={<Loader timeout={600}/>}>
        <span >
        <MonacoEditor
          language="html"
          theme="vs-dark"
          value={this.props.precode}
          options={this.options}
          onChange={this.onChange.bind(this)}
          editorDidMount={this.editorDidMount.bind(this)}
          editorWillMount={this.editorWillMount.bind(this)}
          />
        </span>
      </Suspense>
    );
  }
}

const mapStateToProps=(state)=>({
  precode:state.precode
})
const mapDispatchToProps=(dispatch)=>(
  {
    updateVal:(val)=>dispatch(editorValAct(val)),
  }
)
 
export default connect(mapStateToProps,mapDispatchToProps)(Editor);