import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sanitizeHtml from 'sanitize-html';
import {connect} from 'react-redux'
import '../../styles/output.css';

const propTypes = {
  defaultOutput: PropTypes.string,
  output: PropTypes.string
};


class Output extends Component {
  constructor(props){
    super(props);
  }
  render() {

    const { output, defaultOutput,precode } = this.props;
    // const message = sanitizeHtml(output ? output : defaultOutput, );
    const message=output==="type"?precode:output
    return (
      <div>
      <pre
        style={{display:"flex",justifyContent:"center"}}
        className='output-text'
        dangerouslySetInnerHTML={{ __html: message}}
      />
      </div>
    );
  }
}

Output.displayName = 'Output';
Output.propTypes = propTypes;


const mapStateToProps=(state)=>({
  output:state.editorValue,
  precode:state.precode
})


export default connect(mapStateToProps)(Output);