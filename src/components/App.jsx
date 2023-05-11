// import { Test } from './Test';

import Profile from 'components/profile/Profile';
import user from 'data/user.json';

import Statistics from 'components/statistics/Statistics';
import data from 'data/data.json';

import FriendList from 'components/friendList/FriendList';
import friends from 'data/friends.json';

import TransactionHistory from 'components/transactionHistory/TransactionHistory';
import transactions from 'data/transactions.json'


export default function App() {
    return <div>
        {/* <>
            <Test variant="info" elevated>Please update your email!</Test>
            <Test variant="error">There was an error during transaction!</Test>
            <Test variant="success" outlined>Payment received, thank you for your purchase!</Test>
            <Test variant="warning" elevated outlined>Please update your profile contact information</Test>
        </> */}

        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics
            title="Upload stats"
            stats={data}
        />
        
        <FriendList
            friends={friends}
        />

        <TransactionHistory
            items={transactions}
         />
    </div>
}





























