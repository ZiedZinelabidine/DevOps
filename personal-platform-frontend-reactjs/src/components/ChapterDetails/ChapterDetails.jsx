import DisplayRawHtml from "components/DisplayRawHtml/DisplayRawHtml";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 5px 5px 0px 0px var(--BaseBaseBlack);
  width: 100%;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const TabNavigation = styled.div`
  display: flex;
  margin-bottom: 15px;
  border-bottom: 2px solid #ddd;
`;

const Tab = styled.button`
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "#007bff" : "#666")};
  border-bottom: ${(props) => (props.active ? "2px solid #007bff" : "none")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  &:hover {
    color: #007bff;
  }
`;

const Content = styled.div`
  font-size: 0.9rem;
  color: #333;
  line-height: 1.6;
`;


const ChapterDetails = (props) => {
  const [activeTab, setActiveTab] = useState("Readme");
  const tabContent = {
    Readme: (
      <Content>
        <DisplayRawHtml content={props?.chapter?.description} />
      </Content>
    ),
    Support: (
      <Content>
        {props.support ? (
          <a href={props.support} download>
            Download Support
          </a>
        ) : (
          <p> No support found for this chapter . </p>
        )}
      </Content>
    ),
  };
  return (
    <Container>
      <Title>
        {props?.chapter?.title}
      </Title>
      <TabNavigation>
        {["Readme", "Support"].map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabNavigation>
      {tabContent[activeTab]}
    </Container>
  );
};

export default ChapterDetails;
