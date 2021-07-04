import { useState } from 'react';
import { useHistory } from 'react-router-dom';




const NewColorForm = ({ addColor }) => {
    const history = useHistory();
    const initialForm = {
        name: '',
        value: '#000000'
    }
    const [formData, setFormData] = useState(initialForm);

    const handleChange = evt => {
        setFormData(data => ({ ...data, [evt.target.name]: evt.target.value }));
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        addColor(formData);
        history.push('/colors');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorName">Color Name:</label>
            <input type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="colorName">Color Value:</label>
            <input type="color"
                name="value"
                value={formData.value}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
};

export default NewColorForm