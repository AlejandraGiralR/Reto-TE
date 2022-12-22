import com.fasterxml.jackson.core.JsonProcessingException;
import net.datafaker.Faker;

public class Main {

    public static void main(String[] args) throws JsonProcessingException {
        ConexionBD conexionBD=new ConexionBD();

        Faker randomData = new Faker();

        String cedula = randomData.number().digits(10);

        String insertSql="INSERT INTO persona"+"(cedula,nombres,apellido,telefono,edad)"+"VALUES('"+cedula+"', '"+randomData.name().firstName()+"', '"+randomData.name().lastName()
                +"', '"+randomData.number().digits(10)+"', "+randomData.number().digits(2)+")";
        conexionBD.insertData(insertSql);


        String selectSql = "SELECT * FROM persona where cedula='"+cedula+"'";
        conexionBD.consultaSQL(selectSql);
    }
}
