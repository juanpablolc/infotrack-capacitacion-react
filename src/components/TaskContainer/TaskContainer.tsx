import React, { useState } from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import Task from '../Task/Task';

const TaskContainer = () => {
    const [taskList, setTaskList] = useState<string[]>([]);

    const addTask = (task: string) => {
        const taskListCopy = [...taskList];
        taskListCopy.push(task);
        setTaskList(taskListCopy);
    };

    return (
        <div>
            <AddTaskForm addTask={addTask} />
            {taskList.map((t, indice) => {
                return <Task key={indice} message={t} />;
            })}
        </div>
    );
};

export default TaskContainer;
