<?php
require_once 'db.php';

// Handle CORS
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Your API logic goes here
// For example, let's create an endpoint to fetch all items from a table

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM your_table_name";
    $result = $conn->query($sql);

    $items = array();

    while ($row = $result->fetch_assoc()) {
        $items[] = $row;
    }

    echo json_encode($items);
}

// Close the database connection
$conn->close();
?>
