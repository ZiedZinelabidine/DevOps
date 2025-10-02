import Pagination from "components/Paginations/Pagination";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useGetAffectedAccountingJobsQuery } from "../../redux/api/accounting/accountingApi";
import {
  AllCard,
  CardContainers,
  CardProject,
  CardProjectTitle,
  ContainerWrapper,
  DatePost,
  ListingJobs,
  NotFoundTextStyle,
  StyleAllProjects,
  Wrapper,
} from "./styled";
import WorkingFolder from "./WorkingFolder/WorkingFolder";

export default function MyWorkingFolder({ id }) {
  const [selectedItem, setSelectedItem] = useState("");
  const  [pageJob , setPageJob] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(600000000);
  // Initialize affectedAccountingJobsdata as an empty array
  const [affectedAccountingJobsdata, setAffectedAccountingJobsdata] = useState([]);

  // Fetch user projects with the updated filter and title
  const { data: affectedAccountingJobdata, isLoading: affectedAccountingJobsdataLoading, error: affectedAccountingJobsdataError , refetch} = useGetAffectedAccountingJobsQuery(id);

  useEffect(() => {
    // Check if loading is finished and data is available
    if (!affectedAccountingJobsdataLoading && affectedAccountingJobdata && affectedAccountingJobdata.data) {
      setAffectedAccountingJobsdata(affectedAccountingJobdata.data);
    }
  }, [affectedAccountingJobdata, affectedAccountingJobsdataLoading]); 

  const handlePageJob = () => {
    setPageJob(true);
  };

  const handleClosePageJob = () => {
    setPageJob(false);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setPageJob(true);
  };

  return (
    <> 
    {!pageJob ? (
        <Wrapper>
          <ContainerWrapper>
            <ListingJobs>
              <hr />
              {affectedAccountingJobsdataLoading ? (
                <CardContainers>
                  <Spinner />
                </CardContainers>
              ) : affectedAccountingJobsdataError ? (
                <CardContainers>
                  <NotFoundTextStyle>
                    🚀 Error loading projects, please try again later! 🚀
                  </NotFoundTextStyle>
                </CardContainers>
              ) : (
                <>
                  {affectedAccountingJobsdata.length === 0 ? (
                    <CardContainers>
                      <NotFoundTextStyle>
                         No Working job was affected ... 
                      </NotFoundTextStyle>
                    </CardContainers>
                  ) : (  
                    <>      
                    <AllCard>
                      {affectedAccountingJobsdata.map((affectedaccountingjobdata) => (
                        <CardProject key={affectedaccountingjobdata.id} onClick={() => handleItemClick(affectedaccountingjobdata)}> 
                          <StyleAllProjects>
                          <CardProjectTitle>
                            {affectedaccountingjobdata && affectedaccountingjobdata.job.company_name && (
                           "Company :  " +  affectedaccountingjobdata.job.company_name)}
                          </CardProjectTitle>
                            <DatePost>
                              <span
                                style={{
                                  color:
                                  affectedaccountingjobdata.status === 'COMPANY_CREATED' ? 'green' :
                                  affectedaccountingjobdata.status === 'VALIDATED' ? 'green' :
                                  affectedaccountingjobdata.status === 'ACTION_REQUIRED' ? 'orange' :
                                  affectedaccountingjobdata.status === 'IN_PROGRESS' ? 'orange' :
                                  affectedaccountingjobdata.status === 'REFUSED' ? 'red' :
                                'green' // fallback color
                                }}
                              >Status: {affectedaccountingjobdata.status}</span><br />
                              <span>
                                Created: {affectedaccountingjobdata.createdAt ? new Date(affectedaccountingjobdata.createdAt).toDateString() : 'Date not available'}
                              </span>
                            </DatePost>
                          </StyleAllProjects>
                        </CardProject>
                      ))}
                    </AllCard>
                      <div className="col-lg-12 col-md-12 col-12 mt-4">
                      {affectedAccountingJobdata?.pagination?.totalPages > 1 && (
                        <Pagination
                          nPages={affectedAccountingJobdata.pagination.totalPages}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                        />
                      )}
                    </div>
                    </>
                  )}
                </>
              )}
            </ListingJobs>
          </ContainerWrapper>
        </Wrapper> ) : (
        <WorkingFolder
         job={selectedItem}
         back={handleClosePageJob}
         refetch={refetch}
        />   
      )}
    </>
  );
}
