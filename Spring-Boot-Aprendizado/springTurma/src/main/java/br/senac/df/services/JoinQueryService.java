package br.senac.df.services;

import java.util.*;

import org.springframework.stereotype.Service;

import br.senac.df.dto.TurmaDto;
import br.senac.df.repositorio.TurmaRepositorio;
import br.senac.df.repositorio.AlunoRepositorio;
import jakarta.annotation.Resource;

@Service
public class JoinQueryService {
	@Resource
	private TurmaRepositorio turmaRepositorio;

	@Resource
	private AlunoRepositorio alunoRepositorio;

	public List<TurmaDto> getTurmaLeftJoin() {
		List<TurmaDto> list = turmaRepositorio.fetchTurmaLeftJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}

	public List<TurmaDto> getTurmaRightJoin() {
		List<TurmaDto> list = turmaRepositorio.fetchTurmaRightJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}

	public List<TurmaDto> getAlunoInnerJoin() {
		List<TurmaDto> list = alunoRepositorio.fetchEmpDeptDataInnerJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}

	public List<TurmaDto> getAlunoCrossJoin() {
		List<TurmaDto> list = alunoRepositorio.fetchEmpDeptDataCrossJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}
}
