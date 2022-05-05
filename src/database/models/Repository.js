module.exports = (sequelize, DataTypes) =>{
    let alias = "Repository"
    let cols = {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombreProyecto:{
        type: DataTypes.TEXT,
        allowNull:false
      },
      lenguaje:{
        type: DataTypes.ENUM,
        values: ["java", "javascript", "python"]
      },
      fechaCreacion:{
        type: DataTypes.DATE,
        allowNull: false
      },
      descripcion:{
        type: DataTypes.TEXT,
      },
      usuarios_id:{
        type: DataTypes.INTEGER
      }
    };
    let config ={
      tableName: "repositorios",
      timestamps: false
    }
  
    const Repository = sequelize.define(alias, cols, config)
  
    return Repository
  }