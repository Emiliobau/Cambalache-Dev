module.exports = (sequelize, DataTypes) =>{
    let alias = "User"
    let cols = {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombre:{
        type: DataTypes.STRING(45),
        allowNull:false
      },
      email:{
        type: DataTypes.STRING(45),
        allowNull: false
      },
      fechaNacimiento:{
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      lenguajeProgramacion:{
        type: DataTypes.ENUM,
        values: ["java", "javascript", "python"]
      },

      password:{
        type: DataTypes.STRING(250),
        allowNull: false
      }
    };
    let config ={
      tableName: "usuarios",
      timestamps: false
    }
  
    const User = sequelize.define(alias, cols, config)
  
    return User
  }