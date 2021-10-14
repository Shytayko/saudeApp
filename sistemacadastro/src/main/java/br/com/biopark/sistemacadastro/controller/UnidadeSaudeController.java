package br.com.biopark.sistemacadastro.controller;
import br.com.biopark.sistemacadastro.dto.UnidadeSaude;
import br.com.biopark.sistemacadastro.repository.UnidadeSaudeDTORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("unidade")
public class UnidadeSaudeController {
    @Autowired
    private UnidadeSaudeDTORepository repository;
    @GetMapping("/todos")
    public ResponseEntity<List<UnidadeSaude>> listar(){
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }
    @GetMapping("/portId/{id}")
    public  ResponseEntity<UnidadeSaude> porId(
            @PathVariable("id") Long id) {
        return new ResponseEntity<>(repository.findById(id).get(), HttpStatus.OK);

    }
    @PostMapping("/criar")
    public  ResponseEntity<UnidadeSaude> salvar(
            @RequestBody UnidadeSaude unidadeSaude
    ){
        repository.save(unidadeSaude);
        return new ResponseEntity<>(unidadeSaude, HttpStatus.OK);
    }

    @DeleteMapping(path="/{id}")
    public ResponseEntity<String> deleteById(
            @PathVariable Long id

    ){
        try{
            repository.deleteById(id);
            return new ResponseEntity<>("Removido,",HttpStatus.OK);
        } catch (Exception ex){
            return new ResponseEntity<>("Nao encontrado", HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping (value = "/{id}")
    public ResponseEntity<UnidadeSaude> atualizar(
            @RequestBody UnidadeSaude unidadeSaude,
            @PathVariable Long id
    ){
        UnidadeSaude unidadeSaudeBd= repository.findById(id).get();
        unidadeSaudeBd.setRazaoSocial(unidadeSaude.getRazaoSocial());
        unidadeSaudeBd.setAtivo(unidadeSaude.isAtivo());
        unidadeSaudeBd.setCnpj(unidadeSaude.getCnpj());
        unidadeSaudeBd.setTelefone(unidadeSaude.getTelefone());
        unidadeSaudeBd.setLogradouro(unidadeSaude.getLogradouro());
        unidadeSaudeBd = repository.save(unidadeSaude);

        return new ResponseEntity<>(unidadeSaudeBd,
                HttpStatus.OK);
    }
    
}

