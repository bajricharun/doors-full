<?php
    require('../controllers/type.php');
?>

<div class='row' >
<?php
    while($row = mysqli_fetch_assoc($table)) {
?>
    <div class='col-md-3 col-xl-3 offset-md-1 offset-xl-1 offset-sm-1'>
        <?php
            echo ('<img src="'.$row['image_loc'].'" width="120" height="220" onclick="selectType(\'' .$row['name'] .'\',\'' . $row['price'] . '\');"/>');
        ?>
    </div>
    <?php } ?>
    <script>
        function selectType(name, price) {
            document.cookie = 'type' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;samesite=lax';
            document.cookie = 'typePrice' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;samesite=lax';

            document.cookie = "type=" + name + ";samesite=lax";
            document.cookie = "typePrice=" + price + ";samesite=lax";
            console.log(document.cookie);
        }
    </script>
</div>