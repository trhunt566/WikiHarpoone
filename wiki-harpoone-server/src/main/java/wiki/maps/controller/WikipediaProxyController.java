package wiki.harpoone.controller;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/wikipedia")
public class WikipediaProxyController {

    @GetMapping("random-topic")
    public String getRandomTopic(){
        return "test";
    }
}
