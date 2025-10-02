import { useIntl } from "react-intl";
import {
  BoxStyle,
  StackStyle,
  TypographyStyle,
} from "../../HomeSliderContent.style";

const FilePresentIcon = `${process.env.REACT_APP_CDN_ITGALAXY}/assets/IconITgalaxy/file-present.svg`;

function AddAuth() {
  const intl = useIntl();
  const filesCount = 4;

  return (
    <StackStyle
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
      direction={"row"}
    >
      <StackStyle spacing={1} direction={"row"}>
        <BoxStyle radius={"5px"} background={"#22C55E1A"} color={"#16A34A"}>
          <p>{intl.formatMessage({ id: "auth.status.done" })}</p>
        </BoxStyle>
        <BoxStyle radius={"5px"} background={"#A855F71A"} color={"#9333EA"}>
          <p>{intl.formatMessage({ id: "auth.status.verify" })}</p>
        </BoxStyle>
      </StackStyle>
      <StackStyle
        direction={"row"}
        style={{ alignItems: "center" }}
        spacing={1}
      >
        <img src={FilePresentIcon} alt="File present indicator" />
        <TypographyStyle>
          {intl.formatMessage(
            { id: "auth.files_count" },
            { count: filesCount }
          )}
        </TypographyStyle>
      </StackStyle>
    </StackStyle>
  );
}

export default AddAuth;
