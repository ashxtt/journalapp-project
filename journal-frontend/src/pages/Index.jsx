import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index({ entry, createEntry }) {
  const [form, setForm] = useState({
    name: "",
    date: "",
    description: "",
  });

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createEntry(form);
    setForm({
        name: "",
        date: "",
        description: "",
    });
  };

  // loaded function
  const loaded = () =>
    entry.map((journal) => (
      <div key={journal.id} className="Journal">
        <Link to={`/entry/${journal.id}`}>
          <h1>{journal.name}</h1>
        </Link>
        <h3>{journal.date}</h3>
        <h3>{journal.description}</h3>
      </div>
    ));

  const loading = () => <h1>Loading...</h1>;

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="date"
          placeholder="date"
          value={form.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          value={form.description}
          onChange={handleChange}
        />
        <input type="submit" value="Submit"/>
      </form>
      {entry ? loaded() : loading()}
    </section>
  );
}