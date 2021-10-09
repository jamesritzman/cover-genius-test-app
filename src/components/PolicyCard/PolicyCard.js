import React from 'react';
import "./PolicyCard.scss";

const PolicyCard = (props) => {
    const {
        id,
        type,
        title,
        description,
        status,
        premium,
        premium_formatted,
        payment_date,
        coverage_start_date,
        coverage_end_date,
        renewal,
        partner
    } = props.data;

    const formatDate = (dateString) => {
        const dateElements = dateString.split("-");
        const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][dateElements[1] - 1];
        return `${dateElements[2]}-${month}-${dateElements[0]}`;
    };

    const coverageDatesSecondaryInfo = () => {
        return coverage_end_date ?
            (
                <div className="coverage-dates-secondary">
                    <p>Coverage dates</p><p className="status-text-active">Active &bull;</p>
                </div>
            )
            : (
                <div className="coverage-dates-secondary">
                    <p>Date shipped</p><p className="status-text-expired">Expired &bull;</p>
                </div>
            )
    };

    return(
        <div className="policy-card">
            <div className="policy-card-top">
                <h3>{title}</h3>
                <p>{id} | {description}</p>
            </div>
            <div className="rule"></div>
            <div className="policy-card-bottom">
                <div className="policy-card-coverage-date-info">
                    <p className="coverage-dates">{formatDate(coverage_start_date)} {coverage_end_date ? ` to ${formatDate(coverage_end_date)}` : ""}</p>
                    { coverageDatesSecondaryInfo()}                    
                </div>
                <img src={partner.logo} className="logo" alt="company logo" />
            </div>
        </div>
    )
};

export default PolicyCard;
