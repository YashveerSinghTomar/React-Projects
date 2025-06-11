import { useState } from 'react';

function TaskForm({ onAdd, darkMode }) {
    const [title, setTitle] = useState('');
    const [dateTime, setDateTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !dateTime) return;
        onAdd({ title, dateTime });
        setTitle('');
        setDateTime('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="row g-2">
                <div className="col-md-5">
                    <input
                        type="text"
                        className={`form-control ${darkMode ? 'bg-dark text-white border-secondary' : ''}`}
                        placeholder="Task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="datetime-local"
                        className={`form-control ${darkMode ? 'bg-dark text-white border-secondary' : ''}`}
                        value={dateTime}
                        onChange={(e) => setDateTime(e.target.value)}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-outline-primary w-100">Add Task</button>
                </div>
            </div>
        </form>
    );
}

export default TaskForm;
