import React from 'react';

interface TaskProps {
    message: string;
}

const Task = (props: TaskProps) => {
    return <div>{props.message}</div>;
};

export default Task;
