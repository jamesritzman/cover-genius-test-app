import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";
import PolicyCard from '../PolicyCard/PolicyCard';

const renderPolicyCards = (allPolicyData) => {
    return allPolicyData.map((policyInfo) => {
        return (
            <PolicyCard data={policyInfo} key={policyInfo.id} />
        )
    });
}

const PolicyCardsContainer = () => {

    const {isLoading, error, data} = useQuery("policy-data", () => 
        fetch(
            "https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking"
        ).then((response) => response.json())
    );

    if (isLoading) return "Loading...";

    if (error) return "Error: " + error;

    console.log("data: ", data);

    return (
        <>
            {/* <ReactQueryDevtools initialIsOpen /> */}
            { renderPolicyCards(data.policies) }
        </>
    )
}

export default PolicyCardsContainer;
