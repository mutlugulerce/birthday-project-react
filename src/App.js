import React, { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const firstText = () => {
    if (people.length === 0) {
      return <h3>Görüntülenecek Tebrik Tok</h3>;
    } else {
      return <h3>{people.length} Doğum Günü Tebriği</h3>;
    }
  };


  return (
    <main>
      <section className="container">
        {firstText()}

        <List people={people} setPeople={setPeople} />

        <button onClick={() => setPeople([])}>Tebrikleri Sil</button>

        <button onClick={() => setPeople(data)}> Tebrikleri Göster</button>
      </section>
    </main>
  );
};

export default App;
