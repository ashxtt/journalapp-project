import { useParams, useNavigate } from "react-router";
import { useState } from "react";

export default function Show({ entry, updateEntry, deleteEntry }) {
  const { id } = useParams();
  const journal = entry.find((journal) => journal.id === parseInt(id));
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState(journal);

  const handleChange = (evt) => {
    setEditForm({
      ...editForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateEntry(editForm, id);
    navigate("/");
  };

  const removeJournal = () => {
    deleteEntry(id);
    navigate("/");
  };

  return (
    <div className="journal">
      <h1>{journal.name}</h1>
      <h2>{journal.description}</h2>
      <h2> src={journal.date} alt={journal.name}</h2>
      <button id="DELETE" onClick={removeJournal}>
        Delete
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={editForm.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="date"
          value={editForm.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Write Entry Here..."
          value={editForm.description}
          onChange={handleChange}
        />
        <input type="submit" value="Edit" />
      </form>
    </div>
  );
}