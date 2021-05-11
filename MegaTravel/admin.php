<!DOCTYPE html>

<?php
$db = mysqli_connect('localhost', 'root', '', 'db_contact') or die('error connecting to database');
$result = mysqli_query($db, "SELECT * FROM tbl_contact");
?>

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
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
        }
        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            color: cyan;
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

    <!-- PHP -->
    <?php
    if (mysqli_num_rows($result) > 0) {
    ?>
        <table>

            <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Phone Number</td>
                <td>Number of Adults</td>
                <td>Number of Children</td>
                <td>Trip Date</td>
                <td>Destination</td>
                <td>ID</td>
            </tr>

            <?php
            $i = 0;
            while ($row = mysqli_fetch_array($result)) {
            ?>
                <tr>
                    <td><?php echo $row["fName"]; ?></td>
                    <td><?php echo $row["lName"]; ?></td>
                    <td><?php echo $row["eMail"]; ?></td>
                    <td><?php echo $row["phoneNumber"]; ?></td>
                    <td><?php echo $row["adultNumber"]; ?></td>
                    <td><?php echo $row["childNumber"]; ?></td>
                    <td><?php echo $row["tripDate"]; ?></td>
                    <td><?php echo $row["destinationName"]; ?></td>
                    <td><?php echo $row["id"]; ?></td>
                </tr>
            <?php
                $i++;
            }
            ?>
        </table>
    <?php
    } else {
        echo "No result found";
    }
    ?>

    <!-- Footer HTML -->
    <div id="Footer">
        <p>Copyright Protected. All Rights Reserved.</p><br>
        <p>MEGA TRAVELS</p>
        <a href="mailto:mega@travel.com">mega@travel.com</a>
    </div>
</body>

</html>