<?php

// 1. Tampilkan text "Hello World"
echo "<strong>1 Baris Hello World: </strong><br>";
echo "Hello World<br><br>";

// 2. Tampilkan 10 baris text "Hello World"
echo "<strong>10 Baris Hello World: </strong><br>";
for ($i = 1; $i <= 10; $i++) {
    echo "Hello World<br>";
}
echo "<br><br>";

// 3. Tampilkan 10 baris text "Hello World", tapi setiap baris genap ditambah text "Hello World - [no baris]"
echo "<strong>10 Baris Hello World Dengan Nomor Baris di Angka Genap: </strong><br>";
for ($i = 1; $i <= 10; $i++) {
    echo 'Hello World' . ($i % 2 == 0 ? " - $i" : "") . "<br>";
}
echo "<br><br>";

// 4. Buat array berisi nama bulan dari Januari hingga Desember, dan tampilkan
echo "<strong>Array Nama Bulan: </strong><br>";
$months = [
    "Januari", "Februari", "Maret", "April", "Mei", 
    "Juni", "Juli", "Agustus", "September", "Oktober", 
    "November", "Desember"
];

foreach ($months as $month) {
    echo "$month<br>";
}
echo "<br><br>";

// 5. Buat array 2 dimensi, dimana index pertama menyimpan nama bulan dan index kedua menyimpan hari libur nasional di bulan tersebut. Lalu tampilkan.
echo "<strong>Array Nama Bulan dan Hari Libur: </strong><br>";
$holidays = [
    "Januari" => ["Tahun Baru"],
    "Februari" => ["Imlek"],
    "Maret" => ["Nyepi"],
    "April" => ["Waisak"],
    "Mei" => ["Kenaikan Isa Almasih"],
    "Juni" => ["Hari Raya Idul Fitri"],
    "Juli" => ["Hari Bhayangkara"],
    "Agustus" => ["Hari Kemerdekaan"],
    "September" => ["Hari Maulid Nabi Muhammad SAW"],
    "Oktober" => ["Hari Listrik Nasional"],
    "November" => ["Hari Pahlawan"],
    "Desember" => ["Hari Raya Natal"]
];

foreach ($holidays as $month => $holidayList) {
    echo "$month - " . implode(", ", $holidayList) . "<br>";
}
echo "<br><br>";

// 6. Buat 4 functions untuk membuat pengurangan, perkalian, pembagian dan penjumlahan. Lalu panggil function tersebut dengan untuk melakukan operasi aritmatika.
echo "<strong>4 Function Aritmatika: </strong><br>";

function add($a, $b) {
    return $a + $b;
}

function subtract($a, $b) {
    return $a - $b;
}

function multiply($a, $b) {
    return $a * $b;
}

function divide($a, $b) {
    if ($b == 0) {
        return "Tidak bisa membagi dengan nol";
    }
    return $a / $b;
}

$num1 = 2; 
$num2 = 4;

echo "Angka 1 = $num1<br>Angka 2 = $num2<br><br>Penggunaan Function: <br>";
echo "Penjumlahan ($num1 + $num2): " . add($num1, $num2) . "<br>";
echo "Pengurangan ($num1 - $num2): " . subtract($num1, $num2) . "<br>";
echo "Perkalian ($num1 * $num2): " . multiply($num1, $num2) . "<br>";
echo "Pembagian ($num1 / $num2): " . divide($num1, $num2) . "<br>";

