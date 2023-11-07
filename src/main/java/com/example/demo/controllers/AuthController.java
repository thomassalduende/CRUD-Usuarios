package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.UsuarioModel;
import com.example.demo.services.UsuarioService;

@RestController
@RequestMapping("/login")
public class AuthController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping()
    public String loginUsuario(@RequestBody UsuarioModel usuario) {
        boolean ok = this.usuarioService.loginUsuario(usuario);
        if (ok) {
            return "OK";
        } else {
            return "FAIL";
        }
    }

}
