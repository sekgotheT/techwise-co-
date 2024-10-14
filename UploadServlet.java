import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;

@WebServlet("/upload")
@MultipartConfig(fileSizeThreshold = 1024 * 1024, // 1MB threshold
        maxFileSize = 1024 * 1024 * 5,  // 5MB max file size
        maxRequestSize = 1024 * 1024 * 10) // 10MB max request size
public class UploadServlet extends HttpServlet {
    private static final String UPLOAD_DIR = "uploads";

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Gets absolute path to the upload directory.
        String uploadPath = getServletContext().getRealPath("") + File.separator + UPLOAD_DIR;

        // Creates the directory if it does not exist
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) uploadDir.mkdir();

        // Iterate over each file part and save to directory
        for (Part part : request.getParts()) {
            String fileName = extractFileName(part);
            part.write(uploadPath + File.separator + fileName);
        }

        response.getWriter().println("File uploaded successfully!");
    }

    // Extracts file name from HTTP header content-disposition
    private String extractFileName(Part part) {
        String contentDisp = part.getHeader("content-disposition");
        String[] tokens = contentDisp.split(";");
        for (String token : tokens) {
            if (token.trim().startsWith("filename")) {
                return token.substring(token.indexOf("=") + 2, token.length() - 1);
            }
        }
        return "";
    }
}
