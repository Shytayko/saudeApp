package br.com.biopark.sistemacadastro.controller;
import br.com.biopark.sistemacadastro.dto.Medicos;
import br.com.biopark.sistemacadastro.repository.MedicosDTORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("medicos")
public class MedicosController {
    @Autowired
    private MedicosDTORepository repository;
    @GetMapping("/todos")
    public ResponseEntity<List<Medicos>> listar(){
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }
    @GetMapping("/portId/{id}")
    public  ResponseEntity<Medicos> porId(
            @PathVariable("id") Long id) {
        return new ResponseEntity<>(repository.findById(id).get(), HttpStatus.OK);

    }
    @PostMapping("/criar")
    public  ResponseEntity<Medicos> salvar(
            @RequestBody Medicos medicos
    ){
        repository.save(medicos);
        return new ResponseEntity<>(medicos, HttpStatus.OK);
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
    public ResponseEntity<Medicos> atualizar(
            @RequestBody Medicos medicos,
            @PathVariable Long id
    ){
        Medicos medicosBd= repository.findById(id).get();
        medicosBd.setNome(medicos.getNome());
        //medicosBd.setAtivo(medicos.isAtivo());
        medicosBd.setCrm(medicos.getCrm());
        medicosBd.setTelefone(medicos.getTelefone());
        medicosBd.setEspecialidade(medicos.getEspecialidade());
        medicosBd.setPlanosSaude(medicos.getPlanosSaude());
        medicosBd   = repository.save(medicosBd);

        return new ResponseEntity<>(medicosBd,
                HttpStatus.OK);
    }

}

