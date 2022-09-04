import {conectar} from "../model/db_conectar.js";

var crud_estudiantes=({});

crud_estudiantes.leer=(req,res)=>{
    conectar.query('select e.id_estudiante,e.carne,e.nombres,e.apellidos,e.direccion,e.telefono,e.correo_electronico,ts.id_tipo_sangre,ts.sangre,date_format(e.fecha_nacimiento,"%Y-%m-%d")as fecha_nacimiento from estudiantes as e inner join tipos_sangre as ts on e.id_tipo_sangre=ts.id_tipo_sangre;',(err,result1)=>{
        if(err){
            throw err;
        }else{
            conectar.query('SELECT id_tipo_sangre,sangre FROM tipos_sangre;',(err,result2)=>{
                if(err){
                    throw err;
                }else{
                    res.render('estudiantes/index',{
                        students:result1,
                        bloods:result2
                    });
                }
            });
        }
    });

    
}

crud_estudiantes.crud=(req,res)=>{
    const btn_agregar = req.body.btn_agregar;
    const btn_modificar = req.body.btn_modificar;
    const btn_eliminar = req.body.btn_eliminar;
    const id_estudiante = req.body.txt_id;
    const carne = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_email;
    const fecha_nacimiento = req.body.txt_fecha_nacimiento;
    const id_tipo_sangre = req.body.txt_tipo_sangre;
    if(btn_agregar){
        conectar.query('insert into estudiantes set ?',{carne:carne,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,fecha_nacimiento:fecha_nacimiento,id_tipo_sangre:id_tipo_sangre},(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
            }
        }
        );
    }
    if(btn_modificar){
        conectar.query('update estudiantes set ? where id_estudiante=?',[{carne:carne,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,fecha_nacimiento:fecha_nacimiento,id_tipo_sangre:id_tipo_sangre},id_estudiante],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
            }
        }
        );
    }
    if(btn_eliminar){
        conectar.query('delete from estudiantes where id_estudiante=?',[id_estudiante],(err,result)=>{
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
            }
        }
        );
    }

};
export {crud_estudiantes}