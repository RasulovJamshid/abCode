import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";
import CodeBlockSnippets from "../helpers/CodeBlockSnippets"
// import PropTypes from 'prop-types';

import "../../styles/challenge-description.css";

// const propTypes = {
//   description: PropTypes.string,
//   instructions: PropTypes.string,
//   section: PropTypes.string
// };

class ChallengeDescription extends Component {
  constructor(props) {
    super(props);
    this.state={
      markdown:" ",
      pre:" ",
    }
    this.markRef=React.createRef();
  }

  componentWillMount() {
    const readmePath = require("./../../external/Challenge/Intro.md");
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: text
        });
        this.props.precode(this.markRef.current.getElementsByTagName("pre")[2].innerText);
      }
      )
  }

  render() {
    return (
      <div ref={this.markRef} className="challenge-instructions">
           <ReactMarkdown renderers={{ code: CodeBlockSnippets }} className="mark" escapeHtml={false} source={this.state.markdown}/>
      </div>
    );
  }
}

ChallengeDescription.displayName = 'ChallengeDescription';

const mapDispatchToProps=(dispatch)=>({
  precode:(val)=>dispatch({type:"PRECODE",payload:val})
})

 
export default connect(null,mapDispatchToProps)(ChallengeDescription);