<?php
/* Head */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

/* Conexão */
$conn = mysqli_connect(
  "localhost",
  "root",
  "557087148663",
  "reparte_teste",
  3306
);

if ($conn->connect_error){ /* Verificação de conexão com mensagem de erro */
    die(json_encode(["erro" => "Falha na conexão"]));
}

$sql = "SELECT * FROM mensagem"; /* VAR = "comando mysql" */
$result = $conn->query($sql); /* VAR_2 = $conexão -> query($VAR) */
$dados = []; /* VAR_3 = array() */

while($linha = $result->fetch_assoc()){
  $dados[] = $linha;
}

echo json_encode($dados);

$conn->close();