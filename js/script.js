console.log("Hello, World!");

let tasks = [];

function addTask() {
    // Ambil elemen input
    const taskInput = document.getElementById("task-input"); 
    const dateInput = document.getElementById("date-input");

    // Validasi input
    if (validateInput(taskInput.value, dateInput.value)) {
        // Tambahkan tugas ke daftar
        console.log("Tugas:", taskInput.value, dateInput.value);
        alert("Tugas berhasil ditambahkan!");
        let task = { tugas: taskInput.value, tanggal: dateInput.value };
        tasks.push(task)
        renderTasks(); 
    }
}

function renderTasks() {
    // Untuk menampilkan tugas di UI
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Bersihkan daftar tugas sebelumnya
    tasks.forEach((task, index) => {
    taskList.innerHTML += `
        <li>
            <span>${task.tugas} - ${task.tanggal}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        </li>
    `;
    })
}

function deleteAllTask() {
    // Untuk menghapus semua tugas
    tasks = [];
    renderTasks();
}

function deleteTask(index) {
    // Untuk menghapus tugas tertentu
    tasks.splice(index, 1);
    renderTasks();
}

function filterTasks() {
    // Untuk memfilter tugas 
    const filterDate = document.getElementById("date-input").value;
    if (!filterDate) {
        alert("Masukkan tanggal untuk memfilter!");
    return;
}

const filteredTasks = tasks.filter(task => task.tanggal === filterDate);
renderTasks(filteredTasks);
}

function validateInput(task, date) {
    if (task.trim() === "") {
        alert("Tugas tidak boleh kosong!");
        return false;
    }
    if (date.trim() === "") {
        alert("Tanggal tidak boleh kosong!");
        return false;
    }
    return true;
}