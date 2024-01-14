package br.senac.df.dto;

public class DeptEmpDto {
	
	private String empDept;
	private String empName;
	private String empEmail;
	private String empEndereco;
	
	public DeptEmpDto(String empDept, String empName, String empEmail, String empEndereco) {		
		this.empDept = empDept;
		this.empName = empName;
		this.empEmail = empEmail;
		this.empEndereco = empEndereco;
	}

	public String getEmpDept() {
		return empDept;
	}

	public void setEmpDept(String empDept) {
		this.empDept = empDept;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpEmail() {
		return empEmail;
	}

	public void setEmpEmail(String empEmail) {
		this.empEmail = empEmail;
	}

	public String getEmpEndereco() {
		return empEndereco;
	}

	public void setEmpEndereco(String empEndereco) {
		this.empEndereco = empEndereco;
	}

	@Override
	public String toString() {
		return "DeptEmpDto [empDept=" + empDept + ", empName=" + empName + ", empEmail=" + empEmail + ", empEndereco="
				+ empEndereco + "]";
	}
	
	

}
