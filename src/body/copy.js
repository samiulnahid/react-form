import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().nonempty({ message: 'Required' }),
  age: z.number().min(10),
});

const Copy = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>

          <br/>
                         <br/>

      <input {...register('name')} /><br/><br/>

      {errors.name?.message && <p>{errors.name?.message}</p>}

      <input type="number" {...register('age', { valueAsNumber: true })} />

      {errors.age?.message && <p>{errors.age?.message}</p>}<br/><br/>

      <input type="submit" />
    </form>
  );
};

export default Copy;
