<?php
    require_once('../config/database_config.php');
    $db_conn = new mysqli($db_host, $db_username, $db_pwd, $db_name);
    $table = mysqli_query($db_conn, "SELECT * FROM types");
?>