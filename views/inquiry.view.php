<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
    <link rel='./css/styles.css'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require('../vendor/autoload.php');
?>
<nav style='padding:20px'>
    <a href="../index.php" class="border rounded-3 p-1 text-decoration-none" style='font-size:20px'><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
</nav>
<div class='col-xl-6 offset-md-2'>
    <form method='post'>
        <input type='number' name='disc' placeholder="Discount">
        <input type='email' name='email' placeholder="Email">
        <input type='submit' name="submit" value="Submit" class='btn btn-primary'>
    </form>
</div>

<?php
    //calculate price with discount and send email to user with all data 
    if(isset($_POST['submit'])) {
        $discount = $_POST['disc'];
        $email = $_POST['email'];
        $subject = 'Door configurator - Your configuration has been successfully made';
        $priceSum = $_COOKIE['typePrice'] + $_COOKIE['modelPrice'];
        echo("<script>console.log(" .$priceSum .");</script>");
        $con = $discount/100;
        $price = $priceSum*$con;
        $final_price =$priceSum - $price;
        $type = $_COOKIE['type'];
        $model = $_COOKIE['model'];
        $headers = 'From:webmaster@example.com' . "\r\n" . 'Reply to: ebteh6@gmail.com' . "\r\n" . 'X-Mailer:PHP';
        $mail = new PHPMailer();
        //$mail->IsSMTP();
        $mail->Mailer = "smtp";
        $mail->SMTPAuth   = TRUE;
        $mail->SMTPSecure = "tls";
        $mail->Port       = 587;
        $mail->Host       = "smtp.gmail.com";
        $mail->Username   = "gluhibilly@gmail.com";
        $mail->Password   = "jerbillysanja";
        $mail->IsHTML(true);
        $mail->AddAddress($email, "recipient-name");
        $mail->SetFrom("gluhibilly@gmail.com", "Door config");
        $mail->Subject = "Door Configurator";
        $content = "You have ordered: " . $_COOKIE['type'] . ' ' . $_COOKIE['model'] . 'it costs: ' . $final_price;
        $mail->MsgHTML($content);
        $mail->Send();
    }
?>