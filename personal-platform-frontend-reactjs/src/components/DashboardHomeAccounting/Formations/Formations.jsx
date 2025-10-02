import { useState } from "react";
import { products } from "../../../utils/fake_data.js";
import CustomText from "../CustomText/CustomText.jsx";
import CustomPaginator from "./CustomPaginator/CustomPaginator.jsx";
import { RootStyle, RowStyle, StackStyle } from "./Formations.style.js";
import FormationsCard from "./FormationsCard/FormationsCard.jsx";
function Formations() {
  const [page, setPage] = useState(1);
  const [animateDirection, setAnimateDirection] = useState("inRight");

  return (
    <RootStyle spacing={5}>
      <CustomText
        headingText={"Explore our featured training courses!"}
        subHeadingText={"Browse our training courses"}
        supportingText={`Sign up for our most popular class, and gain
          essential knowledge that will be very useful to you.`}
      />

      <StackStyle style={{ alignItems: "center" }} spacing={5}>
        <RowStyle spacing={3}>
          {products?.map((value) => (
            <FormationsCard
              key={value.id}
              formation={value}
              animateDirection={animateDirection}
            />
          ))}
        </RowStyle>

        <CustomPaginator
          formationsLength={products?.pagination?.totalPages}
          page={page}
          setAnimateDirection={setAnimateDirection}
          setPage={setPage}
        />
      </StackStyle>
    </RootStyle>
  );
}

export default Formations;
