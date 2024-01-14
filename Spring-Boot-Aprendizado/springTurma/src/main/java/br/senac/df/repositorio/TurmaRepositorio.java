package br.senac.df.repositorio;

import br.senac.df.entidade.Turma;
import org.springframework.data.jpa.repository.Query;
import br.senac.df.dto.TurmaDto;

public interface TurmaRepositorio extends JpaRepository<Turma, Integer> {
	
	@Query("SELECT new br.senac.springjoin.dto.DeptEmpDto(d.name,e.name,e.email,e.endereco)"
			+ "FROM Departamento d LEFT JOIN d.empregado e")
	List<TurmaDto> fetchTurmaLeftJoin();
	
	@Query("SELECT new br.senac.springjoin.dto.DeptEmpDto(d.name,e.name,e.email,e.endereco)"
			+ "FROM Departamento d RIGHT JOIN d.empregado e")
	List<TurmaDto> fetchTurmaRightJoin();

}
