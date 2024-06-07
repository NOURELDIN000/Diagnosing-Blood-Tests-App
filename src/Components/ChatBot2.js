
import {  IoSendSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import { Comment } from "react-loader-spinner";
import NavBar from "./NavBar/NavBar";



 function ChatBot2() {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      message: "Hello, how can I help you?",
      sender: "ChatGPT",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
  ]);


//   const inputRef = useRef();
  const chatContainerRef = useRef(null);

  async function handleSend() {
    const newMessage = {
      message: inputValue,
      sender: 'user',
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);
    await HandleMessagesWithAi(newMessages);
  }

  async function HandleMessagesWithAi(chatMessages) {
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC53gNlX2cvAoU5IfL1CAraJcD7fIGZ2WE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "contents": [{ "parts": [{ "text":  inputValue }] }] })
    });
    const data = await res.json();

    setMessages(
      [
        ...chatMessages,
        {
          message: data.candidates[0].content.parts[0].text,
          sender: "ChatGPT",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }
      ]
    );
    chatContainerRef.current.scrollIntoView();
    setIsTyping(false);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };


  return (
    <div className="main-chat">
      <NavBar />
      <div className="container ">
        <main className="">
          <section className="">
            <article>
              {messages.map((message, i) => {
                let isBot = message.sender === "ChatGPT";
                return (
                  <div key={i} className="p-4 m-2 rounded  my-3 ">
                    {isBot ? (
                      // <img src='
                      // ' alt="ChatBot" className=" w-10 p-2 rounded-full ps-0" />
                      <div className="d-flex align-items-center fw-bold">
                        <div
                          className="rounded-pill fw-bold "
                          style={{
                            border: "1px solid #000",
                            width: "23px",
                            height: "23px",
                            fontSize: "15px",
                            textAlign: "center",
                            color: "#fff",
                            background: "#000",
                          }}
                        >
                          B
                        </div>
                        <div className="ms-2">Bot</div>
                      </div>
                    ) : (
                      <div className="d-flex align-items-center fw-bold">
                        {" "}
                        <FaUserCircle
                          className=" m-2 ms-0"
                          style={{ fontSize: "17px" }}
                        />{" "}
                        <div className="fw-bold">You</div>{" "}
                      </div>
                    )}

                    <div className="msg-div">
                      <p
                        className="msg-content mt-3 "
                        style={{
                          border: "1px solid #000",
                          display: "inline-block",
                          borderRadius: "10px",
                          background: "#f3f3f3",
                          color: "#000000D9",
                        }}
                      >
                        {message.message}
                      </p>
                      <p className="msg-time ms-2" style={{ fontSize: "13px" }}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                );
              })}
            </article>
            <div className="ms-5">
              {isTyping && (
                <p className="">
                  <Comment
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="#fff"
                    // backgroundColor="rgb(59 130 246 / 50%)"
                    backgroundColor="#3daed2"
                  />
                </p>
              )}
            </div>
            <form
              className="chat-div px-4 py-3 "
              onSubmit={handleSend}
              autoComplete="off"
            >
              {/* <IoMdAddCircleOutline className="text-gray-400 text-4xl" /> */}
              <input
                    name="chat-text"
                    id="chat-text"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    className="chat"
                    placeholder="Type Your Message"
                    disabled={isTyping}
                    onKeyDown={handleKeyPress}
                    ref={chatContainerRef}
              />
              <button>
                <IoSendSharp className="chat-icon" />
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
              
        )
    }
export default ChatBot2