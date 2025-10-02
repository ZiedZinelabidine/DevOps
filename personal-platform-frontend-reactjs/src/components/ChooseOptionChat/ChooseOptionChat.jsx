import {
  ArrowBlock,
  BorderedFWPad2BR10Container,
  CenteredH5vhContainer,
  InlineBlockContainer,
} from "./ChooseOptionChat.style";

const ArrowIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/akar-icons-arrow-up-right.svg`;

export const ChooseOptionChat = (props) => {
  return (
    <BorderedFWPad2BR10Container>
      <b>{props.header1}</b>
      <p>{props.header2}</p>
      <InlineBlockContainer>
        {props.items.map((item) => (
          <CenteredH5vhContainer
            key={item}
            onClick={() => {
              props.setSelected(true);
              props.setSelectedOption(item);
            }}
          >
            {item}
            <ArrowBlock>
              <img src={ArrowIcon} alt="arrow" width={20} height={20} />
            </ArrowBlock>
          </CenteredH5vhContainer>
        ))}
        <br />
        <br />
      </InlineBlockContainer>
    </BorderedFWPad2BR10Container>
  );
};
