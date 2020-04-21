import React, { useState } from 'react';

interface AddTaskFormProps {
    addTask: (message: string) => void;
}

const AddTaskForm = ({ addTask }: AddTaskFormProps) => {
    const [inputTarea, setInputTarea] = useState<string>('');

    const manejadorInputTarea = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputTarea(event.target.value);
    };

    const manejadorBoton = () => {
        addTask(inputTarea);
        setInputTarea('');
    };

    return (
        <div>
            <input onChange={manejadorInputTarea} type="text" value={inputTarea}></input>
            <button onClick={manejadorBoton}>Agregar tarea</button>
        </div>
    );
};

export default AddTaskForm;
