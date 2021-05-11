<!doctype html>

<?php
$db = mysqli_connect('localhost', 'root', '', 'db_greatrace') or die('error connecting to database');
$result = mysqli_query($db, "SELECT * FROM tbl_racestat order by raceID DESC LIMIT 5");
?>

<html lang="en">

<head>
    <meta charset="utf-8">

    <title>The Greatest Race</title>
    <meta name="Final Project" content="The Greatest Race">
    <style>
        body {
            background-image: url("SiteFiles/background.jpg");
            background-repeat: repeat;
            background-size: 1920px 1080px;
        }

        /* Table CSS */
        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
        }

        td,
        th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            color: cyan;
        }

        p,
        a {
            text-align: center;
            color: cyan;
        }
    </style>
</head>

<body>
    <?php
    if (mysqli_num_rows($result) > 0) {
    ?>
        <table>
            <tr>
                <td>Winner</td>
                <td>Loss</td>
                <td>Time</td>
                <td>Race ID</td>
            </tr>
            <?php
            $i = 0;
            while ($row = mysqli_fetch_array($result)) {
            ?>
                <tr>
                    <td><?php echo $row["Win"]; ?></td>
                    <td><?php echo $row["Loss"]; ?></td>
                    <td><?php echo $row["Time"]; ?></td>
                    <td><?php echo $row["raceID"]; ?></td>
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
    <p><a href="Race.html">Click here to go back to the races.</a></p>
</body>