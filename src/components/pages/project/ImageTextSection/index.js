import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";
import styled from "styled-components";
import Grid from "components/global/Grid";
import PageContainer from "components/global/PageContainer";
import Text from "components/global/Text";

const StyledText = styled(Text)`
  padding-top: 15px;
  white-space: pre-line;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 0;
  }
`;

const StyledSectionContainer = styled(PageContainer)`
  border-top: solid ${(props) => props.theme.colors.black} 1px;
`;

const StyledImageTextSection = styled(Grid)`
  padding-top: 15px;
  padding-bottom: 60px;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 25px;
  }
`;

const StyledSectionImage = styled(SanityImage)`
  max-height: calc(100vh - 60px);
  grid-column: span 4;
  margin-bottom: 30px;
  width: 100%;
  object-fit: cover;
  @media ${(props) => props.theme.minWidth.md} {
    max-height: calc(100vh - 80px);
    grid-column: ${({ islandscape }) =>
      islandscape === "true" ? "span 7" : "span 4"};
    margin-bottom: 50px;
  }
`;

const StyledSectionText = styled(StyledText)`
  grid-column: span 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 4 / 6;
  }
`;

const ImageTextSection = ({ image, text, orientation }) => {
  if (image) {
    const isLandscape = orientation === "landscape";
    if (text) {
      return (
        <StyledSectionContainer key={text}>
          <StyledImageTextSection>
            <StyledSectionImage
              {...image}
              width={1200}
              islandscape={isLandscape.toString()}
              alt={`Section image ${text}`}
            />
            <StyledSectionText>{text}</StyledSectionText>
          </StyledImageTextSection>
        </StyledSectionContainer>
      );
    } else {
      return (
        <StyledSectionContainer key={text}>
          <StyledImageTextSection>
            <StyledSectionImage
              {...image}
              width={1200}
              alt={`Section image ${text}`}
            />
          </StyledImageTextSection>
        </StyledSectionContainer>
      );
    }
  } else {
    return (
      <StyledSectionContainer key={text}>
        <StyledImageTextSection>
          <StyledSectionText>{text}</StyledSectionText>
        </StyledImageTextSection>
      </StyledSectionContainer>
    );
  }
};

export default ImageTextSection;
