// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const inputForm = document.querySelector(".inputForm")
const toDoInput = inputForm.querySelector("input")
const pendingList = document.querySelector(".pendingList")
const finishedList = document.querySelector(".finishedList")
let pending = []
let finished = []
const PENDING_LS = "pending"
const FINISHED_LS = "finished"

function checkPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span").innerText
  paintFinished(span);
  deletePending(event);
}

function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finished));
}

function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanfinished = finished.filter(function(toDo) {
    return toDo.id !== li.id;
  });
  finished = cleanfinished;
  saveFinished();
}

function reFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const span = li.querySelector("span").innerText
  paintPending(span);
  deleteFinished(event);
}

function paintFinished(text, id) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const reBtn = document.createElement("button");
  const span = document.createElement("span");
  const time = new Date();
  const newId = time.getTime();
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteFinished);
  reBtn.innerText = "⏪";
  reBtn.addEventListener("click", reFinished);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(reBtn);
  finishedList.appendChild(li);
  if(typeof id == "undefined" || null || ""){
    li.id = newId;
  }
  else{
    li.id = parseInt(id);
  }
  
  const finishedObj = {
    text: text,
    id: li.id
  };
  finished.push(finishedObj);
  saveFinished();
}

function deletePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanpending = pending.filter(function(toDo) {
    return toDo.id !== li.id;
  });
  pending = cleanpending;
  savePending();
}

function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}

function paintPending(text, id) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");
  const span = document.createElement("span");
  const time = new Date();
  const newId = time.getTime();
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deletePending);
  checkBtn.innerText = "✅";
  checkBtn.addEventListener("click", checkPending);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  pendingList.appendChild(li);
  if(typeof id == "undefined" || null || ""){
    li.id = newId;
  }
  else{
    li.id = parseInt(id);
  }
  const pendingObj = {
    text: text,
    id: li.id
  };
  pending.push(pendingObj);
  savePending();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintPending(currentValue);
  toDoInput.value = null;
}

function loadPending() {
  const loadedPending = localStorage.getItem(PENDING_LS);
  if(loadedPending !== null){
     const pendingLs = JSON.parse(loadedPending);
     //저장은 스트링 값으로 불러올때는 스트링을 obj값으로
     pendingLs.forEach(function(toDo) {
      paintPending(toDo.text, toDo.id);
     });
  }
}

function loadFinished() {
  const loadedFinished = localStorage.getItem(FINISHED_LS);
  if(loadedFinished !== null){
     const finishedLs = JSON.parse(loadedFinished);
     //저장은 스트링 값으로 불러올때는 스트링을 obj값으로
     finishedLs.forEach(function(toDo) {
      paintFinished(toDo.text, toDo.id);
     });
  }
}

function init (){
  loadPending();
  loadFinished();
  inputForm.addEventListener("submit", handleSubmit)
}

init ()
