import React from 'react';
import '../../App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typist from 'react-typist';

class DropdownSelector extends React.Component {
    constructor() { 
        super();

        this.state = { // Setting the initial states of the dropdown
            dropdownOpen: false,
            itemSelected: false,
            dropdownValue: '',
        }

        // Here we are declaring the variables of:
        //  - toggle
        //  - onMouseEnter
        //  - onMouseLeave
        //  - itemSelected
        //  - hoverSelectItem
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.itemSelected = this.itemSelected.bind(this);
        this.hoverSelectItem = this.hoverSelectItem.bind(this);
    }

    // This function sets the state of dropdownOpen 
    // to the opposite of what it is when toggle() is called
    toggle() {
        this.setState(state => ({ // passing in current state (state) and reversing it
            dropdownOpen: !state.dropdownOpen
        }));
    }

    // When mouse enters area then open dropdown
    onMouseEnter() { 
        this.setState({dropdownOpen: true});
    }

    // When mouse exits area then close dropdown
    onMouseLeave() {
        this.setState({dropdownOpen: false});
      }

      // When hovering over dropdown items set the dropdown value to that page name
      // ** NOT in use currently (here still, for reference)
      hoverSelectItem(pageName) { 
          if (this.itemSelected) {
            this.setState({dropdownValue: pageName});
          } else { 
              return(false);
          }
      }

      itemSelected(pageName) { 
          this.setState({dropdownValue: pageName, itemSelected: true});
          return(pageName, true);
      }

      render() { 
        return(
            <div>
                    <div className="btn-group dropdown d-inline-block">
                        <button type="button" className="my-drop-down" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div>
                                {this.state.itemSelected === true ? (
                                    <span>{this.state.dropdownValue}</span>
                                        ) : (
                                                <Typist className='dropdown-text-prompt'>
                                                <Typist.Delay ms={4500}/>
                                                    [click here to find out more]<Typist.Backspace count={18} delay={5000}/>... or scroll down]
                                                </Typist>
                                )}
                            </div>
                        </button>
                        <div id="dropdown" className="my-dropdown-menu dropdown-menu">
                            <AnchorLink offset='100' href="/about" className="my-dropdown-item dropdown-item">about</AnchorLink>
                            <AnchorLink offset='100' href="/projects" className="my-dropdown-item dropdown-item">projects</AnchorLink>
                            <AnchorLink offset='100' href="/skills" className="my-dropdown-item dropdown-item">skills</AnchorLink>
                            <AnchorLink offset='100' href="/resume" className="my-dropdown-item dropdown-item">resumé</AnchorLink>
                        </div>
                    </div>
                </div>  
        );
      }
}


export default DropdownSelector;