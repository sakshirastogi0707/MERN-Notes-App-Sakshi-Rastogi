import React from "react";
import AppBar from "../../layouts/header/AppBar";
import CreateNotes from "../../components/notes/CreateNotes";
import ViewNotes from "../../components/notes/ViewNotes";
export default function Notes() {
  return (
    <div>
      <AppBar />
      <CreateNotes />
      <ViewNotes />
    </div>
  );
}
