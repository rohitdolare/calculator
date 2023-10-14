import { useCallback, useEffect, useRef, useState } from "react";
function App() {
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const inputNum1Ref = useRef();
  const inputNum2Ref = useRef();
  const calculaterResult = useCallback(() => {
    const str =
      inputNum1Ref.current.value + operator + inputNum2Ref.current.value;
    try {
      setResult(eval(str));
    } catch (error) {}
  }, [operator]);

  useEffect(() => {
    calculaterResult();
  }, [calculaterResult, operator]);
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col bg-[#FFF2D8] ">
        <div className="bg-[#EAD7BB] w-[500px] p-5 rounded-xl">
          <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl font-bold my-10 text-[#113946]">
              Calculator
            </h1>

            <div>
              <input
                type="number"
                className="bg-gray-200  shadow-lg p-2 rounded-full"
                ref={inputNum1Ref}
              />
              <button
                className="shadow-lg rounded-full p-2 h-10 w-10 hover:scale-[1.50] m-3"
                onClick={calculaterResult}
              >
                {operator}
              </button>
              <input
                type="number"
                className="bg-gray-200 shadow-lg p-2 rounded-full"
                ref={inputNum2Ref}
              />
            </div>

            <div className="mt-5 p-2 space-x-10">
              <button
                className=" rounded-full shadow-lg  p-2 h-10 w-10 hover:scale-[1.50]"
                onClick={() => {
                  setOperator("-");
                }}
              >
                -
              </button>

              <button
                className=" shadow-lg rounded-full p-2 h-10 w-10 hover:scale-[1.50]"
                onClick={() => {
                  setOperator("/");
                }}
              >
                /
              </button>

              <button
                className=" shadow-lg rounded-full p-2 h-10 w-10 hover:scale-[1.50]"
                onClick={() => {
                  setOperator("+");
                }}
              >
                +
              </button>

              <button
                className=" shadow-lg rounded-full p-2 h-10 w-10 hover:scale-[1.50]"
                onClick={() => {
                  setOperator("*");
                }}
              >
                *
              </button>
            </div>

            <div className="flex justify-center flex-col items-center mb-10">
              <h2 className="text-2xl font-bold text-[#113946]">Result</h2>
              <input
                type="text"
                className="bg-gray-200 p-2 rounded-full shadow-lg "
                value={result}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
