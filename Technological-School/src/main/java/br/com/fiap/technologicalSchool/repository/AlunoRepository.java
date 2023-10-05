package br.com.fiap.technologicalSchool.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.technologicalSchool.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long>{
    // @Query("SELECT c FROM categorias WHERE ....") //JPQL
    // List<Categoria> buscaOsDadosPeloMeuCriterioMaisMaluco(String nome); 
}
