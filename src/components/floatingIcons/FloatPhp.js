import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class FloatPhp extends React.Component {
    
    constructor() { 
        super();

        this.state = { 
            y: 1000,
        }

        this.moveY = this.moveY.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.moveY(),
            12
        );
    }

    moveY() { 
        if(this.state.y === -1000){
            this.setState({y: 1000})
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
            defaultPosition={{x: 600, y: 1000}}
            position={{x: 600, y: this.state.y}}
            // grid={[25, 25]}
            scale={1}
            onStart={() => false}
            onDrag={this.handleDrag}
            onStop={this.handleStop}>
            
              <div className="handle" style={{color: 'white'}}>
                  <img src="./langIcons/php.svg" height={200} width={150}/>
                </div>
            
          </Draggable>
          );
      }
}

export default FloatPhp;