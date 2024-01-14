package br.senac.df.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.senac.df.dto.TurmaDto;
import br.senac.df.services.JoinQueryService;

@RestController
public class JoinQueryController {

	@Autowired
	private JoinQueryService joinQueryService;

	@GetMapping("/turma/left")
	public ResponseEntity<List<TurmaDto>> getTurmaLeftJoin() {
		return new ResponseEntity<List<TurmaDto>>(joinQueryService.getTurmaLeftJoin(), HttpStatus.OK);
	}

	@GetMapping("/turma/right")
	public ResponseEntity<List<TurmaDto>> getTurmaRightJoin() {
		return new ResponseEntity<List<TurmaDto>>(joinQueryService.getTurmaRightJoin(), HttpStatus.OK);
	}

	@GetMapping("/turma/inner")
	public ResponseEntity<List<TurmaDto>> getTurmaInnerJoin() {
		return new ResponseEntity<List<TurmaDto>>(joinQueryService.getAlunoInnerJoin(), HttpStatus.OK);
	}

	@GetMapping("/turma/cross")
	public ResponseEntity<List<TurmaDto>> getTurmaCrossJoin() {
		return new ResponseEntity<List<TurmaDto>>(joinQueryService.getAlunoCrossJoin(), HttpStatus.OK);
	}
}
