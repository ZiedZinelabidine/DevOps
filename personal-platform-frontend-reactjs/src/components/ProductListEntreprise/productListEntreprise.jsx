import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useGetTrainingsQuery } from "../../redux/api/training/trainingApi";
import { FilterContainer } from "../ComponnentProfilItems/profilfreelances/styled";
import PaginatedComponent from "../PaginationComponent/PaginationComponent";
import Filter from "../filter/filter";
import { ProductItemEntreprose } from "./ProductItemEntreprise/ProductItemEntreprise";

const ProductListEntreprise = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterSearch, setFilterSearch] = useState();
  const itemsPerPage = 5;
  const {
    data: trainingsData,
    error,
    isLoading,
  } = useGetTrainingsQuery(`?page=${currentPage}`);

  const chunkArray = (arr, size) => {
    const results = [];
    while (arr.length) {
      results.push(arr.splice(0, size));
    }
    return results;
  };
  const rows = trainingsData ? chunkArray([...trainingsData.data], 3) : [];
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Produits</h1>
        <Form
          inline
          style={{
            width: "100%",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={() => {}}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={null}
            style={{ width: "80%" }}
            onChange={() => {}}
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Form>
        <div
          className="pagechanel"
          style={{ marginTop: "50px", width: "100%", display: "inline-flex" }}
        >
          <div
            className="itemprofil"
            id="Createprojet"
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "10px",
              width: "20%",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            {/* <StyledInputGroup style={{ width: "100%" }}>
              <Form.Control
                type="text"
                placeholder="Cherchez..."
                value={null}
                onChange={() => {}}
                style={{
                  borderRadius: "6px",
                  backgroundColor: "#f5f5f5",
                  height: "46px",
                  width: "100%",
                }}
              />
            </StyledInputGroup> */}
            <FilterContainer>
              <Filter
                filterSearch={filterSearch}
                setFilterSearch={setFilterSearch}
              />
            </FilterContainer>
          </div>
          <div className="container-fluid" id="publicchanel">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                {row.map((training) => (
                  <ProductItemEntreprose key={training.id} item={training} />
                ))}
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PaginatedComponent
                itemsPerPage={itemsPerPage}
                totalItems={trainingsData?.pagination?.totalproducts}
                currentPage={currentPage}
                totalPages={trainingsData?.pagination?.totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductListEntreprise;
