import React from 'react'

const CategoryForm = ({handleSubmit, value, setValue}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                placeholder='Enter Category Name'
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                />
            </div>
            
            <button type="submit" className="mt-2 btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default CategoryForm