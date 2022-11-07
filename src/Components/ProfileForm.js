import { useForm } from "react-hook-form";

const ProfileForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <label className="email">
                first name:
                <input type='text' 
                    {...register('firstname', {required: true , minLength: 3})} 
                    aria-invalid={errors.firstName ? "true" : "false"} 
                />
                {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
                {errors.firstName?.type < 3 && <p role="alert"> minLength 3</p>}
            </label>
            <label className="pass">
                last name:
                <input type='text' 
                    {...register('lastname', {required: true, minLength: 3})} 
                    aria-invalid={errors.lastname ? "true" : "false"} 
                />
                {errors.firstName?.type === 'required' && <p role="alert">Last name is required</p>}
                {errors.firstName?.type < 3 && <p role="alert">minLength 3</p>}
            </label>~
            <label className="pass">
                country:
                <select value='ua' {...register('country', {required: true})}>
                    <option value='ua'>
                        Ukraine
                    </option>
                    <option value='usa'>
                        United Stats of Amerika
                    </option>
                    <option value='uk'>
                        United Kingdom
                    </option>
                </select>
            </label>
            <button type="submit" className="button">
                Submit
            </button>
        </form>
    )
}

export default ProfileForm;