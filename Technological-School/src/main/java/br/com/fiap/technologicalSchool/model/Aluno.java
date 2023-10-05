package br.com.fiap.technologicalSchool.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotBlank;


@Data // Adiciona os padrões de classe
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank

    @NotBlank
    private String nomeAluno;
    @NotBlank

    @NotBlank
    @Size(min = 11, max = 11, message = "O CPF deve ter 11 numeros")
    private String cpfAluno;

    
    @PastOrPresent
    private LocalDate dataNascAluno;

    @NotBlank
    @Size(min = 8, max = 8, message = "O CEP deve ter 8 numeros")
    private String cep;

    @NotBlank
    private String rua;

    
    @Positive(message = "O valor deve ser positivo")
    private int numero;

    private String complemento;

    @NotBlank
    private String nomeResponsavel;

    @NotBlank
    @Size(min = 11, max = 11, message = "O CPF deve ter 8 numeros")
    private String cpfResponsavel;

    
    @PastOrPresent
    private LocalDate dataNascResponsavel;
    
}
