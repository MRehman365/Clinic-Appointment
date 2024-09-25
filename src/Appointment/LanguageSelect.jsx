import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from '../assets/react.svg'

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    "English", "Chinese", "Portuguese", "Spanish", 
    "Hindi", "Arabic", "Russian", "Bulgarian", "Lithuanian"
  ];

  const handleSelect = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="min-h-screen flex items-start justify-start p-8">
      <div className="bg-white text-center mt-10 w-full flex flex-col">
        <div className="flex flex-col items-start">
          <img
            src={img1}
            alt="user-avatar"
            className="rounded-full w-[100px] h-[100px] mb-4 overflow-hidden object-cover"
          />
          <h1 className="text-4xl font-bold">Hi, User</h1>
          <p className="text-gray-500 mt-2 mb-6 pb-4 pr-20 text-left text-base">
            Please select your preferred language to facilitate
          </p>
        </div>

        <div className="mb-6 space-y-2 flex flex-wrap">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center justify-start space-x-2"
            >
              <input
                type="radio"
                id={language}
                name="language"
                value={language}
                checked={selectedLanguage === language}
                onChange={() => handleSelect(language)}
                className="hidden"
              />
              <label
                htmlFor={language}
                className="flex items-center cursor-pointer text-left w-full"
              >
                <span className="w-6 h-6 mr-2 flex items-center justify-center rounded-full border border-gray-300">
                  {selectedLanguage === language && (
                    <FaCheckCircle className="text-green-500" />
                  )}
                </span>
                <span
                  className={`${
                    selectedLanguage === language
                      ? "text-black font-semibold text-[18px] pr-10"
                      : "text-gray-500 text-[18px] pr-10"
                  }`}
                >
                  {language}
                </span>
              </label>
            </div>
          ))}
        </div>

        <Link to='/mainhome' className="bg-[#4486ff] text-white p-4 rounded-lg text-center mt-5 w-[100%]">
            Select
          </Link>
      </div>
    </div>
  );
};

export default LanguageSelector;
