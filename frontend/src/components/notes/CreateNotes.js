import React from "react";
import NotesBanner from "../banner/notesBanner";
import notesBannerImg from "../../assets/images/banner_4.avif";

import "./style.css";
export default function CreateNotes() {
  return (
    <>
      <NotesBanner
        title="NOTES+1"
        subHeading="Create Your Notes Now"
        image={notesBannerImg}
      />
    </>
  );
}
