package br.com.fiap.technologicalSchool.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.fiap.technologicalSchool.model.Boletim;

public interface BoletimRepository extends JpaRepository<Boletim, Long>{
    
}
