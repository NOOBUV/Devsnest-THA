import React from 'react'
import './Addcalorie.css'

const handleSubmit = e => {
    e.preventDefault();
    addItem({ title, calorie });
    setTitle('');
    setCalorie('');
  };
  
export const Addcalorie = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="inputs">
                        <input type="text" />
                        <input type="text"/>
                    </div>
                    
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}
