import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class FloatReact extends React.Component {
    
    constructor() { 
        super();

        this.state = { 
            y: -window.innerHeight,
        }

        this.moveY = this.moveY.bind(this);
    }

    componentDidMount() {
        const min = 10;
        const max = 25;
        const rand = min + Math.random() * (max - min);
        this.timerID = setInterval(
            () => this.moveY(),
            rand
        );
    }

    moveY() { 
        if(this.state.y === -window.innerHeight){
            this.setState({y: window.innerHeight})
        } else {
            var x = this.state.y - 1;
            this.setState({y: x})
            
        }
    }

      render() {
          return (
            <Draggable
            axis="y"
            handle=".handle"
            defaultPosition={{x: 400, y: -window.innerHeight}}
            position={{x: 400, y: this.state.y}}
            // grid={[25, 25]}
            scale={1}
            onStart={() => false}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            
              <div className="handle" style={{color: 'white'}}>
                  <img src="./langIcons/react.svg" height={200} width={150}/>
                </div>
            
          </Draggable>
          );
      }
}

export default FloatReact;