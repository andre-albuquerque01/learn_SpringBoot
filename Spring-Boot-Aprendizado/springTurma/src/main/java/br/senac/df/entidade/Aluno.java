	package br.senac.df.entidade;

	import jakarta.persistence.Column;
	import jakarta.persistence.Entity;
	import jakarta.persistence.GeneratedValue;
	import jakarta.persistence.GenerationType;
	import jakarta.persistence.Id;
	import jakarta.persistence.Table;

	@Entity
	@Table(name="aluno")
	public class Aluno implements Serializable {

		private static final long serialVersionUID = 1L;

		@Id
		@Column(name="id")
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private long id;

		@Column(name="nome")
		private String nome;

		@Column(name="cpf")
		private String cpf;

		@Column(name = "endereco")
		private String endereco;

		@Column(name="email")
		private String email;
	}







