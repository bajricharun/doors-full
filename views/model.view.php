<?php
    require('../controllers/model.php');
?>

<div class='row' >
<?php
    $r = array();
    while($row = mysqli_fetch_assoc($table)) {
        $r[] = $row;
?>
    <div class='col-md-3 offset-md-2 offset-xl-2 offset-sm-2'>
        <?php
            echo ('<img src="'.$row['id'].' ' . $row['name'].'" class="'.$row['name'] .'"/>');
        ?>
    </div>
    <?php } ?>
</div>
<script>
</script>