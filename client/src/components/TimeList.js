import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const SORT_OPTIONS = {
  TIME_ASC: { column: "time", direction: "asc" },
  TIME_DESC: { column: "time", direction: "desc" },
  TITLE_ASC: { column: "title", direction: "asc" },
  TITLE_DESC: { column: "title", direction: "desc" }
};

// it's an abstraction from the firebase API
const useTimes = (sortBy = "TIME_ASC") => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    // create a subscription to firestore
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot(snapshot => {
        // debugger;
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTimes(newTimes);
      });
    // When react unmounted this component, it will run this
    return () => unsubscribe();
  }, [sortBy]);

  return times;
};

export default function TimeList() {
  // regular react hooks
  const [sortBy, setSortBy] = useState("TIME_ASC");
  const times = useTimes(sortBy);

  return (
    <div>
      <h2>Times List</h2>
      <div>
        <label>Sort By:</label>{" "}
        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
          <option value="TIME_ASC">Time (Fastest)</option>
          <option value="TIME_DESC">Time (Slowest)</option>
          <option disabled>------</option>
          <option value="TITLE_ASC">Title (a-z)</option>
          <option value="TITLE_DESC">Title (z-a)</option>
        </select>
      </div>
      <ol>
        {times.map(time => (
          <li key={time.id}>
            <div className="time-entry">
              {time.title} : <code> {time.time} sec</code>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
