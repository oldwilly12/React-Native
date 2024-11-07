import { useForm } from "react-hook-form";

type FormInputs = {
    email: string;
    password: string;
}

export const FormsPage = () => {
    //Con register eliminamos la necediad de usar la etiqueta value para ver el valor escrito en los forms
    // handlesubmit para controlar el submit del form
    //Fromstate todo el valor del formulario tal cual esta
    // ayufa a poder observar cuadno un campo cambia
    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'willy@google.com',
            password: 'Abc123',
        }
    });

    const onSubmit = (myFrom: FormInputs)  => {
        console.log({myFrom})
    }

    console.log(watch('email'));

  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Formularios</h3>

            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input type="text" placeholder="Email" { ...register('email'), {required: true}}/>


                <input type="text" placeholder="Password" { ...register('password')}/>


                <button type="submit">Ingresar</button>

            </div>

        </form>

        <pre>
            {JSON.stringify(formState,null,2)}
        </pre>
    </>
  )
}
