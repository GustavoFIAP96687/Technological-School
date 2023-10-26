/*package br.com.fiap.technologicalSchool.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import br.com.fiap.technologicalSchool.model.Aluno;
import br.com.fiap.technologicalSchool.repository.AlunoRepository;

@Configuration
public class DataBaseSeeder implements CommandLineRunner {

    @Autowired
    AlunoRepository alunoRepository;

    @Override
    public void run(String... args) throws Exception {
        alunoRepository.saveAll(
            List.of(
                new Aluno()
            )
        );
        
    }
    
}*/
