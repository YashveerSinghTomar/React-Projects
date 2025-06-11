import React, { useState } from 'react';

function TaskItem({ task, onDelete, onEdit, darkMode }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);
    const [newDateTime, setNewDateTime] = useState(task.dateTime);

    const handleSave = () => {
        if (!newTitle || !newDateTime) return;
        onEdit(task.id, { title: newTitle, dateTime: newDateTime });
        setIsEditing(false);
    };

    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center ${darkMode ? 'bg-dark text-white border-secondary' : ''}`}>
            {isEditing ? (
                <>
                    <div className="flex-grow-1 me-2">
                        <input
                            type="text"
                            className={`form-control mb-1 ${darkMode ? 'bg-dark text-white border-secondary' : ''}`}
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <input
                            type="datetime-local"
                            className={`form-control ${darkMode ? 'bg-dark text-white border-secondary' : ''}`}
                            value={newDateTime}
                            onChange={(e) => setNewDateTime(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-success me-2" onClick={handleSave}>
                        <i className="bi bi-check2"></i>
                    </button>
                    <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                        <i className="bi bi-x"></i>
                    </button>
                </>
            ) : (
                <>
                    <div>
                        <h5 className="mb-1">{task.title}</h5>
                        <small>{new Date(task.dateTime).toLocaleString()}</small>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary me-2" onClick={() => setIsEditing(true)}>
                            <i className="bi bi-pencil"></i>
                        </button>
                        <button className="btn btn-outline-danger" onClick={() => onDelete(task.id)}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TaskItem;
