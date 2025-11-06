<link rel ="stylesheet" href="AddStyle.css">
<body>
<div class ="range">
<form action ="AddClt.php" method="get">
    <h1>Ajouter un client</h1>
    <div class="input1">
<input type ="text" id ="nomF"  name ="nom" placeholder ="Nom" required>
</div>
<div class="input1">
<input type ="text" id="villeF"  name  ="ville" placeholder ="Ville" required>
</div>
<div class="input2">
<input type= "submit" value="Ajouter le client" onclick="return verifie">
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
<input type= "submit" value="Ajouter le client" onclick="return verifie()" ></tr></table>
    }
    return true;
    }
    </script>
