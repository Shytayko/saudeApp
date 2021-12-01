package br.com.biopark.sistemacadastro.repository;

import br.com.biopark.sistemacadastro.dto.UnidadeSaude;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UnidadeSaudeDTORepository extends JpaRepository<UnidadeSaude, Long> {
}
