import "normalize.css";
import "./style.css";
import { createNoteCard } from "../modules/dom.js";

const addNoteBtn = document.getElementById("add-note");
addNoteBtn.addEventListener("click", () => {
    alert("Buttons works");
});