import {useState} from 'react';
export default function CommentForm({addNewComment}){
    let [formData, setFormData] = useState({
        username:'',
        remarks:'',
        rating:5,
    });

    // setting the data in formData

    let handleInputChange = (event)=>{
        setFormData((currData)=>{
            return{...currData,[event.target.name]: event.target.value}
        });
    }

    // on submitting the form it prevent from the default properties of form and clear the whole form after submitting

    let handleSubmit = (event)=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:'',
        remarks:'',
        rating:5,
        });
    }

    return (
        <div>
            <h2>Give the comment!</h2>
            <form action="" onSubmit={handleSubmit}>
                
                <label htmlFor="username">USERNAME:- </label>
                <br />
                <input type="text" placeholder='write your username' id='username' value={formData.username} onChange={handleInputChange}
                name='username'
                />

                <br /> <br />

                <label htmlFor="remarks">REMARKS:- </label>
                <br />
                <textarea id="remarks"placeholder ='add remarks'
                value={formData.remarks}onChange={handleInputChange}
                name='remarks'
                >remarks</textarea>

                <br /><br />

                <label htmlFor="rating">RATING
                  :-  
                </label>
                <br />
                <input type="number" placeholder='give rating' id='rating' min={1} max={5} value={formData.rating} onChange={handleInputChange}
                name='rating'
                />

                <br /><br />

                <button>Add Comment</button>

            </form>
        </div>
    )
}
