package br.com.biopark.sistemacadastro.repository;


import br.com.biopark.sistemacadastro.dto.PlanosSaude;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanosSaudeDTORepository extends JpaRepository<PlanosSaude, Long> {
}
