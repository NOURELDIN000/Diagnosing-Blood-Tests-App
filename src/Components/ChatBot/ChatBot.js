import { IoSendSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import { Comment } from "react-loader-spinner";
import "./ChatBot.css";
import NavBar from "../NavBar/NavBar";

// "https://integrate.api.nvidia.com/v1/chat/completions";

// https://integrate.api.nvidia.com/v1
// const API_URL =  "https://integrate.api.nvidia.com/v1/chat/completions";


const API_KEY = "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";

// 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

// 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

export default function ChatBot() {
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef();

  const [messages, setMessages] = useState([
    {
      message: "Hello, how can I help you?",
      sender: "ChatGPT",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  async function handleSend(e) {
    e.preventDefault();
    const newMessage = {
      message: inputRef.current.value,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      // direction: 'outgoing',
    };
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    inputRef.current.value = "";
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((msObj) => {
      let role = "";
      if (msObj.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: msObj.message };
    });

    const systemMessage = {
      role: "system",
      content: "Explain all concepts like i am 10 years old",
    };
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    // https://api.openai.com/v1/chat/completions

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });
    const data = await res.json();

    // console.log(data.choices[0].message.content);
    setMessages([
      ...chatMessages,
      {
        message: data.choices[0].message.content,
        sender: "ChatGPT",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setIsTyping(false);
  }

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
                type="text"
                name="chat-text"
                id="chat-text"
                ref={inputRef}
                className="chat"
                placeholder="Enter Your Message"
              />
              <button>
                <IoSendSharp className="chat-icon" />
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
