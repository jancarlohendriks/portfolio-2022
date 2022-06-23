import { useState, useEffect } from "react";
import { CardSection } from "./CardSection";
import "@/styles/App.scss";

function App() {
  return (
    <div className="App">
      <header className="section">Section 1</header>
			<CardSection>Section 2</CardSection>
			<CardSection>Section 3</CardSection>
    </div>
  );
}

export default App;
