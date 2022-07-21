import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const divStyle = {
  width: '440px',
  display: 'flex',
  paddingTop: '20px',
  paddingBottom: '20px',
  justifyContent: 'center',
  background: '#e7ecf2',
};

export const App = () => {
  return (
    <>
      <div style={divStyle}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div style={divStyle}>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div style={divStyle}>
        <Statistics stats={data} />
      </div>
      <div style={divStyle}>
        <FriendList friends={friends} />
      </div>
      <div style={divStyle}>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
