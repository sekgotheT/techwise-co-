import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
public class FileUploadController {

    private static final String UPLOAD_DIR = "uploads/";

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFiles(@RequestParam("imageUpload") List<MultipartFile> files) {
        for (MultipartFile file : files) {
            try {
                // Save files to the server
                String filePath = UPLOAD_DIR + file.getOriginalFilename();
                Files.copy(file.getInputStream(), Paths.get(filePath));
            } catch (IOException e) {
                e.printStackTrace();
                return ResponseEntity.status(500).body("Error while uploading file: " + file.getOriginalFilename());
            }
        }
        return ResponseEntity.ok("Files uploaded successfully!");
    }
}
