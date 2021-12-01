package br.com.biopark.sistemacadastro.repository;

import br.com.biopark.sistemacadastro.dto.Medicos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicosDTORepository extends JpaRepository<Medicos, Long> {
}
