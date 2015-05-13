<!DOCTYPE html>
<html>
    <head>
      <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
			<link type="text/css" rel="stylesheet" href="css/main.css" media="screen,projection"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    </head>

    <body>
			<?php include('navigation.php');?>
      <div id="one" class="row">
			 <?php include('slider.php');?>
     </div>
       <main><div class="container"><?php
       include('parallaxOne.php');
        include('rowTwo.php'); ?>
      </div>
</main>
      <script type="text/javascript" src="js/jquery-2.1.3.min.js"></script>
      <script type="text/javascript" src="js/materialize.min.js"></script>
			<script type="text/javascript" src="js/main.js"></script>
    </body>
  </html>
