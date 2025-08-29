import {useState} from 'react';
// there is no need to use useState because formik can handle states
import {useFormik} from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username cannot be empty';
   } 

   return errors;
 };

export default function CommentForm({addNewComment}){
    const formik = useFormik({
        initialValues:{
            username:'',
            remarks:'',
            rating:'',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null ,2));
        },
    });

    
    // setting the data in formData

    // let handleInputChange = (event)=>{
    //     setFormData((currData)=>{
    //         return{...currData,[event.target.name]: event.target.value}
    //     });
    // }

    // on submitting the form it prevent from the default properties of form and clear the whole form after submitting

    // let handleSubmit = (event)=>{
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username:'',
    //     remarks:'',
    //     rating:5,
    //     });
    // }

    return (
        <div>
            <h2>Give the comment!</h2>
            <form onSubmit={formik.handleSubmit}>
                
                <label htmlFor="username">USERNAME:- </label>
                <br />
                <input type="text" placeholder='write your username' id='username' value={formik.values.username}onChange={formik.handleChange}
                name='username'
                />
                 {formik.errors.username ? <p style={{color:'red'}}>{formik.errors.username}</p> : null}

                <br /> <br />

                <label htmlFor="remarks">REMARKS:- </label>
                <br />
                <textarea id="remarks"placeholder ='add remarks'
                value={formik.values.remarks}onChange={formik.handleChange}
                name='remarks'
                >remarks</textarea>

                <br /><br />

                <label htmlFor="rating">RATING
                  :-  
                </label>
                <br />
                <input type="number" placeholder='give rating' id='rating' min={1} max={5} value={formik.values.rating} onChange={formik.handleChange}
                name='rating'
                />

                <br /><br />

                <button type='submit'>Add Comment</button>

            </form>
        </div>
    )
}
