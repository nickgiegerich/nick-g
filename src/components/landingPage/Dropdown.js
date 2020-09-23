import React from 'react';
import '../../App.css';
import Execute from './Execute';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
                
                    <div>
                    <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="my-drop-down">
                            <div>
                                {this.state.itemSelected === true ? (
                                    <span>{this.state.dropdownValue}</span>
                                        ) : (
                                                <Typist>
                                                <Typist.Delay ms={2000}/>
                                                    [Hover Here]<Typist.Backspace count={11} delay={1000}/>... Waiting]<Typist.Backspace count={8} delay={4000}/>Select one]
                                                </Typist>
                                )}
                        </div>
                        </DropdownToggle>
                        <DropdownMenu className="my-dropdown-menu">
                            <DropdownItem onClick={() => this.itemSelected('about')} className="my-dropdown-item">about</DropdownItem>
                            <DropdownItem onClick={() => this.itemSelected('job-experience')} className="my-dropdown-item">job experience</DropdownItem>
                            <DropdownItem onClick={() => this.itemSelected('projects')} className="my-dropdown-item">projects</DropdownItem>
                            <DropdownItem onClick={() => this.itemSelected('client work')} className="my-dropdown-item">client work</DropdownItem>
                            <DropdownItem onClick={() => this.itemSelected('contact')} className="my-dropdown-item">contact</DropdownItem>
                            <DropdownItem divider />
                        </DropdownMenu>
                    </Dropdown>
                    </div>
                    <div className="d-flex justify-content-center pt-5">
                        <Execute itemSelected={this.state.itemSelected} pageName={this.state.dropdownValue}/>
                    </div>
                </div>  
        );
      }
}


export default DropdownSelector;