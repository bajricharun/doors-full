    # Function to parse the JSON data being received
    function parse_json_data($data) {

        if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
            return "Error: Bad Formatted JSON Data";
        } else {
            return json_decode($data);
        }
    }

    # Function to calculate the discount being made to the original price
    function discountTaker($door_data, $percent) {

        if (isset($percent)) {

            $discount_value = ($door_data->price / 100) * $percent;
            return $door_data->price - $discount_value;

        } else { return $door_data->price; }
    }
