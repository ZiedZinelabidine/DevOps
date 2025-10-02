import { Pagination } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { ContentFormContainer } from "../../CreateTraining/CreateTraining.style";
import GenericInput from "../../Inputs/GenericInput/GenericInput";
import SharedTrainingItem from "../SharedTrainingItem/SharedTrainingItem";
import { formConfig } from "./SharedTrainingList.constants";
const SharedTrainingList = ({ items, inputForm }) => {
  const formMethods = useForm({
    mode: "onChange",
    shouldFocusError: true,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    formMethods.setValue(name, value);
  };

  return (
    <FormProvider {...formMethods}>
      <div className={"pagechanel"} style={{ marginTop: "100px" }}>
        <div
          className={"container-fluid  d-flex justify-content-end h-full"}
          id={"publicchanel"}
        >
          <div
            className="itemprofil"
            id="Createprojet"
            style={{
              display: "flex",
              width: "100wh",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ContentFormContainer>
              <div className="formulaire">
                <GenericInput
                  inputObject={{
                    ...formConfig.application,
                    label: "Application",
                  }}
                  onChange={(e) => handleChange(e)}
                  disabledForm={false}
                />
                <GenericInput
                  inputObject={{
                    ...formConfig.video_training,
                    label: "Video Training",
                  }}
                  onChange={(e) => handleChange(e)}
                  disabledForm={false}
                />
                <GenericInput
                  inputObject={{
                    ...formConfig.session_training,
                    label: "Formation par session",
                  }}
                  onChange={(e) => handleChange(e)}
                  disabledForm={false}
                />

                <div className="mb-4">
                  {items?.data?.map((item) => (
                    <div style={{ display: "inline-flex" }}>
                      <SharedTrainingItem item={item} />
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pagination>
                  <Pagination.First />
                  <Pagination.Prev />
                  {Array.from(
                    { length: items?.pagination?.totalPages },
                    (_, index) => index
                  ).map((item) => (
                    <Pagination.Item>{item + 1}</Pagination.Item>
                  ))}
                  <Pagination.Next />
                  <Pagination.Last />
                </Pagination>
              </div>
            </ContentFormContainer>
          </div>
        </div>
      </div>
    </FormProvider>
  );
};
export default SharedTrainingList;
