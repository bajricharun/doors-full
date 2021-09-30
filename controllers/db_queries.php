<?php

    $server = "localhost";
    $username = "root";
    $password = "";
    $dbname = "frontdoors";

    $db_conn = new mysqli($server, $username, $password, $dbname);

    function check_conn() {
        
        global $db_conn;

        if ($db_conn->connect_error) { 
            return false; 
        } else { return true; }
    }

    function insert_door_model($id, $type, $location, $name, $price) {

        global $db_conn;
        
        if (check_conn()) {
            try {

                $stmt = $db_conn->prepare("INSERT INTO door_model(id, type, image_location, name, price) VALUES (?, ?, ?, ?, ?)");
                $stmt->bind_param("isssd", $id, $type, $location, $name, $price);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function insert_interior($id, $location, $name, $price) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "INSERT INTO interior(id, image_location, name, price) VALUES (?, ?, ?, ?)";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("issd", $id, $location, $name, $price);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }
    
    function insert_type($id, $location, $name, $price) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "INSERT INTO type(id, image_location, name, price) VALUES (?, ?, ?, ?)";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("issd", $id, $location, $name, $price);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_data_type($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM type WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return $data;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_data_interior($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM interior WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return $data;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_data_door($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM door_model WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return $data;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    $db_conn->close();

?>
