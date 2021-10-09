<?php
    /* get data from database and send it, not json format, do same for rest, in save.php make a script that saves the file on local computer  */
    require_once('../config/database_config.php');
    $db_conn = new mysqli($db_host, $db_username, $db_pwd, $db_name);
    $table = mysqli_query($db_conn, "SELECT * FROM additional");
?>