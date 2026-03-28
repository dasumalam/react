import React, { useEffect, useRef, useState } from "react";

function Model() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [charcter, setcharcter] = useState(true);
  const [password, setpassword] = useState("");

  const passwordref = useRef(null);

  const copy = () => {
    navigator.clipboard.writeText(password);
    passwordref.current?.select();
  };

  const passganrete = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "1234567890";
    if (charcter) str += "!@#$%^&*()_+{}[]<>?/|";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass);
  };

  useEffect(() => {
    passganrete();
  }, [length, number, charcter]);

  return (
    <div className="min-h-screen bg-[#191a1b] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg sm:max-w-xl rounded-2xl bg-[#80ba52] px-4 sm:px-6 py-6 sm:py-8 shadow-xl">
        <h1 className="text-center text-gray-800 text-2xl sm:text-3xl font-medium mb-5 sm:mb-6">
          Password Generator
        </h1>

        <div className="flex items-center overflow-hidden rounded-lg bg-white">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="password"
            ref={passwordref}
            className="w-full bg-white px-3 sm:px-4 py-3 text-base sm:text-xl text-orange-500 outline-none"
          />
          <button
            onClick={copy}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-5 py-2 mr-2 text-base sm:text-xl font-medium rounded-lg whitespace-nowrap"
          >
            Copy
          </button>
        </div>

        <div className="mt-5 sm:mt-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-800">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => setlength(Number(e.target.value))}
                className="flex-1 sm:w-28 accent-blue-500 cursor-pointer"
              />
              <label className="text-base sm:text-xl whitespace-nowrap">Length: {length}</label>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <input
                  id="number"
                  type="checkbox"
                  checked={number}
                  onChange={() => setnumber((prev) => !prev)}
                  className="accent-blue-500 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="number" className="cursor-pointer text-base sm:text-xl">
                  Numbers
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="charcter"
                  type="checkbox"
                  checked={charcter}
                  onChange={() => setcharcter((prev) => !prev)}
                  className="accent-blue-500 w-4 h-4 cursor-pointer"
                />
                <label htmlFor="charcter" className="cursor-pointer text-base sm:text-xl">
                  Characters
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;