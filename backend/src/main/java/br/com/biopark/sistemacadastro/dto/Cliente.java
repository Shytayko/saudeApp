package br.com.biopark.sistemacadastro.dto;

import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Date;
@Data
@Entity
public class Cliente implements Serializable {
    @GeneratedValue
    @Id
    private Long id;
    private String nome;
    private String cpf;
    private Date dataNascimento;
    private String telefone;
    //private boolean ativo;
    private String planoSaude;
}
