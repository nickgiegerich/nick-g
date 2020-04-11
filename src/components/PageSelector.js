import React from 'react';
import '../App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Typist from 'react-typist';



class PageSelector extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        
        this.state = {
          dropdownOpen: false,
          itemSelected: false,
          initialValue: ''
        };
        this.itemSelected = this.itemSelected.bind(this);
      }

      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

      onMouseEnter() {
        this.setState({dropdownOpen: true});
      }
    
      onMouseLeave() {
        this.setState({dropdownOpen: false});
      }

      itemSelected(page) { 
          this.setState({
              initialValue: page,
              itemSelected: true

          })
          console.log('itemSelected:', this.state.itemSelected);
          console.log('initialValue:', this.state.initialValue);
      }



  render() { 

    return (
              <form id="form"> 
                
                <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="my-drop-down">
                        <div >
                            {this.state.itemSelected === true ? (
                                <span>{this.state.initialValue}</span>
                            ) : (
                                <Typist>
                                        <Typist.Delay ms={2000}/>
                                        [Choose Something]<Typist.Backspace count={18} delay={500}/>[Hover Here]<Typist.Backspace count={11} delay={1000}/>... Waiting]<Typist.Backspace count={8} delay={4000}/>Select one]
                                </Typist>
                            )}
                        </div>
                    </DropdownToggle>
                    <DropdownMenu className="my-dropdown-menu">
                        <DropdownItem onClick={() => this.itemSelected('ABOUT_ME')} className="my-dropdown-item">ABOUT_ME</DropdownItem>
                        <DropdownItem onClick={() => this.itemSelected('PROJECTS')} className="my-dropdown-item">PROJECTS</DropdownItem>
                        <DropdownItem onClick={() => this.itemSelected('CONTACT')} className="my-dropdown-item">CONTACT</DropdownItem>
                        <DropdownItem divider />
                    </DropdownMenu>
                </Dropdown>
                
              </form>
        
    );
  }
}

export default PageSelector;