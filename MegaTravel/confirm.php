<!DOCTYPE html>
<html>

<head>
    <style>
        /* Default Margin/Padding */
        * {
            margin: 0;
            padding: 0;
        }

        /* Center Logo for Mobile */
        .center {
            display: block;
        }

        @media only screen and (max-width: 600px) {
            .center {
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        }

        /* Header CSS */
        #Header {
            width: 100%;
            height: 150px;
            background: #add8e6;
        }

        #Header-Separate {
            width: 100%;
            height: 20px;
            background: #d3d3d3;
        }

        /* Nav Links CSS */
        #Nav-Link {
            display: flex;
            justify-content: center;
        }

        @media only screen and (max-width: 600px) {
            #Nav-Link {
                background: black;
            }
        }

        #Nav-Link ul {
            display: flex;
            list-style: none;
        }

        #Nav-Link a {
            color: black;
            font-weight: bold;
            display: block;
            padding: 15px;
            text-decoration: none;
        }

        @media only screen and (max-width: 600px) {
            #Nav-Link a {
                color: white;
                font-weight: bold;
                display: block;
                padding: 15px;
                text-decoration: none;
            }
        }

        #Nav-Link a:hover {
            text-decoration: underline;
            color: red;
        }

        #Thank {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }

        /* Table CSS */
        #Table {
            width:fit-content;
            margin-left: auto;
            margin-right: auto;
        }
        #Table tr td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
        }

        /* Footer CSS */
        #Footer {
            text-align: left;
            color: white;
            background: black;
            padding-left: 20px;
            width: 100%;
            bottom: 0;
            left: 0;
            position: absolute;
        }

        #Footer a {
            color: white;
            text-decoration: none;
        }

        #Footer a:hover {
            color: #ffa500;
        }
    </style>
</head>

<body>
    <!-- Header HTML -->
    <div id="Header">
        <img src="siteFiles/megaTravelLogo.png" alt="Logo" width="300" class="center">
    </div>
    <div id="Header-Separate">
    </div>

    <!-- Nav Links HTML -->
    <div id="Nav-Link">
        <ul>
            <li><a href="MegaTravelHome.html">Home</a></li>
            <li><a href="MegaTravelAbout.html">About Us</a></li>
            <li><a href="MegaTravelContact.html">Contact Agent</a></li>
        </ul>
    </div>

    <!-- PHP -->
    <?php
    $firstName = $lastName = $email = $pNumber = $numAdult = $numChild = $date = $destination = $activity1 =
        $activity2 = $activity3 = $activity4 = $activity5 = "";

    $firstName = $_POST["fname"];
    $lastName = $_POST["lname"];
    $email = $_POST["email"];
    $pNumber = $_POST["phone"];
    $numAdult = $_POST["adults"];
    $numChild = $_POST["child"];
    $date = $_POST["date"];
    $destination = $_POST["destination"];
    // $activity1 = $_POST["option1"];
    // $activity2 = $_POST["option2"];
    // $activity3 = $_POST["option3"];
    // $activity4 = $_POST["option4"];
    // $activity5 = $_POST["option5"];
    ?>
    
    <div id="Thank">
        <br> <p>Thank you for submitting your travel agent contact request! Here is the information you submitted:</p> <br><br>
    </div>

    <!-- Table HTML -->
    <div id="Table">
        
        <table>
            <tr>
                <td>First Name:</td>
                <td><?php echo $firstName ?></td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td><?php echo $lastName ?></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><?php echo $email ?></td>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <td><?php echo $pNumber ?></td>
            </tr>
            <tr>
                <td>Number of Adults:</td>
                <td><?php echo $numAdult ?></td>
            </tr>
            <tr>
                <td>Number of Children:</td>
                <td><?php echo $numChild ?></td>
            </tr>
            <tr>
                <td>Trip Date:</td>
                <td><?php echo $date ?></td>
            </tr>
            <tr>
                <td>Destination:</td>
                <td><?php echo $destination ?></td>
            </tr>
        </table>
    </div>

    <div id="Thank">
        <br><br> <p>An agent will be in touch with you soon!</p>
    </div>

    <!-- Footer HTML -->
    <div id="Footer">
        <p>Copyright Protected. All Rights Reserved.</p><br>
        <p>MEGA TRAVELS</p>
        <a href="mailto:mega@travel.com">mega@travel.com</a>
    </div>
</body>

</html>