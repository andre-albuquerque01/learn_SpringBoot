package entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
@AllArgsConstructor
public class Livro {
private long isbn;
private String titulo;
private Integer edicao;
private String autor;
private Categoria categoria;
private Modelo modelo;

    public Livro(long isbn, String helo_word, String hieat, Categoria economia, Modelo ebook) {
    }
}
