import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";



export default function Main() {
  const [entry, setEntry] = useState(null);


  // INDEX
  const getEntry = async () => {
    const data = await fetch("http://127.0.0.1:8000/entry/").then((res) => res.json());
    setEntry(data);
  };

  // CREATE
  const createEntry = async (journal) => {
    await fetch("http://127.0.0.1:8000/entry/entrys/", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(journal),
    })
    getEntry();
  };

  // UPDATE
  const updateEntry = async (journal, id) => {
    await fetch("http://127.0.0.1:8000/entry/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(journal),
    })
    getEntry();
  };


  // DELETE
  const deleteEntry = async (id) => {
    await fetch("http://127.0.0.1:8000/entry/" + id, {
        method: "DELETE"
    }); 
    getEntry();
  };
  useEffect(() => {
    getEntry();
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index entry={entry} createEntry={createEntry} />}
        />
        <Route
          path="/entry/:id"
          element={
            <Show
              entry={entry}
              deleteEntry={deleteEntry}
              updateEntry={updateEntry}
            />
          }
        />
      </Routes>
    </main>
  );
}