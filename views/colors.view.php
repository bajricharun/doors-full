<?php
    require('../controllers/colors.php');
?>

<div class='row' >
<?php
    while($row = mysqli_fetch_assoc($table)) {
?>
    <div class='col-md-3 offset-md-2 offset-xl-2 offset-sm-2'>
        <?php
            echo ('<img src="'.$row['id'].' ' . $row['name'].'"/>');
        ?>
    </div>
    <?php } ?>
</div>
<script>
    
</script>