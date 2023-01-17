import React, { useEffect, useState } from "react";
import NotesService from "../../service/api/NotesService.js";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactModal from "../../components/modals/React_Modal.js";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
export default function ViewNotes() {
  const [notesData, setNotesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(async () => {
    try {
      setIsLoading(true);
      const response = await NotesService.getAllNotes("getNotes");
      setNotesData(response.data.Notes);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleDelete = async (id) => {
    try {
      const isItemDeleted = await NotesService.deleteNotes("delete/" + id);
      if (isItemDeleted.data.success) {
        toast.success(isItemDeleted.data.message);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      width: "40vw",
      height: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
    },
  };
  const handleUpdate = async (id) => {
    const res = await NotesService.updateNotes("update/" + id);
  };

  return (
    <>
      <div class="py-5">
        <div class="Card-Container">
          <div className="cards">
            <div class="row hidden-md-up">
              {isLoading
                ? "Loading"
                : notesData.map((items) => {
                    return (
                      <div class="col-md-6 ">
                        <div class="card">
                          <div class="card-block">
                            <h4 class="card-title">{items.title}</h4>
                            <p class="card-text p-y-1">{items.noteContent}</p>
                            <div className="buttonContainer">
                              <button
                                className="card-btn"
                                onClick={() => setIsOpen(true)}
                              >
                                Show More
                              </button>
                              <div className="edit-detele-btn">
                                <i
                                  className="fa fa-edit"
                                  onClick={() => handleUpdate(items._id)}
                                ></i>
                                <i
                                  className="fa fa-trash-o"
                                  onClick={() => handleDelete(items._id)}
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ReactModal
                          isOpen={modalIsOpen}
                          onRequestClose={modalIsOpen}
                          customStyles={customStyles}
                          modalContent={
                            <div className="SubModalContainer">
                              <div className="emojiContainer">
                                <span className="heading"></span>
                                <i
                                  className="fa fa-close"
                                  onClick={() => setIsOpen(false)}
                                ></i>
                              </div>
                              <div>
                                <h1>{items.title}</h1>
                                <p>{items.noteContent}</p>
                              </div>
                            </div>
                          }
                        ></ReactModal>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
