<?php
header('Content-Type: application/json'); // Set response type to JSON

// Check if a file was uploaded
if ($_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = 'uploads/'; // Directory to store uploaded files
    $uploadFile = $uploadDir . basename($_FILES['file']['name']);

    // Create the uploads directory if it doesn't exist
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    // Move the uploaded file to the desired directory
    if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
        echo json_encode(['success' => true, 'message' => 'File uploaded successfully.']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to move uploaded file.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'No file uploaded or upload error.']);
}
?>