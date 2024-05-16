const students = [
    { number: 1, name: 'Siti Syarah Namira Nur Azizah', gender: 'Perempuan', birthplace: 'Bandung, Indonesia', birthdate: '01-04-2000', grade: 3.50 },
    { number: 2, name: 'Naufal Afiarban', gender: 'Laki-laki', birthplace: 'Palembang, Indonesia', birthdate: '10-05-2000', grade: 3.87 },
    { number: 3, name: 'Rajesh Ramayan Kootraphali', gender: 'Laki-laki', birthplace: 'New Delhi, India', birthdate: '06-10-1981', grade: 3.90 },
    { number: 4, name: 'Amy Farrah Fowler', gender: 'Perempuan', birthplace: 'Glendale, California', birthdate: '17-12-1979', grade: 3.95 },
    { number: 5, name: 'Sheldon Lee Cooper', gender: 'Laki-laki', birthplace: 'Galveston, Texas', birthdate: '26-02-1980', grade: 4.00 },
    { number: 6, name: 'Howard Joel Wolowitz', gender: 'Laki-laki', birthplace: 'Pasadena, California', birthdate: '20-12-1981', grade: 3.75 },
    { number: 7, name: 'Bernadette Maryann Rostenkowski', gender: 'Perempuan', birthplace: 'Yonkers, New York', birthdate: '23-06-1984', grade: 3.80 },
    { number: 8, name: 'Penny Hofstadter', gender: 'Perempuan', birthplace: 'Omaha, Nebraska', birthdate: '02-12-1985', grade: 3.70 },
    { number: 9, name: 'Leonard Leakey Hofstadter', gender: 'Laki-laki', birthplace: 'New Jersey', birthdate: '17-05-1980', grade: 3.65 },
    { number: 10, name: 'Sebastianus Lukito', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '28-05-1994', grade: 3.92 },
    { number: 11, name: 'Arika Aurania Metta', gender: 'Perempuan', birthplace: 'Jakarta, Indonesia', birthdate: '14-05-1999', grade: 3.90 },
    { number: 12, name: 'Prisca Julian Josiana Saya', gender: 'Perempuan', birthplace: 'Merauke, Indonesia', birthdate: '14-07-1999', grade: 3.92 },
    { number: 13, name: 'Jody Zuliant', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1999', grade: 3.55 },
    { number: 14, name: 'Agil Dwiki Yudistira', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1999', grade: 3.87 },
    { number: 15, name: 'Muhammad Rizky Andrian', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1999', grade: 3.85 },
    { number: 16, name: 'Muhammad Salhan Nur', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1999', grade: 3.90 },
    { number: 17, name: 'Bagas Siswanto', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1999', grade: 3.80 },
    { number: 18, name: 'Surianata Suwandi', gender: 'Laki-laki', birthplace: 'Sampit, Indonesia', birthdate: '14-07-1999', grade: 3.75 },
    { number: 19, name: 'Yosua', gender: 'Laki-laki', birthplace: 'Belitung, Indonesia', birthdate: '14-07-1999', grade: 3.70 },
    { number: 20, name: 'Lydia', gender: 'Perempuan', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1999', grade: 3.65 },
    { number: 21, name: 'Sharen', gender: 'Perempuan', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1999', grade: 3.60 },
    { number: 22, name: 'Peres Filemon Lopulissa', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '09-02-1994', grade: 2.29 },
    { number: 23, name: 'Gary Prayudi', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '11-07-1994', grade: 3.75 },
    { number: 24, name: 'Kevin Louis Jonatan', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '07-01-1994', grade: 3.75 },
    { number: 25, name: 'Rivai Frederik Suhendra', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1994', grade: 3.85 },
    { number: 26, name: 'Alberto', gender: 'Laki-laki', birthplace: 'Jakarta, Indonesia', birthdate: '14-07-1994', grade: 3.90 }

];


// Contoh fungsi pencarian siswa
function searchStudent() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        let nameCell = rows[i].getElementsByTagName('td')[1];
        if (nameCell) {
            let name = nameCell.textContent || nameCell.innerText;
            if (name.toLowerCase().indexOf(searchInput) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

// Fungsi untuk menampilkan daftar siswa
function displayStudents() {
    // Contoh data
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    table.innerHTML = "";  // Membersihkan tabel terlebih dahulu
    students.forEach((student, index) => {
        let row = table.insertRow();
        row.insertCell(0).textContent = student.number;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.gender;
        row.insertCell(3).textContent = student.birthplace;
        row.insertCell(4).textContent = student.birthdate;
        row.insertCell(5).textContent = student.grade;
    });
}

// Fungsi untuk menambahkan, menghapus, dan memperbarui siswa bisa ditambahkan serupa.
// Fungsi untuk menambahkan siswa baru
function addStudent() {
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const name = prompt("Masukkan nama mahasiswa:");
    const gender = prompt("Masukkan jenis kelamin (Laki-laki/Perempuan):");
    const birthplace = prompt("Masukkan tempat lahir:");
    const birthdate = prompt("Masukkan tanggal lahir (YYYY-MM-DD):");
    const grade = prompt("Masukkan IPK:");

    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = table.rows.length;  // Nomor urut
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = gender;
    newRow.insertCell(3).textContent = birthplace;
    newRow.insertCell(4).textContent = birthdate;
    newRow.insertCell(5).textContent = grade;
}

// Fungsi untuk menghapus siswa
function deleteStudent() {
    const nameToDelete = prompt("Masukkan nama mahasiswa yang ingin dihapus:");
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[1].textContent.toLowerCase() === nameToDelete.toLowerCase()) {
            table.deleteRow(i);
            alert("Mahasiswa berhasil dihapus.");
            return;
        }
    }
    alert("Siswa tidak ditemukan.");
}

// Fungsi untuk mengubah nilai siswa
function updateStudent() {
    const nameToUpdate = prompt("Masukkan nama mahasiswa yang ingin diubah nilainya:");
    const newGrade = prompt("Masukkan nilai baru:");
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[1].textContent.toLowerCase() === nameToUpdate.toLowerCase()) {
            rows[i].cells[5].textContent = newGrade;
            alert("Nilai mahasiswa berhasil diubah.");
            return;
        }
    }
    alert("Mahasiswa tidak ditemukan.");
}

// Fungsi untuk menggulir ke elemen output
function scrollToOutput() {
    document.getElementById('output').scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk menghitung nilai rata-rata kelas
function calculateStatistics() {
    const table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    let total = 0;
    let count = 0;

    for (let i = 0; i < rows.length; i++) {
        let grade = parseFloat(rows[i].cells[5].textContent);
        if (!isNaN(grade)) {
            total += grade;
            count++;
        }
    }

    const average = total / count;
    document.getElementById('output').textContent = `IPK rata-rata fakultas adalah: ${average.toFixed(2)}`;
    scrollToOutput();  // Panggil fungsi scrollToOutput
}

// Fungsi untuk menampilkan siswa dengan nilai tertinggi
function displayHighestGrade() {
    let highestGrade = -Infinity;
    let studentsWithHighestGrade = [];

    students.forEach(student => {
        if (student.grade > highestGrade) {
            highestGrade = student.grade;
            studentsWithHighestGrade = [student.name]; // Mulai daftar baru dengan nama siswa ini
        } else if (student.grade === highestGrade) {
            studentsWithHighestGrade.push(student.name); // Tambahkan nama siswa ke daftar yang ada
        }
    });

    if (studentsWithHighestGrade.length > 0) {
        document.getElementById('output').textContent = `Mahaiswa dengan IPK tertinggi adalah ${studentsWithHighestGrade.join(", ")} dengan IPK ${highestGrade}.`;
    } else {
        document.getElementById('output').textContent = "Tidak ada mahasiswa.";
    }
    scrollToOutput();  // Panggil fungsi scrollToOutput
}

// Fungsi untuk menampilkan siswa dengan nilai terendah
function displayLowestGrade() {
    let lowestGrade = Infinity;
    let studentsWithLowestGrade = [];

    students.forEach(student => {
        if (student.grade < lowestGrade) {
            lowestGrade = student.grade;
            studentsWithLowestGrade = [student.name]; // Mulai daftar baru dengan nama siswa ini
        } else if (student.grade === lowestGrade) {
            studentsWithLowestGrade.push(student.name); // Tambahkan nama siswa ke daftar yang ada
        }
    });

    if (studentsWithLowestGrade.length > 0) {
        document.getElementById('output').textContent = `Mahasiswa dengan IPK terendah adalah ${studentsWithLowestGrade.join(", ")} dengan IPK ${lowestGrade}.`;
    } else {
        document.getElementById('output').textContent = "Tidak ada mahasiswa.";
    }
    scrollToOutput();  // Panggil fungsi scrollToOutput
}

//saat halaman web diakses, tampilkan seluruh tabel
window.onload = function() {
    displayStudents();

    // Menambahkan event listener untuk input pencarian
    document.getElementById('search').addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {  // 13 adalah kode untuk tombol enter
            searchStudent();  // Memanggil fungsi pencarian siswa
        }
    });
};
