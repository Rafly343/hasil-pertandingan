```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pertandingan Bola</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Pertandingan Bola</h1>
        <div class="pertandingan">
            <input id="tim1" type="text" placeholder="Tim 1">
            <input id="skor1" type="number" placeholder="Skor">
            <input id="tim2" type="text" placeholder="Tim 2">
            <input id="skor2" type="number" placeholder="Skor">
            <button id="tampilkan">Tampilkan Hasil</button>
            <p id="hasil"></p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

```
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.container {
    width: 400px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.pertandingan {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input[type="text"], input[type="number"] {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
}

button {
    width: 100%;
    height: 40px;
    background-color: #4CAF50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #3e8e41;
}

#hasil {
    font-weight: bold;
    margin-top: 20px;
    color: #666;
}

/* Tambahkan efek animasi */
.pertandingan {
    transition: all 0.5s ease-in-out;
}

.pertandingan:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
```

JavaScript (di file script.js)
```
document.getElementById('tampilkan').addEventListener('click', function() {
    var tim1 = document.getElementById('tim1').value;
    var skor1 = parseInt(document.getElementById('skor1').value);
    var tim2 = document.getElementById('tim2').value;
    var skor2 = parseInt(document.getElementById('skor2').value);

    if (skor1 > skor2) {
        hasil = tim1 + " menang " + skor1 + " - " + skor2;
    } else if (skor2 > skor1) {
        hasil = tim2 + " menang " + skor2 + " - " + skor1;
    } else {
        hasil = "Seri " + skor1 + " - " + skor2;
    }

    document.getElementById('hasil').innerHTML = hasil;
});
```
