const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("myModal");
const submitModalBtn = document.getElementById("submitModalBtn");

openModalBtn.onclick = () => modal.showModal();
submitModalBtn.onclick = () => modal.close();
