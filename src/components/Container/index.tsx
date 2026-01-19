import type { Container } from "react-dom/client";
import style from "./style.module.css"
type ContainerProps = {
        children: React.ReactNode;
}

export function Container({children}: ContainerProps) {

return (
    <div className={style.content}>
        <div className={style.container}>
            {children}
        </div>
    </div>
)

}