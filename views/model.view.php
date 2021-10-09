<?php
    require('../controllers/model.php');
?>

<div class='row' >
<?php
    $r = array();
    while($row = mysqli_fetch_assoc($table)) {
        $r[] = $row;
?>
    <div class='col-md-3 col-xl-3 offset-md-1 offset-xl-1 offset-sm-1'>
        <?php
            echo ('<img src="'.$row['image_loc'] . '" class="'.$row['name'] .'" width="120" height="220"  onclick="selectModel(\'' .$row['name'] .'\',\'' . $row['price'] . '\');"/>');
            //printf("<img src='%s' width='120' height='200' onclick='selectModel(%s, %d)'", $row['image_loc'], $row['name'], $row['price']);
        ?>
    </div>
    <?php } ?>
</div>
<script>
       function selectModel(name, price) {
            document.cookie = 'model' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;samesite=lax';
            document.cookie = 'modelPrice' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;;samesite=lax';

            document.cookie = "model=" + name + ";samesite=lax";
            document.cookie = "modelPrice=" + price + ";samesite=lax";
            console.log(document.cookie);
    }

</script>