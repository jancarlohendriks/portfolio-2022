import { useState, useEffect } from "react";
import { CardSection } from "./CardSection";
import "normalize.css";
import "@/styles/app.scss";

function App() {
  return (
    <div className="App">
      <header className="section">
				<nav className="nav container">
					<h1 className="logo">Jan Carlo Hendriks</h1>
					<ul className="socials">
						<li><a href="">LinkedIn</a></li>
						<li><a href="">GitHub</a></li>
					</ul>
				</nav>
				<div className="content">
					<div className="container grid">
						<div className="col-8">
							<p className="lead">Peruvian-dutch Digital Designer with main focus on Web Technologies. Furthermore, I am a SintLucas 4 year Interactive Design graduate, with 3 years of work experience in Web Development. Currently I am deepening my knowlegde into the IT world at Fontys University of Applied sciences.</p>
						</div>
					</div>
				</div>
			</header>
			<CardSection>
				<div className="content">
					<div className="container grid">
						<div className="col-5">
							<h2>Project 1</h2>
							<p>O programa Voyager consiste de um par de sondas, a Voyager 1 e a Voyager 2. Elas foram lançadas em 1977 aproveitando um alinhamento planetário favorável. Apesar de terem sido oficialmente planejadas para estudar apenas Júpiter e Saturno, as duas sondas foram capazes de continuar sua missão no sistema solar exterior.</p>
						</div>
					</div>
				</div>
			</CardSection>
			<CardSection>
				<div className="content">
					<div className="container grid">
						<div className="col-5">
							<h2>Project 2</h2>
							<p>O programa Voyager consiste de um par de sondas, a Voyager 1 e a Voyager 2. Elas foram lançadas em 1977 aproveitando um alinhamento planetário favorável. Apesar de terem sido oficialmente planejadas para estudar apenas Júpiter e Saturno, as duas sondas foram capazes de continuar sua missão no sistema solar exterior.</p>
						</div>
					</div>
				</div>
			</CardSection>
			<CardSection>
				<div className="content">
					<div className="container grid">
						<div className="col-5">
							<h2>Project 3</h2>
							<p>O programa Voyager consiste de um par de sondas, a Voyager 1 e a Voyager 2. Elas foram lançadas em 1977 aproveitando um alinhamento planetário favorável. Apesar de terem sido oficialmente planejadas para estudar apenas Júpiter e Saturno, as duas sondas foram capazes de continuar sua missão no sistema solar exterior.</p>
						</div>
					</div>
				</div>
			</CardSection>
			<footer className="footer">
				<div className="text-center">Jan Carlo Hendriks &copy; {new Date().getFullYear()}</div>
			</footer>
    </div>
  );
}

export default App;
