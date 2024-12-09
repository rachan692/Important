import { Button, Input } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

const Hamroform = () => {
  return (
    <div>
      <Formik initialValues={{
        title:'',
      }}
      onSubmit={(values)=>{
console.log(values);
      }}
      
      >
        {({handleChange,handleSubmit,values})=>{
          return <form onSubmit={handleSubmit}>
            <div>
              <Input label='Title'
              name='title'
              values={values.title}
              onChange={handleChange}/>
              </div>
              <Button size='sm' type='submit'>Submit</Button>
          </form>
        }}
      </Formik>
    </div>
  )
}

export default Hamroform