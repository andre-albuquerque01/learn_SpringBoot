package br.senac.df.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.senac.df.dto.DeptEmpDto;
import br.senac.df.services.JoinQueryService;

@RestController
public class JoinQueryController {

	@Autowired
	private JoinQueryService joinQueryService;

	@GetMapping("/dept/empregado/left")
	public ResponseEntity<List<DeptEmpDto>> getEmpregadoLeftJoin() {
		return new ResponseEntity<List<DeptEmpDto>>(joinQueryService.getDeptEmpregadoLeftJoin(), HttpStatus.OK);
	}

	@GetMapping("/dept/empregado/right")
	public ResponseEntity<List<DeptEmpDto>> getEmpregadoRightJoin() {
		return new ResponseEntity<List<DeptEmpDto>>(joinQueryService.getDeptEmpregadoRightJoin(), HttpStatus.OK);
	}

	@GetMapping("/dept/empregado/inner")
	public ResponseEntity<List<DeptEmpDto>> getEmpregadoInnerJoin() {
		return new ResponseEntity<List<DeptEmpDto>>(joinQueryService.getDeptEmpregadoInnerJoin(), HttpStatus.OK);
	}

	@GetMapping("/dept/empregado/cross")
	public ResponseEntity<List<DeptEmpDto>> getEmpregadoCrossJoin() {
		return new ResponseEntity<List<DeptEmpDto>>(joinQueryService.getDeptEmpregadoCrossJoin(), HttpStatus.OK);
	}
}
