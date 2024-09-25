import React, { useState, useRef, useEffect } from "react";
import {
  IoCallOutline,
  IoChatbubbleOutline,
  IoAttachOutline,
  IoMicOutline,
  IoSendOutline,
  IoStopOutline,
  IoPlayOutline,
  IoPauseOutline,
} from "react-icons/io5";
import { IoArrowBack, IoSearch, IoOptions } from 'react-icons/io5'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';

import profile from "../assets/WhatsApp Image 2024-09-24 at 6.05.15 AM.jpeg";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hello, how are you?",
      isSent: false,
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      content: "I am good, thanks!",
      isSent: true,
      timestamp: "10:34 AM",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);

  const playbackInterval = useRef(null);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        content: inputMessage,
        isSent: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  const handleStartRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.ondataavailable = (event) => {
      setAudioChunks((prev) => [...prev, event.data]);
    };

    recorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);

      const newMessage = {
        id: messages.length + 1,
        content: {
          type: "audio",
          url: audioUrl,
          duration: 0,
          isPlaying: false,
          progress: 0,
        },
        isSent: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setAudioChunks([]); // Clear the chunks for the next recording
    };

    recorder.start();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    mediaRecorder?.stop();
  };

  const handleToggleAudio = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) => {
        if (message.id === id && typeof message.content !== "string") {
          const audioMessage = message.content;
          if (audioMessage.isPlaying) {
            if (playbackInterval.current)
              clearInterval(playbackInterval.current);
            return {
              ...message,
              content: { ...audioMessage, isPlaying: false },
            };
          } else {
            const audio = new Audio(audioMessage.url);
            audio.play();
            playbackInterval.current = setInterval(() => {
              setMessages((prevMsgs) =>
                prevMsgs.map((msg) =>
                  msg.id === id && typeof msg.content !== "string"
                    ? {
                        ...msg,
                        content: {
                          ...msg.content,
                          progress: Math.min(
                            msg.content.progress + 1,
                            msg.content.duration
                          ),
                          isPlaying:
                            msg.content.progress + 1 < msg.content.duration,
                        },
                      }
                    : msg
                )
              );
            }, 1000);
            return {
              ...message,
              content: { ...audioMessage, isPlaying: true, progress: 0 },
            };
          }
        }
        return message;
      })
    );
  };

  useEffect(() => {
    return () => {
      if (playbackInterval.current) clearInterval(playbackInterval.current);
    };
  }, []);

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const renderMessage = (message) => {
    if (typeof message.content === "string") {
      return <p>{message.content}</p>;
    } else {
      const { isPlaying, duration, progress } = message.content;
      return (
        <div className="flex flex-col w-[150px]">
          <div className="flex justify-end items-center mb-1 text-sm">
            <span>
              {formatDuration(progress)} / {formatDuration(duration)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <button
                onClick={() => handleToggleAudio(message.id)}
                className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-2"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? (
                  <IoPauseOutline className="text-white" />
                ) : (
                  <IoPlayOutline className="text-white" />
                )}
              </button>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-orange-500 h-1.5 rounded-full"
                style={{ width: `${(progress / duration) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col">
    <div className="flex items-center justify-between mb-2 mt-2 px-4">
           <Link to='/details'> <IoArrowBack className="text-gray-600 text-xl" /></Link>
            <h1 className="text-lg font-semibold text-center flex-grow">Messaging</h1>
            <HiOutlineDotsVertical className="text-gray-600 text-xl" />
          </div>
      <div className="bg-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3">
            {" "}
            <img src={profile} className="rounded-full object-cover" alt="" />
          </div>
          <div>
            <h2 className="font-semibold">lab</h2>
            <p className="text-sm text-gray-500">tamu</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <IoCallOutline className="text-blue-500 text-xl" />
          <IoChatbubbleOutline className="text-blue-500 text-xl" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-center text-sm text-gray-500 my-2">
          March 17, 2023
        </div>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isSent ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`max-w-xs ${
                message.isSent ? "bg-blue-500 text-white" : "bg-white"
              } rounded-lg p-3 shadow`}
            >
              {renderMessage(message)}
              <p
                className={`text-xs ${
                  message.isSent ? "text-blue-100" : "text-gray-500"
                } text-right mt-1`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-4 flex items-center relative">
        <IoAttachOutline className="text-gray-500 text-xl mr-4" />
        <input
          type="file"
          className="absolute left-0 top-4 w-[50px] opacity-0"
        />
        <input
          type="text"
          placeholder="Type something"
          className="flex-1 bg-gray-100 rounded-full py-2 px-4 outline-none"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        {isRecording ? (
          <button
            onClick={handleStopRecording}
            className="ml-4"
            aria-label="Stop recording"
          >
            <IoStopOutline className="text-red-500 text-xl" />
          </button>
        ) : (
          <button
            onClick={handleStartRecording}
            className="ml-4"
            aria-label="Start recording"
          >
            <IoMicOutline className="text-gray-500 text-xl" />
          </button>
        )}
        <button
          onClick={handleSendMessage}
          className="ml-4"
          aria-label="Send message"
        >
          <IoSendOutline className="text-blue-500 text-xl" />
        </button>
      </div>
    </div>
  );
}
