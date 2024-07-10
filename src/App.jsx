import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...task];
    copyTask.splice(i, 1);
    setTask(copyTask);
  };

  let renderTask = <h2 className="text-center text-xl">No tasks available</h2>;
  if (task.length > 0) {
    renderTask = task.map((t, i) => {
      return (
        <li
          key={i}
          className="flex flex-col md:flex-row items-center justify-between mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-2/3 md:space-x-10">
            <h5 className="text-2xl font-semibold md:w-2/3">{t.title}</h5>
            <h6 className="text-lg font-medium md:w-2/3">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold mt-4 md:mt-0"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-4xl md:text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit={submitHandler} className="flex flex-col items-center">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="text-2xl border-zinc-700 border-4 m-2 px-4 py-2 w-full md:w-1/2"
          type="text"
          value={title}
          placeholder="Enter Title"
        />
        <input
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          className="text-2xl border-zinc-700 border-4 m-2 px-4 py-2 w-full md:w-1/2"
          type="text"
          value={desc}
          placeholder="Enter Description"
        />
        <button className="p-4 bg-black text-white rounded-sm font-bold m-5 w-full md:w-1/4">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;
