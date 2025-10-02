import React, { useEffect, useState } from "react";
import Pagination from "components/Paginations/Pagination";
import { useGetAccountingAllJobsQuery, useGetAffectedAccountingJobsQuery, useGetMyAccountingJobQuery } from "../../redux/api/accounting/accountingApi";
import ModalAccountingJob from "components/ModalITgalaxy/ModalAccountingJob/ModalAccountingJob";
import { Spinner } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";
import { formConfig } from "./AccountingJobs.constants";
import GenericInput from "../Inputs/GenericInput/GenericInput";
import { priceAccountingJobsData } from '../../data/priceAccountingJobsData'; // Adjust the import path as needed

import {
  SearchBar,
  SearchFilter,
  SearchFilterRegion,
  Wrapper,
  ContainerWrapper,
  CardContainers,
  NotFoundTextStyle,
  Bloc,
  BlocTitle,
  ViewLabelAccountingjobs,
  CardAccountingjobs,
  CardJob,
  DatePost,
  StyleAccountingjobsCount,
  StyleCount,
  StyleCount1,
  StyleI,
  StyleProposalDone,
  JobLabelsContainer,
  ListingAccountingjobs,
  Tag,
  TitleJob,
  WarningMessage
} from "./styled";
import { MapPin } from 'lucide-react'; // Import the MapPin icon from Lucide
export default function AccountingAccountingjobs({ id }) {
  const [showModalAccountingJob, setShowModalAccountingJob] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(20000);
  const [filterType, setFilterType] = useState("All");
  const [location, setLocation] = useState("");

  const formMethods = useForm({});

  const handleChangeFilter = (e) => {
    const value = e.target.value;
    if (value === 'All') { 
      setFilterType(value); 
    } else if (value === 'Company Verification') { 
      setFilterType('COMPANY'); 
    } else if (value === 'Company Creation') { 
      setFilterType('REQUEST_COMPANY_CREATION'); 
    }
      // Reset to first page on filter change
    setCurrentPage(1); 
  };
  
  const {
    data: jobData,
    error: accountingjobsDataError,
    isLoading: accountingjobsDataLoading,
  } = useGetAccountingAllJobsQuery(
    `?page=${currentPage}&limit=${recordsPerPage}&type=${filterType}${location ? `&location=${location}` : ''}`,
    { refetchOnMountOrArgChange: true } // Ensure query refetches on argument change
  );

  

  const getPriceByLocation = (location) => {
    // Find the job data that matches the title
    const job = priceAccountingJobsData.find(job => job?.title?.toLowerCase() === location?.toLowerCase());

    // Return the price or a default value
    return job ? job.price : null; // Return null if location is not found
  };


  const {
    data: jobAffectedData,
    error: accountingjobsAffectedDataError,
    isLoading: accountingjobsAffectedDataLoading,

  } = useGetAffectedAccountingJobsQuery(id);

  const jobDetails = jobAffectedData?.data.map(job => ({
    id: job.job.id, // Get the job ID
    type: job.job.type // Get the job type
  })) || []; // Default to an empty array if jobAffectedData is undefined

  const jobAffectedCount = jobDetails.length;

  const {
    data: myjobData,
    error: myjobDataError,
    isLoading: myjobDataLoading,

  } = useGetMyAccountingJobQuery({id:id , type:'ACCOUNTING'});

  const myjobId = myjobData?.data[0]?.id;


  useEffect(() => {
    if (!accountingjobsDataLoading && jobData) {
      // Any required operations with jobData can be performed here
    }
  }, [jobData, accountingjobsDataLoading,filterType]);



  const handleChangeLocation = (e) => {
    setLocation(e.value);
    setCurrentPage(1);  // Reset to first page on location change
  };

  const handleShowModalAccountingJob = () => {
    setShowModalAccountingJob((prev) => !prev);
    if (showModalAccountingJob) {
      setSelectedItem(null); // Reset selected item when closing modal
    }
  };

  const handleItemClick = (item) => {

    setShowModalAccountingJob(true);
    setSelectedItem(item);
  };

  return (
    <>
      <Wrapper>
        {jobAffectedCount > 5 && (
          <WarningMessage>
            You have already 5 folders in progress. Please complete them to create more.
          </WarningMessage>
        )}
        <ContainerWrapper>
          <ListingAccountingjobs>
            <SearchBar>
              <FormProvider {...formMethods}>
                <SearchFilter>
                  <GenericInput
                    inputObject={{ ...formConfig.filter, label: "Filter" }}
                    onChange={handleChangeFilter}
                    disabledForm={false}
                  />
                </SearchFilter>
                <SearchFilterRegion>
                  <GenericInput
                    inputObject={{ ...formConfig.location, label: "Location" }}
                    onChange={handleChangeLocation}
                    disabledForm={false}
                  />
                </SearchFilterRegion>
              </FormProvider>
            </SearchBar>

            <hr />
            {accountingjobsDataLoading ? (
              <CardContainers>
                <Spinner />
              </CardContainers>
            ) : (
              <>
                <JobLabelsContainer>
                  <ViewLabelAccountingjobs>View all jobs</ViewLabelAccountingjobs>
                  {jobData && (
                    <StyleAccountingjobsCount>
                      <StyleCount1>
                        <StyleCount>{jobData.pagination.totals}</StyleCount> jobs found
                      </StyleCount1>
                    </StyleAccountingjobsCount>
                  )}
                </JobLabelsContainer>

                {jobData && jobData.data.length === 0 ? (
                  <CardContainers>
                    <NotFoundTextStyle>
                      Please change the criteria to find more Accounting jobs ...
                    </NotFoundTextStyle>
                  </CardContainers>
                ) : (
                  <>
                    <CardAccountingjobs>
                      {jobData?.data.map((item) => {
                        // Determine if the job can be applied for and if it's the user's job
                        const canApply = jobDetails.some(job => job.id === item.id && job.type === item.type);
                        const myJob = (item.id === myjobId);
                        const price = getPriceByLocation(item.company_country); // Updated to use location from item
                        const priceString = price !== null ? `Prix : ${price}$` : "Price not available"; // Handle cases where price might be null
                        return (
                          <CardJob
                            key={item.id}
                            onClick={() => handleItemClick(item)}
                            canApply={canApply}
                            myJob={myJob}
                          >
                            <BlocTitle>
                              <TitleJob>
                                {item.type === 'REQUEST_COMPANY_CREATION' ?
                                  `Request Company Creation: ${item.company_name}` :
                                  `Company Verification: ${item.company_name}`}
                              </TitleJob>
                              {item.type === 'COMPANY' && (
                                <StyleProposalDone>
                                  <TitleJob>
                                    {
                                      canApply ? "Already Affected to You" :
                                        (myJob ? "My Request Verification Company" : "Prix : 20$")
                                    }
                                  </TitleJob>
                                </StyleProposalDone>
                              )}
                              {item.type === 'REQUEST_COMPANY_CREATION' && (
                                <StyleProposalDone>
                                  <TitleJob>
                                    {
                                      canApply ? "Already Affected to You" :
                                        (myJob ? `My Request creation Company` : priceString)
                                    }
                                  </TitleJob>
                                </StyleProposalDone>
                              )}
                            </BlocTitle>
                            <Bloc>
                              <DatePost>
                                Posted: {item.createdAt ? new Date(item.createdAt).toDateString() : "Unavailable"}
                              </DatePost>
                              <StyleI>
                              <MapPin size={20} style={{ paddingRight: "10px" }} /> {/* Using Lucide MapPin */}                                {item.company_country}
                              </StyleI>
                            </Bloc>
                            <Tag>
                              {item.type_company}
                            </Tag>
                          </CardJob>
                        );
                      })}

                    </CardAccountingjobs>
                    <div className="col-lg-12 col-md-12 col-12 mt-4">
                      {jobData?.pagination?.totalPages > 1 && (
                        <Pagination
                          nPages={jobData.pagination.totalPages}
                          currentPage={currentPage}
                          setCurrentPage={setCurrentPage}
                        />
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </ListingAccountingjobs>
        </ContainerWrapper>
      </Wrapper>
      {selectedItem &&
        showModalAccountingJob &&
        jobDetails &&
        !jobDetails.some(job => job.id === selectedItem.id && job.type === selectedItem.type) && // Show the modal only if the selected job is not already applied for
        selectedItem.id !== myjobId && // Also ensure the selected job is not the user's own job
        jobAffectedCount < 5 &&
        (  <ModalAccountingJob
            job={selectedItem}
            methods={formMethods}
            confirmShow={showModalAccountingJob}
            closeModal={handleShowModalAccountingJob}
            id={id}
          />
        )
      }
    </>
  );
}

