import React from "react";
import styled from "styled-components";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import PageContainer from "components/global/PageContainer";
import Grid from "components/global/Grid";
import Text from "components/global/Text";
import CtaSlider from "assets/icons/CtaSlider.svg";

const StyledBlockContainer = styled(PageContainer)`
  border-top: solid ${(props) => props.theme.colors.black} 1px;
`;

const StyledContentBlock = styled(Grid)`
  padding-top: 15px;
  padding-bottom: 60px;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 25px;
  }
`;

const StyledReactCompareSlider = styled(ReactCompareSlider)`
  grid-column: span 4;
  margin-bottom: 30px;
  max-height: calc(100vh - 60px);
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: span 7;
    margin-bottom: 50px;
    max-height: calc(100vh - 80px);
  }
`;

const HandleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledVerticalLine = styled.div`
  position: absolute;
  width: 5px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  z-index: 1;
`;

const StyledButton = styled.button`
  all: unset;
  font-size: 56px;
  border-radius: 50%;
  z-index: 2;
`;

const StyledText = styled(Text)`
  padding-top: 15px;
  white-space: pre-line;
  @media ${(props) => props.theme.minWidth.md} {
    padding-top: 0;
  }
`;

const StyledBlockText = styled(StyledText)`
  grid-column: span 4;
  @media ${(props) => props.theme.minWidth.md} {
    grid-column: 4 / 6;
  }
`;

const BeforeAfterSlider = ({ imageBefore, imageAfter, text }) => {
  const beforeSrc = `${imageBefore.asset.url}?w=1200&auto=format`;
  const afterSrc = `${imageAfter.asset.url}?w=1200&auto=format`;
  return (
    <StyledBlockContainer>
      <StyledContentBlock>
        <StyledReactCompareSlider
          handle={
            <HandleContainer>
              <StyledButton>
                <img src={CtaSlider} alt="" />
              </StyledButton>
              <StyledVerticalLine />
            </HandleContainer>
          }
          itemOne={
            <ReactCompareSliderImage src={beforeSrc} alt="Image avant" />
          }
          itemTwo={<ReactCompareSliderImage src={afterSrc} alt="Image après" />}
        />

        <StyledBlockText>{text}</StyledBlockText>
      </StyledContentBlock>
    </StyledBlockContainer>
  );
};

export default BeforeAfterSlider;
