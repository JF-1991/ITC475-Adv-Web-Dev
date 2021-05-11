<!doctype html>

<?php
$db = mysqli_connect('localhost', 'root', '', 'db_greatrace');
if (mysqli_connect_errno($db)) {
    echo "Error connecting to database";
}
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
        th,
        a {
            border: 1px solid #dddddd;
            text-align: center;
            padding: 8px;
            color: cyan;
        }
    </style>
</head>

<body>
    <?php
    $winner = $loss = $time = "";

    $winner = $_POST['winner'];
    $loss = $_POST['loss'];
    $time = $_POST['time'];

    $sql = "INSERT INTO `tbl_racestat` (`Win`,`Loss`,`Time`,`raceID`) VALUES ('$winner','$loss','$time','0')";
    $rs = mysqli_query($db, $sql);
    if (!$rs) echo "inserted";
    ?>

    <table>
        <tr>
            <td>Race Results</td>
        </tr>
        <tr>
            <td><?php echo $winner ?></td>
        </tr>
        <tr>
            <td><?php echo $loss ?></td>
        </tr>
        <tr>
            <td><?php echo $time ?></td>
        </tr>
        <tr>
            <td><a href="Race.html">Click to go back to the race</a></td>
        </tr>
    </table>
</body>