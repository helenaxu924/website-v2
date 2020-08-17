import React, {Component} from 'react';
import {StyledContactUsButton, StyledLogo, StyledNavbarWrapper, StyledNavItemsWrapper} from "./styles";
import NavItem from "./NavItem/NavItem";
import strings from "../../res/strings";
import wics_logo from "../../res/images/wics_logo.png"

class Navbar extends Component {
  render() {
    return (
      <StyledNavbarWrapper
        text
        fixed='top'>
        <StyledLogo
          src={wics_logo}
          size='tiny'/>
        <StyledNavItemsWrapper>
          <NavItem link={'about'} item={strings.navbar.about}/>
          <NavItem link={'getInvolved'} item={strings.navbar.getInvolved}/>
          <NavItem link={'resources'} item={strings.navbar.resources}/>
          <NavItem link={'committee'} item={strings.navbar.committee}/>
          <NavItem link={'sponsors'} item={strings.navbar.sponsors}/>
          <StyledContactUsButton>
            {strings.navbar.contactUs}
          </StyledContactUsButton>
        </StyledNavItemsWrapper>
      </StyledNavbarWrapper>
    )
  }
}

export default Navbar;