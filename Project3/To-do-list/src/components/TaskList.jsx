import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onEdit, darkMode }) {
    return (
        <ul className="list-group">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    darkMode={darkMode}
                />
            ))}
        </ul>
    );
}

export default TaskList;
