import React from "react";
import Editor from "../components/ChallengeEditor/Editor"
import ChallengeDescription from "../components/ChallengeEditor/Challenge-Description"
import Output from "../components/ChallengeEditor/Output"
import {ReflexContainer,ReflexSplitter,ReflexElement} from 'react-reflex';
import "react-reflex/styles.css";
import Header from "../components/ViewComponents/Header"



class DesktopLayout extends React.Component{
  constructor(props){
    super(props);
    this.state={
      resize:false,
    }
  }
  render(){
    return (
      <div >
        <Header/>
        <ReflexContainer style={{height:"100vh"}} orientation="vertical">

            {/*Description*/}
            <ReflexElement  flex={1}  className="left-pane challenger">
              <div  className="pane-content">
                <ChallengeDescription color="#211e2f"/>
              </div>
            </ReflexElement>


          <ReflexSplitter propagate={true}/>


          {/*Editor*/}
          <ReflexElement onStopResize={()=>(this.setState({resize:!this.state.resize}))} flex={1} style={{overflow:"hidden"}}>
          
            <ReflexContainer flex={1}   key="1" orientation='horizontal'>
              <ReflexElement
                style={{overflow:"hidden",backgroundColor:"#1e1e1e"}}
                resizeHeight={true}
                resizeWidth={true}            
              >
                <Editor resize={this.state.resize} />
              </ReflexElement>

              <ReflexSplitter propagate={true} />

              <ReflexElement
              style={{overflow:"hidden"}}
                flex={0.25}
                propagateDimensions={true}
                renderOnResize={true}
                renderOnResizeRate={20}
              >
                
              </ReflexElement>

            </ReflexContainer>
          )
        </ReflexElement>


        <ReflexSplitter propagate={true}/>

          {/*Result*/}
          <ReflexElement flex={0.7} className="right-pane">
              <div  className="pane-content">
              <Output defaultOutput={"hey"}/>
              </div>
          </ReflexElement>

      </ReflexContainer>
      </div>
    )
  }
}

export default DesktopLayout;