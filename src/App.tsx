import React from 'react';
import QuestionsView from './components/QuestionsView';
import RegistrationView from './components/RegistrationView';

const App: React.FC = () => {
  return (
    <div>
      <QuestionsView />
      <RegistrationView />
    </div>
  );
};

export default App;
