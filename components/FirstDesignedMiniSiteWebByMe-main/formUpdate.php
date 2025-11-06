<link rel="stylesheet" href="UpdateStyle.css">
<body>
    <div class="des">
    <h1>Modifier le client</h1>
<form action ="Update.php" method="get">
    <div class="inp">
<input  type ="text" id ="nomF"  name="nom" value = "<?php echo $_GET['nom']; ?>" placeholder="Nom" required><br>
</div>
<div class="inp">
<input  type ="text" id="villeF"  name ="ville" value ="<?php echo $_GET['ville']; ?>" placeholder="Ville" required><br>
</div>
<input type = "hidden" id="idF" name="id" value="<?php echo $_GET['id']; ?>" readonly><br>
<div class="ip">
<input type= "submit" value="modifier" onclick="return verifie()">
</div>
</form>
</div>
</body>
<script>
    function verifie(){  
    nom = document.getElementById('nomF').value;
    ville = document.getElementById('villeF').value;
    if(nom=="" || ville==""){
        alert("un shamp ou les deux champs sont vide !!");
        return false;
    }
    return true;
    }
    </script>
