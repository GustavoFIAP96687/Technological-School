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
import br.com.fiap.technologicalSchool.model.Aluno;
import br.com.fiap.technologicalSchool.repository.AlunoRepository;
import jakarta.validation.Valid;

@RestController
public class AlunoController {
    Logger log = LoggerFactory.getLogger(getClass());

    List<Aluno> alunos = new ArrayList<>();

    @Autowired
    AlunoRepository repository; // IoC - IoD

    @GetMapping("/alunos")
    public List<Aluno> index() {
        log.info("buscando todas as categorias");
        return repository. findAll();
    }

    @PostMapping("/alunos")
    public ResponseEntity<Aluno> create(@RequestBody @Valid Aluno aluno) {
        log.info("cadastrando aluno - " + aluno);
        repository.save(aluno);
        return ResponseEntity.status(HttpStatus.CREATED).body(aluno);
    }

    @GetMapping("/alunos/{id}")
    public ResponseEntity<Aluno> show(@PathVariable Long id) {
        log.info("mostrar aluno com id " + id);
        return ResponseEntity.ok(getAlunoById(id));
    }

    @DeleteMapping("/alunos/{id}")
    public ResponseEntity<Object> destroy(@PathVariable Long id){
        log.info("apagando aluno com id " + id);
        repository.delete(getAlunoById(id));
        return ResponseEntity.noContent().build();
    }
        

    @PutMapping("/alunos/{id}")
    public ResponseEntity<Aluno> update(@PathVariable Long id, @RequestBody @Valid Aluno aluno){
        log.info("atualizando dados do aluno com id " + id);
        getAlunoById(id);
        aluno.setId(id);
        repository.save(aluno);

        return ResponseEntity.ok(aluno);
    }

    private Aluno getAlunoById(Long id){
       return repository.findById(id).orElseThrow(() -> { 
            return new RuntimeException();
        });
    }

}
