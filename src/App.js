import React, { Fragment } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PolicyCardsContainer from './components/PolicyCardsContainer/PolicyCardsContainer';

/*
    API: https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking
    policies: [
        {
            id: string
            type: string
            title: string
            description: string
            status: string
            premium: number
            premium_formatted: string
            payment_date: string (ISO date)
            coverage_start_date: string (yyyy-mm-dd)
            coverage_end_date: null or string (yyyy-mm-dd)
            renewal: null or string
            partner: {id, name, logo}
        }
    ]
*/

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <Fragment>
            <h1>Your policies</h1>
            <PolicyCardsContainer />
        </Fragment>
    </QueryClientProvider>
);

export default App;
