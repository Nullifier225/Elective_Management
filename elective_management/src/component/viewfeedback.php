<!DOCTYPE html>
<html>
<head>
	<script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
    <title>Convert Table to PDF using JavaScript</title>
    <style>
        table
        {
            width: 300px;
            font: 17px Calibri;
        }
        table, th, td 
        {
            border: solid 1px #DDD;
            border-collapse: collapse;
            padding: 2px 3px;
            text-align: center;
        }
    </style>
</head>
<body>
    <script>
        function createPDF() {
            
            // Choose the element that our invoice is rendered in.
            const element = document.getElementById("tab");
            // Choose the element and save the PDF for our user.
            html2pdf()
              .from(element)
              .save();
              // PRINT THE CONTENTS.
        }
    </script>
    <div id="tab">
        <table> 
            <tr>
                <th>Name</th>
                    <th>Age</th>
                        <th>Job</th>
            </tr>
            <tr>
                <td>Brian</td>
                    <td>41</td>
                        <td>Blogger</td>
            </tr>
            <tr>
                <td>Matt</td>
                    <td>25</td>
                        <td>Programmer</td>
            </tr>
            <tr>
                <td>Arun</td>
                    <td>39</td>
                        <td>Writter</td>
            </tr>
        </table>
    </div>

    <p>
        <input type="button" value="Create PDF" 
            id="btPrint" onclick="createPDF()" />
    </p>
</body>

</html>
