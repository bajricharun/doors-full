<head>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
    <link rel='./css/styles.css'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<body>
<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto px-0">
            <div id="sidebar" class="collapse collapse-horizontal show border-end">
                <div id="sidebar-nav" class="list-group border-0 rounded-0 text-sm-start min-vh-100">
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate type" data-bs-parent="#sidebar"><i class="bi bi-door-closed-fill"></i><span>Type</span> </a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate model" data-bs-parent="#sidebar"><i class="bi bi-door-open-fill"></i> <span>Model</span></a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate color" data-bs-parent="#sidebar"><i class="bi bi-paint-bucket"></i> <span>Color</span></a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate interior" data-bs-parent="#sidebar"><i class="bi bi-door-open-fill"></i> <span>Interior</span></a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate knobs-locks" data-bs-parent="#sidebar"><i class="bi bi-lock-fill"></i> <span>Knobs - Locks</span></a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate construction" data-bs-parent="#sidebar"><i class="bi bi-gear-fill"></i> <span>Construction</span></a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate additional" data-bs-parent="#sidebar"><i class="bi bi-gear-fill"></i> <span>Additional</span></a>
                    
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate save" data-bs-parent="#sidebar"><i class="bi bi-save-fill"></i> <span>Save</span></a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate inquiry" data-bs-parent="#sidebar"><i class="bi bi-envelope-fill"></i> <span>Inquiry</span></a>
                    <a href="#" class="list-group-item border-end-0 d-inline-block text-truncate admin" data-bs-parent="#sidebar"><i class="bi bi-person-circle"></i> <span>Admin panel</span></a>
                </div>
            </div>
        </div>
        <main class="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none"><i class="bi bi-list bi-lg py-2 p-1"></i> Menu</a>
            <div class='main'>

            </div>
        </main>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('.main').load('./views/type.view.php');
    });
    $('.type').click(function () {
        $('.main').load('./views/type.view.php');
    });

    $('.model').click(function () {
        $('.main').load('./views/model.view.php');
    });
    $('.color').click(function () {
        $('.main').load('./views/colors.view.php');
    });
    $('.interior').click(function () {
        $('.main').load('./views/interior.view.php');
    });
    $('.knobs-locks').click(function () {
        $('.main').load('./views/locks_knobs.view.php');
    });

    $('.construction').click(function () {
        $('.main').load('./views/construction.view.php');
    });
    $('.additional').click(function () {
        $('.main').load('./views/additional.view.php');
    });
    $('.save').click(function () {
        $('.main').load('./views/save.view.php');
    });

    $('.inquiry').click(function () {
        $('.main').load('./views/inquiry.view.php');
    });

    $('.admin').click(function () {
        $('.main').load('./views/admin.view.php');
    });
</script>