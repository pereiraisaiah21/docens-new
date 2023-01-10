import Emoji from 'a11y-react-emoji';
import style from "./Profile.module.scss";

function Profile () {

    return (

        <section className={style.aWrapper}>
              <div className={style.aContent}>
                <h3 className={style.aTitle}>
                    Perfil
                </h3>
                <div className={style.aInfo}>
                    <aside className={style.aInfoAvatar}>
                        <Emoji className={style.aInfoEmoji} symbol={"👩‍🎤"} label={"Bowie"} />
                    </aside>
                    <ul className={style.aInfoData}>
                        <li className={style.aInfoItem}>
                            <fieldset className={style.aInfoField}>
                                <legend className={style.aInfoLegend}>
                                    Nome
                                </legend>
                                <input className={style.aInfoInput} placeholder="Captain Kirk" /> 
                            </fieldset>
                        </li>
                        <li className={style.aInfoItem}>
                        <fieldset className={style.aInfoField}>
                                <legend className={style.aInfoLegend}>
                                    captainKirk@starfleet.un
                                </legend>
                                <input className={style.aInfoInput} placeholder="Captain Kirk" /> 
                            </fieldset>
                        </li>
                        <li className={style.aInfoItem}>
                            <fieldset className={style.aInfoField}>
                                <legend className={style.aInfoLegend}>
                                    Password
                                </legend>
                                <input className={style.aInfoInput} placeholder="Captain Kirk" /> 
                            </fieldset>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Profile;
