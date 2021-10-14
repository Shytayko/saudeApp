package br.com.biopark.sistemacadastro.controller;
import br.com.biopark.sistemacadastro.dto.PlanosSaude;
import br.com.biopark.sistemacadastro.repository.PlanosSaudeDTORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("planossaude")
public class PlanosSaudeController {
    @Autowired
    private PlanosSaudeDTORepository repository;
    @GetMapping("/todos")
    public ResponseEntity<List<PlanosSaude>> listar(){
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }
    @GetMapping("/portId/{id}")
    public  ResponseEntity<PlanosSaude> porId(
            @PathVariable("id") Long id) {
        return new ResponseEntity<>(repository.findById(id).get(), HttpStatus.OK);

    }
    @PostMapping("/criar")
    public  ResponseEntity<PlanosSaude> salvar(
            @RequestBody PlanosSaude planosSaude
    ){
        repository.save(planosSaude);
        return new ResponseEntity<>(planosSaude, HttpStatus.OK);
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
    public ResponseEntity<PlanosSaude> atualizar(
            @RequestBody PlanosSaude planosSaude,
            @PathVariable Long id
    ){
        PlanosSaude planosSaudeBd= repository.findById(id).get();
        planosSaudeBd.setPlano(planosSaude.getPlano());
        planosSaudeBd.setAtivo(planosSaude.isAtivo());
        planosSaudeBd = repository.save(planosSaudeBd);

        return new ResponseEntity<>(planosSaudeBd,
                HttpStatus.OK);
    }

}

