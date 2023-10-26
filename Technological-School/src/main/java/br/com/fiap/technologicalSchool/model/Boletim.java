package br.com.fiap.technologicalSchool.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // Adiciona os padrões de classe
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Boletim {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private int falta;

    @NotNull
    private int nota;

    @NotBlank
    private String materia;

    
}
