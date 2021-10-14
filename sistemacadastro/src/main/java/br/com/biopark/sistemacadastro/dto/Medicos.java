package br.com.biopark.sistemacadastro.dto;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class Medicos implements Serializable {
    @GeneratedValue
    @Id
    private Long id;
    private String nome;
    private String crm;
    private String telefone;
    private boolean ativo;
    private String planosSaude;
    private String especialidade;
}
