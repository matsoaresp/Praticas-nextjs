import style from "./style.module.css"

export function Heading() {
    return (
        <header className={style.heading}>
            <div className={style.head}>
                <h1>Pagina teste</h1>
                <p>Testando o nextJs</p>
            </div>

            <ul className={style.link}>
                <li><a href="#">Teste</a></li>
                <li><a href="#">Teste</a></li>
                <li><a href="#">Teste</a></li>
            </ul>
        </header>
    );
}