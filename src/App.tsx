import React from 'react';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Task from './components/Task/Task';

const App = () => {
    return (
        <div>
            <AddTaskForm />
            <Task message="1. Reportar horas" />
            <Task message="2. Lavar los platos" />
            <Task message="3. :)" />
        </div>
    );
};

export default App;
