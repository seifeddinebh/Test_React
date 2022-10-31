import axios from 'axios';
import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function AjouterProduit() {
    const navigate = useNavigate()

    return (
        <div >
            <Formik
                initialValues={{
                    nom: "",
                    description: "",
                    prix: "",
                    quantite: "",
                }}
                validate={values => {
                    const errors = {};
                    if (!values.nom) {
                        errors.nom = 'Required';
                    }
                    else if (values.nom && values.nom.length < 4) {
                        errors.nom = 'nom is too short';
                    }

                    if (!values.description) {
                        errors.description = 'Required';
                    }
                    else if (values.description && values.description.length < 4) {
                        errors.description = 'description is too short';
                    }
                    if (!values.prix) {
                        errors.prix = 'Required';
                    }
                    else if (values.prix && values.prix.length < 4) {
                        errors.prix = 'prix is too short';
                    }
                    if (!values.quantite) {
                        errors.quantite = 'Required';
                    }
                    else if (values.quantite && values.quantite.length < 4) {
                        errors.quantite = 'quantite is too short';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    try {


                        await axios.post('http://localhost:3000/Todo', values)
                        navigate('/ListProduit')
                    } catch (error) {
                        console.log(error);
                    }
                }
                }
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className='w-50 m-auto'>
                        <div className="mb-3">
                        <label htmlFor="nom" className="form-label"> <h3>Nom</h3></label><br></br>
                        <input className="form-control"
                            type="text"
                            name="nom"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nom}
                        /></div>
                        <p style={{color:'red'}}>{errors.nom && touched.nom && errors.nom}</p>
                        <div className="mb-3">
                        <label htmlFor="nom" className="form-label"> <h3>Description</h3></label><br></br>
                        <input className="form-control"
                            type="text"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        /></div>
                        <p style={{color:'red'}}>{errors.description && touched.description && errors.v}</p>
                        
                        <div className="mb-3 ">
                        <label htmlFor="nom" className="form-label"> <h3>Quantite</h3></label><br></br>
                            <input className="form-control"
                                type="number"
                                name="prix"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.prix}
                            /></div>
                            {errors.prix && touched.prix && errors.prix}
                            <div className="mb-3">
                            <label htmlFor="nom" className="form-label"> <h3>prix </h3></label><br></br>
                            <input className="form-control"
                                type="number"
                                name="quantite"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.quantite}
                            /></div>
                            
                            <p style={{color:'red'}}>  {errors.quantite && touched.quantite && errors.quantite}</p>
                            
                            <button type="submit" disabled={isSubmitting} class="btn btn-success" >
                                Submit
                            </button>
                        </form>
                        
       )}

                    </Formik>
   </div>
    )
};

export default AjouterProduit;