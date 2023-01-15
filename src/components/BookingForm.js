import '../css/BookingForm.css';
import { useForm } from 'react-hook-form';

export default function BookingForm () {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => { alert("Reservation Complete"), console.log(data); }


  return (
    <section className='bf-container'>

      <h1>Reservation details</h1>

      <form className='form-container' onSubmit={ handleSubmit(onSubmit) }>

        <label>First Name</label>
        <input className='input-form' name='firstName' placeholder='First Name' { ...register("firstName", { required: true }) }/>
        {errors.firstName && <span className='error'>This field is required</span>}

        <label>Last Name</label>
        <input className='input-form' name='lastName' placeholder='Last Name' { ...register("lastName", { required: true }) }/>
        {errors.lastName && <span className='error'>This field is required</span>}

        <label>Choose date</label>
        <select className='select-form' name='chooseDate' { ...register("chooseDate", { required: true })}>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>

        <label>Number of Guests</label>
        <input className='input-form' type="number" name='guests' { ...register("guests", { min: 1, max: 10 }, { required: true })} />

        <label>Occasion</label>
        <select className='select-form' name='occasion' { ...register("occasion", { required: true })}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input className='form-button' type="submit" value="Make Your Reservation" />

      </form>

    </section>
  )
}
