import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*") // Allow requests from any origin
@RestController
public class WebController {
    @GetMapping("/api/message")
    public String getMessage() {
        return "Hello from the back-end!";
    }
}
