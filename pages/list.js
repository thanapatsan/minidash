import Link from "next/link";
import { db } from "@/firebase";

import {
  doc,
  collection,
  setDoc,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useRef, useState } from "react";

function List() {
  const [notes, setNotes] = useState();

  async function addItem(event) {
    event.preventDefault();
    const { newItem } = event.target.elements;

    const docRef = await addDoc(collection(db, "notes"), {
      body: newItem.value,
    });
    console.log(docRef);
  }

  function fetchDocs() {
    const querySnapshot = onSnapshot(collection(db, "notes"), (docs) => {
      let temp = [];
      docs.forEach((doc) => {
        let item = {
          id: doc.id,
          ...doc.data(),
        };
        temp.push(item);
      });
      console.log("fetch!");
      setNotes(temp);
    });
  }

  // fetchDocs();

  useEffect(() => {
    return () => {
      fetchDocs();
    };
  }, []);

  return (
    <main className="h-screen">
      <div className="container mx-auto max-w-screen-lg h-full flex flex-col">
        <div className="mt-4 mb-4">
          <Link href={"/home"} className="btn btn-info btn-sm mb-2">
            Back to home
          </Link>
          <h1 className="text-5xl font-semibold mb-2">List</h1>
        </div>
        <div className="border rounded-xl grow flex flex-col mb-4 p-4">
          <div className="w-full">
            <form
              onSubmit={addItem}
              className="form-control flex flex-row w-full"
            >
              <input
                type="text"
                className="input input-bordered w-full"
                name="newItem"
                id="newItem"
                placeholder="add new item"
              ></input>
              <button className="btn btn-primary">submit</button>
            </form>
          </div>
          <div className="flex flex-col">
            {notes &&
              notes.map((item) => (
                <div key={item.id}>
                  <ListItem item={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function ListItem(props) {
  let item = props.item;

  const inputRef = useRef(null);

  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  async function editItem(id, body) {
    await setDoc(doc(db, "notes", id), body);
  }

  async function deleteItem(id) {
    await deleteDoc(doc(db, "notes", id));
  }

  function handleEdit() {
    let message = {
      body: inputRef.current.value,
    };

    editItem(item.id, message);

    setIsEdit(false);
  }

  if (isEdit)
    return (
      <div className="border p-2">
        <input
          ref={inputRef}
          type="text"
          className="input input-bordered w-full"
          name={`edit`}
          id={`edit`}
          placeholder={item.body}
          defaultValue={item.body}
        />
        <button onClick={handleEdit} className="btn btn-sm btn-warning">
          (edit)
        </button>

        <button
          className="btn btn-sm btn-neutral"
          onClick={() => setIsEdit(!isEdit)}
        >
          (cancel)
        </button>
      </div>
    );

  if (isDelete)
    return (
      <div className="border p-2">
        <p>
          delete?
          <p>{item.body}</p>
          {item.id} {item.body}
          <button
            className="btn btn-sm btn-error btn-outline"
            onClick={() => deleteItem(item.id)}
          >
            (delete)
          </button>
          <button
            className="btn btn-sm btn-neutral"
            onClick={() => setIsDelete(!isDelete)}
          >
            (cancel)
          </button>
        </p>
      </div>
    );

  return (
    <div className="border p-2">
      <p>{item.body}</p>
      <div>
        {item.id}
        <button
          className="btn btn-sm btn-warning"
          onClick={() => setIsEdit(!isEdit)}
        >
          (edit)
        </button>
        <button
          className="btn btn-sm btn-error"
          onClick={() => setIsDelete(!isDelete)}
        >
          (delete)
        </button>
      </div>
    </div>
  );
}

export default List;
