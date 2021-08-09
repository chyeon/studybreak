package com.ycg.studybreak.springboot.test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    /**
     ***************************************************************
     * @author      Minkyeong
     * @apiNote     hello 출력 API
     * CREATED      2021-08-09
     * UPDATED      2021-08-09
     ***************************************************************
     */
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }
}
