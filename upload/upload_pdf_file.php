<?php

// Head
    
?>
		
<div id="upload-pdf-container">
	<form action="put_file.php" method="post" enctype="multipart/form-data">
		<table id="upload-table">
			<tr>
				<td>
					<label for="file">Upload:</label>
				</td>
				<td>
					<input type="file" name="file" id="file" /> 
				</td>
			</tr>
			<tr>
				<td>
					<label for="filename">Name:</label>
				</td>
				<td>
					<input type="text" name="filename" id="filename" maxlength="250" size="50" />
				</td>
			</tr>
			<tr>
				<td>
					<label for="description">Description:</label>
				</td>
				<td>
					<input type="text" name="description" id="description" maxlength="250" size="50" />
				</td>
			</tr>
			<tr>
				<td>
					<input type="submit" name="submit" value="Submit" />
				</td>
			</tr>
		</table>
	</form>

	<?

	// Foot

	?>
