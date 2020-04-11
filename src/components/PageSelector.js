import React from 'react';
import '../App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class PageSelector extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
          dropdownOpen: false
        };
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

  render() { 
    return (
       
              <form id="form"> 
                
                <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="my-drop-down">
                        
                    </DropdownToggle>
                    <DropdownMenu className="my-dropdown-menu">
                        <DropdownItem className="my-dropdown-item">ABOUT_ME</DropdownItem>
                        <DropdownItem className="my-dropdown-item">PROJECTS</DropdownItem>
                        <DropdownItem className="my-dropdown-item">CONTACT</DropdownItem>
                        <DropdownItem divider />
                    </DropdownMenu>
                </Dropdown>
                
              </form>
        
    );
  }
}

export default PageSelector;