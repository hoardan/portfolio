<?php
$action=$_REQUEST['action'];
if ($action=="")    /* display the contact form */
    {
    ?>
    <form id="fcf-form-id" class="fcf-form-class" method="post" action="form_data.php">
        <br><br>
        <label for="Name">name (first and last)</label>
        <input type="text" id="Name" name="Name" required>
        <br><br><br>    
        <label for="Email">email</label>
        <input type="email" id="Email" name="Email" required>
        <br><br><br>
        <label for="Phone">phone number</label>
        <input type="phone" id="Phone" maxlength="8" name="Phone">
        <br><br><br>
        <label for="Message">reason</label>
        <br>
        <textarea id="Message" name="Message" rows="8" cols="60" required></textarea>
        <br><br>
        <button id="submit" name="submit">submit</button>
    </form>
    <?php
    } 
else                /* send the submitted data */
    {
    $name=$_REQUEST['name'];
    $email=$_REQUEST['email'];
    $message=$_REQUEST['message'];
    if (($name=="")||($email=="")||($message==""))
        {
        echo "All fields are required, please fill <a href=\"\">the form</a> again.";
        }
    else{        
        $from="From: $name<$email>\r\nReturn-path: $email";
        $subject="Message sent using your contact form";
        mail("jordanjdamrau@gmail.com", $subject, $message, $from);
        echo "Email sent!";
        }
    }  
?>