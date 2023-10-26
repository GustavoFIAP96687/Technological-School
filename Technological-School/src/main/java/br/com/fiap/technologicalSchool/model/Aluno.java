package br.com.fiap.technologicalSchool.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


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

    @OneToOne
    private Boletim boletim;


    public Aluno withId(Long id) {
        this.id = id;
        return this;
    }

    public Aluno withNomeAluno(String nomeAluno) {
        this.nomeAluno = nomeAluno;
        return this;
    }

    public Aluno withCpfAluno(String cpfAluno) {
        this.cpfAluno = cpfAluno;
        return this;
    }

    public Aluno withDataNascAluno(LocalDate dataNascAluno) {
        this.dataNascAluno = dataNascAluno;
        return this;
    }

    public Aluno withCep(String cep) {
        this.cep = cep;
        return this;
    }

    public Aluno withRua(String rua) {
        this.rua = rua;
        return this;
    }

    public Aluno withNumero(int numero) {
        this.numero = numero;
        return this;
    }

    public Aluno withComplemento(String complemento) {
        this.complemento = complemento;
        return this;
    }

    public Aluno withNomeResponsavel(String nomeResponsavel) {
        this.nomeResponsavel = nomeResponsavel;
        return this;
    }

    public Aluno withCpfResponsavel(String cpfResponsavel) {
        this.cpfResponsavel = cpfResponsavel;
        return this;
    }

    public Aluno withDataNascResponsavel(LocalDate dataNascResponsavel) {
        this.dataNascResponsavel = dataNascResponsavel;
        return this;
    }

    public Aluno withBoletim(Boletim boletim) {
        this.boletim = boletim;
        return this;
    }

    
}
