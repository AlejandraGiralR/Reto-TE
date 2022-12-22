import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.sql.*;

public class ConexionBD {
    ModeloDatos modeloDatos = new ModeloDatos();

    public String conexion() {

        String connectionUrl =
                "jdbc:sqlserver://SQL5074.site4now.net:1433;"
                        + "databaseName=db_a46019_test;"
                        + "user=db_a46019_test_admin;"
                        + "password=test1234;";

        return connectionUrl;
    }

    public void insertData(String consulta) {

        ResultSet resultSet = null;

        try (Connection connection = DriverManager.getConnection(conexion());
             PreparedStatement statement = connection.prepareStatement(consulta, Statement.RETURN_GENERATED_KEYS)) {

            statement.execute();

            resultSet = statement.getGeneratedKeys();

            System.out.println("resulset " + resultSet);


            while (resultSet.next()) {
                System.out.println("Generated: " + resultSet.getString(1));
            }
        } catch (SQLException e) {
            e.printStackTrace();

        }

    }

    public void consultaSQL(String consulta) throws JsonProcessingException {

        ResultSet resultSet = null;

        try (Connection connection = DriverManager.getConnection(conexion());
             Statement statement = connection.createStatement();) {
            resultSet = statement.executeQuery(consulta);

            while (resultSet.next()) {
                modeloDatos.setCedula(resultSet.getString("cedula"));
                modeloDatos.setNombres(resultSet.getString("nombres"));
                modeloDatos.setApellido(resultSet.getString("apellido"));
                modeloDatos.setTelefono(resultSet.getString("telefono"));
                modeloDatos.setEdad(resultSet.getInt("edad"));

            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writerWithDefaultPrettyPrinter()
                .writeValueAsString(modeloDatos);

        System.out.println("SALIDA JSON: \n" + json);
    }


}