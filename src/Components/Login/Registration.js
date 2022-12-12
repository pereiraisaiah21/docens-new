import style from "./Login.module.scss";
import { useForm } from "react-hook-form";

function Registration () {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = function ( data ) {
        console.log( data )
        return;
    };

    return (

        <section className={style.lWrapper}>
            <form className={style.lForm} onSubmit={handleSubmit(onSubmit)}>
                <fieldset className={style.lField}>
                    <legend className={style.lLegend}>
                        Nome
                    </legend>
                    <input className={style.lInput} defaultValue="" {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </fieldset>
                <fieldset className={style.lField}>
                    <legend className={style.lLegend}>
                        E-mail
                    </legend>
                    <input className={style.lInput} defaultValue="" {...register("email", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </fieldset>
                <fieldset className={style.lField}>
                    <legend className={style.lLegend}>
                        Senha
                    </legend>
                    <input className={style.lInput} defaultValue="" {...register("password", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                </fieldset>
                <fieldset className={style.lButtons}>
                    <button className={style.lSend} type="submit">
                        Entrar
                    </button>
                    <a className={style.lRegister} href="f" title="">
                        Cadastrar-se
                    </a>
                </fieldset>
            </form>
        </section>
    );
}

export default Registration;
