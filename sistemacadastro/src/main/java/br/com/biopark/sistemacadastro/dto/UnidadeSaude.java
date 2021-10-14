package br.com.biopark.sistemacadastro.dto;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class UnidadeSaude implements Serializable {
    @GeneratedValue
    @Id
    private Long id;
    private String razaoSocial;
    private String cnpj;
    private String telefone;
    private boolean ativo;
    private String logradouro;

}