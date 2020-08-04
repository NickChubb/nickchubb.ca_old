<?php

// Automatically pulls on the server when a git push happens in the repo.

if ( $_POST['payload'] ) {
shell_exec( ‘sudo cd /var/www/html/public/ && git pull origin master 2>&1’ );
}

?>hi
