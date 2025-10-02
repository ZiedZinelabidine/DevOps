import { useState } from "react";
import {
  CommandDisplay,
  LogoDebian,
  LogoRedhat,
  LogoUbuntu,
  MethodButton,
  MethodContainer,
  ProductBar,
  ProductContainer,
  ProductTitleContainer,
  StyleBlocConnection,
  StyledDot,
  StyleServer,
  StyleServerDetailLine1,
  StyleServerDetailLine2,
  StyleServerDetailsBloc,
  StyleServerDetailsColunm,
  StyleStatus,
  StyleStatusServerDetailLine2,
  StyleVersion,
  Table,
  TableCell,
  TableHeader,
  TogglePasswordButton,
  ButtonMessage,
  LoadingMessage
} from "../Style";
import { Spinner } from "react-bootstrap";

const ubuntu = `${process.env.REACT_APP_CDN_ITGALAXY}/products/marketplace/server/ubuntu/ubuntu.png`;
const redhat = `${process.env.REACT_APP_CDN_ITGALAXY}/products/marketplace/server/redhat/redhat.png`;
const debian = `${process.env.REACT_APP_CDN_ITGALAXY}/products/marketplace/server/debian/debian.png`;

const ItGalaxyServerProduct = (props) => {
  const aws_details = JSON.parse(props.data.aws_details.body);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const username = props.data.details.USER;
  const password = props.data.details.PASSWORD;

  const getTagValue = (tags, key) => {
    const tag = tags?.find((tag) => tag.Key === key);
    return tag ? tag.Value : null;
  };
 
  const createdat = getTagValue(aws_details?.instances[0]?.Tags, "DATE_CREATION");
  const turnoff = getTagValue(aws_details?.instances[0]?.Tags, "TURN_OFF");
  
  const ip_public = aws_details?.instances[0]?.PublicIpAddress || "Pending ...";
  const State = aws_details?.instances[0]?.State || "Pending";


  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const commands = {
    ssh: `ssh ${props.data.details.USER}@${ip_public}`,
  };
  const [command, setCommand] = useState(commands.ssh);
  const handleClick = (method) => {
    setCommand(commands[method]);
  };
  return (
    <>
      <StyleServer>
          <ProductBar>
            <ProductTitleContainer>
              <p
                style={{
                  fontWeight: "501",
                  fontSize: "40px",
                  color: "white",
                  fontFamily: "Inter",
                  margin: 0,
                }}
              >
                Welcom to your Server Dashboard{" "}
              </p>
            </ProductTitleContainer>
          </ProductBar>

        <StyleServerDetailsBloc>
          <StyleServerDetailsColunm>
            <StyleServerDetailLine1>Status</StyleServerDetailLine1>
            <StyleStatus>
              <StyleStatusServerDetailLine2 isActive={State === "running"}>
                {" "}
                {State === "Pending" ? (
                   <LoadingMessage>Pending</LoadingMessage>
                ) : State === "running" && ('Running') }

              </StyleStatusServerDetailLine2>
              <StyledDot isActive={State === "running"} />
            </StyleStatus>
          </StyleServerDetailsColunm>

          <StyleServerDetailsColunm>
            <StyleServerDetailLine1>Created At </StyleServerDetailLine1>
            <StyleServerDetailLine2> {createdat} </StyleServerDetailLine2>
          </StyleServerDetailsColunm>

          <StyleServerDetailsColunm>
            <StyleServerDetailLine1> Turn of at </StyleServerDetailLine1>
            <StyleServerDetailLine2> {turnoff} </StyleServerDetailLine2>
          </StyleServerDetailsColunm>

          <StyleServerDetailsColunm>
            <StyleServerDetailLine1>Public Adress</StyleServerDetailLine1>
            <StyleServerDetailLine2>              
            {ip_public === "Pending ..." ? (
              <LoadingMessage>Pending</LoadingMessage>
            ) : (
              ip_public
            )}
             
            </StyleServerDetailLine2>
          </StyleServerDetailsColunm>

          <StyleServerDetailsColunm>
            <StyleServerDetailLine1>Username</StyleServerDetailLine1>
            <StyleServerDetailLine2> {username} </StyleServerDetailLine2>
          </StyleServerDetailsColunm>

          <StyleServerDetailsColunm>
            <StyleServerDetailLine1>Password</StyleServerDetailLine1>
            <StyleServerDetailLine2>
              {isPasswordVisible ? password : "••••••••"}{" "}
              {/* Display password or dots */}
              <TogglePasswordButton onClick={togglePasswordVisibility}>
                {isPasswordVisible ? "👁️" : "👁️‍🗨️"}
              </TogglePasswordButton>
            </StyleServerDetailLine2>
          </StyleServerDetailsColunm>
          <StyleServerDetailsColunm>
            <StyleServerDetailLine1 > Contact Support </StyleServerDetailLine1>
            <ButtonMessage onClick={props.setShowModalSupport} >
              Send a message
            </ButtonMessage>
          </StyleServerDetailsColunm>

        </StyleServerDetailsBloc>
        <hr />

        <StyleBlocConnection>
          <StyleServerDetailLine1> Server Connection : </StyleServerDetailLine1>
          <Table>
            <thead>
              <tr>
                <TableHeader colSpan={2}>
                  <MethodContainer>
                    <MethodButton
                      isSelected={command === commands.ssh}
                      onClick={() => handleClick("ssh")}
                    >
                      ssh
                    </MethodButton>
                  </MethodContainer>
                </TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell colSpan={2}>
                  <CommandDisplay>
                     {State === "Pending" ? <Spinner /> : <pre>{command}</pre>}                  
                  </CommandDisplay>
                </TableCell>
              </tr>
            </tbody>
          </Table>
        </StyleBlocConnection>
      </StyleServer>
    </>
  );
};

export default ItGalaxyServerProduct;
