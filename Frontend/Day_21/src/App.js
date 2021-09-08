import "./App.css";
import AddItemForm from "./components/Addcalorie";
import { useState } from "react";

function RenderItem({ updateItem, removeItem, item, index }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="card w-50 p-2 my-2" style={{ width: "18rem" }}>
      <div className="card-body">
        {isEditing ? (
          <input
            type="text"
            name="title"
            id="title"
            required
            // value={item.title}
            onChange={(e) => updateItem(index, { title: e.target.value })}
          />
        ) : (
          {/* <h5 className="card-title">{item.title}</h5> */}
          <h4>Hello</h4>
        )}
        {isEditing ? (
          <input
            type="number"
            name="calorie"
            id="calorie"
            required
            // value={item.calorie}
            onChange={(e) => updateItem(index, { calorie: e.target.value })}
          />
        ) : (
          <p className="='card-text'">
            {" "}
            You have consumed {item.calorie} calories
          </p>
        )}
        <div className="d-flex ">
          <button className="btn btn-danger" onClick={() => removeItem(index)}>
            Delete
          </button>
          <button
            className="btn mx-3 btn-primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Done" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AddItemForm />
      <RenderItem />
    </div>
  );
}

export default App;
