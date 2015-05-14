<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, target-densitydpi=device-dpi">
    <?php include('headHTML.php'); ?>

</head>
<body class="grey lighten-2">
    <div class="navbar-fixed">
    <nav>
        <div class="nav-wrapper blue">
        <a href="#!" class="brand-logo"><img src="Images/logo.png"></a>


             <?php include('navigation-main.php');
            include('navigation-slideOutMenu.php');?>


     </div>
    </nav>
    </div>

    <div class="row no-pad-bot">
              <?php include('content-slider.php'); ?>
    </div>
    <?php
    include('content-aboutUs-section.php');
    include('parallaxOne.php');
    include('content-footer.php');
    include('contact-Modal.php');
    ?>
    <script src="JS/materialize.min.js"></script>
    <script src="JS/main.js"></script>
</body>
</html>
