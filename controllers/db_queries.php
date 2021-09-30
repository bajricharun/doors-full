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
    
    // SYSTEMS TABLE
    function insert_systems($id, $name, $price, $image_location, $description) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "INSERT INTO systems(id, name, price, image_location, description) VALUES (?, ?, ?, ?, ?)";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("isdss", $id, $name, $price, $image_location, $description);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_systems($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM systems WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return json_encode($data->fetch_assoc(), JSON_FORCE_OBJECT);

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    // colours TABLE
    function insert_colours($id, $name, $type, $image_location) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "INSERT INTO colours(id, name, type, image_location) VALUES (?, ?, ?, ?)";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("isss", $id, $name, $type, $image_location);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_colours($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM colours WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return json_encode($data->fetch_assoc(), JSON_FORCE_OBJECT);

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    // color_door_frame TABLE
    function insert_color_door_frame($id, $name, $type, $image_location) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "INSERT INTO color_door_frame(id, name, type, image_location) VALUES (?, ?, ?, ?)";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("isss", $id, $name, $type, $image_location);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_color_door_frame($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM color_door_frame WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return json_encode($data->fetch_assoc(), JSON_FORCE_OBJECT);

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    // color_application TABLE
    function insert_color_application($id, $name, $type, $image_location) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "INSERT INTO color_application(id, name, type, image_location) VALUES (?, ?, ?, ?)";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("isss", $id, $name, $type, $image_location);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_color_application($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM color_application WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return json_encode($data->fetch_assoc(), JSON_FORCE_OBJECT);

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    // decorative_glass TABLE
    function insert_decorative_glass($id, $name, $image_location) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "INSERT INTO decorative_glass(id, name, image_location) VALUES (?, ?, ?)";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("iss", $id, $name, $image_location);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_decorative_glass($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM decorative_glass WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return json_encode($data->fetch_assoc(), JSON_FORCE_OBJECT);

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    // ornament_glass TABLEE
    function insert_ornament_glass($id, $name, $image_location) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "INSERT INTO ornament_glass(id, name, image_location) VALUES (?, ?, ?)";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("iss", $id, $name, $image_location);
                $stmt->execute();
                $stmt->close();
                
                return true;

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    function select_ornament_glass($id) {

        global $db_conn;
        
        if (check_conn()) {
            try {
                
                $sql_query = "SELECT * FROM ornament_glass WHERE id=?";

                $stmt = $db_conn->prepare($sql_query);
                $stmt->bind_param("i", $id);
                $stmt->execute();

                $data = $stmt->get_result();

                if (empty($data->fetch_assoc())) {
                    return "No results found ...";
                }

                return json_encode($data->fetch_assoc(), JSON_FORCE_OBJECT);

            } catch(Exception $error) { return false; }
        } else { return false; }
    }

    $db_conn->close();

?>
