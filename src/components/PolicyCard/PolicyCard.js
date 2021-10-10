import React, { useState } from 'react';
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

    const [isActive, setIsActive] = useState(false);

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const formatDate = (dateString) => {
        const dateElements = dateString.split("-");
        const month = months[dateElements[1] - 1];
        return `${dateElements[2]}-${month}-${dateElements[0]}`;
    };

    const formatDateFromIso = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    const capitalizeFirstLetter = (string) => {
        const firstLetter = string.slice(0, 1);
        const remainder = string.slice(1);
        return `${firstLetter.toUpperCase()}${remainder}`;
    }

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
        <div className={`policy-card ${isActive ? "active" : ""}`} onClick={() => {setIsActive(!isActive)}}>
            <div className="policy-card-top">
                <div className="circle-chevron-icon">&gt;</div>
                <div className="title-description-wrapper">
                    <h3>{title}</h3>
                    <p>{id} | {description}</p>                    
                </div>
                <img src={partner.logo} className="logo-top" alt="company logo" />
            </div>
            <div className="rule"></div>
            <div className="policy-card-bottom">
                <div className="payment-date">
                    <p>{formatDateFromIso(payment_date)}</p>
                    <p>Payment date</p>
                </div>
                <div className="policy-card-coverage-date-info">
                    <p className="coverage-dates">{formatDate(coverage_start_date)} {coverage_end_date ? ` to ${formatDate(coverage_end_date)}` : ""}</p>
                    { coverageDatesSecondaryInfo()}                    
                </div>
                <div className="price-premium">
                    <p>{premium_formatted}</p>
                    <p>Price/Premium</p>
                </div>
                {
                    renewal ? (
                        <div className="renewal">
                            <p>{capitalizeFirstLetter(renewal)}</p>
                            <p>Renewal</p>
                        </div>
                    ) : (
                        null
                    )
                }
                <img src={partner.logo} className="logo-bottom" alt="company logo" />
            </div>
            <img src={partner.logo} className="logo-side" alt="company logo" />
        </div>
    )
};

export default PolicyCard;
