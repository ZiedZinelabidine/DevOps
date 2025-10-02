import { useCallback, useEffect, useState } from "react";
import { FormItemChatbot } from "./FormItemChatBot/FormItemChatbot";
import {
  BackButton,
  GlobalChatBotContainer,
  InlineBlockMarginTop20PxContainer,
  InlineFlexContainer,
  MarginLeft40PxFullWidthInlineBlockContainer,
} from "./GenericFormChatbot.style";

const chatBotIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/images/chatbox.png`;
const Vector = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/Vector.svg`;


export const GenericFormChatbot = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textData, setTextData] = useState();
  const [textTyped, setTextTyped] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    skills: [],
  });

  const [shownItems, setShownItems] = useState([props.items[0]]);

  useEffect(() => {
    const formValuesArray = Object.keys(formValues).map(
      (key) => formValues[key]
    );
    const value = formValuesArray[currentIndex - 1];

    if (
      currentIndex - 1 < formValuesArray.length &&
      value !== undefined &&
      value !== null &&
      value !== "" &&
      (!Array.isArray(value) || (Array.isArray(value) && value.length > 0))
    ) {
      setShownItems((prevItems) => [...prevItems, props.items[currentIndex]]);
      setCurrentIndex(currentIndex + 1);
      setTextData(undefined);
    }
  }, [currentIndex, props.items, formValues]);

  const handleNext = useCallback(() => {
    if (currentIndex < props.items.length - 1) {
      setShownItems((prevItems) => [
        ...prevItems,
        props.items[currentIndex + 1],
      ]);
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, props.items]);

  const handleBack = useCallback(() => {
    props.setSelected(false);
    props.setSelectedOption("");

    setCurrentIndex(0);
    setShownItems([props.items[0]]);
    setFormValues({
      title: "",
      description: "",
      skills: [],
    });
    setTextData(undefined);
    setTextTyped(false);
  }, [props]);

  return (
    <GlobalChatBotContainer>
      <InlineFlexContainer>
        <BackButton onClick={handleBack} type="button">
        <img src={Vector} style={{ width: "0.83vw" }} alt="vector" />

        </BackButton>
        <img
          src={chatBotIcon}
          style={{ marginLeft: "40px" }}
          width={100}
          height={80}
          alt="image"
        />
        <MarginLeft40PxFullWidthInlineBlockContainer>
          <h1>
            <b>Hi, I'm Anakin</b>
          </h1>
          <p style={{ width: "100%" }}>
            I guide you through the steps of finding the best profiles for
            creating your team to realize your business
          </p>
        </MarginLeft40PxFullWidthInlineBlockContainer>
      </InlineFlexContainer>
      <br />
      <hr />
      <InlineBlockMarginTop20PxContainer>
        <div>
          {shownItems.map((item, index) => (
            <div key={index}>
              <FormItemChatbot
                setRedirect={props.setRedirect}
                formValues={formValues}
                setFormValues={setFormValues}
                img={item?.img}
                index={index}
                items={props.items}
                name={item?.name}
                placeholder={item.placeholder}
                textTyped={textTyped}
                setTextTyped={setTextTyped}
                textData={textData}
                setTextData={setTextData}
                title={item?.title}
                chattype={props.selectedOption}
                onNext={handleNext}
                question={item?.question}
              />
              <br />
            </div>
          ))}
        </div>
      </InlineBlockMarginTop20PxContainer>
    </GlobalChatBotContainer>
  );
};
