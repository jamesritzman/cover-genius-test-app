import React from 'react';

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

    return(
        <div>
            <h3>{title}</h3>
            <p>{id} | {description}</p>
            <p>{coverage_start_date} {coverage_end_date ? ` to ${coverage_end_date}` : ""}</p>
        </div>
    )
};

export default PolicyCard;
