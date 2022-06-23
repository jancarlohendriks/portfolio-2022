import { useState, useEffect } from "react";
import { CardSection } from "./CardSection";
import "normalize.css";
import "@/styles/app.scss";

function App() {
  return (
    <div className="App">
      <header className="section">
				<div className="container grid">
					<div className="content">
						<nav>
							<h2>Jan Carlo Hendriks</h2>
							.socials
						</nav>
						<p>O programa Voyager consiste de um par de sondas, a Voyager 1 e a Voyager 2. Elas foram lançadas em 1977 aproveitando um alinhamento planetário favorável. Apesar de terem sido oficialmente planejadas para estudar apenas Júpiter e Saturno, as duas sondas foram capazes de continuar sua missão no sistema solar exterior.</p>
					</div>
				</div>
			</header>
			<CardSection>Section 2</CardSection>
			<CardSection>Section 3</CardSection>
    </div>
  );
}

export default App;
