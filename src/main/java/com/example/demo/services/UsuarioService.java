package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.UsuarioModel;
import com.example.demo.repository.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired
    UsuarioRepository usuarioRepository;

    public ArrayList<UsuarioModel> obtenerUsuarios() {
        return (ArrayList<UsuarioModel>) usuarioRepository.findAll();
    }

    public UsuarioModel guardarUsuario(UsuarioModel usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<UsuarioModel> obtenerPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    public ArrayList<UsuarioModel> obtenerPorEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public boolean eliminarUsuario(Long id) {
        try {
            usuarioRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean loginUsuario(UsuarioModel usuario) {
        String email = usuario.getEmail();
        String password = usuario.getPassword();

        ArrayList<UsuarioModel> usuariosEncontrados = usuarioRepository.findByEmail(email);

        if (usuariosEncontrados != null && !usuariosEncontrados.isEmpty()) {
            UsuarioModel usuarioEncontrado = usuariosEncontrados.get(0);
            if (usuarioEncontrado.getPassword().equals(password)) {
                return true;
            }
        }

        return false;
    }

}
