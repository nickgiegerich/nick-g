import React from 'react';
import '../App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Typist from 'react-typist';
import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';
import bounceIn from 'react-animations/lib/bounce-in';
import fadeIn from 'react-animations/lib/fade-in';
import bounceOut from 'react-animations/lib/bounce-out';



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
        this.hoverSelectItem = this.hoverSelectItem.bind(this);
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

      hoverSelectItem(page) {
          
        if (this.itemSelected) { 
            this.setState({
                initialValue: page
            });
        } else { 
            return(false);
        }
    }

      itemSelected(page) { 
          this.setState({
              initialValue: page,
              itemSelected: true

          })
          return(true);
      }



  render() { 
      const button = this.state.itemSelected ? 'my-button btn btn-success btn-sm' : 'my-button hide';
      const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} 1000ms infinite`;

    return (
              
                
                <div style={{display: 'flex'}}>
                  <Typist>
                    <h1 className="entrance-text">SELECT <span className="wildcard">*</span> FROM</h1>
                  </Typist>
                    <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="my-drop-down">
                            <div >
                                {this.state.itemSelected === true ? (
                                    <span>{this.state.initialValue}</span>
                                ) : (
                                    <Typist>
                                            <Typist.Delay ms={2000}/>
                                            [Hover Here]<Typist.Backspace count={11} delay={1000}/>... Waiting]<Typist.Backspace count={8} delay={4000}/>Select one]
                                    </Typist>
                                )}
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className="my-dropdown-menu">
                            <DropdownItem onMouseOver={() => this.hoverSelectItem('ABOUT')} onClick={() => this.itemSelected('ABOUT')} className="my-dropdown-item">ABOUT</DropdownItem>
                            <DropdownItem onMouseOver={() => this.hoverSelectItem('PROJECTS')} onClick={() => this.itemSelected('PROJECTS')} className="my-dropdown-item">PROJECTS</DropdownItem>
                            <DropdownItem onMouseOver={() => this.hoverSelectItem('CONTACT')} onClick={() => this.itemSelected('CONTACT')} className="my-dropdown-item">CONTACT</DropdownItem>
                            <DropdownItem divider />
                        </DropdownMenu>
                    </Dropdown>

                    <Bounce><button type="submit" className={button}>Execute ></button></Bounce>
                </div>
                
              
        
    );
  }
}

export default PageSelector;