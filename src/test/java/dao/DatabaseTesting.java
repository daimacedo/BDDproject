package dao;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;

import gherkin.formatter.model.Result;


public class DatabaseTesting {


	public static Connection conectarBancoTeste() throws IOException
	{
		
		
		
		String pathname = "/home/daiane.macedo/workspace2/test.properties";
		Properties prop = new Properties();
		FileInputStream fs = new FileInputStream(pathname);
		prop.load(fs);
		
		String usuario = prop.getProperty("usuario");
		String senha = prop.getProperty("senha");
		String url = prop.getProperty("url");
		System.out.println(url);
		Connection conexao = null;


		try {
			 Class.forName("net.sourceforge.jtds.jdbc.Driver");
			 System.out.println("Conexão obtida com sucesso");
			 conexao = DriverManager.getConnection(url, usuario, senha);
			 System.out.println(conexao);
			
			 
		} catch (ClassNotFoundException e1) {

			e1.printStackTrace();
		} catch (SQLException e1) {

			e1.printStackTrace();
		}
		return conexao;

	}
	
	
	@Test
	public void testaConsultaBancoDados() throws SQLException, IOException
	{
		Connection conn = conectarBancoTeste();
		
		String sql = "SELECT numeroSemFormato, pessoa_id FROM Documento where numeroSemFormato = '41844043835'";
		PreparedStatement ps = conn.prepareStatement(sql);
		ResultSet rs = ps.executeQuery();
		while(rs.next())
		{
			String documento  = rs.getString("numeroSemFormato");
			String idPessoa = rs.getString("pessoa_id");
			System.out.println("Numero do documento: " + documento );
			System.out.println("Id pessoa: " + idPessoa);
			assertThat(documento).isEqualTo("41844043835");
			assertThat(idPessoa).isEqualTo("5114346");
			
		}
		
		conn.close();
		
		if(conn.isClosed())
			{
			 System.out.println("fechou");
			}
		
		
		
	}
	
	
	
	
	
	public static void main(String[] args) throws ClassNotFoundException, IOException {

		conectarBancoTeste();
	}
		
}
