import React, { useState, Component } from 'react';

interface TaskProps {
    message: string;
}

// COMPONENTE DE CLASE / CLASS-BASED COMPONENT

/* class Task extends Component<TaskProps> {
    state = {
        completed: false,
        // color: '#FFF'
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const stateCopy = { ...this.state };
        stateCopy.completed = !stateCopy.completed;
        this.setState(stateCopy);
    };

    render() {
        return (
            <div>
                {this.props.message}
                <input checked={this.state.completed} onChange={this.handleChange} type="checkbox"></input>
            </div>
        );
    }
} */

// COMPONENTE FUNCIONAL / STATELESS COMPONENT

const Task = (props: TaskProps) => {
    const [completed, setCompleted] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCompleted(!completed);
    };

    return (
        <div>
            {props.message}
            <input checked={completed} onChange={handleChange} type="checkbox"></input>
        </div>
    );
};

export default Task;
