import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useCountries } from "use-react-countries";
import * as Yup from 'yup';
import { addPost } from "../redux/blogslice";
import { nanoid } from "@reduxjs/toolkit";



const valSchema = Yup.object({
  title:Yup.string() . max(70) . min (10) . required(),
  version:Yup.string() . min(1) . required() ,
  category:Yup.array().min(1) .required(),
  country: Yup.string().min(1) .required(),
  description: Yup.string() . min(20) .max (130) . required()
})


const Editform = () => {
const dispatch = useDispatch();
const {id} = useParams();
console.log(id);
const nav = useNavigate();
  const { countries } = useCountries();
  const {post} = useSelector((state) => state.blogslice);
const posts = post.find((posts) => posts.id === id);
console.log(posts) 
return (
    <div className="p-4 max-w-[300px]">
      <Formik
        initialValues={{
          title: posts.title,
          version: posts.version,
          category: posts.category,
          country:posts.country,
          description: posts.description
        }}
        onSubmit={(val) => {
          dispatch(addPost({...val, id:nanoid()}));
          nav(-1);
        }}
        validationSchema={valSchema}
      >

        {
          ({ handleChange, handleSubmit, values, setFieldValue,errors,touched}) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* <Input

                onChange={(e) => {

                  console.log(e.target.value);
                }}
                label="some" /> */}

              <div>
                <Input
                  name="title"
                  onChange={handleChange}
                  value={values.title}
                  
                  label="Title" />
                  {errors.title && touched.title  && <h1 className="text-red-600 uppercase font-bold italic">{errors.title}</h1>}
              </div>


              <div>
                <Typography>Select Version</Typography>
                <Radio
                  label='Paid'
                  color="red"
                  value={'paid'}
                  checked={values.version === 'paid'}
                  onChange={handleChange}
                  name="version"


/>
{/* {errors.version && touched.version && <h1 className="font-bold italic text-5xl uppercase text-red-700 ">{errors.version}</h1>} */}
                <Radio
                  label='Free'
                  color="green"
                  onChange={handleChange}
                  value={'free'}
                  checked={values.version === 'free'}
                  name="version"
                />
{errors.version && touched.version && <h1 className="font-bold italic  uppercase text-red-700 ">{errors.version}</h1>}

              </div>

              <div>
                <Typography>Select Category</Typography>

                <Checkbox
                  value={'political'}
                  name="category"
                  color="brown"
                  onChange={handleChange}
                  label='Political'
                />
                <Checkbox
                  value={'entertainment'}
                  name="category"
                  color="indigo"
                  onChange={handleChange}
                  label='Entertainment'
                />
{errors.category && touched.category && <h1 className="font-bold italic  uppercase text-red-700 ">{errors.category}</h1>}

              </div>


              <div>
                <Select

                  name="country"
                  onChange={(e) => setFieldValue('country', e)}
                  label="select your country">
                  {countries.map(({ name, flags }) => (
                    <Option key={name} value={name} className="flex items-center gap-2">
                      <div className="flex gap-4">
                        <img
                          src={flags.svg}
                          alt={name}
                          className="h-5 w-5 rounded-full object-cover"
                        />
{/* {errors.country && touched.country && <h1 className="font-bold italic text-5xl uppercase text-red-700 ">{errors.country}</h1>} */}

                        <p>
                          {name}
                        </p>
                      </div>
{/* {errors.country && touched.country && <h1 className="font-bold italic text-5xl uppercase text-red-700 ">{errors.country}</h1>} */}


                    </Option>
                  ))}
                </Select>
{errors.country && touched.country && <h1 className="font-bold italic  uppercase text-red-700 ">{errors.country}</h1>}

              </div>


              <div>
                <Textarea
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  label="description" />
              </div>


              {errors.description && touched.description && <h1 className="font-bold italic  uppercase text-red-700 ">{errors.description}</h1>}

              <Button type="submit" size="sm">Submit</Button>

            </form>
          )
        }


      </Formik>





    </div>
  )
}
export default Editform