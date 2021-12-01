package br.com.biopark.sistemacadastro.repository;

import br.com.biopark.sistemacadastro.dto.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteDTORepository extends JpaRepository<Cliente, Long> {
}
