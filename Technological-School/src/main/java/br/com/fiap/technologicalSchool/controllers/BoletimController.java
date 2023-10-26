package br.com.fiap.technologicalSchool.controllers;
import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import br.com.fiap.technologicalSchool.model.Boletim;
import br.com.fiap.technologicalSchool.repository.BoletimRepository;
import jakarta.validation.Valid;

@RestController
public class BoletimController {
    Logger log = LoggerFactory.getLogger(getClass());

    List<Boletim> boletim = new ArrayList<>();

    @Autowired
    BoletimRepository repository; // IoC - IoD

    @GetMapping("/boletim")
    public List<Boletim> index() {
        log.info("buscando todos os boletim");
        return repository. findAll();
    }

    @PostMapping("/boletim")
    public ResponseEntity<Boletim> create(@RequestBody @Valid Boletim boletim) {
        log.info("cadastrando boletim - " + boletim);
        repository.save(boletim);
        return ResponseEntity.status(HttpStatus.CREATED).body(boletim);
    }

    @GetMapping("/boletim/{id}")
    public ResponseEntity<Boletim> show(@PathVariable Long id) {
        log.info("mostrar boletim com id " + id);
        return ResponseEntity.ok(getBoletimById(id));
    }

    @DeleteMapping("/boletim/{id}")
    public ResponseEntity<Object> destroy(@PathVariable Long id){
        log.info("apagando boletim com id " + id);
        repository.delete(getBoletimById(id));
        return ResponseEntity.noContent().build();
    }
        

    @PutMapping("/boletim/{id}")
    public ResponseEntity<Boletim> update(@PathVariable Long id, @RequestBody @Valid Boletim boletim){
        log.info("atualizando dados do boletim com id " + id);
        getBoletimById(id);
        boletim.setId(id);
        repository.save(boletim);

        return ResponseEntity.ok(boletim);
    }


    private Boletim getBoletimById(Long id){
       return repository.findById(id).orElseThrow(() -> { 
            return new RuntimeException();
        });
    }
    
}
