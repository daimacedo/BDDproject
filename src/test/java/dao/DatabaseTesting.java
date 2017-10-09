package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class DatabaseTesting {

	public static void main(String[] args) throws ClassNotFoundException {

		String usuario = "nconfidence";
		String senha = "nconfidence_tst";
		String url = "jdbc:jtds:sqlserver://10.90.0.9:62501;databaseName=nconfidence;instance=tst";
		


		try {
			 Class.forName("net.sourceforge.jtds.jdbc.Driver");
			 Connection conexao = DriverManager.getConnection(url, usuario, senha);
			 System.out.println("Conexão obtida com sucesso");
			 
		} catch (ClassNotFoundException e1) {

			e1.printStackTrace();
		} catch (SQLException e1) {

			e1.printStackTrace();
		}
	}
}
