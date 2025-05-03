
import React from 'react';
import NumberList from './components/NumberList';
import Timer from './components/Timer';
import MessageBox from './components/MessageBox';
import UsersList from './components/UsersList';
import withLoading from './components/withLoading';

const UsersListWithLoading = withLoading(UsersList);

function App() {
  return (
    <div className="App">
      <h1>React Практика</h1>

      <h2>1. NumberList</h2>
      <NumberList numbers={[1, 2, 3, 4, 5]} />

      <h2>2. Timer</h2>
      <Timer />

      <h2>3. MessageBox</h2>
      <MessageBox type="success">Успешно!</MessageBox>
      <MessageBox type="error">Грешка!</MessageBox>
      <MessageBox type="warning">Внимание!</MessageBox>

      <h2>4 & 5. UsersList with Loading</h2>
      <UsersListWithLoading />
    </div>
  );
}

export default App;
