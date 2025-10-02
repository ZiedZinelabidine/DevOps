import styled from "styled-components";
// Container for the entire component
export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  position: relative;
`;

// Dropdown Button for "Projets"
export const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  color: ${({ theme }) => (theme === "light" ? "#333" : "white")};
  user-select: none; // Prevent text selection on double click

  &::after {
    content: "${(props) => (props.isOpen ? "▲" : "▼")}";
    font-size: 12px;
    margin-left: 5px;
  }
`;

// Badge for the number
export const Badge = styled.div`
  background-color: #f0f4ff;
  color: #333;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  margin-right: 10px;
`;

export const AddButton = styled.button`
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: #6366f1;
  color: white;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(99, 102, 241, 0.2);
  
  &:hover {
    background: #4f46e5;
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }
`;

export const MainContent = styled.div`
  padding: 0px 10px;
`;
export const ProjectListContainer = styled.div`
  width: 300px;
  margin-left: -35px;
  min-height: 93vh;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#202124")};
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  border: 1px solid #d0d5dd99;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ListWrapper = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export const DeleteContact = styled.button`
  background: var(--Error-Error100, rgba(228, 98, 111, 1));
  color: white;

  height: 46px;
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background: red; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const ProjectItem = styled.div`
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#202124")};
  border: 1px solid #d0d5dd;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;

  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &:hover {
      border: 1px solid #6366f1;
    }
    
`;

export const ProjectTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const ProjectDescription = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
`;

export const ProjectDate = styled.small`
  color: white;
`;
// Dropdown menu
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 5px;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 180px;
  padding: 8px 0;
`;
export const Option = styled.div`
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ButtonContainerDelete = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteProposalButton = styled.button`
  background: var(--Error-Error100, rgba(228, 98, 111, 1));
  color: white;

  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background: red; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;

export const AcceptProposalButton = styled.button`
  background: var(--Success-Success200, rgba(21, 176, 151, 1));
  color: white;
  margin-left: auto;
  height: 46px;
  width: 200px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  grap: 15px;

  &:hover {
    background: green; // Change background color on hover
    cursor: pointer; // Optional: Change cursor to pointer
  }
`;
