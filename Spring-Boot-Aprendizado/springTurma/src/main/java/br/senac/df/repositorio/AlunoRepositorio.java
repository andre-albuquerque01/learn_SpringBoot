package br.senac.df.repositorio;

import br.senac.df.entidade.Aluno;
import org.springframework.data.jpa.repository.Query;
import br.senac.df.dto.TurmaDto;


public interface AlunoRepositorio extends JpaRepository<Aluno, Integer> {
    @Query("SELECT new br.senac.springjoin.dto.DeptEmpDto(d.name,e.name,e.email,e.endereco)"
            + "FROM Departamento d INNER JOIN d.empregado e")
    List<TurmaDto> fetchEmpDeptDataInnerJoin();

    @Query("SELECT new br.senac.springjoin.dto.DeptEmpDto(d.name,e.name,e.email,e.endereco)"
            + "FROM Departamento d, empregado e")
    List<TurmaDto> fetchEmpDeptDataCrossJoin();
}
