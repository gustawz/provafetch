<?php
$dados = [
  ["nome" => "Maria", "info" => "Cliente antiga"],
  ["nome" => "João", "info" => "Novo cadastro"],
  ["nome" => "Ana", "info" => "Premium"],
];

header('Content-Type: application/json');
echo json_encode($dados);
?>
