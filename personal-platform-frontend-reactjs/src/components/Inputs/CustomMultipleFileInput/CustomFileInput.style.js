import styled from "styled-components";

export const StyledInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
`;

export const FileItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const FileName = styled.span`
  flex-grow: 1;
  font-family: bold;
  margin-left: 10px;
`;

export const DeleteButton = styled.div`
  background-color: : white;
  margin-left: 50px;
  color: black;
  font-size: 30px;
  font-family: bold;
  cursor: pointer;

`;

export const FileInfo = styled.div`
  display: flex;
`;

export const FileList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Wrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #f9f9f9;
  max-width: 400px;
  margin: 0 auto;
`;
