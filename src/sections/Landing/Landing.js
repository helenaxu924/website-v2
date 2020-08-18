import React, {Component} from 'react';
import {
  StyledChevronDown,
  StyledGridLeftColumn,
  StyledGridRightColumn,
  StyledGridWrapper,
  StyledLandingImage,
  StyledLearnMoreText,
  StyledLearnMoreWrapper,
  StyledMailingButton,
  StyledSchoolName,
  StyledSocial,
  StyledSocialWrapper,
  StyledUndergrad,
  StyledWics
} from "./styles";
import strings from "../../res/strings";
import placeholder from "../../res/images/placeholder.png";
import facebook from "../../res/images/fb.svg";
import instagram from "../../res/images/ig.svg";
import linkedin from "../../res/images/linkedin.svg";

// Landing page component
class Landing extends Component {
  render() {
    return (
      <div>
        <StyledGridWrapper columns={2}>
          {/*Left column - Text*/}
          <StyledGridLeftColumn width={8} verticalAlign='middle'>
            <StyledSchoolName>
              {strings.landing.uwaterloo}
            </StyledSchoolName>
            <StyledWics>
              {strings.landing.wics}
            </StyledWics>
            <StyledUndergrad>
              {strings.landing.undergrad}
            </StyledUndergrad>
            <StyledSocialWrapper>
              <StyledSocial src={facebook}/>
              <StyledSocial src={instagram}/>
              <StyledSocial src={linkedin}/>
            </StyledSocialWrapper>
            <StyledMailingButton>
              {strings.landing.mailing}
            </StyledMailingButton>
          </StyledGridLeftColumn>

          {/*Right column - Image*/}
          <StyledGridRightColumn width={8} verticalAlign='middle'>
            <StyledLandingImage src={placeholder}/>
          </StyledGridRightColumn>
        </StyledGridWrapper>

        {/*Learn more*/}
        <StyledLearnMoreWrapper>
          <StyledLearnMoreText>
            {strings.landing.learnMore}
          </StyledLearnMoreText>
          <StyledChevronDown
            name='chevron down'
            size='big'/>
        </StyledLearnMoreWrapper>
      </div>
    )
  }
}

export default Landing;