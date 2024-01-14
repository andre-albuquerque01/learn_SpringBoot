package br.senac.df.springjoin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan("br.senac.df.entidade")
@EnableJpaRepositories("br.senac.df.repositorio")
public class SpringjoinApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringjoinApplication.class, args);
	}

}
