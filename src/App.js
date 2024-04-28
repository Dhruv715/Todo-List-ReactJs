import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  const [arr, setArr] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleChange = () => {
    if (data.trim() !== "") {
      if (updateIndex !== null) {
        // If Update Existing Todo List
        const newArr = [...arr];
        newArr[updateIndex] = data;
        setArr(newArr);
        setData("");
        setUpdateIndex(null);
      } else {
        // Add new Todo
        setArr([...arr, data]);
        setData("");
      }
    }
  };

  const handleDelete = (index) => {
    const newArr = [...arr];
    newArr.splice(index, 1);
    setArr(newArr);
  };

  const handleUpdate = (index) => {
    // Set the main input box value according to todo
    setData(arr[index]);
    setUpdateIndex(index);
  };

  return (
    <>
      <div className="container mt-10 mx-auto p-4 lg:w-2/5 md:w-2/3 sm:w-4/5 w-4/5 shadow-lg">
        <h1 className="text-3xl font-semibold mb-4 text-center ">Todo List</h1>
        <div className="flex text-center mb-8 lg:flex-col md:flex-col sm:flex-col flex-col">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter todo here.."
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            onChange={(e) => setData(e.target.value)}
            value={data}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2  rounded w-4/4"
            onClick={handleChange}
          >
            {updateIndex !== null ? "Save Changes" : "Add"}
          </button>
        </div>

        <div className="container">
          {arr.map((todo, index) => (
            <div
              className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-between items-center border-b border-gray-300 py-2 px-4"
              key={index}
            >
              <h1 className="my-2">{index+1}) {todo}</h1>
              <div className="my-2">
                <button
                  className="bg-green-500 text-white py-1 px-2 rounded mr-2"
                  onClick={() => handleUpdate(index)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
