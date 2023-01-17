import React, { useEffect } from "react";
import Button from "../buttons/button";
import ReactModal from "../modals/React_Modal";
import EmojiService from "../../service/api/EmojiService";
import NotesService from "../../service/api/NotesService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
export default function NotesBanner(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [IsOpen1, setIsOpen1] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [filterEmojis, setfilterEmojis] = React.useState([]);
  const [ChoosenEmoji, setChooenemoji] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const [InputValue, setInputValue] = React.useState("");
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "80vw",
      height: "70vh",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
    },
  };
  const customStyles1 = {
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
  useEffect(async () => {
    const response = await EmojiService.getEmoji("emoji");
    setData(response?.data?.emoji);
  }, []);
  var arr = [];
  for (var propName in data) {
    if (data.hasOwnProperty(propName)) {
      var propValue = data[propName];
      arr.push(propValue);
    }
  }
  const onChangeHandler = async (event) => {
    try {
      const inputValue = event.target.value;
      const requestBody = {
        emoji: inputValue,
      };
      const response = await EmojiService.FilterEmoji(
        "emojiFilter",
        requestBody
      );
      setfilterEmojis(response.data.filterEmojis);
    } catch (e) {
      console.log(e);
    }
  };
  const closePopup = () => {
    setIsOpen1(false);
    setfilterEmojis([]);
    setChooenemoji([]);
  };
  const choosenEmoji = (key) => {
    let data = [];
    data = arr[key];
    setChooenemoji([...ChoosenEmoji, data]);
  };
  const choosenEmoji2 = (key) => {
    let data1 = [];
    data1 = filterEmojis[key];

    setChooenemoji([...ChoosenEmoji, data1]);
  };
  const CreateNotes = async () => {
    try {
      const requestBody = {
        title: InputValue,
        noteContent: textAreaValue,
      };
      if (!InputValue) {
        toast.error("Please Enter the Title");
      } else if (!textAreaValue) {
        toast.error("Please Enter the Text");
      } else {
        setLoading(true);
        const response = await NotesService.createNotes("create", requestBody);
        if (response.data.success) {
          toast.success(response.data.meassage);
          setLoading(false);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          toast.error("Not Found");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="bannerContainner">
      <div className="bannerTitle">
        <span className="title">{props.title}</span>
      </div>
      <div className="subHeadingContainer">
        <span className="subHeading2">{props.subHeading}</span>
      </div>
      <Button title="Create Notes" onClick={() => setIsOpen(true)} />
      <img className="bannerIMG" src={props.image} alt="" />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={modalIsOpen}
        customStyles={customStyles}
        modalContent={
          <div className="ModalContainer">
            <div className="HeaderContainer">
              <span className="heading">Create Notes</span>
              <i className="fa fa-close" onClick={() => setIsOpen(false)}></i>
            </div>
            <form className="form">
              <div className="inputItems">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter title"
                  onChange={(e) => setInputValue(e.target.value)}
                ></input>
                <i
                  className="fa fa-smile-o"
                  onClick={() => setIsOpen1(true)}
                ></i>
              </div>

              <textarea
                className="textArea"
                title="name"
                placeholder="Type your note here."
                onChange={(e) => setTextAreaValue(e.target.value)}
              ></textarea>

              <button
                disabled={loading}
                className="modal_btn"
                type="button"
                onClick={() => CreateNotes()}
              >
                Submit
              </button>
            </form>
          </div>
        }
      />

      <ReactModal
        isOpen={IsOpen1}
        onRequestClose={IsOpen1}
        customStyles={customStyles1}
        modalContent={
          <div className="SubModalContainer">
            <div className="emojiContainer">
              <div>
                <input
                  className="inputBox"
                  type="text"
                  onChange={(e) => onChangeHandler(e)}
                />
                <i className="fa fa-search"></i>
              </div>

              <i
                className="fa fa-close crossIcon"
                onClick={() => closePopup()}
              ></i>
            </div>
            <div className="linel"></div>
            <div className="choosenEmojiContainer">
              {ChoosenEmoji.map((emoji) => {
                return <h1 className="choosenEmoji">{emoji}</h1>;
              })}
            </div>
            <div className="linel"></div>

            <div className="showEmoji">
              <div class="container">
                <div class="row">
                  {filterEmojis?.length > 0
                    ? filterEmojis.map((item, key) => {
                        return (
                          <div>
                            <h1
                              className="emoji_icon"
                              onClick={() => choosenEmoji2(key)}
                            >
                              {item.emoji}
                            </h1>
                          </div>
                        );
                      })
                    : arr.map((item, key) => {
                        return (
                          <div>
                            <h1
                              className="emoji_icon"
                              key={key}
                              onClick={() => choosenEmoji(key)}
                            >
                              {item}
                            </h1>
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        }
      ></ReactModal>
      <ToastContainer />
    </div>
  );
}
