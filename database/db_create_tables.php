<?php
    require_once('../config/database_config.php');
    $db_conn = new mysqli($db_host, $db_username, $db_pwd, $db_name);
    $types = "CREATE TABLE types(id int not null auto_increment, name varchar(255) NOT NULL, image_loc varchar(255) NOT NULL, price int(11), PRIMARY KEY(id))";
    $models = "CREATE TABLE models(id int not null auto_increment, name varchar(255) NOT NULL, image_loc varchar(255) NOT NULL, price int(11), PRIMARY KEY(id))";
    $interior = "CREATE TABLE interior(id int not null auto_increment, name varchar(255) NOT NULL, image_loc varchar(255) NOT NULL, price int(11), PRIMARY KEY(id))";
    $locks_knobs = "CREATE TABLE locks_knobs(id int not null auto_increment, type varchar(255) NOT NULL, name varchar(255) NOT NULL, image_loc varchar(255) NOT NULL, price int(11), PRIMARY KEY(id))";
    $colors = "CREATE TABLE colors(id int not null auto_increment, name varchar(255) NOT NULL, image_loc varchar(255) NOT NULL, price int(11) NOT NULL, PRIMARY KEY(id))" ;
    $additional = "CREATE TABLE additional(id int not null auto_increment, type varchar(255) NOT NULL, name vaPrchar(255) NOT NULL, image_loc varchar(255) NOT NULL, price int(11), PRIMARY KEY(id))";
    $admin = "CREATE TABLE admin(id int not null auto_increment, name varchar(255) NOT NULL, pwd varchar(255) NOT NULL, PRIMARY KEY(id))";
    if (($db_conn->query($colors) === TRUE) && ($db_conn->query($types) === TRUE) && ($db_conn->query($models) === TRUE) && ($db_conn->query($interior) === TRUE) && ($db_conn->query($locks_knobs) === TRUE) && ($db_conn->query($additional) === TRUE) && ($db_conn->query($admin) === TRUE)) {
        echo ("tables created");
    }  else {
        echo ("failed");
    }
?>