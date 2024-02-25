<?php
    // Define your location project directory in htdocs (EX THE FULL PATH: D:\xampp\htdocs\x-kang\simple-routing-with-php)
    $DIR_PATH = "";
    $LINK = $DIR_PATH;

    // For get URL PATH
    $request = $_SERVER['REQUEST_URI'];

    switch ($request) {
        case $LINK.'/' : case $LINK.'/home' :
            require "views/home.php";
            break;
        case $LINK.'/chat' :
            require "views/chat.php";
            break;
        case $LINK.'/notification' :
            require "views/notification.php";
            break;
        case $LINK.'/profile' :
            require "views/profile.php";
            break;
        case $LINK.'/security' :
            require "views/security.php";
            break;
        case $LINK.'/faq' :
            require "views/faq.php";
            break;
        case $LINK.'/privacy' :
            require "views/privacy.php";
            break;
        case $LINK.'/contact' :
            require "views/contact.php";
            break;
        case $LINK.'/about' :
            require "views/about.php";
            break;
        case $LINK.'/sitemap.xml' :
            require "sitemap.xml";
            break;
        default:
            http_response_code(404);
            echo "404";
            break;
    }